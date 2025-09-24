"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Crown } from "lucide-react"; // <-- make sure lucide-react is installed

const bgImages = [
  "/beach1.jpg",
  "/kasa.jpg",
  "/coralreef1.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        {bgImages.map((url, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out rounded-3xl shadow-2xl border-4 border-white/20 ${
              idx === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${url})`,
              transition: "opacity 1s ease-in-out, transform 1s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* Modern carousel indicators */}
            {idx === current && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {bgImages.map((_, i) => (
                  <span
                    key={i}
                    className={`w-4 h-4 rounded-full border-2 border-primary transition-all duration-300 ${i === current ? "bg-primary" : "bg-white/60"}`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm z-10 transition-all duration-500" />

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 py-20">
        <div className="mb-6 flex justify-center">
          <Crown className="text-yellow-500 w-10 h-10 drop-shadow-md" />
        </div>

        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-[#1a3c2b] mb-6 leading-tight drop-shadow-lg tracking-wider">
          Mafia Island Adventures
        </h1>

        <div className="w-24 h-1 bg-accent mx-auto mb-6" />

        <div className="bg-gradient-to-br from-[#e6f7f1] via-white to-[#f7e6e6] bg-opacity-80 backdrop-blur-xl rounded-2xl p-8 max-w-3xl mx-auto shadow-xl mb-10 border-2 border-primary/10">
          <p className="text-2xl md:text-3xl text-primary leading-relaxed font-inter tracking-wide drop-shadow-sm">
            Mafia Island awaits — <span className="text-primary font-bold">dive into coral beauty</span>, <span className="text-accent font-bold">swim with whale sharks</span>, and <span className="text-[#e6b800] font-bold">feel the culture</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tours"
            className="bg-primary text-white px-10 py-4 rounded-full text-xl font-[IslandMoments,cursive] shadow-lg hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 border-2 border-primary/20"
          >
            Explore Tours
          </Link>
          <Link
            href="/contact"
            className="bg-white text-primary px-10 py-4 rounded-full text-xl font-[IslandMoments,cursive] shadow-lg border-2 border-primary/20 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
