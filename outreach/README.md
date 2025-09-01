# Outreach System

Generate personalized DMs, emails, and follow-up messages for luxury car rental prospects.

## Setup

1. Copy `leads.sample.csv` and add your own leads data
2. Make sure the main project dependencies are installed (`pnpm install`)

## Usage

From the project root directory, run:

```bash
pnpm run outreach:gen
```

Or directly:

```bash
ts-node --compiler-options '{"module":"commonjs"}' outreach/generate.ts
```

## CSV Format

Your leads CSV should have these columns:

- `firstName` - Contact's first name
- `brand` - Company/brand name
- `igHandle` - Instagram handle
- `email` - Email address
- `city` - Location
- `hook` - Any specific note about them

## Output

Generated messages will be saved to:
```
outreach/outbox/{brand_name}/
  ├── dm.txt      - Instagram DM message
  ├── email.txt   - Email message
  └── followup.txt - Follow-up message
```

## Customization

Edit the templates in `outreach/templates/` to change the messaging:
- `dm.mustache` - Instagram DM template
- `email.mustache` - Email template
- `followup.mustache` - Follow-up template

The generator uses Mustache templating. Available variables:
- All CSV columns (firstName, brand, etc.)
- `senderName` - From package.json author
- `senderSite` - From NEXT_PUBLIC_SITE_URL env var
- `calendlyUrl` - From NEXT_PUBLIC_CALENDLY_URL env var
