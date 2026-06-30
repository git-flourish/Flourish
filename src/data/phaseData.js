/** Shared cycle phase + comparison data (home PhaseSection, Science page, WhySection). */

export const phases = [
  {
    name: 'The Drain',
    sub: 'Menstrual Phase · Days 1–7',
    phase: 'Menstrual',
    days: 'Days 1–7',
    color: '#FF6B6B',
    bgLight: '#FFF0F0',
    emoji: '🩸',
    headline: 'Rest is not weakness.',
    homeBody:
      "We support your body replenishing what's lost through bleeding, easing cramps and inflammation, and lifting the low energy and mood that can come with it.",
    showHomeMissionLabel: true,
    hideChips: true,
    symptomsLabel: 'You might feel',
    symptoms: ['Cramping', 'Fatigue', 'Inflammation', 'Iron loss', 'Brain fog'],
    keyIngredients: ['Iron bisglycinate', 'Magnesium glycinate', 'Omega-3', 'Turmeric extract'],
    hormone: 'Estrogen & progesterone at their lowest',
    mission: 'Replenish, restore, reduce pain',
    scienceBody:
      "This is the phase most people just call their period. Your body lets go of the uterine lining it built over the last month, and to do that, the uterus contracts, which is what you feel as cramps. Your two main hormones, estrogen and progesterone, sit at their lowest of the whole cycle. You're also losing iron through bleeding, which is why this phase can leave you feeling tired and depleted.",
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
    emoji: '🌿',
    headline: 'Watch yourself rise',
    homeBody:
      'We support your body clearing the lingering fog, steadying skin and mood, and fuelling the rebuild as energy and drive come back online.',
    showHomeMissionLabel: true,
    hideChips: true,
    symptomsLabel: 'You might feel',
    symptoms: ['Energy building', 'Estrogen climbing', 'Mental clarity'],
    keyIngredients: ['B-complex vitamins', 'Ashwagandha', 'CoQ10', 'Zinc'],
    hormone: 'Estrogen climbing, FSH active',
    mission: 'Amplify energy, support hormonal rise',
    scienceBody:
      "After your period, estrogen starts rising and your body gets to work rebuilding the uterine lining for the month ahead. But coming out of your period, things don't switch on instantly, the early days can still feel sluggish before your energy builds. This is a building phase so your body is in high demand for the nutrients that fuel energy, focus, and tissue renewal. You might notice your cervical mucus increasing and becoming clear and stretchy, a sign that estrogen is climbing.",
    studies: [
      { title: 'B-vitamin complex and estrogen metabolism in premenopausal women', journal: 'Nutrients, 2023' },
      { title: 'CoQ10 supplementation and mitochondrial function', journal: 'Biofactors, 2022' },
      { title: 'Ashwagandha (KSM-66) on cortisol and stress', journal: 'J Int Soc Sports Nutr, 2021' },
    ],
    ingredients: ['B-complex (methylated)', 'Ashwagandha KSM-66®', 'CoQ10', 'Zinc bisglycinate', 'Folate', 'Iodine'],
  },
  {
    name: 'The Peak',
    sub: 'Ovulatory Phase · Days 14–17',
    phase: 'Ovulatory',
    days: 'Days 14–17',
    color: '#FF6EB4',
    bgLight: '#FFF0F8',
    emoji: '☀️',
    headline: 'Your time to shine',
    homeBody:
      'We support your body sustaining that peak energy, supporting the work of ovulation itself.',
    showHomeMissionLabel: true,
    hideChips: true,
    symptomsLabel: 'You might feel',
    symptoms: [{ emphasis: 'High', text: 'sex drive' }],
    keyIngredients: ['Vitamin C', 'Selenium', 'Chaste tree berry', 'NAC'],
    hormone: 'LH surge, peak estrogen, testosterone rise',
    mission: 'Manage inflammation, sustain radiance',
    scienceBody:
      "This is the short, intense window when your body releases an egg, and to do it, your body is running at full output. You often feel your best here, even as your body works its hardest behind the scenes. Releasing an egg is a big metabolic event that generates oxidative stress. That's exactly when antioxidant support matters most: protecting your cells while they work their hardest, so you can flourish. You might notice a higher sex drive and a real surge in energy and confidence.",
    studies: [
      { title: 'NAC and oxidative stress across the menstrual cycle', journal: 'Oxid Med Cell Longev, 2022' },
      { title: 'Vitex agnus-castus in hormone modulation', journal: 'Planta Med, 2021' },
      { title: 'Selenium and reproductive hormones in women', journal: 'Biol Trace Elem Res, 2023' },
    ],
    ingredients: ['NAC', 'Selenium', 'Vitamin C (ascorbate)', 'Vitex agnus-castus', 'Vitamin D3+K2', 'Choline'],
  },
  {
    name: 'The Crash',
    sub: 'Luteal Phase · Days 18–28',
    phase: 'Luteal',
    days: 'Days 18–28',
    color: '#A78BCA',
    bgLight: '#F5F0FA',
    emoji: '☁️',
    headline: 'Your time to shine',
    homeBody:
      'We support your body in calming anxiety and mood swings, improving sleep, and easing bloating, cravings, and fatigue as hormones shift.',
    showHomeMissionLabel: true,
    hideChips: true,
    symptomsLabel: 'You might feel',
    symptoms: ['Mood swings', 'Bloating', 'Anxiety', 'Sleep issues'],
    keyIngredients: ['Magnesium L-threonate', 'Vitamin B6', 'Saffron extract', 'Passionflower'],
    hormone: 'Progesterone rises then falls',
    mission: 'Calm the storm, protect sleep, ease PMS',
    scienceBody:
      "The longest stretch in your cycle. Progesterone rises to prepare your body in case of pregnancy, then, if there's no pregnancy, both it and estrogen drop sharply just before your next period. That sudden hormonal withdrawal is what sets off the symptoms known as PMS. You might notice trouble sleeping, food cravings, breast tenderness, and shifts in mood.",
    studies: [
      { title: 'Magnesium L-threonate and GABA modulation', journal: 'Neuropharmacology, 2022' },
      { title: 'Vitamin B6 (P5P) for premenstrual syndrome: RCT review', journal: 'Cochrane Review, 2023' },
      { title: 'Saffron extract vs placebo for PMDD', journal: 'BJOG, 2022' },
    ],
    ingredients: ['Magnesium L-threonate', 'Vitamin B6 (P5P)', 'Saffron extract affron®', 'Passionflower', 'Glycine', 'L-theanine'],
  },
]

export const differentiators = [
  { label: 'Women specific', others: true, flourish: true },
  { label: 'Cycle-synced formula', others: true, flourish: true },
  { label: 'Sequenced by phase', others: false, flourish: true },
  { label: 'Water soluble — Bioavailability', others: false, flourish: true },
  { label: 'Vegan, ethically sourced', others: false, flourish: true },
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
