"use client"

import Link from "next/link"

// Services data now includes `features` and `image`
const services = [
  {
    title: "Website Marketplace",
    description:
      "Build and launch your online store with our affordable, easy-to-use marketplace platform. Perfect for small to medium businesses.",
    features: ["Drag-and-drop builder", "Payment integration", "Mobile responsive"],
    image: "/marketplace-dashboard.png",
    link: "#",
  },
  {
    title: "SaaS Platform",
    description:
      "Manage inventory, track sales, and optimize operations with our comprehensive POS and inventory management system.",
    features: ["Real-time analytics", "Multi-location support", "Cloud-based"],
    image: "/inventory-dashboard.png",
    link: "https://marketplace.riangaconstructions.co.ke",
  },
  {
    title: "AI Assistant",
    description:
      "Integrate intelligent AI assistants to automate customer support, boost engagement, and improve satisfaction.",
    features: ["24/7 availability", "Natural language processing", "Easy integration"],
    image: "/ai-chatbot-interface.png",
    link: "#",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our tailored digital solutions crafted to drive your business growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* IMAGE (square) */}
              <div className="relative overflow-hidden aspect-square bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  // start slightly scaled down for a framed look, zoom on hover
                  className="w-full h-full object-cover scale-95 group-hover:scale-100 transition-transform duration-500 ease-out"
                />
                {/* optional subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* BODY */}
              <div className="p-6">
                {/* Title & description */}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* FEATURES */}
                {/* Use a compact list to preserve the card look — remove bullets with custom dot */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      {/* small accent dot */}
                      <span className="mt-1 inline-block w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-muted-foreground leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={service.link}
                  target={service.link.startsWith("http") ? "_blank" : "_self"}
                  rel={service.link.startsWith("http") ? "noopener noreferrer" : ""}
                  className="text-accent font-medium hover:gap-2 transition-all duration-300 inline-flex items-center gap-1"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

