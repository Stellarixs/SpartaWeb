import Link from "next/link"
import Navbar from "@/components/navbar"
import { Shield, Users, LandmarkIcon } from "lucide-react"
import Image from "next/image"

export default function FactionsPage() {
  const factions = [
    {
      id: "KPG",
      name: "KPG",
      description: "The King's Personal Guard is an elite division of guarding personnel tasking in keeping the King safe from all threats that may arise. ",
      imageSrc: "/images/factions/KPG.webp",
    },
    {
      id: "Thespians",
      name: "Thespians",
      description: "The Thespians are a light Spartan Infantry, made of strong and fast Spartans.",
      imageSrc: "/images/factions/Thespians.webp",
    },
    {
      id: "300",
      name: "300",
      description: "The 300 Spartans, mostly known for the Battle of Thermoplyae. The Greek force was led by King Leonidas I of Sparta.",
      imageSrc: "/images/factions/300.webp",
    },

    {
      id: "RG",
      name: "RG",
      description: "The Royal Guards are a paramilitary unit that are meant to protect and follow VIP's orders.",
      imageSrc: "/images/factions/RG.webp",
    }

  ]

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />

      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6 mt-10">Division of Sparta</h1>
        <p className="text-xl text-stone-300 mb-12 max-w-3xl">
          Choose your allegiance wisely. Each Divison offers unique advantages, specializations, and a distinct path to
          glory in the world of Sparta.
        </p>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {factions.map((faction) => (
            <Link key={faction.id} href={`/factions/${faction.id}`}>
              <div className="border border-amber-800/50 rounded-lg p-6 bg-gradient-to-b from-amber-900/30 to-stone-950 hover:border-amber-400/50 transition-all hover:shadow-[0_0_15px_rgba(217,119,6,0.3)] h-full flex flex-col items-center justify-center text-center cursor-pointer">
                <div className="mb-4">
                  <Image 
                    src={faction.imageSrc || "/placeholder.svg"} 
                    alt={faction.name}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-amber-400 mb-2">{faction.name}</h2>
                <span className="text-amber-400 text-sm mt-4">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
