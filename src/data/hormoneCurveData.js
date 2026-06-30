/** Stylized 28-day hormone levels (0–100) for the cycle chart — illustrative, not clinical. */

export const CYCLE_DAYS = 28

export const chartPhases = [
  { name: 'The Drain', label: 'Menstrual', start: 1, end: 7, color: '#FF6B6B', bg: '#FFF0F0' },
  { name: 'The Rise', label: 'Follicular', start: 8, end: 13, color: '#6DB589', bg: '#F0FAF3' },
  { name: 'The Peak', label: 'Ovulatory', start: 14, end: 17, color: '#FF6EB4', bg: '#FFF0F8' },
  { name: 'The Crash', label: 'Luteal', start: 18, end: 28, color: '#A78BCA', bg: '#F5F0FA' },
]

/** day → relative level */
const estrogen = {
  1: 14, 2: 11, 3: 10, 4: 12, 5: 14, 6: 18, 7: 22,
  8: 28, 9: 36, 10: 44, 11: 52, 12: 62, 13: 76, 14: 68,
  15: 54, 16: 48, 17: 46, 18: 50, 19: 58, 20: 66, 21: 72,
  22: 74, 23: 70, 24: 62, 25: 48, 26: 32, 27: 20, 28: 12,
}

const progesterone = {
  1: 8, 2: 8, 3: 7, 4: 7, 5: 8, 6: 8, 7: 9,
  8: 9, 9: 10, 10: 10, 11: 11, 12: 11, 13: 12, 14: 14,
  15: 22, 16: 32, 17: 44, 18: 56, 19: 66, 20: 74, 21: 80,
  22: 82, 23: 78, 24: 68, 25: 52, 26: 34, 27: 18, 28: 8,
}

const lh = {
  1: 6, 2: 6, 3: 6, 4: 6, 5: 7, 6: 7, 7: 8,
  8: 8, 9: 9, 10: 10, 11: 12, 12: 18, 13: 42, 14: 98,
  15: 28, 16: 10, 17: 8, 18: 8, 19: 8, 20: 8, 21: 8,
  22: 8, 23: 8, 24: 8, 25: 8, 26: 8, 27: 7, 28: 6,
}

const fsh = {
  1: 18, 2: 22, 3: 20, 4: 16, 5: 14, 6: 12, 7: 11,
  8: 10, 9: 9, 10: 9, 11: 10, 12: 14, 13: 22, 14: 18,
  15: 12, 16: 10, 17: 9, 18: 9, 19: 9, 20: 9, 21: 9,
  22: 9, 23: 9, 24: 9, 25: 9, 26: 9, 27: 8, 28: 8,
}

export const hormones = [
  { key: 'estrogen', label: 'Estrogen', color: '#FF6EB4', width: 2.5, dash: null, values: estrogen },
  { key: 'progesterone', label: 'Progesterone', color: '#A78BCA', width: 2.5, dash: null, values: progesterone },
  { key: 'lh', label: 'LH', color: '#D4A03A', width: 2, dash: null, values: lh },
  { key: 'fsh', label: 'FSH', color: '#6DB589', width: 2, dash: null, values: fsh },
]

export const dayMarkers = [7, 14, 21, 28]
