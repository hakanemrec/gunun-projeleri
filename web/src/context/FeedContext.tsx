import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { loadFeed, type FeedData } from '../lib/data'
import type { Project } from '../lib/types'

interface FeedState {
  feed: FeedData | null
  loading: boolean
  error: string | null
  projectById: Map<string, Project>
}

const FeedContext = createContext<FeedState>({
  feed: null,
  loading: true,
  error: null,
  projectById: new Map(),
})

export function FeedProvider({ children }: { children: ReactNode }) {
  const [feed, setFeed] = useState<FeedData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadFeed()
      .then(setFeed)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  const projectById = useMemo(() => {
    const map = new Map<string, Project>()
    for (const day of feed?.days ?? []) for (const p of day.projects) map.set(p.id, p)
    return map
  }, [feed])

  return (
    <FeedContext.Provider value={{ feed, loading, error, projectById }}>
      {children}
    </FeedContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFeed() {
  return useContext(FeedContext)
}
