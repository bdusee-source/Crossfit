import { exercises, wodNames, formatDescs, tips } from './data.js'

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
const DIFF = { Beginner: 0, Intermediate: 1, Advanced: 2, RX: 2 }

const rnd    = arr => arr[Math.floor(Math.random() * arr.length)]
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)

// Kies een rep-waarde op basis van moeilijkheid
function pickRep(ex, diffIdx) {
  return ex.reps[Math.min(diffIdx, ex.reps.length - 1)]
}

// Formatteer reps + eenheid als string
function repLabel(ex, diffIdx) {
  const r = pickRep(ex, diffIdx)
  return ex.unit ? `${r} ${ex.unit}` : `${r} reps`
}

// Extra info (gewicht, hoogte, scaled)
function extraLabel(ex, difficulty) {
  const parts = []
  if (ex.weight) parts.push(ex.weight)
  if (ex.height) parts.push(ex.height)
  if (ex.scaled && difficulty === 'Beginner') parts.push(`scaled: ${ex.scaled}`)
  return parts.join(' · ')
}

// Bouw pool uit geselecteerde categorieën, shuffle, verwijder duplicaten op naam
function buildPool(categories, diffIdx) {
  const seen = new Set()
  let pool = []
  categories.forEach(cat => {
    if (exercises[cat]) pool.push(...exercises[cat])
  })
  pool = shuffle(pool).filter(ex => {
    if (seen.has(ex.name)) return false
    seen.add(ex.name)
    return true
  })
  return pool
}

// Kies WOD-naam, vermijd de laatste 8 gebruikte
function pickName(history) {
  const recent = new Set(history.slice(0, 8).map(h => h.name))
  const available = wodNames.filter(n => !recent.has(n))
  return rnd(available.length ? available : wodNames)
}

// ─────────────────────────────────────────────────────────────────────────────
// Format-specifieke rep-schema generators
// ─────────────────────────────────────────────────────────────────────────────

// AMRAP: kies een ronde-schema dat past bij de timecap
function amrapReps(timecap, diffIdx) {
  const schemas = {
    short:  [[5, 10], [3, 6, 9], [5, 10, 15]],
    medium: [[10, 15], [8, 12, 16], [5, 10, 15, 20]],
    long:   [[10, 20], [15, 20, 25], [10, 15, 20, 25]],
  }
  const tier = timecap <= 10 ? 'short' : timecap <= 20 ? 'medium' : 'long'
  return rnd(schemas[tier])
}

// For Time: kies een klassiek CrossFit rep-schema
function forTimeReps(timecap, diffIdx) {
  const schemas = [
    [21, 15, 9],
    [15, 12, 9],
    [10, 8, 6],
    [9, 7, 5],
    [12, 9, 6, 3],
    [5, 4, 3, 2, 1],
    [21, 18, 15, 12, 9],
  ]
  if (timecap >= 20) schemas.push([21, 15, 9, 6, 3], [20, 16, 12, 8, 4])
  return rnd(schemas)
}

// EMOM: aantal oefeningen per minuut + reps per oefening
function emomReps(timecap, diffIdx) {
  const perMin = timecap <= 10 ? 2 : 3
  const repOptions = [
    [5, 10], [3, 8], [5, 8], [10, 15],
    [5, 10, 15], [3, 6, 10], [8, 10, 12],
  ]
  return rnd(repOptions).slice(0, perMin)
}

// ─────────────────────────────────────────────────────────────────────────────
// Hoofd generator
// ─────────────────────────────────────────────────────────────────────────────
export function generateWOD({ categories, format, timecap, rounds, difficulty, exerciseCount = 4 }) {
  if (!categories.length) throw new Error('Selecteer minimaal één type oefening')

  const diffIdx = DIFF[difficulty] ?? 1
  const history = getHistory()
  const pool    = buildPool(categories, diffIdx)

  if (!pool.length) throw new Error('Geen oefeningen gevonden voor deze selectie')

  // Clamp exerciseCount to what the pool can deliver
  const maxCount = Math.min(exerciseCount, pool.length)

  let exItems = []
  let description = formatDescs[format]

  // ── AMRAP ────────────────────────────────────────────────────────────────
  if (format === 'AMRAP') {
    const repSchema = amrapReps(timecap, diffIdx)
    // Stretch or shrink the rep schema to match exerciseCount
    const count    = maxCount
    const selected = pool.slice(0, count)
    exItems = selected.map((ex, i) => {
      const rep = repSchema[i % repSchema.length]
      return {
        name:  ex.name,
        label: ex.unit ? `${rep} ${ex.unit}` : `${rep} reps`,
        extra: extraLabel(ex, difficulty),
      }
    })
    description = `AMRAP ${timecap} min — ${count} oefeningen per ronde`
  }

  // ── FOR TIME ─────────────────────────────────────────────────────────────
  else if (format === 'For Time') {
    const variant = rnd(['schema', 'rounds', 'rounds'])
    if (variant === 'schema') {
      const repSchema = forTimeReps(timecap, diffIdx)
      const count     = maxCount
      const selected  = pool.slice(0, count)
      const schemaStr = repSchema.join('-')
      exItems = selected.map(ex => ({
        name:  ex.name,
        label: ex.unit ? `${repSchema.join('/')} ${ex.unit}` : `${schemaStr} reps`,
        extra: extraLabel(ex, difficulty),
      }))
      description = `For Time — ${schemaStr} reps · ${timecap} min cap`
    } else {
      const count    = maxCount
      const selected = pool.slice(0, count)
      exItems = selected.map(ex => ({
        name:  ex.name,
        label: repLabel(ex, diffIdx),
        extra: extraLabel(ex, difficulty),
      }))
      description = `${rounds} rondes for time · ${timecap} min cap`
    }
  }

  // ── EMOM ─────────────────────────────────────────────────────────────────
  else if (format === 'EMOM') {
    const count    = maxCount
    const selected = pool.slice(0, count)
    // Generate one rep value per selected exercise
    const repsPerEx = emomReps(timecap, diffIdx)
    exItems = selected.map((ex, i) => ({
      name:  ex.name,
      label: ex.unit
        ? `${repsPerEx[i % repsPerEx.length]} ${ex.unit}`
        : `${repsPerEx[i % repsPerEx.length]} reps`,
      extra: extraLabel(ex, difficulty),
    }))
    description = `EMOM ${timecap} min — ${count} oefeningen, elke minuut herhalen`
  }

  // ── CHIPPER ──────────────────────────────────────────────────────────────
  else if (format === 'Chipper') {
    const chipBase   = [50, 45, 40, 35, 30, 25, 20, 15]
    const count      = maxCount
    const selected   = pool.slice(0, count)
    // Extend chipBase if needed
    while (chipBase.length < count) chipBase.push(chipBase[chipBase.length - 1] - 5 || 10)
    exItems = selected.map((ex, i) => ({
      name:  ex.name,
      label: ex.unit ? `${chipBase[i]} ${ex.unit}` : `${chipBase[i]} reps`,
      extra: extraLabel(ex, difficulty),
    }))
    description = `Chipper for time — ${count} oefeningen, elk één keer · ${timecap} min cap`
  }

  // ── LADDER ───────────────────────────────────────────────────────────────
  else if (format === 'Ladder') {
    const count    = maxCount
    const selected = pool.slice(0, count)
    exItems = selected.map(ex => ({
      name:  ex.name,
      label: `1 – 2 – 3 – ... – ${rounds}`,
      extra: extraLabel(ex, difficulty),
    }))
    description = `Ladder for time — 1 t/m ${rounds} reps per oefening · ${timecap} min cap`
  }

  return {
    name:        pickName(history),
    format,
    timecap,
    rounds,
    difficulty,
    description,
    exItems,
    tip: rnd(tips),
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// WOD → platte tekst (voor kopiëren)
// ─────────────────────────────────────────────────────────────────────────────
export function wodToText(wod) {
  let txt = `WOD: ${wod.name}\n`
  txt += `${wod.format} | ${wod.timecap} min | ${wod.rounds} rondes | ${wod.difficulty}\n`
  txt += `${wod.description}\n\n`
  wod.exItems.forEach((ex, i) => {
    txt += `${i + 1}. ${ex.name} — ${ex.label}`
    if (ex.extra) txt += ` (${ex.extra})`
    txt += '\n'
  })
  txt += `\nTip: ${wod.tip}`
  return txt
}

// ─────────────────────────────────────────────────────────────────────────────
// Geschiedenis (localStorage)
// ─────────────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'wod_history'

export function getHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') }
  catch { return [] }
}

export function saveToHistory(wod) {
  const history = getHistory()
  history.unshift({
    name:       wod.name,
    format:     wod.format,
    timecap:    wod.timecap,
    difficulty: wod.difficulty,
    date:       new Date().toLocaleDateString('nl-NL'),
  })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 10)))
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY)
}
