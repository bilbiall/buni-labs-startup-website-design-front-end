import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BuniLabs - Digital Solutions & Web Development Services | Modern Business Technology",
  description:
    "BuniLabs delivers affordable digital solutions including custom websites, SaaS platforms for inventory & POS management, and AI assistant integrations for modern businesses. Transform your operations today.",
  keywords: [
    "digital solutions",
    "website development",
    "custom website builder",
    "SaaS platform",
    "POS system",
    "inventory management",
    "AI assistant",
    "business technology",
    "marketplace platform",
    "web development",
    "e-commerce solutions",
    "business automation",
  ],
  generator: "v0.app",
  metadataBase: new URL("https://bunilabs.com"),
  alternates: {
    canonical: "https://bunilabs.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bunilabs.com",
    siteName: "BuniLabs",
    title: "BuniLabs - Digital Solutions for Modern Business",
    description:
      "Affordable website marketplaces, SaaS platforms for inventory and POS, and AI assistant integrations designed to transform your business.",
    images: [
      {
        url: "https://bunilabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BuniLabs - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BuniLabs - Digital Solutions for Modern Business",
    description: "Transform your business with affordable digital solutions, SaaS platforms, and AI integrations.",
    images: ["https://bunilabs.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: "#f97316",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BuniLabs",
              url: "https://bunilabs.com",
              logo: "https://bunilabs.com/logo.png",
              description:
                "Digital solutions company offering website marketplaces, SaaS platforms, and AI assistant integrations",
              sameAs: [
                "https://twitter.com/bunilabs",
                "https://linkedin.com/company/bunilabs",
                "https://facebook.com/bunilabs",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "hello@bunilabs.com",
                availableLanguage: ["en"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BuniLabs",
              image: "https://bunilabs.com/logo.png",
              description: "Digital solutions for modern businesses",
              url: "https://bunilabs.com",
              telephone: "+254-XXX-XXX-XXX",
              email: "hello@bunilabs.com",
              areaServed: "KE",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
