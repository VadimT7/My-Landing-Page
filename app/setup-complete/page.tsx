import Link from 'next/link'

export default function SetupCompletePage() {
  return (
    <main className="px-4 pt-20 pb-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-serif mb-4">Card saved ✅</h1>
        <p className="text-muted-foreground mb-8">
          Your Performance plan is set up. No charge today. Book your 15-min setup call to finalize your site.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-gold text-background px-6 py-3 font-semibold"
          data-analytics="click_cta"
          data-analytics-meta='{"label":"setup_complete_calendly"}'
        >
          Book 15-min Setup
        </a>

        <div className="mt-12 text-left">
          <h2 className="text-2xl font-serif mb-3">What&apos;s next?</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Book your 15-min call using the link above</li>
            <li>Send your IG handle and city during the call</li>
            <li>We&apos;ll import your cars, connect Stripe, and launch</li>
            <li>Post 3 IG stories we give you</li>
            <li>Watch bookings hit your phone in 7 days</li>
          </ol>
          <Link href="/" className="inline-block mt-6 underline text-muted-foreground">Back to home</Link>
        </div>
      </div>
    </main>
  )
}
