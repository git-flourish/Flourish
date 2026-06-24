/** Shared cycle phase + comparison data (home PhaseSection, Science page, WhySection). */

export const phases = [
  {
    name: 'The Drain',
    sub: 'Menstrual Phase · Days 1–7',
    phase: 'Menstrual',
    days: 'Days 1–7',
    color: '#FF6B6B',
    bgLight: '#FFF0F0',
    emoji: '🌑',
    headline: 'Rest is not weakness.',
    homeBody:
      'Your estrogen and progesterone hit their floor. We replenish iron, reduce inflammation, ease cramping, and lift brain fog — so you can honour this phase without losing yourself in it.',
    symptoms: ['Cramping', 'Fatigue', 'Inflammation', 'Iron loss', 'Brain fog'],
    keyIngredients: ['Iron bisglycinate', 'Magnesium glycinate', 'Omega-3', 'Turmeric extract'],
    hormone: 'Estrogen & progesterone at their lowest',
    mission: 'Replenish, restore, reduce pain',
    scienceBody:
      'During menstruation, the uterine lining sheds and key nutrients are lost. Iron, in particular, drops significantly with blood loss. Inflammation spikes, and the hormone-gut axis becomes sensitive. Our Drain formula is built on the clinical evidence for iron bisglycinate (high absorption, low GI side effects), magnesium glycinate (proven to reduce cramping and improve sleep quality), and omega-3 EPA/DHA (anti-inflammatory, mood-stabilising).',
    studies: [
      { title: 'Iron bisglycinate vs iron sulfate in menstrual blood loss', journal: 'J Womens Health, 2022' },
      { title: 'Magnesium supplementation for primary dysmenorrhea', journal: 'Eur J Clin Nutr, 2023' },
      { title: 'Omega-3 fatty acids in menstrual pain management', journal: 'Complement Ther Med, 2021' },
    ],
    ingredients: ['Iron bisglycinate', 'Magnesium glycinate', 'Omega-3 EPA/DHA', 'Turmeric extract', 'Vitamin C', 'B12'],
  },
  {
    name: 'The Rise',
    sub: 'Follicular Phase · Days 8–13',
    phase: 'Follicular',
    days: 'Days 8–13',
    color: '#6DB589',
    bgLight: '#F0FAF3',
    emoji: '🌒',
    headline: 'Energy is climbing. Meet it.',
    homeBody:
      'Estrogen begins its ascent. This is your window for mental clarity and momentum. We support rising hormones with nutrients that amplify focus, mood, and physical vitality.',
    symptoms: ['Energy building', 'Estrogen climbing', 'Mental clarity'],
    keyIngredients: ['B-complex vitamins', 'Ashwagandha', 'CoQ10', 'Zinc'],
    hormone: 'Estrogen climbing, FSH active',
    mission: 'Amplify energy, support hormonal rise',
    scienceBody:
      "The follicular phase is your body's spring. Estrogen begins rising, the follicle matures, and cognitive performance peaks. Our Rise formula capitalises on this receptive window — the B-vitamin complex supports the methylation pathways that regulate estrogen metabolism; CoQ10 enhances mitochondrial energy production; zinc supports follicular development. Ashwagandha (KSM-66®) reduces cortisol without sedating the natural energy surge.",
    studies: [
      { title: 'B-vitamin complex and estrogen metabolism in premenopausal women', journal: 'Nutrients, 2023' },
      { title: 'CoQ10 supplementation and mitochondrial function', journal: 'Biofactors, 2022' },
      { title: 'Ashwagandha (KSM-66) on cortisol and stress', journal: 'J Int Soc Sports Nutr, 2021' },
    ],
    ingredients: ['B-complex (methylated)', 'Ashwagandha KSM-66®', 'CoQ10', 'Zinc bisglycinate', 'Folate', 'Iodine'],
  },
  {
    name: 'The Peak',
    sub: 'Ovulatory Phase · Days 14–21',
    phase: 'Ovulatory',
    days: 'Days 14–21',
    color: '#FF6EB4',
    bgLight: '#FFF0F8',
    emoji: '🌕',
    headline: 'You are luminous. Protect it.',
    homeBody:
      'LH surges, confidence peaks, and inflammation quietly rises. Our Peak formula manages oxidative stress while you channel your highest energy — keeping you radiant, not depleted.',
    symptoms: ['High energy', 'Confidence', 'Inflammation', 'Sex drive'],
    keyIngredients: ['Vitamin C', 'Selenium', 'Chaste tree berry', 'NAC'],
    hormone: 'LH surge, peak estrogen, testosterone rise',
    mission: 'Manage inflammation, sustain radiance',
    scienceBody:
      "The LH surge triggers ovulation and a brief but significant inflammatory response. You feel your best — but oxidative stress is quietly rising. Our Peak formula targets this paradox: NAC (N-acetyl cysteine) replenishes glutathione — the body's master antioxidant; selenium and vitamin C work synergistically for cellular protection; Vitex agnus-castus (chaste tree berry) supports progesterone synthesis in preparation for the luteal phase.",
    studies: [
      { title: 'NAC and oxidative stress across the menstrual cycle', journal: 'Oxid Med Cell Longev, 2022' },
      { title: 'Vitex agnus-castus in hormone modulation', journal: 'Planta Med, 2021' },
      { title: 'Selenium and reproductive hormones in women', journal: 'Biol Trace Elem Res, 2023' },
    ],
    ingredients: ['NAC', 'Selenium', 'Vitamin C (ascorbate)', 'Vitex agnus-castus', 'Vitamin D3+K2', 'Choline'],
  },
  {
    name: 'The Crash',
    sub: 'Luteal Phase · Days 22–28',
    phase: 'Luteal',
    days: 'Days 22–28',
    color: '#A78BCA',
    bgLight: '#F5F0FA',
    emoji: '🌘',
    headline: 'Support before the storm.',
    homeBody:
      'Progesterone rises then falls. Mood swings, bloating, and sleep disruption are real — and preventable. Our Crash formula addresses the root hormonal shifts so you feel like yourself, even now.',
    symptoms: ['Mood swings', 'Bloating', 'Anxiety', 'Sleep issues'],
    keyIngredients: ['Magnesium L-threonate', 'Vitamin B6', 'Saffron extract', 'Passionflower'],
    hormone: 'Progesterone rises then falls',
    mission: 'Calm the storm, protect sleep, ease PMS',
    scienceBody:
      'As progesterone drops in the late luteal phase, serotonin and GABA pathways are disrupted. This is the root of PMS — not weakness, but a predictable neurochemical shift. Magnesium L-threonate crosses the blood-brain barrier to directly support GABA receptor function; vitamin B6 (pyridoxal-5-phosphate form) is a clinical-grade PMS intervention with multiple RCT support; saffron extract (affron®) has demonstrated equivalence to low-dose SSRIs for premenstrual mood in double-blind trials.',
    studies: [
      { title: 'Magnesium L-threonate and GABA modulation', journal: 'Neuropharmacology, 2022' },
      { title: 'Vitamin B6 (P5P) for premenstrual syndrome: RCT review', journal: 'Cochrane Review, 2023' },
      { title: 'Saffron extract vs placebo for PMDD', journal: 'BJOG, 2022' },
    ],
    ingredients: ['Magnesium L-threonate', 'Vitamin B6 (P5P)', 'Saffron extract affron®', 'Passionflower', 'Glycine', 'L-theanine'],
  },
]

export const differentiators = [
  { label: 'Women specific', flo: true, thorne: true, flourish: true },
  { label: 'Cycle-synced formula', flo: true, thorne: false, flourish: true },
  { label: 'Sequenced by phase', flo: false, thorne: false, flourish: true },
  { label: 'Water soluble — Bioavailability', flo: false, thorne: false, flourish: true },
  { label: 'Vegan, ethically sourced', flo: false, thorne: false, flourish: true },
]

/** Tab label: emoji + name (e.g. "🌑 The Drain"). */
export function phaseTabLabel(phase) {
  return `${phase.emoji} ${phase.name}`
}

// ponytail: assert-based sanity check; upgrade path: dedicated test file when consumers wire in
if (import.meta.env?.DEV) {
  console.assert(phases.length === 4, 'expected 4 phases')
  console.assert(differentiators.length === 5, 'expected 5 differentiators')
  phases.forEach((p) => {
    console.assert(p.emoji && p.name && p.color && p.bgLight, `phase missing core fields: ${p.name}`)
    console.assert(phaseTabLabel(p).startsWith(p.emoji), `tab label mismatch: ${p.name}`)
  })
}
