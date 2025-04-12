import Link from "next/link"
import { Shield, Coins, Scroll } from "lucide-react"

interface SectionCardProps {
  title: string
  description: string
  link: string
  icon: "shield" | "coins" | "scroll"
}

export default function SectionCard({ title, description, link, icon }: SectionCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "shield":
        return <Shield className="h-10 w-10 text-amber-400 mb-4" />
      case "coins":
        return <Coins className="h-10 w-10 text-amber-400 mb-4" />
      case "scroll":
        return <Scroll className="h-10 w-10 text-amber-400 mb-4" />
      default:
        return null
    }
  }

  return (
    <Link href={link}>
      <div className="bg-gradient-to-b from-amber-900/30 to-stone-950 border border-amber-800/50 rounded-lg p-6 hover:border-amber-400/50 transition-all hover:shadow-[0_0_15px_rgba(217,119,6,0.3)] h-full">
        {getIcon()}
        <h2 className="text-2xl font-bold text-amber-400 mb-2">{title}</h2>
        <p className="text-stone-300 mb-4">{description}</p>
        <span className="text-amber-400 text-sm">Learn more →</span>
      </div>
    </Link>
  )
}
