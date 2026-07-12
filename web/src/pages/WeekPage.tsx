import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Markdown } from '../components/Markdown'
import { formatDate } from '../lib/data'

interface Week {
  week_start: string
  content_md: string
}

export function WeekPage() {
  const [weeks, setWeeks] = useState<Week[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!supabase) {
      setWeeks([])
      return
    }
    supabase
      .from('weekly_syntheses')
      .select('week_start, content_md')
      .eq('lang', 'tr')
      .order('week_start', { ascending: false })
      .then(({ data, error: e }) => {
        if (e) setError(e.message)
        else setWeeks((data as Week[]) ?? [])
      })
  }, [])

  if (error) return <div className="empty error">{error}</div>
  if (weeks == null) return <div className="empty">Yükleniyor…</div>
  if (weeks.length === 0)
    return (
      <div className="empty">
        Henüz haftalık sentez yok — ilki bu pazar otomatik yazılacak. 📅
      </div>
    )

  return (
    <div className="weeks">
      {weeks.map((w) => (
        <article key={w.week_start} className="week-card">
          <h2 className="week-head">📅 {formatDate(w.week_start)} haftası</h2>
          <div className="md">
            <Markdown>{w.content_md}</Markdown>
          </div>
        </article>
      ))}
    </div>
  )
}
