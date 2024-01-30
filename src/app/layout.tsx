import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Hello Word',
    template: '%s | Evolution'
  },
  description: 'Next.js'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {' '}
        <header style={{ backgroundColor: 'black', color: 'white' }}>
          <h1>Welcome</h1>
        </header>
        {children}{' '}
        <footer>
          <p>footer home</p>
        </footer>
      </body>
    </html>
  )
}
