# Orienco Inc. - Premium Luxury Services & Logistics

Orienco Inc. is a state-of-the-art web application designed for a modern service group that simplifies access to premium rentals and lifestyle solutions. From exotic car rentals and luxury apartments to high-end event management and worldwide logistics, Orienco provides a unified, trusted platform focused on quality, reliability, and seamless experiences.

## ✨ Key Features

- **Premium Design Aesthetics**: A high-end visual experience featuring vibrant colors, sleek dark modes, glassmorphism, and a focus on "WOW" factor.
- **Dynamic Animations**: Advanced scroll-triggered animations and typewriter reveal effects powered by Framer Motion.
- **SEO Optimized**: Built-in SEO best practices including dynamic metadata API, automated sitemaps, and optimized robots.ts configuration.
- **Responsive Layout**: Fully responsive architecture optimized for mobile, tablet, and desktop viewing.
- **Custom Iconography**: Integrated custom SVG brand icons (Facebook, Twitter, LinkedIn, etc.) tailored specifically for the brand's premium aesthetic.
- **Modern Form Handling**: Robust form validation and management using React Hook Form and Zod.

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) (Extended with custom SVG brand components)
- **Validation**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3010](http://localhost:3010) in your browser.

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Pages, Layouts, SEO Metadata)
├── components/     # UI Components (Shared elements, Layouts, Page-specific UI)
├── constants/      # Configuration and Static Data (siteConfig, navigation, brand data)
├── lib/            # Shared Utilities (metadata generators, tailwind merger)
└── types/          # TypeScript interface and type definitions
```

## 🌐 SEO & Performance

The project implements automated SEO best practices:
- **Metadata API**: Dynamic titles and descriptions per page.
- **Open Graph**: Automatic OG image and social card generation.
- **Sitemap**: Automatically generated sitemap at `/sitemap.xml`.
- **Robots**: Configured via `robots.ts` for optimal search engine crawling.

## 📄 License

© 2026 Orienco Inc. All Rights Reserved.
