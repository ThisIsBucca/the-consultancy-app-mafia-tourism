"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const bgImages = [
  "https://images.pexels.com/photos/2739664/pexels-photo-2739664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
  "https://images.pexels.com/photos/30124670/pexels-photo-30124670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
  "https://images.pexels.com/photos/3120163/pexels-photo-3120163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Background Images Carousel */}
      {bgImages.map((url, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            idx === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${url})` }}
        ></div>
      ))}

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4 py-20">
        <div className="mb-6">
          <span className="text-white font-medium text-lg tracking-wide uppercase font-montserrat drop-shadow-md">
            Welcome to Paradise
          </span>
        </div>

        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-gray-900 mb-6 leading-tight drop-shadow-sm">
          Mafia Island Adventures
        </h1>

        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>

        <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto shadow-md mb-10">
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-inter">
            Discover Tanzania's hidden paradise with pristine coral reefs, whale sharks, and authentic cultural
            experiences in the Indian Ocean.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tours"
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Explore Tours
          </Link>
          <Link
            href="/contact"
            className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
