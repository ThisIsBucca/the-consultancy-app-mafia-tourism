export default function FeaturedVideo() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary/60 mb-3 font-montserrat">
            Featured Videos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-montserrat leading-tight">
            See Mafia Island
            <span className="text-primary"> in Action</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Watch the beauty of Mafia Island through our featured videos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.youtube.com/embed/FDGLZRbyIhY?feature=oembed"
              title="Mafia Island from above"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.youtube.com/embed/knuJ3zVx69g?feature=oembed"
              title="A Day in Mafia Island"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
