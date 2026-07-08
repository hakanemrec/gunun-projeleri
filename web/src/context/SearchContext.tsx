import { createContext, useContext, useState, type ReactNode } from 'react'

const SearchContext = createContext<{ query: string; setQuery: (q: string) => void }>({
  query: '',
  setQuery: () => {},
})

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('')
  return <SearchContext.Provider value={{ query, setQuery }}>{children}</SearchContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearch() {
  return useContext(SearchContext)
}
