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
  icons: {
    icon: '@app/favicon.ico',
  },
  description:
    "Book movie tickets, event tickets and more at evenTrendz. Your one-stop destination for entertainment.",
  authors: [
    {
      name: "Prashant Kumar Jha",
    },
  ],
  verification: { google: "google-site-verification=i-etq81HilCZ782xqbgJsmVlLZ9LdgM2P7Sgd22u5Og" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
