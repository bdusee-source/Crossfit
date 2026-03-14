import './style.css'
import { generateWOD, wodToText, getHistory, saveToHistory, clearHistory } from './wod.js'
import { Timer } from './timer.js'
import { openWorkouts, openYears } from './openData.js'
import { girlsWorkouts, heroWorkouts } from './benchmarkData.js'

// ===== RENDER SHELL =====
document.querySelector('#app').innerHTML = `
  <header>
    <p class="eyebrow">CrossFit Training Tool</p>
    <h1>WOD<br><span>Generator</span></h1>
    <p class="header-sub">Genereer een eigen WOD of herhaal een officieel Open workout</p>
  </header>

  <div class="tabs">
    <button class="tab active" data-tab="generator">⚡ Generator</button>
    <button class="tab" data-tab="open">🏆 Open Games</button>
    <button class="tab" data-tab="benchmark">⭐ Benchmarks</button>
    <button class="tab" data-tab="docs">📖 Docs</button>
  </div>

  <!-- ===== TAB: GENERATOR ===== -->
  <div id="tab-generator" class="tab-panel">

    <div class="card">
      <p class="section-label">Timecap</p>
      <div class="timecap-display">
        <span class="timecap-number" id="tc-num">20</span>
        <span class="timecap-unit">minuten</span>
      </div>
      <input type="range" id="timecap" min="1" max="60" value="20" step="1" />
      <div class="range-labels"><span>1 min</span><span>30 min</span><span>60 min</span></div>
    </div>

    <div class="card">
      <p class="section-label">WOD formaat</p>
      <div class="btn-group" id="format-group">
        <button class="fmt-btn active" data-fmt="AMRAP">AMRAP</button>
        <button class="fmt-btn" data-fmt="For Time">For Time</button>
        <button class="fmt-btn" data-fmt="EMOM">EMOM</button>
        <button class="fmt-btn" data-fmt="Chipper">Chipper</button>
        <button class="fmt-btn" data-fmt="Ladder">Ladder</button>
      </div>
    </div>

    <div class="card">
      <p class="section-label">Instellingen</p>
      <div class="select-row">
        <div class="select-wrap">
          <select id="difficulty">
            <option value="Beginner">Beginner</option>
            <option value="Intermediate" selected>Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="RX">RX / Elite</option>
          </select>
          <span class="select-arrow">▼</span>
        </div>
        <div class="select-wrap">
          <select id="rounds">
            <option value="3">3 rondes</option>
            <option value="5" selected>5 rondes</option>
            <option value="7">7 rondes</option>
            <option value="10">10 rondes</option>
          </select>
          <span class="select-arrow">▼</span>
        </div>
        <div class="select-wrap">
          <select id="exercise-count">
            <option value="2">2 oefeningen</option>
            <option value="3">3 oefeningen</option>
            <option value="4" selected>4 oefeningen</option>
            <option value="5">5 oefeningen</option>
            <option value="6">6 oefeningen</option>
            <option value="7">7 oefeningen</option>
            <option value="8">8 oefeningen</option>
          </select>
          <span class="select-arrow">▼</span>
        </div>
      </div>
    </div>

    <div class="card">
      <p class="section-label">Type oefeningen</p>
      <div class="tag-grid" id="categories">
        <span class="tag active" data-cat="Gymnastics">Gymnastics</span>
        <span class="tag active" data-cat="Weightlifting">Weightlifting</span>
        <span class="tag active" data-cat="Cardio">Cardio</span>
        <span class="tag" data-cat="Bodyweight">Bodyweight</span>
        <span class="tag" data-cat="Kettlebell">Kettlebell</span>
        <span class="tag" data-cat="Dumbbell">Dumbbell</span>
        <span class="tag" data-cat="Core">Core</span>
        <span class="tag" data-cat="Plyometrics">Plyometrics</span>
        <span class="tag" data-cat="Running">Hardlopen</span>
      </div>
    </div>

    <button class="generate-btn" id="gen-btn">⚡ GENEREER WOD</button>

    <div class="wod-output" id="wod-output"></div>

    <div class="timer-card" id="timer-card">
      <p class="timer-label">Timecap</p>
      <div class="timer-display" id="timer-display">20:00</div>
      <div class="timer-progress">
        <div class="timer-progress-bar" id="progress-bar"></div>
      </div>
      <div class="timer-btns">
        <button class="timer-btn primary" id="t-start">Start</button>
        <button class="timer-btn" id="t-pause">Pauze</button>
        <button class="timer-btn" id="t-reset">Reset</button>
      </div>
    </div>

    <div class="history-section" id="history-section" style="display:none">
      <div class="history-header">
        <span class="history-title">Recente WODs</span>
        <button class="clear-btn" id="clear-history-btn">Wis geschiedenis</button>
      </div>
      <div class="history-list" id="history-list"></div>
    </div>

  </div>

  <!-- ===== TAB: OPEN GAMES ===== -->
  <div id="tab-open" class="tab-panel" style="display:none">

    <div class="open-controls card">
      <div class="open-filters">
        <div class="select-wrap" style="flex:1;min-width:120px">
          <select id="open-year">
            <option value="all">Alle jaren</option>
            ${openYears.map(y => `<option value="${y}">${y}</option>`).join('')}
          </select>
          <span class="select-arrow">▼</span>
        </div>
        <div class="select-wrap" style="flex:1;min-width:120px">
          <select id="open-type">
            <option value="all">Alle formats</option>
            <option value="AMRAP">AMRAP</option>
            <option value="For Time">For Time</option>
          </select>
          <span class="select-arrow">▼</span>
        </div>
        <button class="action-btn accent" id="open-random-btn" style="white-space:nowrap">🎲 Willekeurig</button>
      </div>
    </div>

    <div id="open-list"></div>

    <div class="timer-card" id="open-timer-card">
      <p class="timer-label" id="open-timer-label">Timecap</p>
      <div class="timer-display" id="open-timer-display">00:00</div>
      <div class="timer-progress">
        <div class="timer-progress-bar" id="open-progress-bar"></div>
      </div>
      <div class="timer-btns">
        <button class="timer-btn primary" id="ot-start">Start</button>
        <button class="timer-btn" id="ot-pause">Pauze</button>
        <button class="timer-btn" id="ot-reset">Reset</button>
      </div>
    </div>

  </div>

  <!-- ===== TAB: BENCHMARKS ===== -->
  <div id="tab-benchmark" class="tab-panel" style="display:none">

    <div class="open-controls card">
      <div class="open-filters">
        <div class="select-wrap" style="flex:1;min-width:140px">
          <select id="bench-category">
            <option value="girls">The Girls</option>
            <option value="heroes">Hero WODs</option>
          </select>
          <span class="select-arrow">▼</span>
        </div>
        <div class="select-wrap" style="flex:1;min-width:120px">
          <select id="bench-type">
            <option value="all">Alle formats</option>
            <option value="AMRAP">AMRAP</option>
            <option value="For Time">For Time</option>
            <option value="EMOM">EMOM</option>
          </select>
          <span class="select-arrow">▼</span>
        </div>
        <button class="action-btn accent" id="bench-random-btn" style="white-space:nowrap">🎲 Willekeurig</button>
      </div>
    </div>

    <div id="bench-list"></div>

    <div class="timer-card" id="bench-timer-card">
      <p class="timer-label" id="bench-timer-label">Timecap</p>
      <div class="timer-display" id="bench-timer-display">00:00</div>
      <div class="timer-progress">
        <div class="timer-progress-bar" id="bench-progress-bar"></div>
      </div>
      <div class="timer-btns">
        <button class="timer-btn primary" id="bt-start">Start</button>
        <button class="timer-btn" id="bt-pause">Pauze</button>
        <button class="timer-btn" id="bt-reset">Reset</button>
      </div>
    </div>

  </div>

  <!-- ===== TAB: DOCS ===== -->
  <div id="tab-docs" class="tab-panel" style="display:none">

    <div class="docs-hero">
      <p class="eyebrow">Handleiding</p>
      <h2 class="docs-title">Hoe gebruik je de<br><span>WOD Generator?</span></h2>
      <p class="docs-intro">Alles wat je nodig hebt voor je dagelijkse CrossFit training — van eigen WODs tot officiële Open workouts en klassieke benchmarks.</p>
    </div>

    <!-- SECTION: Generator -->
    <div class="docs-section">
      <div class="docs-section-header">
        <span class="docs-icon">⚡</span>
        <div>
          <h3>Generator</h3>
          <p>Maak je eigen gepersonaliseerde WOD</p>
        </div>
      </div>
      <div class="docs-steps">
        <div class="docs-step">
          <span class="docs-step-num">1</span>
          <div>
            <strong>Stel de timecap in</strong>
            <p>Sleep de slider van 1 tot 60 minuten. De timecap is de maximale tijd die je voor de workout hebt.</p>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">2</span>
          <div>
            <strong>Kies een WOD-formaat</strong>
            <p>Selecteer één van de vijf formaten:</p>
            <div class="docs-tag-list">
              <span class="docs-tag"><strong>AMRAP</strong> — As Many Rounds As Possible: zoveel rondes als je kunt binnen de tijd.</span>
              <span class="docs-tag"><strong>For Time</strong> — Voltooi alle reps zo snel mogelijk, voor de timecap.</span>
              <span class="docs-tag"><strong>EMOM</strong> — Every Minute On the Minute: start elke minuut opnieuw.</span>
              <span class="docs-tag"><strong>Chipper</strong> — Werk van boven naar beneden door de lijst, elke oefening één keer.</span>
              <span class="docs-tag"><strong>Ladder</strong> — Verhoog het aantal reps elke ronde (1-2-3-...-N).</span>
            </div>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">3</span>
          <div>
            <strong>Kies moeilijkheidsgraad en rondes</strong>
            <p>De moeilijkheidsgraad past automatisch gewichten en reps aan:</p>
            <div class="docs-tag-list">
              <span class="docs-tag"><strong>Beginner</strong> — Lichte gewichten, minder reps. Scaled alternatieven worden getoond waar beschikbaar.</span>
              <span class="docs-tag"><strong>Intermediate</strong> — Standaard CrossFit gewichten en reps.</span>
              <span class="docs-tag"><strong>Advanced</strong> — Zwaardere gewichten, meer reps.</span>
              <span class="docs-tag"><strong>RX / Elite</strong> — Officiële competitiegewichten, maximale intensiteit.</span>
            </div>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">4</span>
          <div>
            <strong>Selecteer oefeningstypes</strong>
            <p>Activeer één of meer categorieën. Actieve categorieën zijn rood gemarkeerd. Je kunt combinaties maken, zoals alleen Cardio + Bodyweight voor een thuis-workout.</p>
            <div class="docs-tag-list">
              <span class="docs-tag"><strong>Gymnastics</strong> — Pull-ups, muscle-ups, toes-to-bar, handstand push-ups</span>
              <span class="docs-tag"><strong>Weightlifting</strong> — Cleans, snatches, thrusters, deadlifts</span>
              <span class="docs-tag"><strong>Cardio</strong> — Row, run, assault bike, double-unders</span>
              <span class="docs-tag"><strong>Bodyweight</strong> — Burpees, air squats, push-ups, lunges</span>
              <span class="docs-tag"><strong>Kettlebell</strong> — KB swings, goblet squats, turkish get-ups</span>
              <span class="docs-tag"><strong>Dumbbell</strong> — DB snatches, thrusters, step-ups</span>
              <span class="docs-tag"><strong>Core</strong> — Plank, hollow holds, V-ups, GHD sit-ups</span>
              <span class="docs-tag"><strong>Plyometrics</strong> — Box jumps, broad jumps, jump squats</span>
              <span class="docs-tag"><strong>Hardlopen</strong> — Runs van 200m tot 5km, sprints en heuvelsprints</span>
            </div>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">5</span>
          <div>
            <strong>Genereer je WOD</strong>
            <p>Klik op <em>⚡ Genereer WOD</em>. Je krijgt direct een complete workout met oefeningen, gewichten, reps en een coachingstip. Elke klik genereert een unieke combinatie.</p>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">6</span>
          <div>
            <strong>Gebruik de acties</strong>
            <div class="docs-tag-list">
              <span class="docs-tag"><strong>▶ Start Timer</strong> — Start een countdown met de ingestelde timecap. De balk wordt oranje onder 40% en rood onder 15%. Bij 00:00 verschijnt TIME!</span>
              <span class="docs-tag"><strong>Kopieer WOD</strong> — Kopieert de volledige workout als tekst naar je klembord, inclusief gewichten en tip.</span>
              <span class="docs-tag"><strong>Print</strong> — Opent de printdialoog. De UI-elementen worden verborgen zodat alleen de workout zichtbaar is.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="docs-divider"></div>

    <!-- SECTION: Open Games -->
    <div class="docs-section">
      <div class="docs-section-header">
        <span class="docs-icon">🏆</span>
        <div>
          <h3>Open Games</h3>
          <p>Officiële CrossFit Open workouts van 2011 t/m 2026</p>
        </div>
      </div>
      <div class="docs-steps">
        <div class="docs-step">
          <span class="docs-step-num">1</span>
          <div>
            <strong>Filter op jaar of formaat</strong>
            <p>Gebruik de dropdowns om te filteren op een specifiek jaar (2011–2026) of formaat (AMRAP / For Time). Alle 70+ Open workouts zijn beschikbaar.</p>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">2</span>
          <div>
            <strong>Willekeurige Open workout</strong>
            <p>Klik op <em>🎲 Willekeurig</em> voor een random Open workout uit de huidige filter-selectie. Handig als je niet weet welke workout je wil doen.</p>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">3</span>
          <div>
            <strong>Start de timer</strong>
            <p>Elke workout heeft een eigen <em>▶ Start Timer</em> knop die automatisch de juiste timecap inlaadt. Ideaal om de officiële workout-ervaring na te bootsen.</p>
          </div>
        </div>
      </div>
      <div class="docs-note">
        <strong>Gewichten</strong> zijn weergegeven als ♂/♀ RX. Bijvoorbeeld: <em>61/43 kg</em> = 61 kg voor mannen, 43 kg voor vrouwen. Open workouts bevatten de officiële competitiegewichten.
      </div>
    </div>

    <div class="docs-divider"></div>

    <!-- SECTION: Benchmarks -->
    <div class="docs-section">
      <div class="docs-section-header">
        <span class="docs-icon">⭐</span>
        <div>
          <h3>Benchmarks</h3>
          <p>The Girls en Hero WODs — de klassieke CrossFit testworkouts</p>
        </div>
      </div>
      <div class="docs-steps">
        <div class="docs-step">
          <span class="docs-step-num">1</span>
          <div>
            <strong>The Girls</strong>
            <p>21 klassieke benchmark-workouts waarmee je je voortgang over tijd kunt meten. Voorbeelden: Fran (21-15-9 thrusters + pull-ups), Cindy (AMRAP 20 min), Murph. Doe dezelfde Girls-workout elke paar maanden om je progressie bij te houden.</p>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">2</span>
          <div>
            <strong>Hero WODs</strong>
            <p>19 workouts ter ere van gevallen militairen, politieagenten en brandweerlieden. Elk Hero WOD toont een eretribute met naam en datum. Deze workouts zijn doorgaans zwaarder dan de Girls en bedoeld als tribute.</p>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">3</span>
          <div>
            <strong>Filter en timer</strong>
            <p>Filter op categorie (Girls / Heroes) en formaat. Gebruik de <em>▶ Start Timer</em> per workout voor een automatische countdown op de juiste timecap.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="docs-divider"></div>

    <!-- SECTION: Timer -->
    <div class="docs-section">
      <div class="docs-section-header">
        <span class="docs-icon">⏱</span>
        <div>
          <h3>Timer</h3>
          <p>Countdown met visuele waarschuwingen</p>
        </div>
      </div>
      <div class="docs-steps">
        <div class="docs-step">
          <span class="docs-step-num">·</span>
          <div>
            <strong>Start / Pauze / Reset</strong>
            <p>De timer telt af van de timecap naar nul. Gebruik Pauze voor een korte onderbreking en Reset om opnieuw te beginnen met de originele tijd.</p>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">·</span>
          <div>
            <strong>Voortgangsbalk</strong>
            <p>De rode balk geeft aan hoeveel tijd er nog is. De kleur verandert: rood → oranje onder 40% → rood knipperend in de laatste 30 seconden. Bij 00:00 verschijnt TIME! in de display.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="docs-divider"></div>

    <!-- SECTION: Geschiedenis -->
    <div class="docs-section">
      <div class="docs-section-header">
        <span class="docs-icon">🕐</span>
        <div>
          <h3>Geschiedenis</h3>
          <p>Je laatste 10 gegenereerde WODs worden automatisch opgeslagen</p>
        </div>
      </div>
      <div class="docs-steps">
        <div class="docs-step">
          <span class="docs-step-num">·</span>
          <div>
            <strong>Automatisch opslaan</strong>
            <p>Elke keer dat je een WOD genereert via de Generator, wordt deze opgeslagen in je browser (localStorage). De geschiedenis blijft bewaard, ook na het sluiten van de browser.</p>
          </div>
        </div>
        <div class="docs-step">
          <span class="docs-step-num">·</span>
          <div>
            <strong>Wis geschiedenis</strong>
            <p>Klik op <em>Wis geschiedenis</em> om alle opgeslagen WODs te verwijderen. Let op: dit kan niet ongedaan worden gemaakt.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="docs-divider"></div>

    <!-- SECTION: Termen -->
    <div class="docs-section">
      <div class="docs-section-header">
        <span class="docs-icon">📚</span>
        <div>
          <h3>CrossFit termen</h3>
          <p>Veelgebruikte afkortingen en begrippen</p>
        </div>
      </div>
      <div class="docs-glossary">
        <div class="docs-glossary-item"><span class="docs-term">WOD</span><span>Workout of the Day</span></div>
        <div class="docs-glossary-item"><span class="docs-term">AMRAP</span><span>As Many Rounds/Reps As Possible</span></div>
        <div class="docs-glossary-item"><span class="docs-term">EMOM</span><span>Every Minute On the Minute</span></div>
        <div class="docs-glossary-item"><span class="docs-term">RX</span><span>Als voorgeschreven — officieel gewicht en bewegingsstandaard, geen aanpassingen</span></div>
        <div class="docs-glossary-item"><span class="docs-term">Scaled</span><span>Aangepaste versie met lager gewicht of alternatieve beweging</span></div>
        <div class="docs-glossary-item"><span class="docs-term">For Time</span><span>Voltooi de workout zo snel mogelijk</span></div>
        <div class="docs-glossary-item"><span class="docs-term">Timecap</span><span>Maximale tijd voor de workout — daarna stop je, ongeacht hoeveel reps je nog hebt</span></div>
        <div class="docs-glossary-item"><span class="docs-term">Chipper</span><span>Lange workout waarbij je elke oefening slechts één keer doet, van boven naar beneden</span></div>
        <div class="docs-glossary-item"><span class="docs-term">Ladder</span><span>Elke ronde verhoog je de reps: 1-2-3-4-5 enzovoort</span></div>
        <div class="docs-glossary-item"><span class="docs-term">TTB</span><span>Toes-to-Bar — hangend aan de bar, voeten aanraken de stang</span></div>
        <div class="docs-glossary-item"><span class="docs-term">HSPU</span><span>Handstand Push-up</span></div>
        <div class="docs-glossary-item"><span class="docs-term">C2B</span><span>Chest-to-Bar pull-up — borst raakt de stang</span></div>
        <div class="docs-glossary-item"><span class="docs-term">MU</span><span>Muscle-up — ring of bar</span></div>
        <div class="docs-glossary-item"><span class="docs-term">KB</span><span>Kettlebell</span></div>
        <div class="docs-glossary-item"><span class="docs-term">DB</span><span>Dumbbell</span></div>
        <div class="docs-glossary-item"><span class="docs-term">GHD</span><span>Glute-Ham Developer — machine voor sit-ups en back extensions</span></div>
        <div class="docs-glossary-item"><span class="docs-term">DU</span><span>Double-unders — springtouw twee keer onder je voeten per sprong</span></div>
        <div class="docs-glossary-item"><span class="docs-term">OHS</span><span>Overhead Squat</span></div>
        <div class="docs-glossary-item"><span class="docs-term">S2OH</span><span>Shoulder-to-Overhead — elke manier om de stang boven je hoofd te brengen</span></div>
        <div class="docs-glossary-item"><span class="docs-term">♂/♀</span><span>Gewichten voor mannen / vrouwen — bijv. 61/43 kg</span></div>
      </div>
    </div>

  </div>

  <footer>WOD Generator &mdash; CrossFit Training Tool &mdash; 3... 2... 1... Go!</footer>
`

// ===== TABS =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.tab-panel').forEach(p => (p.style.display = 'none'))
    tab.classList.add('active')
    document.getElementById(`tab-${tab.dataset.tab}`).style.display = 'block'
  })
})

// ===== GENERATOR =====
let selectedFormat = 'AMRAP'
let currentWOD = null

document.getElementById('timecap').addEventListener('input', e => {
  document.getElementById('tc-num').textContent = e.target.value
})

document.getElementById('format-group').addEventListener('click', e => {
  const btn = e.target.closest('.fmt-btn')
  if (!btn) return
  document.querySelectorAll('.fmt-btn').forEach(b => b.classList.remove('active'))
  btn.classList.add('active')
  selectedFormat = btn.dataset.fmt
})

document.getElementById('categories').addEventListener('click', e => {
  const tag = e.target.closest('.tag')
  if (tag) tag.classList.toggle('active')
})

document.getElementById('gen-btn').addEventListener('click', () => {
  const categories = [...document.querySelectorAll('.tag.active')].map(t => t.dataset.cat)
  try {
    currentWOD = generateWOD({
      categories,
      format:        selectedFormat,
      timecap:       parseInt(document.getElementById('timecap').value),
      rounds:        parseInt(document.getElementById('rounds').value),
      difficulty:    document.getElementById('difficulty').value,
      exerciseCount: parseInt(document.getElementById('exercise-count').value),
    })
  } catch (err) {
    showToast(err.message)
    return
  }
  renderWOD(currentWOD)
  saveToHistory(currentWOD)
  renderHistory()
  document.getElementById('timer-card').classList.remove('visible')
  genTimer.set(currentWOD.timecap * 60)
  renderGenTimer(genTimer.timeLeft, genTimer.totalTime)
})

function renderWOD(wod) {
  const out = document.getElementById('wod-output')
  out.innerHTML = `
    <div class="wod-header">
      <div>
        <div class="wod-name">WOD: ${wod.name}</div>
        <div class="wod-desc">${wod.description}</div>
      </div>
      <div class="badges">
        <span class="badge badge-red">${wod.format}</span>
        <span class="badge badge-blue">${wod.timecap} min</span>
        <span class="badge badge-gray">${wod.rounds} rondes</span>
        <span class="badge badge-gray">${wod.difficulty}</span>
      </div>
    </div>
    <ul class="exercise-list" id="exercise-list"></ul>
    <div class="tip-box">
      <span style="font-size:16px;flex-shrink:0">💡</span>
      <span>${wod.tip}</span>
    </div>
    <div class="wod-actions">
      <button class="action-btn accent" id="start-timer-btn">▶ Start Timer</button>
      <button class="action-btn" id="copy-btn">Kopieer WOD</button>
      <button class="action-btn" id="print-btn">Print</button>
    </div>
  `

  let html = ''
  if (wod.format === 'Ladder') {
    html += `<li class="exercise-item" style="opacity:0.45;">
      <span class="ex-num">→</span>
      <span class="ex-name" style="font-size:13px;color:var(--t2);">Schema: 1 – 2 – 3 – ... – ${wod.rounds} reps</span>
    </li>`
  }
  wod.exItems.forEach((ex, i) => {
    const r = wod.format === 'Ladder' ? `1→${wod.rounds}` : ex.label
    html += `<li class="exercise-item">
      <span class="ex-num">${i + 1}</span>
      <div style="flex:1"><div class="ex-name">${ex.name}</div>${ex.extra ? `<div class="ex-extra">${ex.extra}</div>` : ''}</div>
      <span class="ex-reps">${r}</span>
    </li>`
  })
  document.getElementById('exercise-list').innerHTML = html

  // Re-attach action button listeners (innerHTML replaced them)
  document.getElementById('start-timer-btn').addEventListener('click', () => {
    const tc = parseInt(document.getElementById('timecap').value)
    genTimer.set(tc * 60); renderGenTimer(genTimer.timeLeft, genTimer.totalTime)
    const card = document.getElementById('timer-card')
    card.classList.add('visible'); card.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
  document.getElementById('copy-btn').addEventListener('click', () => {
    if (!currentWOD) return
    navigator.clipboard.writeText(wodToText(currentWOD)).then(() => showToast('WOD gekopieerd!'))
  })
  document.getElementById('print-btn').addEventListener('click', () => window.print())

  out.classList.remove('visible'); void out.offsetWidth; out.classList.add('visible')
  out.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

// ===== GENERATOR TIMER =====
const genTimerEl = document.getElementById('timer-display')
const genBarEl = document.getElementById('progress-bar')

const genTimer = new Timer({
  onTick: renderGenTimer,
  onDone: () => { genTimerEl.className = 'timer-display done'; genTimerEl.textContent = 'TIME!'; genBarEl.style.width = '0%'; showToast('Time is up! 🔔') },
})

function renderGenTimer(tl, tot) {
  genTimerEl.textContent = Timer.format(tl)
  genTimerEl.className = 'timer-display' + (tl <= 30 && tl > 0 ? ' warning' : '')
  const p = tot > 0 ? (tl / tot) * 100 : 100
  genBarEl.style.width = p + '%'
  genBarEl.style.background = p < 15 ? '#E24B4A' : p < 40 ? '#EF9F27' : '#E24B4A'
}

document.getElementById('t-start').addEventListener('click', () => genTimer.start())
document.getElementById('t-pause').addEventListener('click', () => genTimer.pause())
document.getElementById('t-reset').addEventListener('click', () => { genTimer.reset(); genTimerEl.className = 'timer-display' })

function renderHistory() {
  const h = getHistory()
  const sec = document.getElementById('history-section')
  if (!h.length) { sec.style.display = 'none'; return }
  sec.style.display = 'block'
  document.getElementById('history-list').innerHTML = h.slice(0, 5).map(x => `
    <div class="history-item">
      <div><div class="history-name">${x.name}</div><div class="history-meta">${x.format} · ${x.timecap} min · ${x.difficulty}</div></div>
      <div style="font-size:12px;color:var(--t3)">${x.date}</div>
    </div>`).join('')
}
document.getElementById('clear-history-btn').addEventListener('click', () => { clearHistory(); renderHistory() })

// ===== OPEN GAMES =====
let openFilterYear = 'all'
let openFilterType = 'all'

function getFiltered() {
  return openWorkouts.filter(w => {
    if (openFilterYear !== 'all' && w.year !== parseInt(openFilterYear)) return false
    if (openFilterType !== 'all' && w.type !== openFilterType) return false
    return true
  })
}

function renderOpenList() {
  const list = getFiltered()
  const container = document.getElementById('open-list')
  if (!list.length) {
    container.innerHTML = '<p style="color:var(--text-hint);text-align:center;padding:2rem 0;">Geen workouts gevonden.</p>'
    return
  }
  const byYear = {}
  list.forEach(w => { if (!byYear[w.year]) byYear[w.year] = []; byYear[w.year].push(w) })
  container.innerHTML = Object.keys(byYear).sort((a, b) => b - a).map(year => `
    <div class="open-year-group">
      <div class="open-year-header">${year}</div>
      ${byYear[year].map(renderOpenCard).join('')}
    </div>`).join('')

  container.querySelectorAll('.open-start-timer').forEach(btn => {
    btn.addEventListener('click', () => startOpenTimer(parseInt(btn.dataset.tc), btn.dataset.label))
  })
}

function renderOpenCard(w) {
  const exHtml = w.exercises.map((ex, i) => `
    <li class="exercise-item">
      <span class="ex-num">${i + 1}</span>
      <div style="flex:1">
        <div class="ex-name">${ex.name}</div>
        ${ex.weight ? `<div class="ex-extra">${ex.weight}</div>` : ''}
        ${ex.height ? `<div class="ex-extra">${ex.height}</div>` : ''}
      </div>
      <span class="ex-reps">${ex.reps || ''}</span>
    </li>`).join('')

  return `
    <div class="open-card" id="open-card-${w.id}">
      <div class="open-card-header">
        <div>
          <span class="open-id">${w.id}</span>
          <span class="open-card-desc">${w.description}</span>
        </div>
        <div class="badges">
          <span class="badge badge-red">${w.type}</span>
          <span class="badge badge-blue">${w.timecap} min</span>
        </div>
      </div>
      <ul class="exercise-list">${exHtml}</ul>
      <div style="margin-top:1rem;padding-top:1rem;border-top:0.5px solid var(--border);">
        <button class="action-btn accent open-start-timer" data-tc="${w.timecap}" data-label="${w.id}">▶ Start Timer ${w.timecap} min</button>
      </div>
    </div>`
}

// Open timer
const openTimerEl = document.getElementById('open-timer-display')
const openBarEl = document.getElementById('open-progress-bar')

const openTimer = new Timer({
  onTick: renderOpenTimer,
  onDone: () => { openTimerEl.className = 'timer-display done'; openTimerEl.textContent = 'TIME!'; openBarEl.style.width = '0%'; showToast('Time is up! 🔔') },
})

function renderOpenTimer(tl, tot) {
  openTimerEl.textContent = Timer.format(tl)
  openTimerEl.className = 'timer-display' + (tl <= 30 && tl > 0 ? ' warning' : '')
  const p = tot > 0 ? (tl / tot) * 100 : 100
  openBarEl.style.width = p + '%'
  openBarEl.style.background = p < 15 ? '#E24B4A' : p < 40 ? '#EF9F27' : '#E24B4A'
}

function startOpenTimer(minutes, label) {
  openTimer.set(minutes * 60); renderOpenTimer(openTimer.timeLeft, openTimer.totalTime)
  openTimerEl.className = 'timer-display'
  document.getElementById('open-timer-label').textContent = `${label} — Timecap ${minutes} min`
  const card = document.getElementById('open-timer-card')
  card.classList.add('visible'); card.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

document.getElementById('ot-start').addEventListener('click', () => openTimer.start())
document.getElementById('ot-pause').addEventListener('click', () => openTimer.pause())
document.getElementById('ot-reset').addEventListener('click', () => { openTimer.reset(); openTimerEl.className = 'timer-display' })

document.getElementById('open-year').addEventListener('change', e => { openFilterYear = e.target.value; renderOpenList(); document.getElementById('open-timer-card').classList.remove('visible') })
document.getElementById('open-type').addEventListener('change', e => { openFilterType = e.target.value; renderOpenList() })
document.getElementById('open-random-btn').addEventListener('click', () => {
  const f = getFiltered()
  if (!f.length) { showToast('Geen workouts gevonden'); return }
  const w = f[Math.floor(Math.random() * f.length)]
  renderOpenList()
  setTimeout(() => {
    const el = document.getElementById(`open-card-${w.id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 50)
})

// ===== BENCHMARKS =====
let benchCategory = 'girls'
let benchType = 'all'

function getBenchFiltered() {
  const pool = benchCategory === 'girls' ? girlsWorkouts : heroWorkouts
  return pool.filter(w => benchType === 'all' || w.type === benchType)
}

function renderBenchList() {
  const list = getBenchFiltered()
  const container = document.getElementById('bench-list')
  if (!list.length) {
    container.innerHTML = '<p style="color:var(--text-hint);text-align:center;padding:2rem 0;">Geen workouts gevonden.</p>'
    return
  }

  const isHeroes = benchCategory === 'heroes'

  container.innerHTML = list.map(w => {
    const exHtml = w.exercises.map((ex, i) => `
      <li class="exercise-item">
        <span class="ex-num">${i + 1}</span>
        <div style="flex:1">
          <div class="ex-name">${ex.name}</div>
          ${ex.weight ? `<div class="ex-extra">${ex.weight}</div>` : ''}
          ${ex.height ? `<div class="ex-extra">${ex.height}</div>` : ''}
        </div>
        <span class="ex-reps">${ex.reps || ''}</span>
      </li>`).join('')

    const tributeHtml = isHeroes && w.tribute
      ? `<div class="hero-tribute">🎖 ${w.tribute}</div>` : ''

    return `
      <div class="open-card" id="bench-card-${w.id}">
        <div class="open-card-header">
          <div>
            <span class="open-id">${w.id}</span>
            <span class="open-card-desc">${w.description}</span>
          </div>
          <div class="badges">
            <span class="badge badge-red">${w.type}</span>
            <span class="badge badge-blue">${w.timecap} min</span>
          </div>
        </div>
        ${tributeHtml}
        <ul class="exercise-list">${exHtml}</ul>
        <div style="margin-top:1rem;padding-top:1rem;border-top:0.5px solid var(--border);">
          <button class="action-btn accent bench-start-timer" data-tc="${w.timecap}" data-label="${w.id}">▶ Start Timer ${w.timecap} min</button>
        </div>
      </div>`
  }).join('')

  container.querySelectorAll('.bench-start-timer').forEach(btn => {
    btn.addEventListener('click', () => startBenchTimer(parseInt(btn.dataset.tc), btn.dataset.label))
  })
}

// Benchmark timer
const benchTimerEl = document.getElementById('bench-timer-display')
const benchBarEl = document.getElementById('bench-progress-bar')

const benchTimer = new Timer({
  onTick: renderBenchTimer,
  onDone: () => { benchTimerEl.className = 'timer-display done'; benchTimerEl.textContent = 'TIME!'; benchBarEl.style.width = '0%'; showToast('Time is up! 🔔') },
})

function renderBenchTimer(tl, tot) {
  benchTimerEl.textContent = Timer.format(tl)
  benchTimerEl.className = 'timer-display' + (tl <= 30 && tl > 0 ? ' warning' : '')
  const p = tot > 0 ? (tl / tot) * 100 : 100
  benchBarEl.style.width = p + '%'
  benchBarEl.style.background = p < 15 ? '#E24B4A' : p < 40 ? '#EF9F27' : '#E24B4A'
}

function startBenchTimer(minutes, label) {
  benchTimer.set(minutes * 60); renderBenchTimer(benchTimer.timeLeft, benchTimer.totalTime)
  benchTimerEl.className = 'timer-display'
  document.getElementById('bench-timer-label').textContent = `${label} — Timecap ${minutes} min`
  const card = document.getElementById('bench-timer-card')
  card.classList.add('visible'); card.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}

document.getElementById('bt-start').addEventListener('click', () => benchTimer.start())
document.getElementById('bt-pause').addEventListener('click', () => benchTimer.pause())
document.getElementById('bt-reset').addEventListener('click', () => { benchTimer.reset(); benchTimerEl.className = 'timer-display' })

document.getElementById('bench-category').addEventListener('change', e => {
  benchCategory = e.target.value; renderBenchList()
  document.getElementById('bench-timer-card').classList.remove('visible')
})
document.getElementById('bench-type').addEventListener('change', e => { benchType = e.target.value; renderBenchList() })
document.getElementById('bench-random-btn').addEventListener('click', () => {
  const f = getBenchFiltered()
  if (!f.length) { showToast('Geen workouts gevonden'); return }
  const w = f[Math.floor(Math.random() * f.length)]
  renderBenchList()
  setTimeout(() => {
    const el = document.getElementById(`bench-card-${w.id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, 50)
})

// ===== TOAST =====
function showToast(msg, duration = 2500) {
  const t = document.getElementById('toast')
  t.textContent = msg; t.classList.add('show')
  setTimeout(() => t.classList.remove('show'), duration)
}

// ===== INIT =====
renderHistory()
genTimer.set(20 * 60)
renderOpenList()
renderBenchList()
