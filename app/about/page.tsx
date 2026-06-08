import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Mafia Island Authentic",
  description:
    "Learn about Mafia Island Authentic — our mission to share the beauty of Mafia Island through sustainable tourism, cultural respect, and unforgettable experiences.",
  openGraph: {
    title: "About Us | Mafia Island Authentic",
    description:
      "Learn about Mafia Island Authentic — our mission to share the beauty of Mafia Island through sustainable tourism.",
  },
}

const values = [
  {
    title: "Passionate Guides",
    description:
      "Our local guides are passionate about sharing the beauty and culture of Mafia Island with visitors from around the world.",
  },
  {
    title: "Sustainable Tourism",
    description:
      "We are committed to protecting the marine environment and supporting local communities through responsible tourism practices.",
  },
  {
    title: "Community Focus",
    description:
      "We work directly with local communities to ensure that tourism benefits everyone and preserves traditional ways of life.",
  },
  {
    title: "Expert Knowledge",
    description:
      "With years of experience, our team knows the best spots, times, and conditions for unforgettable wildlife encounters.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden pt-16 sm:pt-[72px]">
        <Image
          src="/village1.jpg"
          alt="Mafia Island landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
              Mafia Island Authentic
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Your gateway to authentic experiences in Tanzania&apos;s hidden paradise
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-6">
                Born from a Love for
                <span className="text-primary"> Mafia Island</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded by local islanders who grew up on Mafia Island, our company was born from a deep love for this pristine paradise and a desire to share its wonders with the world. We started as fishermen and boat operators, but our passion for marine conservation and sustainable tourism led us to create authentic experiences that benefit both visitors and our community.
                </p>
                <p>
                  Today, we are proud to be one of the leading eco-tourism operators on Mafia Island, offering everything from whale shark encounters to cultural village tours. Our team consists entirely of local guides who bring intimate knowledge of the island&apos;s marine life, culture, and hidden gems.
                </p>
                <p>
                  Every tour we offer is designed to create meaningful connections between our guests and the natural world, while ensuring that tourism contributes positively to marine conservation and community development.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/icon.png"
                alt="Local fishermen on Mafia Island"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-500">
              Everything we do is guided by our commitment to sustainable tourism, community empowerment, and marine conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-montserrat mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-playfair mb-4">
              Meet the Locals Behind the Experience
            </h2>
            <p className="text-gray-500">
              Our experienced local guides are the heart of our operation, bringing decades of knowledge about Mafia Island&apos;s marine life and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Bucca Rabbit",
                role: "Cultural Tour Guide",
                experience: "2 years",
                imageUrl: "/bucca.jpeg",
                specialty: "Village tours & traditions",
              },
              {
                name: "Chinanda Salumu",
                role: "Co-CEO & Diving Instructor",
                imageUrl: "/Chinanda.jpg",
                experience: "4 years",
                specialty: "Coral reef diving",
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 relative flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {member.experience} experience
                  </p>
                  <p className="text-xs text-gray-500">
                    Specialty: {member.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-4">
            Ready to Experience Mafia Island?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Join us for an authentic island adventure with local guides who know every secret of this paradise
          </p>
          <Link
            href="/tours"
            className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Browse Tours
          </Link>
        </div>
      </section>
    </>
  )
}
