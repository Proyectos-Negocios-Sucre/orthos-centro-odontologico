import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Orthos Centro Odontológico | Especialistas en Ortodoncia y Estética Dental',
  description: 'Especialistas en ortodoncia y estética dental. Tecnología avanzada y trato humano excepcional.',
  generator: 'v0.app',
  icons: {
    icon: '/icon2.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-light-bg dark:bg-dark-bg text-text-light dark:text-text-dark`}>
        <TopBar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
