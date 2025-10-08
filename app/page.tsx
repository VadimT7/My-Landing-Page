import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Proof from '@/components/Proof'
import HowItWorks from '@/components/HowItWorks'
import CaseStudy from '@/components/CaseStudy'
import Packages from '@/components/Packages'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <HowItWorks />
        <CaseStudy />
        <Packages />
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}