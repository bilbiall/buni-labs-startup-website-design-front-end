"use client"
import Link from "next/link"

type Service = {
  title: string
  description: string
  features: string[]
  image: string
  link: string
}

const services: Service[] = [
  {
    title: "Website Marketplace",
    description:
      "Build and launch your online store with our affordable, easy-to-use marketplace platform. Perfect for small to medium businesses.",
    features: ["Drag-and-drop builder", "Payment integration", "Mobile responsive"],
    image: "/modern-ecommerce-interface.png",
    link: "#",
  },
  {
    title: "SaaS Platform",
    description:
      "Manage inventory, track sales, and optimize operations with our comprehensive POS and inventory management system.",
    features: ["Real-time analytics", "Multi-location support", "Cloud-based"],
    image: "/modern-ecommerce-interface.png",
    link: "https://www.google.com",
  },
  {
    title: "AI Assistant",
    description:
      "Integrate intelligent AI assistants to automate customer support, boost engagement, and improve satisfaction.",
    features: ["24/7 availability", "Natural language processing", "Easy integration"],
    image: "/modern-ecommerce-interface.png",
    link: "https://www.google.com",
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
          {services.map((service, i) => (
            <div
              key={service.title + i}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-accent/50 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image section with hover effect */}
              <div className="relative overflow-hidden h-64 bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              {/* Content section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>

                {/* Features list */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="mr-3 text-accent">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More button/link */}
                <div>
                  {service.link === "#" ? (
                    <button
                      type="button"
                      className="text-accent font-medium hover:gap-2 transition-all duration-300 inline-flex items-center gap-1"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More →
                    </button>
                  ) : (
                    <Link
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-medium hover:gap-2 transition-all duration-300 inline-flex items-center gap-1"
                      aria-label={`Visit ${service.title}`}
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
