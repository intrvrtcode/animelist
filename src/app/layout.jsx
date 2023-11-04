import { Gabarito, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Animelist',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  )
}
