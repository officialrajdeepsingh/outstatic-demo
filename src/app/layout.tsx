import '../globals.css'
import { Header } from "@/components/Header/Header"
import { Metadata } from 'next'
import { absoluteUrl } from '@/lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL( process.env.NODE_ENV === "development" ? `http://localhost:${process.env.PORT || 3000}`:`https://${process.env.VERCEL_URL}`),
  title: {
    default: 'Outstatic',
    template: '%s | Outstatic'
  },
  description: 'A blog starter built with Outstatic.',
  openGraph: {
    title: 'Outstatic - A Static Site CMS for Next.js',
    description: 'A blog starter built with Outstatic.',
    url: absoluteUrl('/'),
    siteName: 'Next.js',
    images: [
      {
        url: absoluteUrl('/images/og-image.png'),
        width: 1800,
        height: 1600
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/favicon.ico' }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded={true} data-gr-ext-installed={true} className='bg-white dark:text-white dark:bg-gray-900'>

        <Header />

        {children}

      </body>
    </html>
  )
}