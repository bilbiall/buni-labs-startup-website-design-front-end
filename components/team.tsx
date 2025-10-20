"use client"

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", image: "/professional-woman-headshot.png" },
  { name: "Michael Chen", role: "CTO", image: "/professional-man-headshot.png" },
  { name: "Emma Rodriguez", role: "Head of Design", image: "/professional-headshot-woman-designer.png" },
  { name: "David Kim", role: "Lead Developer", image: "/professional-developer-headshot.png" },
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Meet Our <span className="text-accent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to delivering exceptional digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group text-center fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative mb-6 overflow-hidden rounded-2xl border border-border bg-muted h-64">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
