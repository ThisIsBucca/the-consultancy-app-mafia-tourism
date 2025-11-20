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
      <div className="relative h-96 bg-primary">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl text-yellow-500 font-bold mb-4">
              About Mafia Island Authentic
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto px-4">
              Your gateway to authentic experiences in Tanzania's hidden
              paradise
            </p>
           
          </div>
           <Image
              className="absolute inset-0 w-full h-full object-cover z-0"
              src="/village1.jpg"
              alt="cute bat in mafia"
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 ">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded by local islanders who grew up on Mafia Island, our
              company was born from a deep love for this pristine paradise and a
              desire to share its wonders with the world. We started as
              fishermen and boat operators, but our passion for marine
              conservation and sustainable tourism led us to create authentic
              experiences that benefit both visitors and our community.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Today, we are proud to be one of the leading eco-tourism operators
              on Mafia Island, offering everything from whale shark encounters
              to cultural village tours. Our team consists entirely of local
              guides who bring intimate knowledge of the island's marine life,
              culture, and hidden gems.
            </p>
            <p className="text-lg text-gray-700">
              Every tour we offer is designed to create meaningful connections
              between our guests and the natural world, while ensuring that
              tourism contributes positively to marine conservation and
              community development.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src="/icon.png?height=400&width=600"
              alt="Local fishermen on Mafia Island"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to sustainable
              tourism, community empowerment, and marine conservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced local guides are the heart of our operation,
              bringing decades of knowledge about Mafia Island's marine life and
              culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                role: "Co.CEO & Diving instructor",
                imageUrl: "/Chinanda.jpg",
                experience: "4 years",
                specialty: "Coral reef diving",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`${member.imageUrl}?height=200&width=200`}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-1">
                  {member.experience} experience
                </p>
                <p className="text-gray-600 text-sm">
                  Specialty: {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/255776986840"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-110"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </div>
    </div>
  );
}
