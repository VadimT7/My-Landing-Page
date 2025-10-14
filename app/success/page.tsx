import Link from 'next/link'

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams
  const plan = typeof params.plan === 'string' ? params.plan : 'starter'
  return (
    <main className="px-4 pt-20 pb-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-serif mb-4">You&apos;re in ✅</h1>
        <p className="text-muted-foreground mb-8">Thanks for starting {plan === 'pro' ? 'Pro' : plan === 'starter' ? 'Starter' : 'Performance'}.
          Next: book your 15-min setup call to finalize domain, Stripe, and go-live.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl bg-gold text-background px-6 py-3 font-semibold"
          data-analytics="click_cta"
          data-analytics-meta='{"label":"success_calendly"}'
        >
          Book 15-min Setup
        </a>

        <div className="mt-12 text-left">
          <h2 className="text-2xl font-serif mb-3">Onboarding checklist</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Send your IG handle and city for preview</li>
            <li>Connect Stripe during the call</li>
            <li>Point your domain</li>
            <li>Post the 3 IG stories we give you</li>
          </ol>
          <Link href="/" className="inline-block mt-6 underline text-muted-foreground">Back to home</Link>
        </div>
      </div>
    </main>
  )
}


