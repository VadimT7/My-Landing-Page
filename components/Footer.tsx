import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { landingData } from '@/data/landing'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-foreground mb-2">Premium Presence</h3>
            <p className="text-muted-foreground">
              {landingData.footer.copyright.replace('©', `© ${currentYear}`)}
            </p>
          </div>
          
          <nav className="flex gap-6">
            {landingData.footer.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
        
        <Separator className="my-8 bg-border" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>Built with precision. Delivered with excellence.</p>
        </div>
      </div>
    </footer>
  )
}
