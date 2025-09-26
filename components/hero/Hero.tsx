"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Crown } from "lucide-react"; // <-- make sure lucide-react is installed


export default function Hero() {
  return (
    <div className="relative h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Autoplay Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/whaledeymove.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Animated Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(115deg, rgba(0,212,255,0.18) 0%, rgba(255,255,255,0.12) 50%, rgba(255,180,80,0.18) 100%)",
          animation: "gradientMove 8s ease-in-out infinite alternate"
        }}
      />
      <style>{`
        @keyframes gradientMove {
          0% { filter: blur(0px) opacity(1); }
          50% { filter: blur(8px) opacity(0.9); }
          100% { filter: blur(0px) opacity(1); }
        }
      `}</style>

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-sm z-20 transition-all duration-500" />

      {/* Hero Content */}
      <div className="relative z-30 text-center max-w-5xl mx-auto px-4 py-20">
        <div className="mb-6 flex justify-center">
          <Crown className="text-yellow-500 w-10 h-10 drop-shadow-md" />
        </div>

        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-[#1a3c2b] mb-6 leading-tight drop-shadow-lg tracking-wider animate-fadein">
          Mafia Island Authentic
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
            className="bg-primary text-white px-10 py-4 rounded-full text-xl font-inter shadow-lg hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300 border-2 border-primary/20"
          >
            Explore Tours
          </Link>
          <Link
            href="/contact"
            className="bg-white text-primary px-10 py-4 rounded-full text-xl font-inter shadow-lg border-2 border-primary/20 hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
