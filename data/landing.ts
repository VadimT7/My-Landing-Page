export const landingData = {
  hero: {
    headline: "Turn IG traffic into paid bookings in 7 days.",
    subheadline: "Go live in 24 hours. Instant book + premium site + admin dashboard. Done-for-you launch."
  },
  caseStudy: {
    title: "Mini Case Study",
    quote: "Valore Rentals went live in 24h. Instant bookings, no DM ping-pong. First booking made same day.",
    testimonial: '"It felt like we leveled up overnight."',
    beforeAfterCaption: "Before / After"
  },
  cta: {
    title: "Ready to level up your cashflow?",
    subtitle: "Start for $0, go live in 24h, get paid in 7 days.",
    buttons: [
      {
        text: "Start for $0",
        url: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/sapphire-development/15min"
      },
      {
        text: "Book 15-min Preview",
        url: `https://instagram.com/${(process.env.NEXT_PUBLIC_IG_HANDLE || '@sapphire_development').replace('@', '')}`
      }
    ]
  },
  footer: {
    copyright: "© Sapphire Drive",
    links: [
      { text: "Privacy", href: "/privacy" },
      { text: "Terms", href: "/terms" }
    ]
  },
  meta: {
    title: "Sapphire Drive — Turn IG traffic into paid bookings in 7 days",
    description: "Go live in 24 hours. Instant book, premium site, simple admin. Done-for-you launch."
  }
}
