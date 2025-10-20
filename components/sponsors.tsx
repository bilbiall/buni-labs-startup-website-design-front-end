"use client"

export default function Sponsors() {
  const sponsors = [
    { name: "AWS", logo: "☁️" },
    { name: "Safaricom", logo: "📱" },
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "💻" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-12 text-sm uppercase tracking-wide">
          Trusted by leading companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {sponsors.map((sponsor, i) => (
            <div key={i} className="flex items-center gap-3 fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="text-4xl">{sponsor.logo}</span>
              <span className="font-semibold text-muted-foreground">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
