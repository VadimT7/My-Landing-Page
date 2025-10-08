import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  try {
    const { plan, mode = 'subscription', interval = 'monthly' } = await req.json() as { plan: 'starter' | 'pro', mode?: 'subscription', interval?: 'monthly' | 'annual' }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY' }, { status: 500 })
    }

    const priceId = plan === 'starter'
      ? (interval === 'annual' ? process.env.PRICE_ID_STARTER_ANNUAL : process.env.PRICE_ID_STARTER)
      : (interval === 'annual' ? process.env.PRICE_ID_PRO_ANNUAL : process.env.PRICE_ID_PRO)
    if (!priceId) {
      return NextResponse.json({ error: 'Missing price id' }, { status: 400 })
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [
        { price: priceId, quantity: 1 },
      ],
      success_url: `${siteUrl}/success?plan=${plan}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/#pricing`,
      allow_promotion_codes: true,
    })

    return NextResponse.json({ id: session.id, url: session.url })
  } catch (err) {
    console.error('Checkout session error', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}


