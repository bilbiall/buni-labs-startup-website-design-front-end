"use client"

type projects = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  features: string[]
  link: string
}

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A complete marketplace for websites",
    features: ["Drag-and-drop builder", "Payment integration", "Mobile responsive"],

    image: "/modern-ecommerce-interface.png",
  },
  {
    title: "Inventory Management",
    description: "Real-time stock tracking and analytics",

    image: "/inventory-dashboard.png",
  },
  {
    title: "AI Customer Support",
    description: "Intelligent chatbot for 24/7 support",
    features: ["24/7 availability", "Natural language processing", "Easy integration"],

    image: "/ai-chatbot-interface.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our solutions are transforming businesses across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-accent/50 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64 bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a
                  href="https://marketplace.riangaconstructions.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:gap-2 transition-all duration-300 inline-flex items-center gap-1"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
