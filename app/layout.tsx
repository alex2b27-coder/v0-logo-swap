import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'BookVSFlow — Smart Booking System for Service Professionals',
  description: 'All-in-one booking solution for any type of service business. More bookings. Fewer no-shows. Smarter business.',
  keywords: ['salon booking', 'telegram bot', 'beauty salon', 'appointment scheduling', 'salon management', 'barbershop', 'nail studio', 'massage booking', 'service business'],
  authors: [{ name: 'BookVSFlow', url: 'https://bookvsflow.com' }],
  openGraph: {
    title: 'BookVSFlow — Smart Booking System for Service Professionals',
    description: 'All-in-one booking solution for any type of service business. More bookings. Fewer no-shows. Smarter business.',
    url: 'https://bookvsflow.com',
    siteName: 'BookVSFlow',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookVSFlow — Smart Booking System for Service Professionals',
    description: 'All-in-one booking solution for any type of service business. More bookings. Fewer no-shows. Smarter business.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#f5f5f0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
