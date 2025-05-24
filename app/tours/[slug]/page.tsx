import TourPageClient from "./TourPageClient";

export default function Page({ params }: { params: { slug: string } }) {
  return <TourPageClient slug={params.slug} />;
}
