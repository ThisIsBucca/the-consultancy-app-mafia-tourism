import type { Metadata } from "next"
import TourPageClient from "./TourPageClient";

export const metadata: Metadata = {
  title: "Tour Details | Mafia Island Authentic",
  description:
    "Explore this Mafia Island tour experience — whale sharks, coral reefs, cultural encounters, and more. Book your adventure today.",
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TourPageClient slug={slug} />;
}
