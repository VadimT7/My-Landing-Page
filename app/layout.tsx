import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sapphire Development — Luxury Rental Brand Upgrades",
  description: "We turn small rental hustles into premium brands in under 72 hours.",
  openGraph: {
    title: "Sapphire Development — Luxury Rental Brand Upgrades",
    description: "We turn small rental hustles into premium brands in under 72 hours.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sapphiredevelopment.com",
    siteName: "Sapphire Development",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sapphire Development — Luxury Rental Brand Upgrades",
    description: "We turn small rental hustles into premium brands in under 72 hours.",
    images: ["/og-image.png"],
    creator: process.env.NEXT_PUBLIC_IG_HANDLE || "@sapphire_development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
