import Image from "next/image"

interface PageCoverProps {
  src: string
  alt: string
  label: string
  title: string
  subtitle?: string
}

export default function PageCover({ src, alt, label, title, subtitle }: PageCoverProps) {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">
          {label}
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-playfair mb-4 leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
