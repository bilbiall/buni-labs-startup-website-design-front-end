"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: "url(/modern-business-dashboard-with-charts-and-analytic.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/85 -z-10"></div>

      <div className="max-w-3xl mx-auto text-center fade-in-up relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-balance text-white">
          Digital Solutions for <span className="text-accent">Modern Business</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto text-balance">
          Empower your business with affordable marketplaces, intelligent SaaS platforms, and AI-driven solutions
          designed for growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-accent-foreground rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            Start Your Journey <ArrowRight size={18} className="hidden sm:inline" />
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
