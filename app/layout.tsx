import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Navbar } from "../components/layout/navbar"
import { Footer } from "../components/layout/footer"

// Optimize font loading with Next.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mafia Island Tours - Discover Tanzania's Hidden Paradise",
  description:
    "Experience whale sharks, pristine coral reefs, and authentic culture on Mafia Island, Tanzania. Book your adventure today!",
  keywords: "Mafia Island, Tanzania, whale sharks, diving, snorkeling, tours, travel",
  openGraph: {
    title: "Mafia Island Tours - Discover Tanzania's Hidden Paradise",
    description: "Experience whale sharks, pristine coral reefs, and authentic culture on Mafia Island, Tanzania.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
