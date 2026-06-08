import { Waves, Users, Camera, Star } from "lucide-react"

const features = [
  {
    icon: Waves,
    title: "Marine Adventures",
    description: "Swim with whale sharks and explore pristine coral reefs in protected marine areas.",
  },
  {
    icon: Users,
    title: "Cultural Experiences",
    description: "Connect with local communities and experience authentic Tanzanian island culture.",
  },
  {
    icon: Camera,
    title: "Unforgettable Moments",
    description: "Create lasting memories with professional guides and stunning natural beauty.",
  },
  {
    icon: Star,
    title: "Expert Guides",
    description: "Learn from experienced local guides who know every secret of Mafia Island.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-montserrat leading-tight">
            Experience Mafia Island
            <span className="text-primary"> Authentically</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We offer sustainable tourism experiences that benefit local communities
            while providing you with unforgettable adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl p-6 sm:p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
