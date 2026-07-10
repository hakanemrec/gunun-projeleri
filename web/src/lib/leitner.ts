import type { TermIndexEntry } from './types'

// Kutu → tekrar aralığı (gün). İndeks 0 kullanılmaz.
export const BOX_INTERVALS = [0, 1, 3, 7, 14, 30] as const
export const MAX_BOX = 5

export const SESSION_CAP = 15
export const NEW_PER_SESSION = 5

export interface TermProgress {
  box: number
  next_review_at: string // YYYY-MM-DD
}

export function todayISO(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function addDaysISO(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() + days)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** Cevaba göre yeni kutu: doğruysa yukarı (yeni terim ilk doğruda 2'ye), yanlışsa kutu 1. */
export function nextBox(current: number | undefined, correct: boolean): number {
  if (!correct) return 1
  if (current == null) return 2
  return Math.min(current + 1, MAX_BOX)
}

export function nextReviewAt(box: number): string {
  return addDaysISO(BOX_INTERVALS[box])
}

export interface DeckCard {
  term: TermIndexEntry
  isNew: boolean
}

/**
 * Günün destesi: vadesi gelenler (en eski vade önce, tavan SESSION_CAP),
 * boş kalan yere en fazla NEW_PER_SESSION hiç çalışılmamış terim.
 * `allTerms` en yeni günün terimleri önce gelecek şekilde sıralı geldiği için
 * yeni terim seçimi de doğal olarak "en taze jargon önce" olur.
 */
export function buildDeck(
  allTerms: TermIndexEntry[],
  progress: Map<string, TermProgress>
): DeckCard[] {
  const today = todayISO()

  const due = allTerms
    .filter((t) => {
      const p = progress.get(t.key)
      return p != null && p.next_review_at <= today
    })
    .sort((a, b) => progress.get(a.key)!.next_review_at.localeCompare(progress.get(b.key)!.next_review_at))
    .slice(0, SESSION_CAP)

  const newCount = Math.min(NEW_PER_SESSION, SESSION_CAP - due.length)
  const fresh = newCount > 0 ? allTerms.filter((t) => !progress.has(t.key)).slice(0, newCount) : []

  const deck: DeckCard[] = [
    ...due.map((term) => ({ term, isNew: false })),
    ...fresh.map((term) => ({ term, isNew: true })),
  ]

  // Fisher–Yates: tekrar ve yeniler karışık gelsin
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}

export interface Streak {
  current_streak: number
  best_streak: number
  last_session_date: string | null
}

/** Seans tamamlanınca streak'in yeni hali. Aynı gün ikinci seans sayacı değiştirmez. */
export function bumpStreak(prev: Streak | null): Streak {
  const today = todayISO()
  const yesterday = (() => {
    const d = new Date()
    d.setDate(d.getDate() - 1)
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  })()

  if (prev?.last_session_date === today) return prev
  const current = prev?.last_session_date === yesterday ? prev.current_streak + 1 : 1
  return {
    current_streak: current,
    best_streak: Math.max(current, prev?.best_streak ?? 0),
    last_session_date: today,
  }
}
