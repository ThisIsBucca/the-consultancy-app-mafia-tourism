import Image from "next/image"
import { Users, Heart, Leaf, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passionate Guides",
      description:
        "Our local guides are passionate about sharing the beauty and culture of Mafia Island with visitors from around the world.",
    },
    {
      icon: Leaf,
      title: "Sustainable Tourism",
      description:
        "We are committed to protecting the marine environment and supporting local communities through responsible tourism practices.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "We work directly with local communities to ensure that tourism benefits everyone and preserves traditional ways of life.",
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description:
        "With years of experience, our team knows the best spots, times, and conditions for unforgettable wildlife encounters.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mafia Island Tours</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-4">
              Your gateway to authentic experiences in Tanzania's hidden paradise
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded by local islanders who grew up on Mafia Island, our company was born from a deep love for this
              pristine paradise and a desire to share its wonders with the world. We started as fishermen and boat
              operators, but our passion for marine conservation and sustainable tourism led us to create authentic
              experiences that benefit both visitors and our community.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Today, we are proud to be one of the leading eco-tourism operators on Mafia Island, offering everything
              from whale shark encounters to cultural village tours. Our team consists entirely of local guides who
              bring intimate knowledge of the island's marine life, culture, and hidden gems.
            </p>
            <p className="text-lg text-gray-700">
              Every tour we offer is designed to create meaningful connections between our guests and the natural world,
              while ensuring that tourism contributes positively to marine conservation and community development.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Local fishermen on Mafia Island"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to sustainable tourism, community empowerment, and marine
              conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced local guides are the heart of our operation, bringing decades of knowledge about Mafia
              Island's marine life and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Hassan Mwalimu",
                role: "Lead Marine Guide",
                experience: "15 years",
                specialty: "Whale shark encounters",
              },
              {
                name: "Fatuma Juma",
                role: "Cultural Tour Guide",
                experience: "12 years",
                specialty: "Village tours & traditions",
              },
              {
                name: "Omar Salim",
                role: "Diving Instructor",
                experience: "10 years",
                specialty: "Coral reef diving",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=200&width=200" alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-1">{member.experience} experience</p>
                <p className="text-gray-600 text-sm">Specialty: {member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
