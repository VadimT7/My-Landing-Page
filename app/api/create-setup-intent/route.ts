import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY' }, { status: 500 })
    }

    // Create or find customer by email (simple stub; replace with your DB lookup)
    const customer = await stripe.customers.create({ email })

    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id,
      payment_method_types: ['card'],
      usage: 'off_session',
    })

    return NextResponse.json({
      clientSecret: setupIntent.client_secret,
      customerId: customer.id,
    })
  } catch (err) {
    console.error('SetupIntent error', err)
    return NextResponse.json({ error: 'Failed to create SetupIntent' }, { status: 500 })
  }
}


