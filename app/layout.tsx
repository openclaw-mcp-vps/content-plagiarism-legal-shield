import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DMCA Legal Shield — Protect Your Content Automatically',
  description: 'Monitor the web for stolen blog content and auto-generate legally compliant DMCA takedown notices. Built for bloggers, agencies, and course creators.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="62f0a149-8427-429d-9c91-a0e556c72bb5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
