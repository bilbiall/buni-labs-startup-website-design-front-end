"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl">
            <span className="text-accent">Buni</span>Labs
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm hover:text-accent transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm hover:text-accent transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm hover:text-accent transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm hover:text-accent transition-colors duration-300"
            >
              Team
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-block px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in-down">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors duration-300"
            >
              Services
            </button>
            
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors duration-300"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full px-4 py-2 bg-accent text-accent-foreground rounded-lg transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
