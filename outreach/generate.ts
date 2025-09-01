import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'csv-parse/sync'
import Mustache from 'mustache'

interface Lead {
  firstName: string
  brand: string
  igHandle: string
  email: string
  city: string
  hook: string
}

async function generateOutreach() {
  try {
    // Read package.json for author
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'))
    const senderName = packageJson.author || 'V.'
    
    // Get environment variables or defaults
    const senderSite = process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumpresence.com'
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/premiumpresence/15min'
    
    // Read CSV file
    const csvPath = path.join(__dirname, 'leads.sample.csv')
    if (!fs.existsSync(csvPath)) {
      console.error('❌ leads.sample.csv not found. Please create it with your leads data.')
      return
    }
    
    const csvContent = fs.readFileSync(csvPath, 'utf-8')
    const leads: Lead[] = parse(csvContent, {
      columns: true,
      skip_empty_lines: true
    })
    
    // Read templates
    const templatesDir = path.join(__dirname, 'templates')
    const dmTemplate = fs.readFileSync(path.join(templatesDir, 'dm.mustache'), 'utf-8')
    const emailTemplate = fs.readFileSync(path.join(templatesDir, 'email.mustache'), 'utf-8')
    const followupTemplate = fs.readFileSync(path.join(templatesDir, 'followup.mustache'), 'utf-8')
    
    // Process each lead
    console.log('🚀 Generating outreach messages...\n')
    console.log('Lead Name         Brand              DM    Email  Followup')
    console.log('─'.repeat(60))
    
    leads.forEach((lead) => {
      const data = {
        ...lead,
        senderName,
        senderSite,
        calendlyUrl
      }
      
      // Create output directory for this brand
      const brandDir = path.join(__dirname, 'outbox', lead.brand.replace(/[^a-z0-9]/gi, '_'))
      if (!fs.existsSync(brandDir)) {
        fs.mkdirSync(brandDir, { recursive: true })
      }
      
      // Generate and save messages
      const dmContent = Mustache.render(dmTemplate, data)
      const emailContent = Mustache.render(emailTemplate, data)
      const followupContent = Mustache.render(followupTemplate, data)
      
      fs.writeFileSync(path.join(brandDir, 'dm.txt'), dmContent)
      fs.writeFileSync(path.join(brandDir, 'email.txt'), emailContent)
      fs.writeFileSync(path.join(brandDir, 'followup.txt'), followupContent)
      
      // Log progress
      const leadName = lead.firstName.padEnd(16)
      const brandName = lead.brand.substring(0, 18).padEnd(18)
      console.log(`${leadName} ${brandName} ✓     ✓      ✓`)
    })
    
    console.log('\n✅ Generated messages for', leads.length, 'leads')
    console.log('📁 Output location: ./outreach/outbox/')
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

// Run the generator
generateOutreach()
