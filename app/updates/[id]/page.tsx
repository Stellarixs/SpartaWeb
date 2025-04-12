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
    mainImage: "/images/updates/frontid1.png",
    heroOverlay: true,
    quote: {
      text: "If you enjoy this week's Oracle or have any suggestions, DM the Head Oracle: aretesx.",
      author: "aretesx",
      role: "Head Oracle",
      image: "/images/updates/quote_id1.jpg",
    },
    sections: [
      {
        title: "Agoge Restructuring",
        content:
          "The Agoge, which is a key part of a young Spartan helot's journey, has been restructured following a decision by King Leonidas. The duration has officially been shortened from 3 weeks to 1 week, while also allowing helots to join divisions without passing the Agoge. This new approach aims to boost Sparta's growing activity and make integration into divisions more accessible.",
        image: "/images/updates/id1_2.png",
        alignment: "right",
        features: [
          {
            title: "Shortened Duration",
            description: "Agoge training reduced from 3 weeks to 1 week",
            icon: "Clock",
          },
          {
            title: "Division Access",
            description: "Helots can now join divisions without completing the Agoge",
            icon: "Users",
          },
          {
            title: "Increased Activity",
            description: "Changes designed to boost participation and engagement",
            icon: "TrendingUp",
          },
        ],
      },
      {
        title: "Divisional Changes",
        content:
          "Among the divisions, a new one has emerged—Skiritai—giving Spartans an opportunity to fulfil new and specialized duties. Alongside this, King Leonidas has appointed new divisional overseers to help strengthen and grow their divisions.",
        image: "/images/updates/id1_3.png",
        alignment: "left",
        features: [
          {
            title: "New Skiritai Division",
            description: "Specialized unit with unique duties and responsibilities",
            icon: "Shield",
          },
          {
            title: "New Leadership",
            description: "King Leonidas has appointed new divisional overseers",
            icon: "Crown",
          },
          {
            title: "Growth Strategy",
            description: "Focus on strengthening and expanding all divisions",
            icon: "BarChart",
          },
        ],
      },
      {
        title: "Spartan Families",
        content:
          "Within the Spartan Families, significant developments have taken place. With the appointment of a new Families Manager, family activity has seen a noticeable rise, making it easier for Spartans to join and engage with the family of their choice. The Royal Atreus Family has also implemented a visual upgrade—Royal Capes are now granted to members above a certain rank, symbolizing their noble status and dominance among families.",
        image: "/images/updates/family_id1.png",
        alignment: "right",
      },
      {
        title: "Skyllan Bloodline",
        content:
          "Turning to the Skyllan Bloodline, recent changes are bringing prosperity and excitement. Following a promotional ceremony hosted by King Leonidas, all Spartans who attended were promoted, and a new Skyllan Council Member has taken their place among the leadership. Furthermore, new customs are rumored to be in development, offering Skyllans a wider variety of customization options than ever seen before in any bloodline.",
        image: "/images/updates/skyllan.png",
        alignment: "left",
      },
    ],
    ctaText: "Join Sparta",
    ctaLink: "https://www.roblox.com/groups/8202010/SPQR-Sparta#!/about",
  },
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
      return <IconComponent className="h-5 w-5 text-amber-400" />
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
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">
        <Image src={update.mainImage || "/placeholder.svg"} alt={update.title} fill className="object-cover" priority />
        {update.heroOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />
        )}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 max-w-7xl mx-auto">
          <Link
            href="/updates"
            className="inline-flex items-center text-amber-400 hover:text-amber-400/80 mb-6 transition-colors self-start"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Updates
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-4 drop-shadow-lg">{update.title}</h1>
          <p className="text-stone-300 italic mb-6">{update.date}</p>
          <p className="text-xl md:text-2xl text-stone-200 max-w-3xl leading-relaxed mb-8 drop-shadow-md">
            {update.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quote Section */}
        {update.quote && (
          <div className="my-16 bg-gradient-to-r from-amber-900/20 to-stone-950 p-8 rounded-lg border border-amber-800/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {update.quote.image && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-amber-400">
                  <Image
                    src={update.quote.image || "/placeholder.svg"}
                    alt={update.quote.author}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-xl md:text-2xl italic text-stone-200 mb-4">"{update.quote.text}"</p>
                <div>
                  <p className="font-semibold text-amber-400">{update.quote.author}</p>
                  <p className="text-stone-400 text-sm">{update.quote.role}</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-400">{section.title}</h2>
                  <p className="text-stone-300 leading-relaxed text-lg">{section.content}</p>

                  {section.features && section.features.length > 0 && (
                    <div className="mt-8 space-y-4">
                      {section.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="border border-amber-800/30 rounded-lg p-5 bg-gradient-to-r from-amber-900/10 to-stone-950 hover:from-amber-900/20 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            {feature.icon && <div className="mt-1">{getIconComponent(feature.icon)}</div>}
                            <div>
                              <h4 className="font-semibold text-amber-400 text-lg mb-2">{feature.title}</h4>
                              <p className="text-stone-300">{feature.description}</p>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="mt-20 pt-12 border-t border-amber-800/30">
          <h3 className="text-3xl font-bold text-amber-400 mb-8">Key Updates:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {update.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="border border-amber-800/50 rounded-lg p-6 bg-gradient-to-b from-amber-900/20 to-stone-950 hover:from-amber-900/30 transition-colors"
              >
                <p className="text-stone-200 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {update.ctaText && update.ctaLink && (
          <div className="mt-20 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6">Ready to Serve Sparta?</h3>
            <p className="text-stone-300 mb-8 max-w-2xl">
              Join the ranks of Sparta's finest warriors and be part of our glorious history.
            </p>
            <Link href={update.ctaLink}>
              <button className="bg-amber-900 hover:bg-amber-800 text-amber-100 px-8 py-4 rounded-lg border border-amber-400/30 transition-colors text-lg font-semibold">
                {update.ctaText}
              </button>
            </Link>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-20 flex justify-center">
          <Link href="/updates">
            <button className="bg-amber-900/50 hover:bg-amber-800 text-amber-100 px-6 py-3 rounded-lg border border-amber-400/30 transition-colors">
              Return to Updates
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
