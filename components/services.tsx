"use client"

import React from "react"
import { ShoppingCart, Zap, Brain } from "lucide-react"
import Link from "next/link"

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  features: string[]
  link: string
}

const services: Service[] = [
  {
    icon: ShoppingCart,
    title: "Website Marketplace",
    description:
      "Build and launch your online store with our affordable, easy-to-use marketplace platform. Perfect for small to medium businesses.",
    features: ["Drag-and-drop builder", "Payment integration", "Mobile responsive"],
    link: "#",
  },
  {
    icon: Zap,
    title: "SaaS Platform",
    description:
      "Manage inventory, track sales, and optimize operations with our comprehensive POS and inventory management system.",
    features: ["Real-time analytics", "Multi-location support", "Cloud-based"],
    link: "https://marketplace.riangaconstructions.co.ke",
  },
  {
    icon: Brain,
    title: "AI Assistant",
    description:
      "Integrate intelligent AI assistants to automate customer support, boost engagement, and improve satisfaction.",
    features: ["24/7 availability", "Natural language processing", "Easy integration"],
    link: "#",
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
            const isExternal = service.link.startsWith("http")
            return (
              <div
                key={service.title + i}
                className="group p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300 bg-card"
              >
                <div className="mb-6 inline-block p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="mr-3 text-accent">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  {service.link === "#" ? (
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:opacity-95"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn more
                    </button>
                  ) : (
                    <Link
                      href={service.link}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center px-4 py-2 rounded-md bg-accent text-white text-sm font-medium hover:opacity-95"
                      aria-label={`Visit ${service.title}`}
                    >
                      Visit
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
