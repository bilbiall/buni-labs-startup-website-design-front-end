"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center fade-in-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
          Digital Solutions for <span className="text-accent">Modern Business</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Empower your business with affordable marketplaces, intelligent SaaS platforms, and AI-driven solutions
          designed for growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Start Your Journey <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="px-8 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors duration-300"
          >
            Learn More
          </button>
        </div>

        <div className="mt-16 fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border border-border aspect-video flex items-center justify-center">
            <img
              src="/modern-business-dashboard-with-charts-and-analytic.jpg"
              alt="BuniLabs Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
