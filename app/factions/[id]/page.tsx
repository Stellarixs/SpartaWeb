import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import FactionTable from "@/components/faction-table"
import { ChevronLeft } from 'lucide-react'

interface PageProps {
  params: {
    id: string
  }
}

export default function FactionDetailPage({ params }: PageProps) {
  const factions = [
    {
      id: "KPG",
      name: "KPG",
      description:
        "The King's Personal Guard is an elite division of guarding personnel tasking in keeping the King safe from all threats that may arise. ",
      longDescription:
        "The King's Personal Guard is an elite division of guarding personnel tasking in keeping the King safe from all threats that may arise. Members of the guard go through arduous training day-by-day to ensure that they only show their best when protecting the King. The KPG is the most elite division of Sparta tasked with the most vital job. KPG consists of loyal, disciplined, and fierce fighters willing to give their life to the King.",
      imageSrc: "/images/factions/KPG.webp",
      showcaseImage: "/images/factions/KPG_SHOW.webp", // Add showcase image path
      divisions: [
        { name: "XXXXXX", specialization: "XXXXXX", strength: "XXXXXX" },
        { name: "XXXXXX", specialization: "XXXXXX", strength: "XXXXXX" },
      ],
    },

    {
      id: "Thespians",
      name: "Thespians",
      description:
        "The Thespians are a light Spartan Infantry, made of strong and fast Spartans.",
      longDescription:
        "The Thespians are a light Spartan Infantry, made of strong and fast Spartans. Thespians are the first line of defense/attack. They weaken the enemy when the main spartan force attacks through. They are also used as a flanking force. Thespians duty is to fight for king Leonidas and fight at the front lines of the army, and hold as long as possible. Their duty is to weaken the ennemie's army as much as possible.",
      imageSrc: "/images/factions/Thespians.webp",
      showcaseImage: "/images/factions/thespians-showcase.webp", // Add showcase image path
      divisions: [
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
      ],
    },

    {
      id: "300",
      name: "300",
      description:
        "The 300 Spartans, mostly known for the Battle of Thermoplyae. The Greek force was led by King Leonidas I of Sparta.",
      longDescription:
        "The 300 Spartans, mostly known for the Battle of Thermoplyae. The Greek force was led by King Leonidas I of Sparta. Leonidas took a small force of 300 Spartan warriors, known for their discipline and military prowess. The Greeks chose to defend the narrow pass at Thermopylae, where Xerxes' vast army would be forced to funnel through, neutralizing their numerical advantage.For two days, the Greeks held their ground against waves of Persian attacks, including the elite Persian Immortals, until they were cowardly betrayed.The delay at Thermopylae allowed the Greeks to regroup and eventually defeat the Persians at the decisive battles of Salamis (naval) and Plataea.The story of the 300 Spartans has been celebrated in history, literature, and popular culture as an example of selfless sacrifice for freedom.",
      imageSrc: "/images/factions/300.webp",
      showcaseImage: "/images/factions/300-showcase.webp", // Add showcase image path
      divisions: [
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
      ],
    },
    {
      id: "RG",
      name: "RG",
      description:
        "The Royal Guards are a paramilitary unit that are meant to protect and follow VIP's orders.",
      longDescription:
        "The Royal Guards are a paramilitary unit that are meant to protect and follow VIP's orders. The Royal Guards are the best at guarding (Other than KPG). Royal Guards have the Intelligence and maturity to respect and learn from hardships. Joining the Royal Guards is the best way to gain knowledge and skill while protecting VIPs. Royal Guards are a Fierce and Swift Division, RG's duty is to Guard Royal family members, Council members, and last but not least, the King himself.",
      imageSrc: "/images/factions/RG.webp",
      showcaseImage: "/images/factions/rg-showcase.webp", // Add showcase image path
      divisions: [
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
        { name: "XXXXXXXX", specialization: "XXXXXXXX", strength: "XXXXXXXX" },
      ],
    },
  ]

  const faction = factions.find((f) => f.id === params.id)

  if (!faction) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />

      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <Link
          href="/factions"
          className="inline-flex items-center text-amber-400 hover:underline mb-8 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Back to Factions
        </Link>

        <div className="border border-amber-800/50 rounded-lg p-8 bg-gradient-to-b from-amber-900/20 to-stone-950">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-6">
              <Image 
                src={faction.imageSrc || "/placeholder.svg"} 
                alt={faction.name}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">{faction.name}</h1>
            <p className="text-xl text-stone-300 max-w-3xl">{faction.description}</p>
          </div>

          {/* Add showcase image section */}
          <div className="mb-10 overflow-hidden rounded-lg border border-amber-800/30">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image 
                src={faction.showcaseImage || "/placeholder.svg?width=1200&height=400"} 
                alt={`${faction.name} warriors in formation`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6">
                <span className="inline-block bg-amber-900/80 text-amber-200 px-3 py-1 text-sm rounded-md backdrop-blur-sm">
                  {faction.name} Warriors
                </span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Overview</h2>
            <p className="text-stone-300 whitespace-pre-line">{faction.longDescription}</p>
          </div>

          {/* Add equipment and appearance section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Equipment & Appearance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-900/10 border border-amber-800/30 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-amber-300 mb-2">Armor</h3>
                <ul className="list-disc list-inside text-stone-300 space-y-1">
                  <li>Bronze breastplate with faction insignia</li>
                  <li>Reinforced leather greaves</li>
                  <li>Distinctive helmet with {faction.id === "KPG" ? "gold" : faction.id === "RG" ? "silver" : "bronze"} accents</li>
                  <li>Leather-bound arm guards</li>
                </ul>
              </div>
              <div className="bg-amber-900/10 border border-amber-800/30 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-amber-300 mb-2">Weapons</h3>
                <ul className="list-disc list-inside text-stone-300 space-y-1">
                  <li>Traditional Spartan spear (dory)</li>
                  <li>Short sword (xiphos) for close combat</li>
                  <li>{faction.id === "KPG" ? "Ceremonial daggers" : faction.id === "Thespians" ? "Javelins" : "Standard-issue daggers"}</li>
                  <li>Large bronze shield (aspis) with {faction.id} emblem</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-amber-400 mb-6">Ranks</h2>
            <FactionTable divisions={faction.divisions} />
          </div>
        </div>
      </div>
    </div>
  )
}