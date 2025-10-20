"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your <span className="text-accent">Business?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team to discuss how BuniLabs can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Mail, label: "Email", value: "hello@bunilabs.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Location", value: "San Francisco, CA" },
          ].map((contact, i) => {
            const Icon = contact.icon
            return (
              <div key={i} className="text-center fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="inline-block p-3 rounded-lg bg-accent/10 mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{contact.label}</h3>
                <p className="text-muted-foreground">{contact.value}</p>
              </div>
            )
          })}
        </div>

        <form className="bg-card border border-border rounded-2xl p-8 fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 mb-6"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
