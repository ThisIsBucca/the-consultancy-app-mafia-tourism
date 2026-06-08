import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/mafiaislandauthentic", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/mafiaislandauthentic", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/mafiaislandauthentic", label: "Twitter" },
]

const contactItems = [
  { icon: Phone, value: "+255 785 696 021" },
  { icon: Mail, value: "mafiaislandauthentic@gmail.com" },
  { icon: MapPin, value: "Kilindoni, Mafia Island, Tanzania" },
]

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/lagoon1.jpg)" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/75 to-gray-800/80" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-6">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden ring-1 ring-white/20">
              <Image
                src="/icon.png"
                alt="Mafia Island Authentic"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-montserrat font-bold text-lg leading-tight text-white">
                Mafia Island
              </p>
              <p className="text-[10px] tracking-widest uppercase text-white/50">
                Authentic
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            Discover Tanzania&apos;s hidden paradise with pristine coral reefs, whale sharks, 
            and authentic cultural experiences in the Indian Ocean.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            {contactItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary shrink-0" />
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 ring-1 ring-white/10 hover:ring-primary/50"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Mafia Island Authentic
          </p>
        </div>
      </div>
    </footer>
  )
}
