import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: 'Storiara - AI-Powered Film Production',
  description: 'From script to screen, Storiara is your AI production partner. Automate tedious tasks and focus on what matters: telling a great story.',
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
