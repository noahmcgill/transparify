# FishBowl - for Open Startups

FishBowl is a little like LinkTree, but for displaying startup metrics. Inspired by [Open Startup List](https://openstartuplist.com/) and many of the startups listed on their website, it allows founders to easily stand up and share a page that displays their startup's metrics via widgets.

## Tech Stack

- [Next.js](https://nextjs.org/) – Framework
- [TypeScript](https://www.typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS
- [shadcn/ui](https://ui.shadcn.com) - UI Components
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Prisma](https://prisma.io) - ORM [![Made with Prisma](https://made-with.prisma.io/dark.svg)](https://prisma.io)
- [Auth.js](https://authjs.dev/) – Authentication 
- [Resend](https://resend.com) - Email Sending
- [AWS S3](https://aws.amazon.com/s3/) - Object Storage (any other solution that is compatible with the S3 API should also work, e.g. [Cloudflare R2](https://www.cloudflare.com/developer-platform/products/r2/) or [Vercel Blob](https://vercel.com/docs/vercel-blob))

## Getting Started

### Prerequisites

Here's what you need to run FishBowl:

* Node.js (version >= 20.0.0)
* PostgreSQL Database
* Public Storage Bucket (AWS S3 / Cloudflare R2 / Vercel Blob / Other S3-Compatible Storage)
* Resend Project

### Clone the repository

```bash
git clone https://github.com/noahmcgill/fishbowl.git
```

### Install dependencies

```bash
npm install
```

### Provide the environment variables

Copy the sample environment variable file to `.env` and add the values specific to your project:

```bash
cp .env.example .env
```

### Add remote pattern for storage URL to `next.config.js`

In order to load external images from your object storage bucket or CDN, you'll need to add the host and configuration options as a `remotePattern` in `next.config.js`. For example:

```javascript
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-c16693714c434e46b8963619a75e3cd2.r2.dev",
        port: "",
      },
    ],
  },
};
```

Read more about remote patterns in Next.js [here](https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns).

### Start your database

However you choose to do so! I use the PostgreSQL desktop app when developing locally.

### Generate the Prisma client

```bash
npm run db:generate
```

### Run the dev server

```bash
npm run dev
```

## Development Roadmap

This project is currently in active development. Please check back later!

### V0
* Page Builder
* Widget Webhooks

### V1
* Widget Verification via OAuth
