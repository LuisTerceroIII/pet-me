import { Header } from '@/components/index'
import { Kanit, Kumbh_Sans } from 'next/font/google'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const kanit = Kanit({
  weight: ['400', '500','700', '800'],
  subsets: ["latin"]
})

const kumbhSans = Kumbh_Sans({
  weight: ['400', '500','700', '800'],
  subsets: ["latin"]
})

const resetStyles = {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={kumbhSans.className}>
      <body style={resetStyles}>
        <Header />
        {children}
      </body>
    </html>
  )
}
