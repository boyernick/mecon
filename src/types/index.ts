// Navigation
export interface ChapterMeta {
  id: string        // e.g. "chapter-1"
  number: number    // 1–5
  title: string     // e.g. "Introduction and Goals of the Firm"
  topics: TopicMeta[]
}

export interface TopicMeta {
  id: string     // e.g. "agency-problem"
  label: string  // e.g. "Agency Problem"
  href: string   // e.g. "/guide/chapter-1#agency-problem"
}

// Study Guide
export interface Concept {
  term: string
  explanation: string
  examTrap?: string
}

export interface ChapterSection {
  id: string
  heading: string
  concepts?: Concept[]
  formulas?: Formula[]
  tables?: ContentTable[]
  examWeight?: 'high' | 'medium' | 'low'
}

export interface Formula {
  label: string
  expression: string  // LaTeX or plain text
  example?: string    // Worked numerical example
}

export interface ContentTable {
  headers: string[]
  rows: string[][]
}

export interface ChapterContent {
  id: string
  number: number
  title: string
  sections: ChapterSection[]
}

// Practice Exam
export interface Question {
  id: number        // 1–25
  chapter: number   // 1–5
  topic: string
  text: string
  choices: Choice[]
  correctId: string  // e.g. "b"
  explanation: string
  workings?: string  // Step-by-step calculation (math questions)
}

export interface Choice {
  id: string  // "a" | "b" | "c" | "d"
  text: string
}

// TOC
export interface TocItem {
  id: string
  label: string
  level: 2 | 3
}
