import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import '@/styles/globals.css'

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Encoteki',
  description: 'Encoteki',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} text-[14px] text-primary-black`}>
        {children}
      </body>
    </html>
  )
}
