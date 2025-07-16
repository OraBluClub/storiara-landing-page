import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Storiara - AI Pre-Production',
  description: 'Storiara is your AI pre-production partner. Automate tedious tasks and focus on what matters: telling a great story.',
  icons: {
    icon: '/icons/iconfull.svg',
    apple: '/icons/iconfull.svg',
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
