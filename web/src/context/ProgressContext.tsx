import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'
import { useFeed } from './FeedContext'
import {
  nextBox,
  nextReviewAt,
  bumpStreak,
  todayISO,
  type TermProgress,
  type Streak,
} from '../lib/leitner'

interface ProgressState {
  /** term_key → ilerleme. Girişsizken boş. */
  progress: Map<string, TermProgress>
  streak: Streak | null
  loading: boolean
  dueCount: number
  /** Kartı cevapla: DB'ye yazar, yerel durumu günceller. Yeni kutuyu döner. */
  answer: (termKey: string, correct: boolean) => Promise<number>
  /** Seans bitince streak'i günceller ve yeni halini döner. */
  completeSession: () => Promise<Streak>
}

const ProgressContext = createContext<ProgressState>({
  progress: new Map(),
  streak: null,
  loading: false,
  dueCount: 0,
  answer: async () => 1,
  completeSession: async () => ({ current_streak: 0, best_streak: 0, last_session_date: null }),
})

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const { feed } = useFeed()
  const [progress, setProgress] = useState<Map<string, TermProgress>>(new Map())
  const [streak, setStreak] = useState<Streak | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!user || !supabase) {
      setProgress(new Map())
      setStreak(null)
      return
    }
    let cancelled = false
    setLoading(true)
    Promise.all([
      supabase.from('user_term_progress').select('term_key, box, next_review_at, started_on'),
      supabase.from('user_streaks').select('current_streak, best_streak, last_session_date').maybeSingle(),
    ]).then(([{ data: rows }, { data: streakRow }]) => {
      if (cancelled) return
      const map = new Map<string, TermProgress>()
      for (const r of rows ?? []) {
        map.set(r.term_key as string, {
          box: r.box as number,
          next_review_at: r.next_review_at as string,
          started_on: r.started_on as string,
        })
      }
      setProgress(map)
      setStreak((streakRow as Streak | null) ?? null)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [user])

  const answer = useCallback(
    async (termKey: string, correct: boolean) => {
      const existing = progress.get(termKey)
      const box = nextBox(existing?.box, correct)
      const next_review_at = nextReviewAt(box)
      // started_on DB'ye gönderilmez: ilk insert'te default (bugün) atanır,
      // güncellemelerde dokunulmaz. Yerelde de aynı mantık korunur.
      const started_on = existing?.started_on ?? todayISO()
      setProgress((prev) => {
        const map = new Map(prev)
        map.set(termKey, { box, next_review_at, started_on })
        return map
      })
      if (user && supabase) {
        const { error } = await supabase.from('user_term_progress').upsert({
          user_id: user.id,
          term_key: termKey,
          box,
          next_review_at,
          updated_at: new Date().toISOString(),
        })
        if (error) console.error('ilerleme kaydedilemedi:', error.message)
      }
      return box
    },
    [progress, user]
  )

  const completeSession = useCallback(async () => {
    const next = bumpStreak(streak)
    setStreak(next)
    if (user && supabase) {
      const { error } = await supabase.from('user_streaks').upsert({ user_id: user.id, ...next })
      if (error) console.error('streak kaydedilemedi:', error.message)
    }
    return next
  }, [streak, user])

  const dueCount = useMemo(() => {
    if (!feed) return 0
    const today = todayISO()
    let n = 0
    for (const t of feed.terms) {
      const p = progress.get(t.key)
      if (p && p.next_review_at <= today) n++
    }
    return n
  }, [feed, progress])

  return (
    <ProgressContext.Provider value={{ progress, streak, loading, dueCount, answer, completeSession }}>
      {children}
    </ProgressContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress() {
  return useContext(ProgressContext)
}
