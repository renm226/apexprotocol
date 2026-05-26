'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { allData, AREA_META, type AreaId } from '@/data/index'
import type { AreaData, Phase, Topic } from '@/data/types'

const AREAS = Object.entries(AREA_META) as [AreaId, { label: string }][]

function escapeHtml(str: string): string {
  return str.replace(/[&<>]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[m] || m))
}

function TopicCard({ topic, areaId }: { topic: Topic; areaId: AreaId }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`topic-card${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="topic-head">
        <div className="topic-name">{topic.name}</div>
        <span className={`topic-tag tt-${topic.tag || 'core'}`}>{(topic.tag || 'CORE').toUpperCase()}</span>
      </div>
      {open && (
        <div className="topic-body-inner">
          {topic.desc && (
            <div className="topic-section">
              <div className="topic-section-label">Deep Understanding</div>
              <div className="topic-desc">{topic.desc}</div>
            </div>
          )}
          {topic.master && topic.master.length > 0 && (
            <div className="topic-section">
              <div className="topic-section-label">Mastery Checklist</div>
              <ul className="master-list">
                {topic.master.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          )}
          {topic.deepdive && (
            <div className="deep-dive">
              <div className="deep-dive-label">Deep Dive</div>
              <p>{topic.deepdive}</p>
            </div>
          )}
          {topic.res && topic.res.length > 0 && (
            <div className="topic-section">
              <div className="topic-section-label">Essential Resources</div>
              <div className="res-list">
                {topic.res.map((r, i) => <span className="res-chip" key={i}>{r}</span>)}
              </div>
            </div>
          )}
          {topic.warning && (
            <div className="warning-box">{topic.warning}</div>
          )}
        </div>
      )}
    </div>
  )
}

function PhaseBlock({ phase, idx, areaId }: { phase: Phase; idx: number; areaId: AreaId }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`phase-block${open ? ' open' : ''}`} id={`phase-${idx}`}>
      <div className="phase-header" onClick={() => setOpen(o => !o)}>
        <div className="phase-num">{String(idx + 1).padStart(2, '0')}</div>
        <div className="phase-info">
          <div className="phase-name">{phase.name}</div>
          <div className="phase-tagline">{phase.tagline}</div>
        </div>
        <div className="phase-meta">
          <span className={`level-badge lv-${phase.level || 'foundation'}`}>
            {(phase.level || 'FOUNDATION').toUpperCase()}
          </span>
          <span className="phase-chevron">▶</span>
        </div>
      </div>
      {open && (
        <div className="phase-body">
          {phase.desc && <div className="phase-desc">{phase.desc}</div>}
          <div className="topics-grid">
            {phase.topics.map((topic, ti) => (
              <TopicCard key={ti} topic={topic} areaId={areaId} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function RoadmapView({ user }: { user: { email?: string } | null }) {
  const [currentArea, setCurrentArea] = useState<AreaId>('ai')
  const [progress, setProgress] = useState(0)
  const [activePhase, setActivePhase] = useState(-1)
  const mainRef = useRef<HTMLDivElement>(null)

  const data: AreaData = allData[currentArea]
  const totalTopics = data.phases.reduce((s, p) => s + p.topics.length, 0)
  const totalMaster = data.phases.reduce((s, p) => s + p.topics.reduce((ss, t) => ss + (t.master?.length || 0), 0), 0)

  const handleScroll = useCallback(() => {
    const el = mainRef.current
    if (!el) return
    const scrollHeight = el.scrollHeight - el.clientHeight
    setProgress(scrollHeight > 0 ? (el.scrollTop / scrollHeight) * 100 : 0)

    const phases = el.querySelectorAll<HTMLElement>('.phase-block')
    const mainRect = el.getBoundingClientRect()
    let active = -1
    phases.forEach((ph, i) => {
      const rect = ph.getBoundingClientRect()
      const top = rect.top - mainRect.top
      if (top <= 150 && top + rect.height > 100) active = i
    })
    setActivePhase(active)
  }, [])

  function scrollToPhase(idx: number) {
    const el = document.getElementById(`phase-${idx}`)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const userInitial = user?.email?.[0]?.toUpperCase() ?? null

  return (
    <>
      <header className="site-header">
        <a href="/" className="logo">COR<span>Taxis</span></a>
        <div className="nav-scroll">
          {AREAS.map(([id, meta]) => (
            <button
              key={id}
              className={`npill${currentArea === id ? ' active' : ''}`}
              data-area={id}
              onClick={() => { setCurrentArea(id); setProgress(0); setActivePhase(-1); mainRef.current?.scrollTo(0, 0) }}
            >
              {meta.label}
            </button>
          ))}
        </div>
        <div className="header-actions">
          <a href="/library" className="btn-pro">Pro Library</a>
          {userInitial
            ? <a href="/dashboard" className="user-avatar" title="Dashboard">{userInitial}</a>
            : <a href="/auth" className="btn-support">Sign in</a>
          }
        </div>
      </header>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="app-layout" data-current={currentArea}>
        <aside className="sidebar">
          <div className="sidebar-section">Phases</div>
          {data.phases.map((phase, i) => (
            <div
              key={i}
              className={`phase-nav-item${activePhase === i ? ' active-phase' : ''}`}
              onClick={() => scrollToPhase(i)}
            >
              <span className="ph-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{phase.name}</span>
            </div>
          ))}
        </aside>

        <main className="main" ref={mainRef} onScroll={handleScroll}>
          <div className="disc-hero">
            <div className="disc-eyebrow">{data.eyebrow || 'MASTERY ROADMAP'}</div>
            <div className="disc-title">{data.name}</div>
            <div className="disc-sub">{data.sub}</div>
            <div className="disc-stats">
              <div className="stat">
                <div className="stat-val">{data.phases.length}</div>
                <div className="stat-label">Phases</div>
              </div>
              <div className="stat">
                <div className="stat-val">{totalTopics}</div>
                <div className="stat-label">Topics</div>
              </div>
              <div className="stat">
                <div className="stat-val">{totalMaster}+</div>
                <div className="stat-label">Mastery Tasks</div>
              </div>
            </div>
          </div>

          <div className="phases">
            {data.phases.map((phase, i) => (
              <PhaseBlock key={i} phase={phase} idx={i} areaId={currentArea} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
