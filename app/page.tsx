import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import CaseStudy from '@/components/CaseStudy'
import Packages from '@/components/Packages'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <CaseStudy />
        <Packages />
        <CTA />
      </main>
      <Footer />
    </>
  )
}