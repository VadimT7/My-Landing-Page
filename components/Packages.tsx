'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Section from './Section'
import FloatingCards from './FloatingCards'
import { landingData } from '@/data/landing'

export default function Packages() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#'
  
  return (
    <Section className="relative">
      <FloatingCards />
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
          {landingData.packages.title}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {landingData.packages.items.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="relative h-full bg-card/80 backdrop-blur-sm border-border hover:border-gold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/10">
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-background">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-serif text-foreground">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-3xl font-bold text-gold mt-4">
                  {pkg.price}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {pkg.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  asChild
                  className="w-full bg-gold text-background hover:bg-gold-muted font-semibold"
                >
                  <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                    {pkg.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
