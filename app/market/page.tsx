import type React from "react"
import Navbar from "@/components/navbar"
import { Crown, Shield, Sword, ScrollText, Gem, Users, Flag, Castle, Swords, Landmark } from "lucide-react"

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-20 pb-10 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6 mt-10">Royal Ranks Marketplace</h1>
        <p className="text-xl text-gray-300 mb-6 max-w-3xl">
          Purchase prestigious royal ranks to gain special privileges and powers in the world of Sparta.
        </p>
        <div className="bg-gradient-to-b from-red-900/20 to-black border border-red-900/50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gold mb-4 flex items-center">
            <Crown className="h-6 w-6 mr-2" />
            Royal Family Privileges
          </h2>
          <p className="text-gray-300 mb-2">All Royal Family members (RF+) receive these exclusive benefits:</p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Permission to wear whatever you want</li>
            <li>All resources spawned directly in your inventory - no mining required</li>
            <li>Special tags in-game</li>
            <li>Guarding permission with protection from many divisions</li>
            <li>Special tag and highest rank in other empires</li>
            <li>Power to oversee high ranks</li>
            <li>Special uncraftable shield</li>
            <li>Special role in the Roman discord</li>
            <li>Access to Golden Laurel</li>
            <li>Imperial Cape</li>
            <li>Royal custom items</li>
          </ul>
        </div>

        {/* Royal Ranks Section */}
        <h2 className="text-3xl font-bold text-gold mb-8 flex items-center">
          <Crown className="h-8 w-8 mr-3" />
          Royal Ranks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          <RoyalRank
            title="Grandson"
            price="8,500 R$"
            icon={<Crown className="h-8 w-8 text-gold" />}
            perks={[
              "All Royal Family privileges",
              "Imperial cape",
              "Ability to rule over all Sparta",
              "Command Spartan divisions",
              "Access to exclusive head accessories",
              "Custom royal cape",
              "Custom royal gear",
              "Custom uncraftable helmet",
              "Eligibility to become Hades or Poseidon",
              "Custom uncraftable shield",
              "Special custom lore hat",
              "Custom Armor"
            ]}
            highlight={true}
          />

          <RoyalRank
            title="Son/Daughter"
            price="6,000 R$"
            icon={<Crown className="h-8 w-8 text-gold" />}
            perks={[
              "All Royal Family privileges",
              "Imperial cape",
              "Ability to rule over all Sparta",
              "Command Spartan divisions",
              "Access to exclusive head accessories",
              "Custom royal cape",
              "Custom royal gear",
              "Custom uncraftable helmet",
              "Eligibility to become Hades or Poseidon",
              "Custom uncraftable shield",
              "Special custom lore hat",
              "Custom Armor"
            ]}
          />

          <RoyalRank
            title="Brother/Sister"
            price="4,500 R$"
            icon={<Crown className="h-8 w-8 text-gold" />}
            perks={[
              "All Royal Family privileges",
              "Custom uncraftable helmet",
              "Eligibility to become Hades or Poseidon",
              "Custom uncraftable shield",
              "Special custom lore hat",
              "Custom Armor",
              "Custom royal cape",
              "Custom royal gear"
            ]}
          />

          <RoyalRank
            title="Niece/Nephew"
            price="3,000 R$"
            icon={<Crown className="h-8 w-8 text-gold" />}
            perks={[
              "All Royal Family privileges",
              "Custom royal cape",
              "Custom royal gear"
            ]}
          />

          <RoyalRank
            title="Spartan Nobility"
            price="2,800 R$"
            icon={<Users className="h-8 w-8 text-gold" />}
            perks={[
              "All resources spawned directly in inventory",
              "Custom name tag",
              "Highest rank in Sparta below Royal Family"
            ]}
          />

          <RoyalRank
            title="Family Member"
            price="2,500 R$"
            icon={<Users className="h-8 w-8 text-gold" />}
            perks={[
              "All Royal Family privileges"
            ]}
          />

          <RoyalRank
            title="Servant"
            price="600 R$"
            icon={<ScrollText className="h-8 w-8 text-gold" />}
            perks={[
              "Serve the Royal Family",
              "Special servant role"
            ]}
          />
        </div>
        
        {/* Family Purchase Section */}
        <h2 className="text-3xl font-bold text-gold mb-8 flex items-center">
          <Castle className="h-8 w-8 mr-3" />
          Family Purchase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <FamilyRank
            title="Spartan Imperial Dynasty"
            price="30,000 R$"
            icon={<Crown className="h-8 w-8 text-gold" />}
            perks={[
              "Custom Helmet (2 max)",
              "2 Custom Capes (4 max)",
              "Custom Shield (3 max)",
              "Ability to buy Customs for your families",
              "Ability to host events for your families",
              "Recruiting Access",
              "In game tags",
              "Highest Spartan status, Prince+ one (right under the Anax)",
              "Led mostly by High family members",
              "Ability to use whole set of royal armor (4 max)",
              "Own uniform",
              "Access to Royal decrees",
              "Guarding Permissions (6 studs max)",
              "KZ access",
              "KZ tent access",
              "Co ruling with Leonidas",
              "Highest Spartan status (below Anax, for the highest members of the family)",
              "4 RGs max guarding",
              "Events access (for high members of the family)",
              "Custom made logo",
              "Custom ranks/tags",
              "3 Max Military ranks access",
              "More privileges coming soon"
            ]}
            highlight={true}
          />

          <FamilyRank
            title="Spartan Crown Family"
            price="15,000 R$"
            icon={<Crown className="h-8 w-8 text-gold" />}
            perks={[
              "Custom Helmet for the leader",
              "Custom Royal Cape (3 max)",
              "Custom Shield (3 max)",
              "Ability to buy Customs for your families",
              "Ability to host events for your families", 
              "Recruiting Access",
              "In game tags",
              "Higher Spartan status, Royal family one",
              "Led mostly by RF+",
              "Ability to use 1 set of royal armor (for high members of the family)",
              "Own uniform",
              "Access to Royal decrees",
              "Guarding Permissions (4 studs max)",
              "KZ access",
              "KZ tent access",
              "2 RGs max guarding",
              "Events access (for the highest members of the family)",
              "Custom made logo",
              "Custom ranks/tags",
              "Family medals can be added"
            ]}
          />

          <FamilyRank
            title="Spartan HighBorn Family"
            price="5,000 R$"
            icon={<Users className="h-8 w-8 text-gold" />}
            perks={[
              "Ability to buy Customs for your families",
              "Ability to host events for your families",
              "Recruiting Access",
              "In game tags",
              "Higher Spartan status",
              "Led mostly by Nobility+",
              "Own uniform",
              "Access to noble decrees",
              "Lower Spartan events quota (-2 events for each rank)",
              "Custom ranks/tags for the leader of the family"
            ]}
          />

          <FamilyRank
            title="Spartan Family"
            price="2,500 R$"
            icon={<Users className="h-8 w-8 text-gold" />}
            perks={[
              "Ability to host events for your families",
              "Recruiting Access",
              "In game tags",
              "Custom tags"
            ]}
          />
        </div>
        
        {/* Division Purchase Section */}
        <h2 className="text-3xl font-bold text-gold mb-8 flex items-center">
          <Swords className="h-8 w-8 mr-3" />
          Division Purchase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          <DivisionRank
            title="Spartan Division Creation"
            price="10,000 R$"
            icon={<Flag className="h-8 w-8 text-gold" />}
            description="Create your own official Spartan division with custom branding and ranks."
          />

          <DivisionRank
            title="Spartan Army Creation"
            price="5,000 R$"
            icon={<Swords className="h-8 w-8 text-gold" />}
            description="Establish a new army within the Spartan military hierarchy."
          />

          <DivisionRank
            title="Overseer"
            price="8,000 R$"
            icon={<Landmark className="h-8 w-8 text-gold" />}
            description="Gain overseer privileges to monitor and guide multiple divisions."
          />

          <DivisionRank
            title="CO-Owner"
            price="5,000 R$"
            icon={<Users className="h-8 w-8 text-gold" />}
            description="Become a co-owner of an existing division with leadership privileges."
          />
        </div>
      </div>
    </div>
  )
}

interface MarketItem {
  name: string
  price: string
  quality: string
}

interface MarketCategoryProps {
  title: string
  icon: React.ReactNode
  items: MarketItem[]
}

interface RoyalRankProps {
  title: string
  price: string
  icon: React.ReactNode
  perks: string[]
  highlight?: boolean
}

interface DivisionRankProps {
  title: string
  price: string
  icon: React.ReactNode
  description: string
}

function RoyalRank({ title, price, icon, perks, highlight = false }: RoyalRankProps) {
  return (
    <div className={`border ${highlight ? 'border-gold' : 'border-red-900/50'} rounded-lg p-6 bg-gradient-to-b ${highlight ? 'from-gold/20 to-black' : 'from-red-900/20 to-black'}`}>
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-bold text-gold ml-2">{title}</h2>
      </div>
      
      <div className="mb-4">
        <span className="text-xl font-bold text-gold">{price}</span>
      </div>

      <h3 className="text-lg font-semibold text-gold mb-2">Perks:</h3>
      <ul className="space-y-2">
        {perks.map((perk, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gold mr-2">•</span>
            <span className="text-gray-300">{perk}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="https://discord.com/channels/1253393404222767228/1253394104721608735" 
        target="_blank"
        rel="noopener noreferrer" 
        className={`mt-6 w-full py-2 px-4 rounded ${highlight ? 'bg-gold hover:bg-gold/90 text-black' : 'bg-red-900 hover:bg-red-800 text-gold'} transition-colors block text-center`}
      >
        Purchase Rank
      </a>
    </div>
  )
}

function FamilyRank({ title, price, icon, perks, highlight = false }: RoyalRankProps) {
  return (
    <div className={`border ${highlight ? 'border-gold' : 'border-red-900/50'} rounded-lg p-6 bg-gradient-to-b ${highlight ? 'from-gold/20 to-black' : 'from-red-900/20 to-black'}`}>
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-2xl font-bold text-gold ml-2">{title}</h2>
      </div>
      
      <div className="mb-4">
        <span className="text-xl font-bold text-gold">{price}</span>
      </div>

      <h3 className="text-lg font-semibold text-gold mb-2">Privileges:</h3>
      <ul className="space-y-2">
        {perks.map((perk, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gold mr-2">•</span>
            <span className="text-gray-300">{perk}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="https://discord.com/channels/1253393404222767228/1253394104721608735" 
        target="_blank"
        rel="noopener noreferrer" 
        className={`mt-6 w-full py-2 px-4 rounded ${highlight ? 'bg-gold hover:bg-gold/90 text-black' : 'bg-red-900 hover:bg-red-800 text-gold'} transition-colors block text-center`}
      >
        Purchase Family
      </a>
    </div>
  )
}

function DivisionRank({ title, price, icon, description }: DivisionRankProps) {
  return (
    <div className="border border-red-900/50 rounded-lg p-6 bg-gradient-to-b from-red-900/20 to-black">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-bold text-gold ml-2">{title}</h2>
      </div>
      
      <div className="mb-4">
        <span className="text-xl font-bold text-gold">{price}</span>
      </div>

      <p className="text-gray-300 mb-6">{description}</p>
      
      <a 
        href="https://discord.com/channels/1253393404222767228/1253394104721608735" 
        target="_blank"
        rel="noopener noreferrer" 
        className="mt-6 w-full py-2 px-4 rounded bg-red-900 hover:bg-red-800 text-gold transition-colors block text-center"
      >
        Purchase
      </a>
    </div>
  )
}
