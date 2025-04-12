export interface UpdateFeature {
  title: string
  description: string
  icon?: string
}

export interface UpdateSection {
  title: string
  content: string
  image?: string
  features?: UpdateFeature[]
  alignment?: "left" | "right"
}

export interface Update {
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

export const updates: Update[] = [
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
            icon: "anchor",
          },
          {
            title: "Weather Effects",
            description: "Dynamic weather system affecting naval combat with wind, waves, and visibility factors",
            icon: "cloud",
          },
          {
            title: "Crew Management",
            description: "Assign roles to your crew, from rowers to marines, each affecting ship performance",
            icon: "users",
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
            icon: "trophy",
          },
          {
            title: "Historical Decisions",
            description: "Face the same dilemmas as your historical counterpart with branching storylines",
            icon: "git-branch",
          },
          {
            title: "Companion System",
            description: "Recruit historical figures as companions, each with their own storylines and abilities",
            icon: "users",
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
  },
  {
    id: 2,
    title: "Expansion: Rise of the Praetorian Guard",
    date: "III Nones Martius MMDCCLXXVII",
    description:
      "Play as a member of the elite Praetorian Guard in this new expansion. Protect the Emperor, uncover conspiracies, and shape the future of Rome from the shadows.",
    features: [
      "New playable faction: Praetorian Guard",
      "Palace intrigue and political missions",
      "Unique Praetorian equipment and abilities",
      "New location: The Imperial Palace",
    ],
    mainImage: "/placeholder.svg?height=600&width=1200",
    heroOverlay: true,
    quote: {
      text: "The Praetorians were more than just bodyguards - they were kingmakers who held the fate of emperors in their hands.",
      author: "Gaius Suetonius",
      role: "Game Director",
      image: "/placeholder.svg?height=100&width=100",
    },
    sections: [
      {
        title: "The Praetorian Experience",
        content:
          "For the first time, take on the role of a member of the elite Praetorian Guard, the emperor's personal bodyguards and Rome's most feared military unit. Rise through the ranks from a common guardsman to the Praetorian Prefect, the second most powerful person in the empire. Your decisions will shape the destiny of Rome as you protect the emperor from threats both external and internal.",
        image: "/placeholder.svg?height=400&width=600",
        alignment: "left",
        features: [
          {
            title: "Praetorian Career Path",
            description: "Progress from recruit to Praetorian Prefect through merit or intrigue",
            icon: "shield",
          },
          {
            title: "Loyalty System",
            description: "Balance your loyalty between the Emperor, the Senate, and your own ambitions",
            icon: "scale",
          },
          {
            title: "Specialized Combat",
            description: "Master close-quarters combat techniques unique to the Praetorian Guard",
            icon: "sword",
          },
        ],
      },
      {
        title: "Palace Intrigue",
        content:
          "Navigate the dangerous waters of imperial politics where a whispered word can be as deadly as a drawn sword. Uncover conspiracies against the emperor, or perhaps join them if it serves your interests. Forge alliances with influential senators, wealthy merchants, and foreign dignitaries, all while maintaining your cover as the emperor's loyal protector.",
        image: "/placeholder.svg?height=400&width=600",
        alignment: "right",
      },
    ],
    ctaText: "Pre-order Now",
    ctaLink: "/pre-order",
  },
  {
    id: 3,
    title: "Update 2.3: The Germanic Frontier",
    date: "VII Idus Maius MMDCCLXXVII",
    description:
      "The northern frontier is expanding! Face the Germanic tribes in new territories beyond the Rhine river.",
    features: [
      "New map area: Germanic territories",
      "New enemy faction: Germanic tribes",
      "Winter warfare mechanics",
      "Border fort construction and management",
    ],
    mainImage: "/placeholder.svg?height=600&width=1200",
    heroOverlay: true,
    quote: {
      text: "The forests of Germania hide many secrets and dangers. Only the bravest legionaries dare to venture beyond the Rhine.",
      author: "Titus Flavius",
      role: "Lead Environment Artist",
      image: "/placeholder.svg?height=100&width=100",
    },
    sections: [
      {
        title: "Beyond the Rhine",
        content:
          "Venture into the uncharted territories of Germania, where dense forests, treacherous marshes, and hostile tribes await. This massive new map expansion adds the largest territory yet to the game, with diverse biomes and challenging terrain that will test even veteran players. Establish Roman outposts in hostile territory and extend the reach of civilization into the barbarian lands.",
        image: "/placeholder.svg?height=400&width=600",
        alignment: "right",
        features: [
          {
            title: "Dynamic Territory Control",
            description: "Territories change hands based on tribal migrations and Roman expansion",
            icon: "map",
          },
          {
            title: "Resource Exploration",
            description: "Discover and exploit new resources unique to the Germanic regions",
            icon: "pickaxe",
          },
          {
            title: "Frontier Diplomacy",
            description: "Negotiate with or subjugate the various Germanic tribes",
            icon: "handshake",
          },
        ],
      },
      {
        title: "Germanic Tribes",
        content:
          "Face a new enemy faction with unique units, tactics, and cultural features. The Germanic tribes are not a unified force but a collection of distinct peoples with their own agendas and capabilities. Learn to identify the different tribes by their distinctive appearance and fighting styles, and adapt your tactics accordingly. Some may be open to diplomacy, while others will accept nothing less than Roman blood.",
        image: "/placeholder.svg?height=400&width=600",
        alignment: "left",
      },
    ],
    ctaText: "Update Now",
    ctaLink: "/update",
  },
]

export function getUpdateById(id: number): Update | undefined {
  return updates.find((update) => update.id === id)
}
