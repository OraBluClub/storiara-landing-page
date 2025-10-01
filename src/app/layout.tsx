import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Storiara - From Script to Shoot',
  description: 'From script to shoot, we get your story made. Cut pre-production time by 70% with AI-powered scheduling, budgeting, storyboarding, and coordination.',
  icons: {
    icon: '/icons/iconfull.svg',
    apple: '/icons/iconfull.svg',
  },
  openGraph: {
    title: 'Storiara - From Script to Shoot',
    description: 'From script to shoot, we get your story made. Cut pre-production time by 70% with AI-powered scheduling, budgeting, storyboarding, and coordination.',
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
