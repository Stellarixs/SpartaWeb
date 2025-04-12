import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"

// Define the interfaces directly in this file
interface UpdateFeature {
  title: string
  description: string
  icon?: string
}

interface UpdateSection {
  title: string
  content: string
  image?: string
  features?: UpdateFeature[]
  alignment?: "left" | "right"
}

interface Update {
  id: number
  title: string
  date: string
  description: string
  features: string[]
  sections: UpdateSection[]
  mainImage: string
  heroOverlay?: boolean
  quote?: {
    text: string
    author: string
    role: string
    image?: string
  }
  ctaText?: string
  ctaLink?: string
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
    heroOverlay: true,
    quote: {
      text: "The Battle of Actium was a decisive engagement that shaped the future of Rome. We've recreated this pivotal moment with painstaking historical accuracy.",
      author: "Marcus Aurelius",
      role: "Lead Historical Consultant",
      image: "/placeholder.svg?height=100&width=100",
    },
    sections: [
      {
        title: "Naval Combat Overhaul",
        content:
          "Our new naval combat system brings unprecedented realism to ancient naval warfare. Command your fleet with precision, using tactics employed by the greatest admirals of the ancient world. Position your ships to take advantage of wind and currents, execute ramming maneuvers, and board enemy vessels to capture them. The Battle of Actium marked the final confrontation between Octavian and Mark Antony, and now you can rewrite history or ensure its course remains unchanged.",
        image: "/placeholder.svg?height=400&width=600",
        alignment: "right",
        features: [
          {
            title: "Advanced Ship Controls",
            description: "Direct control over ship movement, formation, and combat tactics",
            icon: "Anchor",
          },
          {
            title: "Weather Effects",
            description: "Dynamic weather system affecting naval combat with wind, waves, and visibility factors",
            icon: "Cloud",
          },
          {
            title: "Crew Management",
            description: "Assign roles to your crew, from rowers to marines, each affecting ship performance",
            icon: "Users",
          },
        ],
      },
      {
        title: "Historical Characters",
        content:
          "Step into the sandals of history's most influential figures. Lead Octavian's forces to victory, or change the course of history as Mark Antony and Cleopatra. Each character comes with unique abilities, storylines, and challenges that reflect their historical counterparts. Interact with a cast of historically accurate supporting characters, from loyal centurions to scheming senators.",
        image: "/placeholder.svg?height=400&width=600",
        alignment: "left",
        features: [
          {
            title: "Character Progression",
            description: "Develop your historical character with unique skill trees and abilities",
            icon: "Trophy",
          },
          {
            title: "Historical Decisions",
            description: "Face the same dilemmas as your historical counterpart with branching storylines",
            icon: "GitBranch",
          },
          {
            title: "Companion System",
            description: "Recruit historical figures as companions, each with their own storylines and abilities",
            icon: "Users",
          },
        ],
      },
      {
        title: "New Ship Types",
        content:
          "Command a diverse fleet with 10 new historically accurate ship types, each with unique strengths and weaknesses. From the agile Liburnian to the massive Deceres, your strategic choices in fleet composition will determine your success in naval engagements. Research and unlock ship upgrades through the new naval technology tree, allowing you to customize your fleet to match your preferred tactics.",
        image: "/placeholder.svg?height=400&width=600",
        alignment: "right",
      },
    ],
    ctaText: "Download Now",
    ctaLink: "/download",
  }

]

// Helper function to get update by ID
function getUpdateById(id: number): Update | undefined {
  return updatesData.find((update) => update.id === id)
}

// Helper function to get the icon component
const getIconComponent = (iconName?: string) => {
  if (!iconName) return null

  try {
    // Import icons directly
    const LucideIcons = require("lucide-react")
    const IconComponent = LucideIcons[iconName]

    if (IconComponent) {
      return <IconComponent className="h-5 w-5 text-gold" />
    }
  } catch (error) {
    console.error("Icon not found:", iconName)
  }

  return null
}

export default function UpdateDetailPage({ params }: { params: { id: string } }) {
  const updateId = Number.parseInt(params.id)
  const update = getUpdateById(updateId)

  if (!update) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image src={update.mainImage || "/placeholder.svg"} alt={update.title} fill className="object-cover" priority />
        {update.heroOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        )}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 max-w-7xl mx-auto">
          <Link
            href="/updates"
            className="inline-flex items-center text-gold hover:text-gold/80 mb-6 transition-colors self-start"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Updates
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4 drop-shadow-lg">{update.title}</h1>
          <p className="text-gray-300 italic mb-6">{update.date}</p>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-8 drop-shadow-md">
            {update.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quote Section */}
        {update.quote && (
          <div className="my-16 bg-gradient-to-r from-red-900/20 to-black p-8 rounded-lg border border-red-900/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {update.quote.image && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold">
                  <Image
                    src={update.quote.image || "/placeholder.svg"}
                    alt={update.quote.author}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-xl md:text-2xl italic text-gray-200 mb-4">"{update.quote.text}"</p>
                <div>
                  <p className="font-semibold text-gold">{update.quote.author}</p>
                  <p className="text-gray-400 text-sm">{update.quote.role}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-24 my-16">
          {update.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="scroll-m-20" id={`section-${sectionIndex}`}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  section.alignment === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-6 ${section.alignment === "left" ? "md:order-2" : ""}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gold">{section.title}</h2>
                  <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>

                  {section.features && section.features.length > 0 && (
                    <div className="mt-8 space-y-4">
                      {section.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="border border-red-900/30 rounded-lg p-5 bg-gradient-to-r from-red-900/10 to-black hover:from-red-900/20 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            {feature.icon && <div className="mt-1">{getIconComponent(feature.icon)}</div>}
                            <div>
                              <h4 className="font-semibold text-gold text-lg mb-2">{feature.title}</h4>
                              <p className="text-gray-300">{feature.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {section.image && (
                  <div
                    className={`relative h-[400px] rounded-lg overflow-hidden ${
                      section.alignment === "left" ? "md:order-1" : ""
                    }`}
                  >
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="mt-20 pt-12 border-t border-red-900/30">
          <h3 className="text-3xl font-bold text-gold mb-8">Key Features:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {update.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="border border-red-900/50 rounded-lg p-6 bg-gradient-to-b from-red-900/20 to-black hover:from-red-900/30 transition-colors"
              >
                <p className="text-gray-200 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {update.ctaText && update.ctaLink && (
          <div className="mt-20 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gold mb-6">Ready to Experience It?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Join thousands of players already exploring the latest content and features.
            </p>
            <Link href={update.ctaLink}>
              <button className="bg-red-900 hover:bg-red-800 text-gold px-8 py-4 rounded-lg border border-gold/30 transition-colors text-lg font-semibold">
                {update.ctaText}
              </button>
            </Link>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-20 flex justify-center">
          <Link href="/updates">
            <button className="bg-red-900/50 hover:bg-red-800 text-gold px-6 py-3 rounded-lg border border-gold/30 transition-colors">
              Return to Updates
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
