import { ChevronDown, Sword, Shield, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import SectionCard from "@/components/section-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/images/Background.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 to-stone-950 z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold text-amber-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-6">
            SPARTA
          </h1>
          <p className="text-2xl md:text-3xl text-amber-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-3xl">
            The Great State Of Sparta
          </p>
          
          <div className="absolute bottom-10 animate-bounce">
            <ChevronDown className="h-10 w-10 text-amber-300" />
          </div>
        </div>
      </div>
      
      {/* Join Our Community Section */}
      <div className="bg-stone-950 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-300 mb-6">JOIN THE RANKS OF SPARTA</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-stone-900/80 p-6 rounded-lg border-2 border-amber-500 transform transition hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-12 w-12 text-amber-400 mr-3" />
                <h3 className="text-2xl font-bold text-amber-300">Roblox Group</h3>
              </div>
              <p className="text-stone-200 mb-4">Join our official Roblox group to participate in events, climb the ranks, and become a true Spartan warrior!</p>
              <a 
                href="https://www.roblox.com/groups/8202010/SPQR-Sparta#!/about" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-stone-100 font-bold py-2 px-6 rounded-full transition"
              >
                Join Now
              </a>
            </div>
            
            <div className="bg-stone-900/80 p-6 rounded-lg border-2 border-amber-500 transform transition hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-amber-400 mr-3" />
                <h3 className="text-2xl font-bold text-amber-300">Discord Server</h3>
              </div>
              <p className="text-stone-200 mb-4">Connect with fellow Spartans, receive important updates, and coordinate with your brothers-in-arms.</p>
              <a 
                href="https://discord.gg/u4BKgKSMyX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-stone-100 font-bold py-2 px-6 rounded-full transition"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <SectionCard title="Divisions" description="Explore the various Divisions of Sparta and choose your allegiance." link="/factions" icon="shield" />
        <SectionCard title="Market" description="Buy Ranks, and Lead divison." link="/market" icon="coins" />
        <SectionCard title="Updates" description="Stay informed about the latest game updates and events." link="/updates" icon="scroll" />
      </div>
    </div>
  )
}