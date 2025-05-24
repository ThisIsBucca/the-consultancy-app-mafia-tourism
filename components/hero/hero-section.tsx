import Link from "next/link"
import  WhatsAppFloat  from "../ui/WhatsAppFloat"

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fillRule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fillOpacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-20">
        {/* Gallery Label */}
        <div className="mb-8">
          <span className="text-primary font-medium text-lg tracking-wide uppercase">WELCOME</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-gray-900 mb-8 leading-tight">
          Experience Mafia Island
        </h1>

        {/* Accent Divider */}
        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-inter">
          Discover Tanzania's hidden paradise with pristine coral reefs, whale sharks, and authentic cultural experiences in the Indian Ocean
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/tours"
            className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Explore Tours
          </Link>
          <Link
            href="/contact"
            className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat/>
    </div>
  )
}

// Default export as well for flexibility
export default HeroSection
