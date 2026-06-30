export default function ScienceTicker() {
  const items = [
    'PEER-REVIEWED FORMULAS',
    'CYCLE-SYNCED PRECISION',
    'CLINICALLY INFORMED',
    'WATER-SOLUBLE BIOAVAILABILITY',
    'VEGAN & ETHICALLY SOURCED',
    'CRUELTY FREE',
  ]

  return (
    <div className="bg-mulberry py-4 overflow-hidden border-y border-mulberry shrink-0">
      <div className="flex whitespace-nowrap">
        <div className="ticker-track flex items-center">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-4 pr-4">
              <span className="font-sans text-xs font-semibold text-cream/70 uppercase tracking-[0.2em]">
                {item}
              </span>
              <span className="text-flamingo text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
