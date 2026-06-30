import { useId, useMemo, useState } from 'react'
import { chartPhases, CYCLE_DAYS, dayMarkers, hormones } from '../data/hormoneCurveData.js'

const PAD = { left: 16, right: 36, top: 20, bottom: 52 }
const W = 900
const H = 340
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom

function dayX(day) {
  return PAD.left + ((day - 1) / (CYCLE_DAYS - 1)) * plotW
}

function phaseBandX(i) {
  if (i === 0) return PAD.left
  if (i >= chartPhases.length) return PAD.left + plotW
  const prev = chartPhases[i - 1]
  return (dayX(prev.end) + dayX(prev.end + 1)) / 2
}

function levelY(level) {
  return PAD.top + plotH - (level / 100) * plotH
}

function linePath(values) {
  let d = ''
  for (let day = 1; day <= CYCLE_DAYS; day += 1) {
    const x = dayX(day)
    const y = levelY(values[day] ?? 0)
    d += d ? ` L ${x} ${y}` : `M ${x} ${y}`
  }
  return d
}

function dayFromEvent(clientX, rect) {
  const x = ((clientX - rect.left) / rect.width) * W
  if (x < PAD.left || x > PAD.left + plotW) return null
  return Math.min(CYCLE_DAYS, Math.max(1, Math.round(((x - PAD.left) / plotW) * (CYCLE_DAYS - 1) + 1)))
}

export default function HormoneCycleChart({ className = '', animate = true }) {
  const clipId = useId()
  const [activeDay, setActiveDay] = useState(1)

  const paths = useMemo(() => hormones.map((h) => ({ ...h, d: linePath(h.values) })), [])
  const lhPeakY = levelY(hormones.find((h) => h.key === 'lh').values[14])
  const activePhase = chartPhases.find((p) => activeDay >= p.start && activeDay <= p.end)

  const scrub = (clientX, target) => {
    const day = dayFromEvent(clientX, target.getBoundingClientRect())
    if (day != null) setActiveDay(day)
  }

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto select-none"
        role="img"
        aria-label="28-day menstrual cycle hormone chart showing estrogen, progesterone, LH, and FSH across four phases"
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={PAD.left} y={PAD.top} width={plotW} height={plotH} rx="4" />
          </clipPath>
          <filter id="lh-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {chartPhases.map((phase, i) => (
          <rect
            key={phase.name}
            x={phaseBandX(i)}
            y={PAD.top}
            width={phaseBandX(i + 1) - phaseBandX(i)}
            height={plotH}
            fill={phase.bg}
            opacity={0.85}
          />
        ))}

        {[25, 50, 75].map((tick) => (
          <line
            key={tick}
            x1={PAD.left}
            x2={PAD.left + plotW}
            y1={levelY(tick)}
            y2={levelY(tick)}
            stroke="#4A354A"
            strokeOpacity={0.06}
            strokeWidth={1}
          />
        ))}

        <g clipPath={`url(#${clipId})`}>
          {paths.map((h, i) => (
            <path
              key={h.key}
              d={h.d}
              fill="none"
              stroke={h.color}
              strokeWidth={h.width}
              strokeDasharray={h.dash ?? undefined}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity={0.92}
              className={animate && !h.dash ? 'hormone-line-draw' : undefined}
              style={animate && !h.dash ? { animationDelay: `${0.1 + i * 0.2}s` } : undefined}
            />
          ))}

          <line
            x1={dayX(14)}
            x2={dayX(14)}
            y1={PAD.top}
            y2={PAD.top + plotH}
            stroke="#FF6EB4"
            strokeOpacity={0.35}
            strokeWidth={1}
            strokeDasharray="4 6"
          />
        </g>

        <circle cx={dayX(14)} cy={lhPeakY} r={5} fill={hormones.find((h) => h.key === 'lh').color} opacity={0.9} filter="url(#lh-glow)" />

        <line
          x1={dayX(activeDay)}
          x2={dayX(activeDay)}
          y1={PAD.top}
          y2={PAD.top + plotH}
          stroke="#4A354A"
          strokeOpacity={0.12}
          strokeWidth={1}
        />

        <rect
          x={PAD.left}
          y={PAD.top}
          width={plotW}
          height={plotH}
          fill="transparent"
          className="cursor-crosshair"
          onMouseMove={(e) => scrub(e.clientX, e.currentTarget)}
          onTouchStart={(e) => scrub(e.touches[0].clientX, e.currentTarget)}
          onTouchMove={(e) => {
            e.preventDefault()
            scrub(e.touches[0].clientX, e.currentTarget)
          }}
        />

        {dayMarkers.map((day) => (
          <text
            key={day}
            x={dayX(day)}
            y={PAD.top + plotH + 18}
            textAnchor="middle"
            className="fill-mulberry/40 pointer-events-none"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 11 }}
          >
            Day {day}
          </text>
        ))}

        {chartPhases.map((phase, i) => (
          <text
            key={`label-${phase.name}`}
            x={(phaseBandX(i) + phaseBandX(i + 1)) / 2}
            y={PAD.top + plotH + 36}
            textAnchor="middle"
            fill={phase.color}
            className="pointer-events-none"
            style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 14, fontWeight: 700 }}
          >
            {phase.name}
          </text>
        ))}
      </svg>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6" aria-label="Hormone legend">
        {hormones.map((h) => (
          <span
            key={h.key}
            className="font-sans text-xs font-semibold text-mulberry inline-flex items-center"
          >
            <span
              className="inline-block w-3 mr-1.5 shrink-0"
              style={{
                height: 2,
                background: h.dash ? 'transparent' : h.color,
                borderTop: h.dash ? `2px dashed ${h.color}` : undefined,
              }}
              aria-hidden
            />
            {h.label}
          </span>
        ))}
      </div>

      <p className="text-center font-sans text-xs text-mulberry/50 mt-3">
        Day {activeDay}
        {activePhase ? ` · ${activePhase.name}` : ''}
      </p>
    </div>
  )
}
