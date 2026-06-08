import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Budget Travel Guide to Mafia Island: Costs, Cheap Stays & Tips",
  description: "Complete budget guide for Mafia Island: daily costs from $30–50, guesthouses from $10/night, cheap local food, affordable tours, and money-saving tips for Tanzania's best-value island.",
}

export default function BudgetTravelPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image src="/village2.jpg" alt="Budget travel Mafia Island" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-3">Travel Guide</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair mb-4 leading-tight">
            Budget Travel Guide to Mafia Island
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            How to experience Mafia Island on $30–50 per day
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Mafia Island is one of the most affordable island destinations in Tanzania. With careful planning, you can experience pristine beaches, incredible marine life, and authentic Swahili culture for <strong>$30–50 per day</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Getting to Mafia Island on a Budget</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          The cheapest way to reach Mafia Island is by taking the Nyamisati ferry. At around $7 per person, the ferry costs a fraction of the $100–150 flight. The journey from Dar es Salaam involves a bus to Nyamisati followed by a 4–5 hour ferry crossing.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          <strong>Total transport cost from Dar es Salaam to Mafia Island:</strong> approximately $8–9 per person one way. For a family of four, taking the ferry saves over $500 round trip compared to flying.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Budget Accommodation</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Mafia Island has a growing number of affordable guesthouses and homestays, especially in Kilindoni. Unlike the expensive resorts in Utende ($100–300/night), budget options provide clean, basic lodging at a fraction of the price.
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-1 mb-6">
          <li><strong>Local homestays:</strong> From $8–15/night, often includes breakfast</li>
          <li><strong>Kilindoni guesthouses:</strong> Basic but clean rooms from $6–10/night</li>
          <li><strong>Utende budget options:</strong> From $15–25/night</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Daily Budget Breakdown</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-900">Item</th>
                <th className="text-left py-3 pl-4 font-semibold text-gray-900">Cost (USD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["Accommodation", "$8–15"],
                ["Breakfast", "$1–2"],
                ["Lunch", "$1–3"],
                ["Dinner", "$2–4"],
                ["Local transport", "$1–3"],
                ["Total per day", "$13–27"],
              ].map(([item, cost]) => (
                <tr key={item}>
                  <td className="py-3 pr-4 text-gray-600">{item}</td>
                  <td className="py-3 pl-4 font-medium text-gray-900">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">Money-Saving Tips</h2>
        <ol className="list-decimal pl-5 text-gray-600 space-y-2 mb-8">
          <li><strong>Travel in a group:</strong> Boat and car costs can be split. A private boat for four costs the same as for one.</li>
          <li><strong>Stay outside the marine park:</strong> Base yourself in Kilindoni and visit Utende and the marine park on day trips. This saves you several dollars per night in park fees.</li>
          <li><strong>Carry cash:</strong> There is one ATM on Mafia Island and it often runs out. Bring enough Tanzanian shillings for your entire stay.</li>
          <li><strong>Eat where locals eat:</strong> Local restaurants charge 3–5 times less than hotel restaurants for the same food.</li>
          <li><strong>Negotiate tour prices:</strong> Bargaining is expected. Start at 50–60% of the asking price and meet in the middle.</li>
          <li><strong>Visit in shoulder season:</strong> October–November and February–March offer great weather with fewer tourists and lower prices.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 font-playfair mb-4">5-Day Budget Itinerary</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Day 1:</strong> Travel Dar to Kilindoni via ferry. Check into guesthouse ($10). Dinner local restaurant ($2).<br />
          <strong>Day 2:</strong> Explore Kilindoni market and harbor (free). Afternoon beach walk ($0). Dinner fresh fish ($2).<br />
          <strong>Day 3:</strong> Blue Lagoon sandbank tour ($20). Evening local restaurant ($2).<br />
          <strong>Day 4:</strong> Chole Island day trip ($10 shared boat). Packed lunch included.<br />
          <strong>Day 5:</strong> Morning snorkeling Utende ($12). Ferry back to mainland ($7).<br />
          <strong>Estimated total for 5 days:</strong> ~$105–140 excluding transport to Dar es Salaam.
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-primary font-medium hover:underline">&larr; Back to Blog</Link>
          <Link href="/contact" className="text-sm bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Plan Your Trip
          </Link>
        </div>
      </article>
    </div>
  )
}
