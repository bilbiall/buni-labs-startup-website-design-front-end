"use client"

import { ShoppingCart, Zap, Brain } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: ShoppingCart,
    title: "Website Marketplace",
    description:
      "Build and launch your online store with our affordable, easy-to-use marketplace platform. Perfect for small to medium businesses.",
    features: ["Drag-and-drop builder", "Payment integration", "Mobile responsive"],
    link: "#", // Add your marketplace link here
  },
  {
    icon: Zap,
    title: "SaaS Platform",
    description:
      "Manage inventory, track sales, and optimize operations with our comprehensive POS and inventory management system.",
    features: ["Real-time analytics", "Multi-location support", "Cloud-based"],
    link: "https://marketplace.riangaconstructions.co.ke", // Added link to SaaS platform
  },
  {
    icon: Brain,
    title: "AI Assistant",
    description:
      "Integrate intelligent AI assistants to automate customer support, boost engagement, and improve satisfaction.",
    features: ["24/7 availability", "Natural language processing", "Easy integration"],
    link: "#", // Add your AI assistant link here
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-6 inline-block p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  target={service.link.startsWith("http") ? "_blank" : "_self"}
                  rel={service.link.startsWith("http") ? "noopener noreferrer" : ""}
                  className="text-accent font-medium hover:gap-2 transition-all duration-300 inline-flex items-center gap-1"
                >
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
