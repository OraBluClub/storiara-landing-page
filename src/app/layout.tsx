import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Storiara - Script to Screen Pre-Production',
  description: 'With just your script, we instantly break down plotholes, map characters, manage cast, track gear, build shotlists, schedule scenes, and craft your visual style.',
  icons: {
    icon: '/icons/iconfull.svg',
    apple: '/icons/iconfull.svg',
  },
  openGraph: {
    title: 'Storiara - Script to Screen Pre-Production',
    description: 'With just your script, we instantly break down plotholes, map characters, manage cast, track gear, build shotlists, schedule scenes, and craft your visual style.',
    url: 'https://storiara.com',
    siteName: 'Storiara',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://storiara.com/assets/poster.jpg',
        width: 1200,
        height: 630,
        alt: 'Storiara Poster',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} font-sans tracking-tight`}>
        {children}
      </body>
    </html>
  )
}
