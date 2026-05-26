export const selfdevData = {
  name: "SELF DEVELOPMENT & CAREER MASTERY",
  area: "selfdev",
  eyebrow: "Learning · Deep Work · Mental Models · Communication · Leadership · Career Strategy",
  sub: "The engineers with the most impact are not always the most technically skilled. They think clearly under pressure, communicate ideas to people who do not share their context, make decisions without complete information, and build trust with the people around them. Technical skill is table stakes. Everything above the floor is determined by how you think, how you communicate, and how you navigate the organizations you work in.",
  phases: [
    {
      name: "Learning How to Learn",
      level: "foundation",
      tagline: "The meta-skill that multiplies every other skill",
      desc: "Most engineers learn by doing — which is good but insufficient. Unexamined practice builds habits, both correct and incorrect, and learning slows as novelty fades. Deliberate practice — working just beyond your current ability, with immediate feedback and focused correction — is how expert performance is actually developed. Understanding how your own learning works is the most leveraged investment you can make.",
      topics: [
        {
          name: "Deliberate Practice and Skill Acquisition",
          tag: "core",
          desc: "Anders Ericsson's research on expert performance found that the distinguishing characteristic of experts is not innate ability — it is accumulated deliberate practice. Deliberate practice is specific: you are working on a defined, challenging skill with clear feedback about whether you succeeded. Writing code all day is practice but it is rarely deliberate — you are mostly using skills you already have. Deliberate practice would be: solving algorithm problems at the edge of your ability, then reviewing the solution and understanding exactly where your thinking failed. The cognitive load model explains why beginners should use worked examples more than problem solving — when cognitive resources are exhausted by the mechanics of the task, there is nothing left to learn the concept. As skill increases, the balance shifts toward problem solving. Retrieval practice is more effective than re-reading: testing yourself on material, even before you know it well, improves long-term retention far more than reviewing the material again. Spaced repetition distributes practice over time rather than massing it — Anki implements this with an algorithm that shows cards just before you are about to forget them.",
          master: [
            "Identify a specific skill gap in your current work and design a deliberate practice regimen for it — not a reading list, a practice schedule with feedback",
            "Explain the difference between deliberate practice and naive practice using a specific example from software engineering",
            "Set up a spaced repetition system for technical knowledge you are actively acquiring — describe how you decide what to add",
            "Identify three places in your current work where you are operating below your ceiling and describe how to make them more challenging",
            "Describe the worked example effect and explain when to use examples versus when to solve independently",
            "Define what feedback looks like for a non-trivial programming skill — what tells you whether your understanding is correct"
          ],
          res: [
            "Peak: Secrets from the New Science of Expertise (Anders Ericsson) — the research behind deliberate practice",
            "Make It Stick (Brown, Roediger, McDaniel) — the science of learning, research-based and practical",
            "Anki (apps.ankiweb.net) — spaced repetition software, use it for technical vocabulary and concepts",
            "Ultralearning (Scott Young) — self-directed intensive learning projects"
          ]
        },
        {
          name: "Mental Models and First Principles Thinking",
          tag: "core",
          desc: "A mental model is a representation of how something works. Having accurate mental models allows you to predict system behavior, diagnose failures, and generate solutions without needing to consult documentation for every case. The most useful mental models are the ones that work across domains: first principles reasoning (decompose a problem to its foundational truths, then reconstruct), inversion (instead of asking how to succeed, ask how to ensure failure — then avoid those things), the map-territory distinction (your model is never the reality — stay alert to when they diverge), second-order effects (the direct effect of an action is usually obvious; the second and third-order effects are usually not). Charlie Munger popularized the lattice of mental models — a collection of the most important models from multiple disciplines that together provide a complete picture of how the world works. For engineering specifically: the constraint theory (the bottleneck determines the throughput of the entire system; improving a non-bottleneck improves nothing), feedback loops (positive feedback amplifies, negative feedback stabilizes — most engineering stability problems are missing negative feedback), and systems thinking (problems in complex systems are rarely caused by a single factor and cannot be solved by a single intervention).",
          master: [
            "Apply first principles thinking to a problem you currently face: decompose it to its foundational constraints and reconstruct a solution from those constraints",
            "Use inversion to identify the most likely ways a project, system, or process will fail — use the list to prioritize preventive work",
            "Identify a situation where your mental model of a system was wrong and describe what updating it required",
            "Describe the constraint theory and apply it to a team or system you work in — identify the bottleneck",
            "Explain a feedback loop in a technical system you know well — identify whether it is positive or negative and what it controls",
            "Describe a time when second-order effects of a decision were more important than the first-order effects"
          ],
          res: [
            "Poor Charlie's Almanack (Charles Munger) — the lattice of mental models from first principles",
            "The Great Mental Models (Shane Parrish) — practical mental model survey",
            "Thinking in Systems (Donella Meadows) — the foundational systems thinking text",
            "The Fifth Discipline (Peter Senge) — organizational systems thinking"
          ]
        }
      ]
    },
    {
      name: "Deep Work and Focus",
      level: "foundation",
      tagline: "Distraction is the default — focus is the discipline",
      desc: "Knowledge work rewards depth of thinking disproportionately. A software engineer who can focus without interruption for four hours produces an order of magnitude more value than one who works eight hours in thirty-minute fragments between Slack messages and meetings. The ability to concentrate deeply on cognitively demanding work is rare, valuable, and — unlike raw intelligence — almost entirely trainable.",
      topics: [
        {
          name: "Structuring Deep Work",
          tag: "core",
          desc: "Cal Newport's Deep Work establishes the case: the capacity to perform cognitively demanding tasks without distraction is both increasingly rare and increasingly valuable. Most knowledge workers spend the majority of their working hours in shallow work (email, meetings, Slack, administrative tasks) that could be done by someone significantly less skilled. Four philosophies of deep work: monastic (eliminate shallow work as completely as possible — works for research, writing), bimodal (alternate between periods of deep and shallow work, at least one full day of deep at a time), rhythmic (daily habit at a fixed time, the most sustainable for most people), journalistic (seize deep work opportunities when they appear — requires advanced practitioners). Attention residue: switching tasks leaves residue of the previous task in working memory, reducing cognitive capacity for the new one. The more frequently you switch, the less deeply you can think. Scheduling every minute of your workday does not reduce spontaneity — it reveals how you actually choose to spend time and forces deliberate allocation.",
          master: [
            "Track your actual work patterns for one week in 30-minute increments — classify each block as deep, shallow, or recharging",
            "Design a work schedule that protects at least 3 hours of uninterrupted deep work per day — describe the blocking strategies",
            "Implement a shutdown ritual that signals the end of the work day and enables psychological disengagement",
            "Describe three attention management practices you will implement and how you will verify they are working",
            "Identify your highest-value deep work — what work, when done deeply, creates the most leverage for your goals",
            "Describe how you handle urgent interruptions without destroying your deep work time"
          ],
          res: [
            "Deep Work (Cal Newport) — the case for and practice of deep work",
            "Getting Things Done (David Allen) — the capture and processing system that frees mental RAM",
            "Flow (Mihaly Csikszentmihalyi) — the psychology of optimal experience and peak performance",
            "Cal Newport's blog (calnewport.com) — practical strategies for knowledge worker productivity"
          ]
        }
      ]
    },
    {
      name: "Communication and Writing",
      level: "intermediate",
      tagline: "The engineer who cannot communicate their ideas cannot scale their impact",
      desc: "Technical skill without communication ability caps your impact at what you can build personally. Influence, leadership, and career advancement all require the ability to make complex ideas clear to people who do not share your context. Writing is the highest-leverage communication form in distributed teams: a well-written design document communicates to every stakeholder simultaneously, is searchable, and can be revised. A meeting communicates once, to those present, and leaves no searchable artifact.",
      topics: [
        {
          name: "Technical Writing",
          tag: "core",
          desc: "Good technical writing is not about impressive vocabulary — it is about precision and clarity. The reader should understand exactly what you mean without needing to ask for clarification. Design documents: the most valuable document an engineer can write. The structure that works: background (what problem you are solving and why it matters), requirements (what the solution must do, separating mandatory from desirable), proposed solution (your design, with enough detail to understand how it works), alternatives considered (what else you evaluated and why you rejected it), risks and open questions. The alternatives considered section is often skipped but is highly valuable — it demonstrates you have thought beyond the first solution and reduces the chance that reviewers propose the obvious alternative you have already evaluated. Incident reports (postmortems): blameless, factual timeline, root cause analysis (the five whys repeated until you reach an actionable root cause), contributing factors, and action items with owners and dates. The five whys: ask 'why' five times to trace from symptoms to underlying causes.",
          master: [
            "Write a design document for a non-trivial technical decision you have made recently — include all sections",
            "Write a blameless postmortem for a real or hypothetical incident — identify root causes, not symptoms",
            "Revise a piece of your own writing using the 'so what?' test — for each paragraph, ask whether a reader can answer 'so what?' from what you wrote",
            "Describe the BLUF (Bottom Line Up Front) principle and rewrite a technical email using it",
            "Explain the difference between writing for someone who will read linearly versus writing for someone who will skim — how does the structure change",
            "Write a technical explanation of a complex topic for an audience without the prerequisite knowledge — explain how you decided what to include"
          ],
          res: [
            "On Writing Well (William Zinsser) — the standard reference for non-fiction writing clarity",
            "The Elements of Style (Strunk and White) — brief, essential, apply it to technical writing",
            "Google Developer Documentation Style Guide (free online) — specific guidance for technical documentation",
            "Writing for Software Developers (Philip Kiely) — technical writing specifically for engineers"
          ]
        },
        {
          name: "Presenting and Persuading",
          tag: "intermediate",
          desc: "Every technical decision you make that involves other people requires persuasion. Not manipulation — persuasion: helping others understand your reasoning so they can genuinely agree or identify flaws you missed. The pyramid principle (Barbara Minto): start with the conclusion, then the arguments that support it, then the evidence. Most engineers do the opposite — they present all the background and evidence and save the conclusion for last. This makes the audience do the synthesis work rather than the presenter. Objection handling: when someone pushes back on a technical proposal, distinguish between disagreements about facts (resolve with data), disagreements about values (negotiate explicitly), and disagreements about predictions (acknowledge uncertainty, propose a test). Senior stakeholders care about outcomes, not mechanisms — present in terms of what the decision enables or prevents, then offer the technical detail for those who want it. Presenting to executives: one slide per minute, conclusion first, quantify the impact.",
          master: [
            "Present a technical proposal using the pyramid principle — conclusion first, then supporting arguments",
            "Describe the difference between a technical proposal to engineers and the same proposal to non-technical executives",
            "Identify the type of disagreement in a technical debate and describe the resolution approach for each type",
            "Write a one-page executive summary for a technical decision — quantify the impact and avoid jargon",
            "Describe how to handle 'we have always done it this way' objections to a technical change",
            "Explain the five-slide structure for a technical presentation: what goes on each slide"
          ],
          res: [
            "The Pyramid Principle (Barbara Minto) — the most impactful book on structured communication",
            "Crucial Conversations (Patterson et al.) — high-stakes communication skills",
            "Simply Said (Jay Sullivan) — business communication clarity",
            "Presentation Zen (Garr Reynolds) — visual communication for technical presenters"
          ]
        }
      ]
    },
    {
      name: "Career Navigation",
      level: "intermediate",
      tagline: "Your career is a project — manage it like one",
      desc: "Most engineers manage their careers reactively: they take opportunities that appear rather than creating the ones they want, they accept the level they are assigned rather than articulating the case for promotion, and they optimize for salary at each job change rather than for trajectory. A proactive career strategy requires knowing what you want, understanding what the market rewards, and building the skills and visibility to get there.",
      topics: [
        {
          name: "Leveling and Promotion",
          tag: "intermediate",
          desc: "Engineering leveling at most companies follows a rough pattern: Junior (needs close guidance, works on well-defined tasks), Mid (works independently on defined problems, contributes to team decisions), Senior (defines and solves ambiguous problems, multiplies team output, owns significant systems), Staff (drives cross-team technical decisions, sets technical direction for a larger scope), Principal (organization-wide technical impact, external influence). Promotion is not about time in grade — it is about consistently operating at the next level before receiving the title. Most engineers who are 'ready for promotion but not promoted' are missing either the documented evidence or the visibility. Document your impact quarterly: what you built, what problems you solved, quantified where possible. Your manager cannot advocate for you if they do not know what you have done. The promotion case document: a written case for your promotion that your manager can use directly in calibration discussions. Most companies provide leveling guides — read them carefully and identify specific examples of how you already meet the criteria.",
          master: [
            "Write a promotion case document for your current situation: evidence of impact at the next level, mapped to the leveling criteria",
            "Identify the gap between your current work and the next level's criteria — design a 90-day plan to address the most important gap",
            "Describe the difference between working at your current level and operating at the next level — be specific for your role",
            "Explain how to build visibility for your work without self-promotion that feels uncomfortable",
            "Describe how to have a direct conversation with your manager about promotion: what to say, what to ask, how to follow up",
            "Identify an opportunity at your current company to take on higher-level work before being promoted"
          ],
          res: [
            "The Staff Engineer's Path (Tanya Reilly) — what it means to operate at staff level and above",
            "StaffEng (staffeng.com) — stories and advice from engineers at staff level and above",
            "Engineering ladders (progression.fyi) — see how different companies define each level",
            "Your company's leveling guide — read it carefully, most engineers have not"
          ]
        },
        {
          name: "Negotiation and Compensation",
          tag: "intermediate",
          desc: "Compensation negotiation is not adversarial — it is a coordination problem between you and the employer about where in the range the offer lands. Most engineers leave 10–30% of total compensation on the table by accepting the first offer. The leverage is created by competing offers: having an offer from another company is the single most effective negotiation lever. Everything else is secondary. Market data: Levels.fyi, Glassdoor, LinkedIn Salary, and Blind provide real compensation data by company, level, and location — use them before any negotiation. Negotiating total compensation: base salary, equity (grant size, vesting schedule, cliff, refresh cadence), bonus (target percentage, whether it is actually paid), and signing bonus. Equity valuation: public company RSUs are straightforward to value; startup equity requires understanding the liquidation preference stack, the current valuation, the typical dilution through future rounds, and the exit probability. The accept-or-explode tactic (the offer expires tomorrow) should almost always be countered with a request for more time — legitimate employers will give it.",
          master: [
            "Research the market rate for your role, level, and location using three data sources — identify the 50th, 75th, and 90th percentile",
            "Describe the negotiation process from first offer to final acceptance: what to say at each stage",
            "Value an equity grant: for both an RSU grant at a public company and an option grant at a startup",
            "Identify the three most important components of total compensation for your specific situation and why",
            "Explain why the initial offer is almost never the final offer and describe how to counter without damaging the relationship",
            "Design a job search strategy that creates competing offers for leverage in the final negotiation"
          ],
          res: [
            "Levels.fyi — the most accurate engineering compensation data",
            "Negotiating Your Salary (Jack Chapman) — the practical guide to salary negotiation",
            "Patrick McKenzie on salary negotiation (kalzumeus.com) — the most widely shared compensation advice in engineering",
            "Blind app — anonymous compensation discussions by company"
          ]
        }
      ]
    },
    {
      name: "Technical Leadership",
      level: "advanced",
      tagline: "Influence without authority is the senior engineer's primary skill",
      desc: "Senior and staff engineers lead without managing. They cannot require team members to take their advice, cannot give performance reviews, and cannot make binding decisions unilaterally. Their influence comes entirely from the quality of their ideas, the trust they have built, and their ability to make the right thing easy and the wrong thing visible. This is harder than managing people and less discussed.",
      topics: [
        {
          name: "Technical Direction and Decision Making",
          tag: "advanced",
          desc: "Making good technical decisions requires separating reversible from irreversible decisions and allocating deliberation proportionally. A decision that can be reversed in a week should be made quickly with the best available information — analysis paralysis on reversible decisions is expensive. A decision that will lock in architectural choices for years deserves careful analysis, solicited input, and explicit documentation of the trade-offs. RFC (Request for Comments) processes allow asynchronous input on significant technical decisions — the document describes the problem, the proposed solution, alternatives, and risks, and team members comment before a decision is made. The technical decision record (ADR): a short document capturing the context, decision, and consequences of a significant architectural decision. ADRs create organizational memory — six months from now when someone asks why a decision was made, the answer is findable. Reversing technical decisions: acknowledge the new information that makes the old decision wrong, document the change and the rationale, and avoid relitigating past decisions that were correct given the information available at the time.",
          master: [
            "Write an RFC for a significant technical change — include problem statement, proposed solution, alternatives, risks, and success criteria",
            "Write an ADR for a past architectural decision — reconstruct the context, constraints, and alternatives considered",
            "Describe the RFC process: how to solicit feedback, how to handle disagreements, and how to close the discussion with a decision",
            "Explain the criteria for reversible versus irreversible decisions and describe the appropriate process for each",
            "Describe how to influence a technical decision you disagree with through the RFC process rather than organizational authority",
            "Explain what 'disagree and commit' means and describe a situation where it is the correct approach"
          ],
          res: [
            "The Staff Engineer's Path (Tanya Reilly) — decision making, influence, and technical direction",
            "ADR templates (github.com/joelparkerhenderson/architecture-decision-record) — standard ADR formats",
            "Amazon's working backwards process — writing documents to clarify decisions before making them",
            "Architectural Decision Records (adr.github.io) — the ADR community and tooling"
          ]
        },
        {
          name: "Mentorship and Knowledge Transfer",
          tag: "advanced",
          desc: "Senior engineers who hoard knowledge are bottlenecks. The ones who transfer knowledge effectively multiply team output. Effective mentorship is not lecturing — it is helping someone develop their own problem-solving process. Socratic questioning: instead of answering 'the answer is X', ask 'what approaches did you consider? what do you know about this kind of problem? what would you expect to happen if...?' This is slower in the short term and much faster in the long term. Code review as teaching: a code review comment that says 'use X instead' teaches nothing. A comment that explains the problem the current code creates and points to the principle that resolves it teaches the reviewer to catch similar issues independently. Pairing and shadowing: watching how a senior engineer approaches an unfamiliar problem — the questions they ask, the hypotheses they form, the tools they reach for — is learning that is impossible to get from documentation. Writing guides and runbooks: knowledge that lives only in heads leaves when those heads leave. The test of whether a runbook is complete is whether a new team member can execute it without help.",
          master: [
            "Describe three mentoring techniques that help someone develop their own reasoning rather than giving them answers",
            "Write a code review comment that explains the principle behind your suggestion rather than just the fix",
            "Identify knowledge in your team that would be lost if you left tomorrow — create a plan to document and distribute it",
            "Design a 30-60-90 day onboarding plan for a new team member — what do they need to learn and in what sequence",
            "Describe how to balance being available for questions and protecting your own deep work time",
            "Explain what makes feedback actionable versus unhelpful — give examples of each in a code review context"
          ],
          res: [
            "The Manager's Path (Camille Fournier) — engineering leadership from tech lead to CTO",
            "An Elegant Puzzle (Will Larson) — systems and staffing for engineering organizations",
            "Apprenticeship Patterns (Hoover and Oshineye) — free online, patterns for software craftsmanship",
            "Radical Candor (Kim Scott) — the framework for direct feedback without harshness"
          ]
        }
      ]
    },
    {
      name: "Building Systems and Habits",
      level: "advanced",
      tagline: "Motivation is unreliable — systems are what you can actually count on",
      desc: "Motivation follows action more than it precedes it. The engineers who consistently produce high-quality work over long careers are not the ones who feel most motivated — they are the ones who have built systems that make the important work happen regardless of how they feel on a given day. Systems thinking applied to personal effectiveness means designing your environment, routines, and commitments to make the desired behaviors the default.",
      topics: [
        {
          name: "Building Sustainable High Performance",
          tag: "advanced",
          desc: "Peak performance requires recovery. The research on elite performance across sports, music, and knowledge work consistently shows that output quality depends on the quality and quantity of deliberate rest. Working 80-hour weeks produces less quality work per hour than working 40-50 hours with high focus and sufficient recovery — the compounding cognitive impairment of sleep deprivation alone reduces performance to the equivalent of clinical intoxication after two weeks of six-hour nights. The peak-end rule: the perception of an experience is heavily weighted toward the peak moment and the ending — a project that ends on a success is remembered better than a project of equivalent quality that ends poorly. Designing satisfying endings to projects, sprints, and work days is a legitimate productivity tool, not self-indulgence. Energy management is more important than time management — a productive hour requires mental energy, and mental energy is a renewable but finite daily resource that must be allocated to the most important work first. Shallow work expands to fill available time; the solution is not to do less shallow work but to batch it and protect unscheduled blocks.",
          master: [
            "Track your energy levels over two weeks at 90-minute intervals — identify your peak cognitive performance windows and redesign your schedule around them",
            "Design a personal operating system: the regular rituals, reviews, and commitments that make important work happen consistently",
            "Identify the three commitments in your current life that consume the most energy relative to the value they produce",
            "Describe what sustainable high performance looks like over a 10-year career — not a sprint, a practice",
            "Build a weekly review practice: what you look at, what you decide, and how long it takes",
            "Design a work environment (physical and digital) that makes deep work the default and shallow work the exception"
          ],
          res: [
            "Atomic Habits (James Clear) — the most practical guide to habit formation",
            "The Power of Full Engagement (Loehr and Schwartz) — energy management over time management",
            "Why We Sleep (Matthew Walker) — the science of sleep and cognitive performance",
            "The ONE Thing (Keller and Papasan) — prioritization and focus over the long term"
          ]
        }
      ]
    }
  ]
}
