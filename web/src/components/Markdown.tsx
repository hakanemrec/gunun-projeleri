import ReactMarkdown from 'react-markdown'

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, children: kids }) => (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {kids}
          </a>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

/** Markdown'ı düz metne indirger (kart özetleri için). */
export function mdToText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[*_`>#]/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}
