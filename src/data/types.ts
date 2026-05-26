export interface Topic {
  name: string
  tag?: string
  desc?: string
  master?: string[]
  deepdive?: string
  res?: string[]
  warning?: string
}

export interface Phase {
  name: string
  level?: 'foundation' | 'intermediate' | 'advanced' | 'expert'
  tagline?: string
  desc?: string
  topics: Topic[]
}

export interface AreaData {
  name: string
  area: string
  eyebrow?: string
  sub?: string
  phases: Phase[]
}

export type AreaId = 'ai' | 'net' | 'hack' | 'soft' | 'crypto' | 'cloud' | 'mobile' | 'devsec' | 'selfdev'

export const AREA_META: Record<AreaId, { label: string; dataKey: string }> = {
  ai:      { label: 'AI / ML',        dataKey: 'aiData' },
  net:     { label: 'Networking',     dataKey: 'networkingData' },
  hack:    { label: 'Hacking',        dataKey: 'hackingData' },
  soft:    { label: 'Software',       dataKey: 'softwareData' },
  crypto:  { label: 'Blockchain',     dataKey: 'cryptoData' },
  cloud:   { label: 'Cloud & DevOps', dataKey: 'cloudData' },
  mobile:  { label: 'Mobile',         dataKey: 'mobileData' },
  devsec:  { label: 'DevSecOps',      dataKey: 'devsecData' },
  selfdev: { label: 'Self Development', dataKey: 'selfdevData' },
}
