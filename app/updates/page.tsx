import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"

// Define the update interface directly in this file to avoid import issues
interface Update {
  id: number
  title: string
  date: string
  description: string
  features: string[]
  mainImage: string
}

// Define the updates data directly in this file
const updatesData: Update[] = [
  {
    id: 1,
    title: "Spartan Weekly Oracle",
    date: "First Moon of Autumn, 480 BC",
    description:
      "Gia Spartans, today we will be recapping everything that has happened over Sparta in the past few weeks: new divisional COs, changes within Spartan families, and updates to the Agoge.",
    features: [
      "Agoge restructured to 1 week duration",
      "New Skiritai division established",
      "Spartan Families activity increase",
      "Skyllan Bloodline promotions and customs",
    ],
    mainImage: "/placeholder.svg?height=600&width=1200",
  },
]

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />

      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6 mt-10">Spartan Updates</h1>
        <p className="text-xl text-stone-300 mb-12 max-w-3xl">
          Stay informed about the latest developments, promotions, and events in the world of Sparta.
        </p>

        <div className="space-y-16">
          {updatesData.map((item) => (
            <div
              key={item.id}
              className="border border-amber-800/50 rounded-lg overflow-hidden bg-gradient-to-b from-amber-900/10 to-stone-950 hover:from-amber-900/20 transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 relative h-60 md:h-full">
                  <Image src={item.mainImage || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 to-transparent md:bg-gradient-to-l md:from-transparent md:to-stone-950/70"></div>
                </div>

                <div className="p-6 md:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-amber-400">{item.title}</h2>
                      <span className="text-stone-400 italic mt-2 md:mt-0">{item.date}</span>
                    </div>

                    <p className="text-stone-300 mb-6">{item.description}</p>

                    <h3 className="text-xl font-semibold text-amber-400 mb-3">Key Updates:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5 mb-8">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="text-stone-300 flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/updates/${item.id}`} className="self-start group">
                    <button className="mt-2 bg-amber-900 hover:bg-amber-800 text-amber-100 px-6 py-3 rounded border border-amber-400/30 transition-colors flex items-center">
                      Read Full Oracle
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
