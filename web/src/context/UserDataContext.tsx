import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthContext'

// Giriş yoksa (veya Supabase yapılandırılmadıysa) veriler localStorage'da tutulur;
// giriş yapılınca yereldeki kayıtlar buluta bir kez taşınır, sonrası buluttan yürür.

const LS_BOOKMARKS = 'gp_bookmarks'
const LS_NOTES = 'gp_notes'

function loadLocalSet(key: string): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) ?? '[]') as string[])
  } catch {
    return new Set()
  }
}
function loadLocalObj(key: string): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(key) ?? '{}') as Record<string, string>
  } catch {
    return {}
  }
}

interface UserDataState {
  bookmarks: Set<string>
  notes: Record<string, string>
  /** true → veriler bulutta (giriş yapılmış); false → localStorage */
  cloud: boolean
  toggleBookmark: (projectId: string) => void
  saveNote: (projectId: string, text: string) => void
}

const UserDataContext = createContext<UserDataState>({
  bookmarks: new Set(),
  notes: {},
  cloud: false,
  toggleBookmark: () => {},
  saveNote: () => {},
})

export function UserDataProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => loadLocalSet(LS_BOOKMARKS))
  const [notes, setNotes] = useState<Record<string, string>>(() => loadLocalObj(LS_NOTES))
  const cloud = user != null && supabase != null

  // Giriş yapılınca: buluttakini indir + yereldekileri (bulutta olmayanları) yükle
  useEffect(() => {
    if (!cloud) {
      setBookmarks(loadLocalSet(LS_BOOKMARKS))
      setNotes(loadLocalObj(LS_NOTES))
      return
    }
    let cancelled = false
    async function syncUp() {
      const uid = user!.id
      const [{ data: bmRows }, { data: noteRows }] = await Promise.all([
        supabase!.from('user_bookmarks').select('project_id'),
        supabase!.from('user_notes').select('project_id, note'),
      ])
      if (cancelled) return
      const remoteBm = new Set((bmRows ?? []).map((r) => r.project_id as string))
      const remoteNotes: Record<string, string> = {}
      for (const r of noteRows ?? []) remoteNotes[r.project_id as string] = r.note as string

      // Yerel → bulut tek seferlik taşıma (UUID formatındaki id'ler; dev id'leri atlanır)
      const isUuid = (s: string) => /^[0-9a-f-]{36}$/.test(s)
      const localBm = [...loadLocalSet(LS_BOOKMARKS)].filter((id) => isUuid(id) && !remoteBm.has(id))
      const localNotes = Object.entries(loadLocalObj(LS_NOTES)).filter(
        ([id]) => isUuid(id) && !(id in remoteNotes)
      )
      if (localBm.length) {
        await supabase!
          .from('user_bookmarks')
          .upsert(localBm.map((project_id) => ({ user_id: uid, project_id })))
        for (const id of localBm) remoteBm.add(id)
      }
      if (localNotes.length) {
        await supabase!
          .from('user_notes')
          .upsert(localNotes.map(([project_id, note]) => ({ user_id: uid, project_id, note })))
        for (const [id, note] of localNotes) remoteNotes[id] = note
      }
      localStorage.removeItem(LS_BOOKMARKS)
      localStorage.removeItem(LS_NOTES)
      if (!cancelled) {
        setBookmarks(remoteBm)
        setNotes(remoteNotes)
      }
    }
    syncUp()
    return () => {
      cancelled = true
    }
  }, [cloud, user])

  const toggleBookmark = useCallback(
    (projectId: string) => {
      setBookmarks((prev) => {
        const next = new Set(prev)
        const adding = !next.has(projectId)
        if (adding) next.add(projectId)
        else next.delete(projectId)
        if (cloud) {
          if (adding) {
            supabase!.from('user_bookmarks').upsert({ user_id: user!.id, project_id: projectId }).then()
          } else {
            supabase!
              .from('user_bookmarks')
              .delete()
              .eq('user_id', user!.id)
              .eq('project_id', projectId)
              .then()
          }
        } else {
          localStorage.setItem(LS_BOOKMARKS, JSON.stringify([...next]))
        }
        return next
      })
    },
    [cloud, user]
  )

  const saveNote = useCallback(
    (projectId: string, text: string) => {
      setNotes((prev) => {
        const next = { ...prev }
        const trimmed = text.trim()
        if (trimmed) next[projectId] = trimmed
        else delete next[projectId]
        if (cloud) {
          if (trimmed) {
            supabase!
              .from('user_notes')
              .upsert({ user_id: user!.id, project_id: projectId, note: trimmed, updated_at: new Date().toISOString() })
              .then()
          } else {
            supabase!
              .from('user_notes')
              .delete()
              .eq('user_id', user!.id)
              .eq('project_id', projectId)
              .then()
          }
        } else {
          localStorage.setItem(LS_NOTES, JSON.stringify(next))
        }
        return next
      })
    },
    [cloud, user]
  )

  return (
    <UserDataContext.Provider value={{ bookmarks, notes, cloud, toggleBookmark, saveNote }}>
      {children}
    </UserDataContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUserData() {
  return useContext(UserDataContext)
}
