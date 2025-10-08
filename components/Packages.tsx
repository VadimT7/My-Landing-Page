'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Section from './Section'

export default function Packages() {
  const [annual, setAnnual] = useState(false)

  const tiers = useMemo(() => ([
    {
      key: 'performance',
      name: 'Performance',
      price: '$0/month',
      originalPrice: null,
      badge: 'Most Popular',
      sub: 'Only pay 7% per booking for your first 60 days. After that, switch to any fixed plan or continue.',
      bullets: [
        'Launch your site in 24 hours',
        'We import all your IG cars for you',
        'Instant book system + admin dashboard',
        'Connect your Stripe in minutes',
        'Mobile-optimized luxury design',
      ],
      cta: 'Start for $0 Today',
      action: { type: 'performance' as const },
      popular: true,
    },
    {
      key: 'starter',
      name: 'Starter',
      price: annual ? '$359' : '$399',
      originalPrice: annual ? '$4,788' : null,
      badge: annual ? '3 Months Free' : null,
      sub: annual ? 'Perfect for small fleets. Billed annually at $4,308 ($359/mo) — save $1,480/year.' : 'Perfect for small fleets. Upgrade anytime.',
      bullets: [
        'Launch in 24 hours guaranteed',
        'Import up to 20 cars from Instagram',
        'Instant booking system + admin',
        'Mobile-first luxury design',
        'SEO optimized for Google',
        'Automatic email notifications',
      ],
      cta: annual ? 'Get 3 Months Free' : 'Start Starter',
      action: { type: 'checkout' as const, plan: 'starter' as const },
    },
    {
      key: 'pro',
      name: 'Pro',
      price: annual ? '$899' : '$999',
      originalPrice: annual ? '$11,988' : null,
      badge: annual ? '4 Months Free' : null,
      sub: annual ? 'Built for scaling operations. Billed annually at $10,788 ($899/mo) — save $3,200/year.' : 'Built for scaling operations. Premium features included.',
      bullets: [
        'Everything in Starter, plus:',
        'Import up to 100 cars',
        'Dynamic pricing engine',
        'Custom text message templates',
        'Performance benchmarks & analytics',
        'Priority support & onboarding',
      ],
      cta: annual ? 'Get 4 Months Free' : 'Start Pro',
      action: { type: 'checkout' as const, plan: 'pro' as const },
    },
  ]), [annual])
  
  const startCheckout = async (plan: 'starter' | 'pro') => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan, interval: annual ? 'annual' : 'monthly' }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }
  
  return (
    <Section className="relative" id="pricing">
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Pricing that scales with you</h2>
        <p className="text-muted-foreground mb-6">Start free, upgrade when you're ready. Cancel anytime.</p>
        <div className="inline-flex items-center gap-3 p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              !annual 
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-900 shadow-md' 
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              annual 
                ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-900 shadow-md' 
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
            onClick={() => setAnnual(true)}
          >
            Annual
            <span className="ml-1.5 text-xs opacity-90">(Save up to 27%)</span>
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className={`relative h-full flex flex-col bg-card/80 backdrop-blur-sm border-border hover:border-amber-500/50 transition-all duration-300 ${
              tier.key === 'performance' ? 'border-amber-500/30 bg-gradient-to-b from-card/90 to-card/70 ring-1 ring-amber-500/20' : ''
            }`}>
              {tier.badge && (
                <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-zinc-900' 
                    : 'bg-emerald-500 text-white'
                }`}>
                  {tier.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-serif text-foreground">
                  {tier.name}
                </CardTitle>
                <motion.div
                  key={`${tier.key}-${annual}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mt-4">
                    {tier.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {tier.originalPrice}/year
                      </div>
                    )}
                    <div className="text-4xl font-bold text-amber-400">
                      {tier.price}
                      {tier.key !== 'performance' && <span className="text-lg text-muted-foreground">/mo</span>}
                    </div>
                  </div>
                </motion.div>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{tier.sub}</p>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <motion.ul
                  key={`bullets-${tier.key}-${annual}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="space-y-3"
                >
                  {tier.bullets.map((bullet, i) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
              
              <CardFooter>
                {tier.action.type === 'performance' ? (
                  <button 
                    className="group relative w-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-zinc-900 font-semibold text-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                    onClick={() => {
                      const el = document.querySelector('[data-analytics-meta*="navbar_performance"], [data-analytics-meta*="hero_performance"]') as HTMLButtonElement | null
                      el?.click()
                    }}
                    data-analytics="click_cta"
                    data-analytics-meta='{"label":"pricing_performance"}'
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{tier.cta}</span>
                  </button>
                ) : tier.action.type === 'checkout' ? (
                  <button 
                    className="group relative w-full px-6 py-3 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-zinc-900 font-semibold text-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
                    onClick={() => {
                      const plan = tier.action.type === 'checkout' ? tier.action.plan : undefined
                      if (plan) startCheckout(plan)
                    }}
                    data-analytics="purchase"
                    data-analytics-meta={JSON.stringify({ plan: tier.action.type === 'checkout' ? tier.action.plan : '', interval: annual ? 'annual' : 'monthly' })}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{tier.cta}</span>
                  </button>
                ) : null}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-6">Cancel anytime. If not live in 24h after handoff → You get a $250 credit.</p>
    </Section>
  )
}
