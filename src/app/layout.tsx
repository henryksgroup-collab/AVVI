import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Viral Curiosidades AI',
  description: 'Geração automática de vídeos virais de crimes e curiosidades',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: 'system-ui', background: '#111', color: '#fff' }}>
        {children}
      </body>
    </html>
  )
}
