import TourPageClient from "./TourPageClient";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TourPageClient slug={slug} />;
}
