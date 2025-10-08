# Sapphire Drive - Productized SaaS Landing Page

A high-converting landing page for **Sapphire Drive**, a productized SaaS that turns IG traffic into paid bookings in 7 days for luxury car rental operators.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp env.local.example .env.local

# Edit .env.local with your values (see below)

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 📋 Environment Setup

Create a `.env.local` file with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/YOUR_HANDLE/preview-15min"
NEXT_PUBLIC_IG_HANDLE="@yourbrand"
NEXT_PUBLIC_SITE_URL="https://yoursite.com"

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_META_PIXEL_ID="123456789012345"
NEXT_PUBLIC_TWITTER_HANDLE="@yourbrand"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLIC_KEY="pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"
STRIPE_SECRET_KEY="sk_test_XXXXXXXXXXXXXXXXXXXXXXXX"
PRICE_ID_STARTER="price_starter_monthly_xxx"
PRICE_ID_PRO="price_pro_monthly_xxx"
PRICE_ID_STARTER_ANNUAL="price_starter_annual_xxx"
PRICE_ID_PRO_ANNUAL="price_pro_annual_xxx"
```

## 💳 Stripe Setup Instructions

### 1. Create a Stripe Account
1. Go to [stripe.com](https://stripe.com) and sign up
2. Complete business verification
3. Get your API keys from **Developers > API keys**

### 2. Create Price IDs

#### For Starter Plan ($399/mo or $359/mo annual):
1. Go to **Products** in Stripe Dashboard
2. Click **+ Add product**
3. Name: "Starter Plan"
4. Set pricing:
   - Monthly: $399/month recurring
   - Annual: $359/month recurring (billed annually as $4,308/year)
5. Copy the **Price ID** (starts with `price_`) for each
6. Add to `.env.local`:
   - `PRICE_ID_STARTER="price_xxx"` (monthly)
   - `PRICE_ID_STARTER_ANNUAL="price_yyy"` (annual)

#### For Pro Plan ($999/mo or $899/mo annual):
1. Create another product: "Pro Plan"
2. Set pricing:
   - Monthly: $999/month recurring
   - Annual: $899/month recurring (billed annually as $10,788/year)
3. Copy the **Price IDs**
4. Add to `.env.local`:
   - `PRICE_ID_PRO="price_xxx"` (monthly)
   - `PRICE_ID_PRO_ANNUAL="price_yyy"` (annual)

### 3. Performance Plan (7% rev-share)
- Uses **SetupIntent** to collect card on file ($0 charge today)
- Manual billing: charge 7% of each booking off-session using stored `payment_method_id`
- Implement billing logic in your backend (not included in this landing page)

### 4. Test Mode vs Live Mode
- Start with **Test mode** keys (prefix `pk_test_` and `sk_test_`)
- Use [Stripe test cards](https://stripe.com/docs/testing) to test checkout
- When ready for production, switch to **Live mode** keys

### 5. Webhooks (Optional but Recommended)
Set up webhooks to handle subscription events:
1. Go to **Developers > Webhooks** in Stripe
2. Add endpoint: `https://yoursite.com/api/webhooks/stripe`
3. Select events: `checkout.session.completed`, `customer.subscription.updated`, etc.
4. Copy webhook secret to `.env.local` as `STRIPE_WEBHOOK_SECRET`

## 🎨 Customization

### Update Copy & Messaging
Edit `data/landing.ts` to change:
- Hero headlines and subheadings
- Case study quotes
- CTA button text
- Footer links

### Replace Images
Add your images to `public/images/`:
- `before.jpg` - Before transformation example
- `after.jpg` - After transformation example
- `video-poster.jpg` - Video thumbnail

### Update Theme Colors
Modify `app/globals.css`:
- `--background`: Dark background (#0B0B0C)
- `--foreground`: Off-white text (#F5F5F4)
- `--gold`: Accent color (#C6A867)

## 📧 Analytics & Tracking

The page includes:
- **Google Analytics 4**: Tracks pageviews, CTA clicks, conversions
- **Meta Pixel**: Tracks Lead, StartTrial, Purchase events
- **Custom tracking**: All CTAs have `data-analytics` attributes

Events fired:
- `lead`: When user submits live preview form
- `start_trial`: When Performance plan SetupIntent succeeds
- `purchase`: When Starter/Pro checkout succeeds
- `click_cta`: On all CTA button clicks

## 🏗️ Project Structure

```
premium-presence/
├── app/
│   ├── api/
│   │   ├── create-setup-intent/     # Performance plan (card on file)
│   │   └── create-checkout-session/ # Starter/Pro subscriptions
│   ├── success/                     # Post-purchase onboarding
│   ├── privacy/                     # Privacy policy
│   ├── terms/                       # Terms of service
│   ├── layout.tsx                   # Root layout with SEO & analytics
│   └── page.tsx                     # Landing page
├── components/
│   ├── Hero.tsx                     # Hero with 3 CTAs
│   ├── Proof.tsx                    # Why this prints money section
│   ├── HowItWorks.tsx              # 4-step timeline
│   ├── Packages.tsx                 # Pricing with monthly/annual toggle
│   ├── CaseStudy.tsx               # Mini case study with video
│   ├── StickyCTA.tsx               # Sticky bottom CTA bar
│   ├── CalendlyModal.tsx           # Inline Calendly scheduler
│   ├── PerformanceModal.tsx        # Performance plan with SetupIntent
│   └── LivePreviewFormModal.tsx    # Lead capture form
├── data/
│   └── landing.ts                   # All copy/text content
└── lib/
    ├── analytics.ts                 # GA4 + Meta Pixel helpers
    └── seo.ts                       # SEO metadata helpers
```

## 🚀 Deployment

### Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Add Environment Variables in Vercel:
1. Go to your project in Vercel Dashboard
2. Click **Settings > Environment Variables**
3. Add all variables from `.env.local`
4. Redeploy

## 🔒 Security Notes

- Never commit `.env.local` to git (already in `.gitignore`)
- Use test mode for development
- Rotate secrets if exposed
- Enable Stripe Radar for fraud protection

## 📞 Support

For questions or customization, book a call via your configured Calendly URL.

---

**Built by Sapphire Drive** • Powered by Next.js 14 + Stripe + Vercel