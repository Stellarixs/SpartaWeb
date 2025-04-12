import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import FactionTable from "@/components/faction-table"
import { ChevronLeft, Shield, Sword } from 'lucide-react'

interface PageProps {
  params: {
    id: string
  }
}

interface RankEquipment {
  rank: string;
  helmet: string;
  armor: string;
  shield: string;
  cape: string;
  weapons: string[];
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
      showcaseImage: "/images/factions/KPG_SHOW.webp",
      equipment: [
        {
          rank: "Guard Initiate",
          helmet: "No helmet",
          armor: "White Tunic",
          shield: "Spartan Royal Hoplon (can be spawned as Amz's KPG shield)",
          cape: "White Cape",
          weapons: ["Ruby Gladius"]
        },
        {
          rank: "Normal KPG",
          helmet: "Spartan Royal",
          armor: "Spartan Royal Cuirass",
          shield: "Spartan Royal Hoplon (can be spawned as Amz's KPG shield)",
          cape: "White Cape",
          weapons: ["Ruby Gladius"]
        },
        {
          rank: "Senior Guard",
          helmet: "Spartan Royal",
          armor: "Spartan Royal Cuirass",
          shield: "Spartan Royal Hoplon (can be spawned as Amz's KPG shield)",
          cape: "Black Cape",
          weapons: ["Ruby Gladius"]
        },
        {
          rank: "KPG Officer",
          helmet: "Spartan Royal",
          armor: "Spartan Royal Cuirass",
          shield: "Spartan Royal Hoplon (can be spawned as Amz's KPG shield)",
          cape: "Black Cape",
          weapons: ["Ruby Gladius"]
        },
        {
          rank: "KPG Senior Officer",
          helmet: "Spartan Royal Lokhagos",
          armor: "Spartan Royal Cuirass",
          shield: "Spartan Royal Hoplon (can be spawned as Amz's KPG shield)",
          cape: "Black Cape",
          weapons: ["Ruby Gladius"]
        },
        {
          rank: "KPG XO",
          helmet: "Spartan Royal",
          armor: "Spartan Royal Cuirass",
          shield: "Spartan Royal Hoplon (can be spawned as Amz's KPG shield)",
          cape: "Black Cape",
          weapons: ["Ruby Gladius"]
        },
        {
          rank: "KPG CO",
          helmet: "Spartan Royal Strategos / Wolf Galea",
          armor: "Spartan Royal Cuirass",
          shield: "Spartan Royal Hoplon (can be spawned as Amz's KPG shield)",
          cape: "Black Cape",
          weapons: ["Ruby Gladius"]
        }
      ],
      divisions: [
          { 
            name: "CO", 
            specialization: "Leads the division. Oversees all operations within the KPG. Responsible for officer selections and overall direction.", 
            strength: "Handpicked by Leonidas. Must uphold loyalty, strategy, and leadership." 
          },
          { 
            name: "XO", 
            specialization: "Assists the CO. Hosts tryouts, training, practice inspections. Manages operations when KPG is full.", 
            strength: "High activity and experience in combat. Must know formations, leading, and KPG structure." 
          },
          { 
            name: "Senior Officer", 
            specialization: "Recruits new Officers, oversees their performance. Responsible for keeping Officer corps elite.", 
            strength: "Appointed by CO. Must understand full structure, training systems, and leadership." 
          },
          { 
            name: "Officer", 
            specialization: "Hosts training, raids, and helps soldiers improve. Teaches combat, formations, and discipline.", 
            strength: "Selected by CO. Must lead with precision and help others improve." 
          },
          { 
            name: "Senior Guard", 
            specialization: "Veteran of the KPG. Trusted to protect the King closely.", 
            strength: "Serve with consistency. Prove honor in training, raids, and guarding." 
          },
          { 
            name: "Initial Guard", 
            specialization: "Entry-level soldier in KPG. Guards the King. Learns basics.", 
            strength: "Pass tryouts hosted by XO. Show loyalty and dedication." 
          }
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
      showcaseImage: "/images/factions/Thespians_show.png",
      equipment: [
        {
          rank: "Thespian Soldier",
          helmet: "Spartan Royal",
          armor: "Skiritai Exomis",
          shield: "Royal Hoplon",
          cape: "Black Cape",
          weapons: ["Ruby Gladius", "Standard Gladius"]
        },
        {
          rank: "Thespian CO",
          helmet: "Spartan Royal Strategos",
          armor: "Skiritai Exomis (can be spawned \"Thespians armor\")",
          shield: "Royal Hoplon (can be spawned \"Thespians Shield\")",
          cape: "Black Cape",
          weapons: ["Ruby Gladius", "Xiphos"]
        },
        {
          rank: "Thespian Officer and Arilochias",
          helmet: "Spartan Royal",
          armor: "Thespians Armor",
          shield: "Thespians Shield",
          cape: "Black Cape or Golden Cape",
          weapons: ["Ruby Gladius", "Xiphos"]
        }
      ],
      divisions: [
          { 
            name: "CO", 
            specialization: "Leads the division. Oversees all operations within the KPG. Responsible for officer selections and overall direction.", 
            strength: "Handpicked by Leonidas. Must uphold loyalty, strategy, and leadership." 
          },
          { 
            name: "XO", 
            specialization: "Conducts 5 tryouts and 3 events every 7 days. Assists the CO with division responsibilities.", 
            strength: "High activity and leadership. Must show the ability to manage events and ensure team progression." 
          },
          { 
            name: "Officer", 
            specialization: "Conducts 3 tryouts and 4 events every 7 days. Assists XO in running operations and ensuring readiness of the division.", 
            strength: "Selected by CO. Must be highly active and lead successful events and tryouts." 
          },
          { 
            name: "Arilochias", 
            specialization: "A skilled and strategic officer. Demonstrates top-level combat skills and helps lead the team in critical missions.", 
            strength: "Achieved by showing high skills in combat and strategic thinking. Must prove worth through exceptional performance." 
          },
          { 
            name: "Thespians Soldier", 
            specialization: "Entry-level soldier focused on performing in events and missions. Shows commitment through activity and leadership.", 
            strength: "Requires 3 events a week to maintain rank. Shows dedication through consistent participation and skill development." 
          }        
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
      showcaseImage: "/images/factions/300-showcase.png",
      equipment: [
        {
          rank: "Spartan Perioikoi",
          helmet: "Spartan Heavy Cuirass", // Note: This seems to be an error in the provided data, as cuirass is armor not helmet
          armor: "Spartan Heavy Cuirass",
          shield: "Spartan Hoplon",
          cape: "Gold Cape",
          weapons: ["Standard Gladius", "Hasta"]
        },
        {
          rank: "300 Lochos",
          helmet: "Spartan Hoplitai",
          armor: "Spartan Heavy Cuirass",
          shield: "Spartan Hoplon (can be spawned as the Spartan royalty hoplon)",
          cape: "Gold Cape",
          weapons: ["Ruby Gladius", "Hasta"]
        },
        {
          rank: "300 Warrant Officer",
          helmet: "Spartan Lokhagos",
          armor: "Spartan Heavy Cuirass",
          shield: "Spartan Hoplon (can be spawned as the Spartan royalty hoplon)",
          cape: "Gold Cape",
          weapons: ["Ruby Gladius"]
        },
        {
          rank: "300 Lokhagos",
          helmet: "Spartan Polemarkos",
          armor: "Spartan Heavy Cuirass",
          shield: "Spartan Hoplon (can be spawned as the Spartan royalty hoplon)",
          cape: "Gold Cape",
          weapons: ["Ruby Gladius", "Hasta"]
        },
        {
          rank: "300 XO",
          helmet: "Lion Galea",
          armor: "Spartan Heavy Cuirass",
          shield: "Spartan Hoplon (can be spawned as the Spartan royalty hoplon)",
          cape: "Gold Cape",
          weapons: ["Ruby Gladius", "Hasta"]
        }
      ],
      divisions: [
        { 
          name: "300 XO", 
          specialization: "Manage the 300, help with documents, upload propaganda, and help all the 300 Spartans.", 
          strength: "Must demonstrate excellent leadership, organization, and dedication to the cause." 
        },
        { 
          name: "300 Lokhagos", 
          specialization: "Oversees Lochos and trains Officers and Warrant Officers. Responsible for tracking the 300 activity and progress, maintaining discipline, and enforcing rules.", 
          strength: "Leadership and discipline. Must show ability to organize and enforce rules for the division." 
        },
        { 
          name: "300 Warrant Officer", 
          specialization: "Hosts tryouts, combat training, and raids. Supervises Officers and follows the orders given by the King, 300 XO, and 300 Lokhagos.", 
          strength: "Must be an expert in combat, leadership, and able to follow high-level orders." 
        },
        { 
          name: "300 Officer", 
          specialization: "Hosts combat trainings and tryouts. Follows orders given by the King, 300 XO, 300 Lokhagos, and 300 Warrant Officer.", 
          strength: "Leadership and combat experience. Must maintain discipline and help execute high-level training." 
        },
        { 
          name: "300 Lochos", 
          specialization: "Follows Lokhagos' orders, attends events/inspections, and strives to be one of the best and most disciplined soldiers.", 
          strength: "Discipline and performance in events/inspections. Must show strong combat skills and loyalty." 
        },
        { 
          name: "300 Soldier", 
          specialization: "Follows Officers' orders and attends events/inspections. Expected to be a strong, reliable member of the unit.", 
          strength: "Commitment to orders and participation in events/inspections. Focused on growing skills and discipline." 
        }
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
      showcaseImage: "/images/factions/RG_show.png",
      equipment: [
        {
          rank: "Normal Royal Guard",
          helmet: "No helmet",
          armor: "Seleukid Tunic",
          shield: "Hoplon",
          cape: "White Cape",
          weapons: ["Ruby Gladius", "Hasta"]
        },
        {
          rank: "Royal Guard Officer",
          helmet: "Spartan Strategoi",
          armor: "Spartan Heavy Cuirass",
          shield: "Sanctus Scutum",
          cape: "White Cape",
          weapons: ["Ruby Gladius", "Hasta"]
        },
        {
          rank: "Royal Guard XO",
          helmet: "Spartan Polemarkos",
          armor: "Spartan Heavy Cuirass",
          shield: "Sanctus Scutum",
          cape: "White Cape",
          weapons: ["Ruby Gladius", "Hasta"]
        },
        {
          rank: "Royal Guard CO",
          helmet: "Spartan Polemarkos",
          armor: "Spartan Heavy Cuirass",
          shield: "Sanctus Scutum",
          cape: "Black Cape",
          weapons: ["Ruby Gladius", "Hasta"]
        }
      ],
      divisions: [
        { 
          name: "Royal Guard CO", 
          specialization: "The leader and overseer of the guard as a whole. Only obtained by being chosen by the King or divisional overseer with King's approval.", 
          strength: "Chosen by the King. Must be an outstanding leader, and previous Head Guard gives a better chance of selection." 
        },
        { 
          name: "Head Guard (Cap-1)", 
          specialization: "Oversees all sects and is second in command to the CO. Can lead the division in the absence of the CO.", 
          strength: "Personally selected by the CO. Must have excellent combat abilities and leadership skills." 
        },
        { 
          name: "Royal Guard XO (Cap-2)", 
          specialization: "Most senior position besides the Head Guard and CO. Leads the Alpha and Beta sects of the guard under the oversight of the CO and Head Guard.", 
          strength: "Proven leadership abilities and combat skills. Must show experience in managing large teams." 
        },
        { 
          name: "Royal Guard Officer (Cap-3)", 
          specialization: "Main officer rank of the Royal Guard. Obtained after reaching Phase III and completing the officer tryout or being invited based on promise.", 
          strength: "Must demonstrate leadership, tactical awareness, and combat proficiency. A week-long trial period before being officially recognized." 
        },
        { 
          name: "Royal Guard", 
          specialization: "Basic rank upon joining the Royal Guard. These soldiers are still learning but are valued members.", 
          strength: "A new recruit or a punishment rank for guards who have broken rules but don’t deserve exile. Must show potential and a willingness to learn." 
        }
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

          {/* Showcase image section */}
          {faction.showcaseImage && (
            <div className="mb-10 overflow-hidden rounded-lg border border-amber-800/30">
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image 
                  src={faction.showcaseImage || "/placeholder.svg"} 
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
          )}

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Overview</h2>
            <p className="text-stone-300 whitespace-pre-line">{faction.longDescription}</p>
          </div>

          {/* Equipment section - updated with detailed rank-specific equipment */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-amber-400 mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-2" /> Equipment by Rank
            </h2>
            
            <div className="space-y-6">
              {faction.equipment?.map((item, index) => (
                <div key={index} className="border border-amber-800/30 rounded-lg overflow-hidden">
                  <div className="bg-amber-900/30 px-4 py-3 border-b border-amber-800/30">
                    <h3 className="text-xl font-semibold text-amber-300">{item.rank}</h3>
                  </div>
                  
                  <div className="p-4 bg-amber-900/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="flex items-start">
                          <span className="text-amber-400 font-medium w-20 flex-shrink-0">Helmet:</span>
                          <span className="text-stone-300">{item.helmet}</span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-amber-400 font-medium w-20 flex-shrink-0">Armor:</span>
                          <span className="text-stone-300">{item.armor}</span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-amber-400 font-medium w-20 flex-shrink-0">Shield:</span>
                          <span className="text-stone-300">{item.shield}</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-start">
                          <span className="text-amber-400 font-medium w-20 flex-shrink-0">Cape:</span>
                          <span className="text-stone-300">{item.cape}</span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-amber-400 font-medium w-20 flex-shrink-0">Weapons:</span>
                          <span className="text-stone-300">{item.weapons.join(", ")}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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