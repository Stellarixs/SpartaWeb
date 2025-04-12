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
    title: "Major Update: Battle of Actium",
    date: "XV Kalendas Sextilis MMDCCLXXVI",
    description:
      "Experience the naval battle that changed the course of Roman history. New ships, naval combat mechanics, and historical characters have been added.",
    features: [
      "New naval combat system",
      "Historical characters: Octavian, Mark Antony, and Cleopatra",
      "10 new ship types with unique abilities",
      "New campaign missions focused on the battle",
    ],
    mainImage: "/placeholder.svg?height=600&width=1200",
  },
]

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6 mt-10">Game Updates</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl">
          Stay informed about the latest updates, expansions, and events in the world of PJC.
        </p>

        <div className="space-y-16">
          {updatesData.map((item) => (
            <div
              key={item.id}
              className="border border-red-900/50 rounded-lg overflow-hidden bg-gradient-to-b from-red-900/10 to-black hover:from-red-900/20 transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 relative h-60 md:h-full">
                  <Image src={item.mainImage || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-l md:from-transparent md:to-black/70"></div>
                </div>

                <div className="p-6 md:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gold">{item.title}</h2>
                      <span className="text-gray-400 italic mt-2 md:mt-0">{item.date}</span>
                    </div>

                    <p className="text-gray-300 mb-6">{item.description}</p>

                    <h3 className="text-xl font-semibold text-gold mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5 mb-8">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-gold mr-2">•</span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/updates/${item.id}`} className="self-start group">
                    <button className="mt-2 bg-red-900 hover:bg-red-800 text-gold px-6 py-3 rounded border border-gold/30 transition-colors flex items-center">
                      Read Full Update Notes
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
