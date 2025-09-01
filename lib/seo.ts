import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: 'Premium Presence — Luxury Rental Brand Upgrades',
  description: 'We turn small rental hustles into premium brands in under 72 hours.',
  keywords: ['luxury car rental', 'brand upgrade', 'website design', 'premium websites', 'rental business'],
  authors: [{ name: 'Premium Presence' }],
  creator: 'Premium Presence',
  publisher: 'Premium Presence',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumpresence.com',
    siteName: 'Premium Presence',
    title: 'Premium Presence — Luxury Rental Brand Upgrades',
    description: 'We turn small rental hustles into premium brands in under 72 hours.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Premium Presence - Luxury Rental Brand Upgrades',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Presence — Luxury Rental Brand Upgrades',
    description: 'We turn small rental hustles into premium brands in under 72 hours.',
    creator: process.env.NEXT_PUBLIC_IG_HANDLE || '@sapphire_development',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
}

export function generateJSONLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Premium Presence',
    description: 'Luxury brand upgrades for car rental businesses',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumpresence.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumpresence.com'}/favicon.svg`,
    sameAs: [
      `https://instagram.com/${(process.env.NEXT_PUBLIC_IG_HANDLE || '@sapphire_development').replace('@', '')}`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/premiumpresence',
    },
  }
}
