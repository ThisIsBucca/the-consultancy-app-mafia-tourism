
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConservationPage() {
  return (
    <div className="min-h-screen bg-background">


      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">🌱 Conservation</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Protecting Mafia Island's Marine Ecosystem</CardTitle>
              <CardDescription>Our commitment to sustainable tourism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">
                We are deeply committed to protecting the unique marine ecosystem of Mafia Island. Our conservation
                efforts focus on preserving whale shark populations, coral reefs, and the delicate balance of marine
                life that makes this area so special.
              </p>

              <div className="pt-4">
                <h3 className="font-semibold mb-2">Our Conservation Initiatives:</h3>
                <ul className="space-y-2 ml-4">
                  <li>• Whale shark monitoring and research programs</li>
                  <li>• Coral reef restoration projects</li>
                  <li>• Marine park support and maintenance</li>
                  <li>• Sustainable tourism practices</li>
                  <li>• Environmental education for visitors and locals</li>
                  <li>• Beach and ocean cleanup activities</li>
                </ul>
              </div>

              <p className="leading-relaxed pt-4">
                A portion of every booking goes directly to supporting these conservation efforts, ensuring that future
                generations can enjoy the pristine beauty of Mafia Island.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
