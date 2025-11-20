import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Navbar } from "../components/layout/navbar"
import { Footer } from "../components/layout/footer"

// Fonts
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
  metadataBase: new URL("https://mafiaislandauthentic.com"), // ✅ REQUIRED

  title: "Mafia Island Authentic - Discover Tanzania's Hidden Paradise",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  description:
    "Experience whale sharks, pristine coral reefs, and authentic culture on Mafia Island, Tanzania. Book your adventure today!",

  keywords:
    "Mafia Island, mafiaislandauthentic, how to get mafia, afro whaleshark, butiama, utende, kinasi, meremeta, bweni, kilindoni, afro, mafia island authentic, kisiwa cha mafia, kisiwani, papa potwe, potwe, chole, mafia island, Tanzania, Tanzani mafia, mafia, whale sharks, diving, snorkeling, tours, travel, mafia island tours, authentic experiences, cultural tours mafia, marine life, eco-tourism, safari, beach holidays, mafia island activities, mafia safari, island tours, ocean adventures",

  openGraph: {
    title: "Mafia Island Authentic - Discover Tanzania's Hidden Paradise",
    description:
      "Experience whale sharks, pristine coral reefs, and authentic culture on Mafia Island, Tanzania.",
    url: "https://mafiaislandauthentic.com",
    siteName: "Mafia Island Authentic",
    type: "website",
    images: [
      { url: "/lagoon2.jpg" },
      { url: "/coconutBear.jpg" },
      { url: "/beach2.jpg" },
      { url: "/bat1.jpg" },
      { url: "/village1.jpg" },
      { url: "/Chinanda.jpg" },
      { url: "/bucca.jpeg" },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mafia Island Authentic - Discover Tanzania's Hidden Paradise",
    description:
      "Experience whale sharks, pristine coral reefs, and authentic culture on Mafia Island, Tanzania.",
    images: ["/icon.png"], // Twitter uses ONE main image
    creator: "@buccaprezdz33", // optional – remove if you don’t have this
  },

  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}
    >
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
