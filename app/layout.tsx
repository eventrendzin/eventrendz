import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css'
import { Images } from 'lucide-react';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "evenTrendz - Movies, Events & More",
    template: "%s | evenTrendz",
  },
  
  verification: { google: "google-site-verification=i-etq81HilCZ782xqbgJsmVlLZ9LdgM2P7Sgd22u5Og" },

  description:
    "evenTrendz is your premier event management company, specializing in seamless corporate events, weddings, and more. With a focus on creativity, precision, and customer satisfaction, we ensure every detail is perfectly tailored to exceed your expectations and create unforgettable experiences.",
  keywords: "event management, corporate events, wedding planning, conference organization, event planner, premier event management company, evenTrendz",
  authors: [
    {
      name: "Prashant Kumar Jha",
    },
  ],
  creator: "evenTrendz",
  publisher: "evenTrendz",
  icons: {
    icon: '@app/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
  )
}
