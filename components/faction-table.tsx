interface Division {
  name: string
  specialization: string
  strength: string
}

interface FactionTableProps {
  divisions: Division[]
}

export default function FactionTable({ divisions }: FactionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-amber-900/30">
            <th className="border border-amber-800/50 px-4 py-2 text-left text-amber-400">Rank</th>
            <th className="border border-amber-800/50 px-4 py-2 text-left text-amber-400">Job</th>
            <th className="border border-amber-800/50 px-4 py-2 text-left text-amber-400">Strength</th>
          </tr>
        </thead>
        <tbody>
          {divisions.map((division, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-stone-950" : "bg-amber-900/10"}>
              <td className="border border-amber-800/50 px-4 py-2 text-stone-100">{division.name}</td>
              <td className="border border-amber-800/50 px-4 py-2 text-stone-100">{division.specialization}</td>
              <td className="border border-amber-800/50 px-4 py-2 text-stone-100">{division.strength}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}