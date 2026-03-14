# WOD Generator 🏋️

CrossFit Workout of the Day generator — volledig lokaal, geen API of internetverbinding nodig.  
Elke klik genereert een unieke WOD uit een database van ~200 oefeningen met slimme format-logica.

---

## Lokaal draaien

### 1. Installeer dependencies
```bash
npm install
```

### 2. Start de dev server
```bash
npm run dev
# → http://localhost:5173
```

Geen `.env` of API key nodig — de generator werkt volledig offline.

---

## Build & deploy

```bash
npm run build    # → dist/
npm run preview  # preview de productie-build lokaal
```

### GitHub Pages

1. Push naar GitHub
2. Ga naar **Settings → Pages → Source: GitHub Actions**
3. De workflow in `.github/workflows/deploy.yml` deployt automatisch bij elke push naar `main`

> Als je repo een subfolder-URL heeft (bijv. `https://jouw-naam.github.io/wod-generator/`),  
> uncomment dan de `base` regel in `vite.config.js`:
> ```js
> base: '/wod-generator/',
> ```

---

## Projectstructuur

```
wod-generator/
├── index.html
├── vite.config.js          # Vite configuratie
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── main.js             # App entry + alle UI logica
│   ├── style.css           # Design system (Barlow + Barlow Condensed)
│   ├── data.js             # ~200 oefeningen in 9 categorieën + namen + tips
│   ├── wod.js              # WOD generator logica + localStorage geschiedenis
│   ├── timer.js            # Timer klasse (countdown, pauze, reset)
│   ├── openData.js         # Officiële Open Games workouts 2011–2026
│   └── benchmarkData.js    # The Girls (21) + Hero WODs (19)
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages CI/CD
```

---

## Generator — hoe werkt het?

De WOD generator werkt volledig lokaal op basis van een grote oefeningen-database en slimme format-logica. Geen herhaling dankzij:

- **~200 oefeningen** verdeeld over 9 categorieën
- **60 unieke WOD-namen** — de laatste 8 gebruikte worden uitgesloten
- **30 coachingstips** — elke keer een andere
- **Format-specifieke rep-schema's** — elk formaat voelt anders:
  - `AMRAP` — rep-schema past automatisch bij de timecap (kort/medium/lang)
  - `For Time` — kiest willekeurig uit klassieke CrossFit-schema's (21-15-9, 15-12-9, 9-7-5, etc.)
  - `EMOM` — 2 of 3 oefeningen per minuut afhankelijk van tijdsduur
  - `Chipper` — afnemende reps (50-45-40-35...) over het gekozen aantal oefeningen
  - `Ladder` — altijd duidelijk schema van 1 t/m N reps

---

## Instellingen Generator

| Instelling | Opties | Standaard |
|---|---|---|
| Timecap | 1 – 60 min | 20 min |
| WOD formaat | AMRAP, For Time, EMOM, Chipper, Ladder | AMRAP |
| Moeilijkheid | Beginner, Intermediate, Advanced, RX | Intermediate |
| Rondes | 3, 5, 7, 10 | 5 |
| Aantal oefeningen | 2 – 8 | 4 |
| Oefeningstypes | Gymnastics, Weightlifting, Cardio, Bodyweight, Kettlebell, Dumbbell, Core, Plyometrics, Hardlopen | Gymnastics + Weightlifting + Cardio |

---

## Features

- ⚡ **WOD Generator** — lokale generator met ~200 oefeningen, 5 formats, 9 categorieën en instelbaar aantal oefeningen
- 🏆 **Open Games 2011–2026** — alle 70+ officiële Open workouts, filterbaar op jaar en formaat
- ⭐ **Benchmarks** — 21 Girls + 19 Hero WODs met eretributes
- ⏱ **Countdown timer** — per workout, met voortgangsbalk en kleurwaarschuwing
- 📖 **Docs** — volledige handleiding en CrossFit woordenboek (19 termen)
- 🕐 **Geschiedenis** — laatste 10 gegenereerde WODs opgeslagen in localStorage
- 📋 **Kopieer WOD** — platte tekst naar klembord
- 🖨 **Print** — print-vriendelijke layout

---

## Oefeningen per categorie

| Categorie | Aantal |
|---|---|
| Gymnastics | 24 |
| Weightlifting | 25 |
| Cardio | 13 |
| Bodyweight | 25 |
| Kettlebell | 16 |
| Dumbbell | 18 |
| Core | 20 |
| Plyometrics | 15 |
| Hardlopen | 10 |
| **Totaal** | **~200** |
