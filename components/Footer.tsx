import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { landingData } from '@/data/landing'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/50 to-background border-t border-border overflow-hidden">
      {/* Animated wave effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-foreground mb-2">Sapphire Drive</h3>
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
        
        <div className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span>Powered by</span>
          <span className="font-semibold text-foreground">Sapphire Drive</span>
        </div>
      </div>
    </footer>
  )
}
