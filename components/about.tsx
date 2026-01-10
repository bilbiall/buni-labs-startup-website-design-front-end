"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-label="About BuniLabs">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              About <span className="text-accent">BuniLabs</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              BuniLabs is a forward-thinking digital solutions company dedicated to empowering businesses of all sizes
              with affordable, scalable, and innovative technology. We provide comprehensive digital transformation
              services including website development, custom software solutions, and business automation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We specialize in three core offerings that transform how businesses operate:
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: "Affordable Website Marketplaces",
                  desc: "Create stunning online storefronts without breaking the bank. Our marketplace platform enables businesses to sell products and services online with ease.",
                },
                {
                  title: "SaaS Platform for Inventory & POS",
                  desc: "Streamline operations with our intelligent inventory and point-of-sale system. Manage stock, track sales, and optimize your business operations in real-time.",
                },
                {
                  title: "AI Assistant Integrations",
                  desc: "Enhance customer experience with cutting-edge AI-powered assistants. Automate customer service, lead generation, and business intelligence.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5 border border-border aspect-square flex items-center justify-center">
              <img
                src="/team-collaboration-and-business-growth.jpg"
                alt="BuniLabs team collaborating on digital solutions and business growth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
