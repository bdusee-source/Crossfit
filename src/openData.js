// CrossFit Open workouts 2011–2025 (Rx Men / Women weights)
// format: { id, year, type, timecap (min), description, exercises[] }

export const openWorkouts = [

  // ── 2026 ──────────────────────────────────────────────────────────────
  {
    id: '26.1', year: 2026,
    type: 'For Time', timecap: 12,
    description: 'For Time — pyramid: 20-30-40-66-40-30-20 wall-ball shots, met box jump-overs — 12 min cap',
    exercises: [
      { name: 'Wall-Ball Shots', reps: '20', weight: '9/6 kg to 3/2.7 m target' },
      { name: 'Box Jump-overs', reps: '18', height: '24/20"' },
      { name: 'Wall-Ball Shots', reps: '30' },
      { name: 'Box Jump-overs', reps: '18' },
      { name: 'Wall-Ball Shots', reps: '40' },
      { name: 'Medicine-Ball Box Step-overs', reps: '18', height: '24/20"' },
      { name: 'Wall-Ball Shots', reps: '66' },
      { name: 'Medicine-Ball Box Step-overs', reps: '18' },
      { name: 'Wall-Ball Shots', reps: '40' },
      { name: 'Box Jump-overs', reps: '18' },
      { name: 'Wall-Ball Shots', reps: '30' },
      { name: 'Box Jump-overs', reps: '18' },
      { name: 'Wall-Ball Shots', reps: '20' },
    ],
  },
  {
    id: '26.2', year: 2026,
    type: 'For Time', timecap: 15,
    description: 'For Time — 3 rondes van lunges + snatches + oplopende pull-up variant — 15 min cap',
    exercises: [
      { name: 'DB Overhead Walking Lunges', reps: '80 ft', weight: '22.5/15 kg' },
      { name: 'Alternating DB Snatches', reps: '20', weight: '22.5/15 kg' },
      { name: 'Pull-ups', reps: '20' },
      { name: 'DB Overhead Walking Lunges', reps: '80 ft', weight: '22.5/15 kg' },
      { name: 'Alternating DB Snatches', reps: '20', weight: '22.5/15 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '20' },
      { name: 'DB Overhead Walking Lunges', reps: '80 ft', weight: '22.5/15 kg' },
      { name: 'Alternating DB Snatches', reps: '20', weight: '22.5/15 kg' },
      { name: 'Ring Muscle-ups', reps: '20' },
    ],
  },
  {
    id: '26.3', year: 2026,
    type: 'For Time', timecap: 16,
    description: 'For Time — 2×2×2 ronden burpees + cleans + thrusters met oplopend gewicht — 16 min cap',
    exercises: [
      { name: 'Burpees over the Bar', reps: '12 (×2 rondes)' },
      { name: 'Cleans', reps: '12 (×2 rondes)', weight: '43/29 kg' },
      { name: 'Thrusters', reps: '12 (×2 rondes)', weight: '43/29 kg' },
      { name: 'Burpees over the Bar', reps: '12 (×2 rondes)' },
      { name: 'Cleans', reps: '12 (×2 rondes)', weight: '52/34 kg' },
      { name: 'Thrusters', reps: '12 (×2 rondes)', weight: '52/34 kg' },
      { name: 'Burpees over the Bar', reps: '12 (×2 rondes)' },
      { name: 'Cleans', reps: '12 (×2 rondes)', weight: '61/38 kg' },
      { name: 'Thrusters', reps: '12 (×2 rondes)', weight: '61/38 kg' },
    ],
  },

  // ── 2025 ──────────────────────────────────────────────────────────────
  {
    id: '25.1', year: 2025,
    type: 'AMRAP', timecap: 15,
    description: 'AMRAP 15 min — ladder: add 3 reps per round',
    exercises: [
      { name: 'Lateral Burpees over Dumbbell', reps: '3→6→9…' },
      { name: 'DB Hang Clean-to-Overhead', reps: '3→6→9…', weight: '22.5/15 kg' },
      { name: 'Walking Lunge', reps: '30 ft (2×15 ft)' },
    ],
  },
  {
    id: '25.2', year: 2025,
    type: 'For Time', timecap: 20,
    description: 'For Time — 20 min cap',
    exercises: [
      { name: 'Deadlifts', reps: '10-9-8-7-6-5-4-3-2-1', weight: '102.5/70 kg' },
      { name: 'Box Jumps', reps: '10-9-8-7-6-5-4-3-2-1', height: '24/20"' },
    ],
  },
  {
    id: '25.3', year: 2025,
    type: 'For Time', timecap: 15,
    description: 'For Time — 15 min cap, two-part',
    exercises: [
      { name: 'Wall Walks', reps: '2' },
      { name: 'Power Snatches', reps: '10', weight: '61/43 kg' },
      { name: 'Wall Walks', reps: '4' },
      { name: 'Power Snatches', reps: '8', weight: '61/43 kg' },
      { name: 'Wall Walks', reps: '6' },
      { name: 'Power Snatches', reps: '6', weight: '61/43 kg' },
    ],
  },

  // ── 2024 ──────────────────────────────────────────────────────────────
  {
    id: '24.1', year: 2024,
    type: 'For Time', timecap: 15,
    description: 'For Time — 21-21-21-21 / 15-15-15-15 / 9-9-9-9 — 15 min cap',
    exercises: [
      { name: 'DB Snatches (arm 1)', reps: '21-15-9', weight: '22.5/15 kg' },
      { name: 'Lateral Burpees over DB', reps: '21-15-9' },
      { name: 'DB Snatches (arm 2)', reps: '21-15-9', weight: '22.5/15 kg' },
      { name: 'Lateral Burpees over DB', reps: '21-15-9' },
    ],
  },
  {
    id: '24.2', year: 2024,
    type: 'AMRAP', timecap: 20,
    description: 'AMRAP 20 min',
    exercises: [
      { name: 'Row', reps: '300 m' },
      { name: 'Deadlifts', reps: '10', weight: '83/56 kg' },
      { name: 'Double-unders', reps: '50' },
    ],
  },
  {
    id: '24.3', year: 2024,
    type: 'For Time', timecap: 15,
    description: 'For Time — two parts with 1 min rest — 15 min cap',
    exercises: [
      { name: 'Thrusters (part 1)', reps: '5×10', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups (part 1)', reps: '5×10' },
      { name: '— REST 1 min —', reps: '' },
      { name: 'Thrusters (part 2)', reps: '5×7', weight: '61/43 kg' },
      { name: 'Bar Muscle-ups (part 2)', reps: '5×7' },
    ],
  },

  // ── 2023 ──────────────────────────────────────────────────────────────
  {
    id: '23.1', year: 2023,
    type: 'AMRAP', timecap: 14,
    description: 'AMRAP 14 min — chipper style',
    exercises: [
      { name: 'Row', reps: '60 cal' },
      { name: 'Toes-to-Bar', reps: '50' },
      { name: 'Wall-Ball Shots', reps: '40', weight: '9/6 kg to 3/2.7 m' },
      { name: 'Cleans', reps: '30', weight: '61/43 kg' },
      { name: 'Ring Muscle-ups', reps: '20' },
    ],
  },
  {
    id: '23.2', year: 2023,
    type: 'For Time', timecap: 20,
    description: 'For Time — 20 min cap',
    exercises: [
      { name: 'Thrusters', reps: '5', weight: '88/61 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '10' },
      { name: 'Thrusters', reps: '10', weight: '70/47 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '10' },
      { name: 'Thrusters', reps: '15', weight: '52/35 kg' },
      { name: 'Bar Muscle-ups', reps: '10' },
    ],
  },
  {
    id: '23.3', year: 2023,
    type: 'For Time', timecap: 15,
    description: 'For Time — 15 min cap',
    exercises: [
      { name: 'Wall Walks', reps: '10' },
      { name: 'Double-unders', reps: '50' },
      { name: 'Squat Snatches', reps: '10', weight: '43/29 kg' },
    ],
  },

  // ── 2022 ──────────────────────────────────────────────────────────────
  {
    id: '22.1', year: 2022,
    type: 'AMRAP', timecap: 15,
    description: 'AMRAP 15 min',
    exercises: [
      { name: 'Wall-Ball Shots', reps: '3', weight: '9/6 kg' },
      { name: 'Box Jumps', reps: '6', height: '24/20"' },
      { name: 'Wall-Ball Shots', reps: '6' },
      { name: 'Box Jumps', reps: '9' },
      { name: '(add 3 reps each round)', reps: '…' },
    ],
  },
  {
    id: '22.2', year: 2022,
    type: 'AMRAP', timecap: 20,
    description: 'AMRAP 20 min',
    exercises: [
      { name: 'DB Snatches', reps: '10 (5L/5R)', weight: '22.5/15 kg' },
      { name: 'Box Jump-overs', reps: '10', height: '24/20"' },
    ],
  },
  {
    id: '22.3', year: 2022,
    type: 'For Time', timecap: 12,
    description: 'For Time — 12 min cap',
    exercises: [
      { name: 'Deadlifts', reps: '21', weight: '102.5/70 kg' },
      { name: 'Handstand Push-ups', reps: '21' },
      { name: 'Deadlifts', reps: '15', weight: '127.5/86 kg' },
      { name: 'Handstand Push-ups (strict)', reps: '15' },
      { name: 'Deadlifts', reps: '9', weight: '152.5/102.5 kg' },
      { name: 'Strict Handstand Push-ups (HR)', reps: '9' },
    ],
  },

  // ── 2021 ──────────────────────────────────────────────────────────────
  {
    id: '21.1', year: 2021,
    type: 'AMRAP', timecap: 15,
    description: 'AMRAP 15 min',
    exercises: [
      { name: 'Wall Walks', reps: '1' },
      { name: 'Double-unders', reps: '10' },
    ],
  },
  {
    id: '21.2', year: 2021,
    type: 'For Time', timecap: 20,
    description: 'For Time — 20 min cap, increasing weights',
    exercises: [
      { name: 'DB Snatches', reps: '10', weight: '22.5/15 kg' },
      { name: 'Box Jump-overs', reps: '10', height: '24/20"' },
      { name: 'DB Snatches', reps: '12', weight: '27/20 kg' },
      { name: 'Box Jump-overs', reps: '12' },
      { name: 'DB Snatches', reps: '14', weight: '31.5/22.5 kg' },
      { name: 'Box Jump-overs', reps: '14' },
    ],
  },
  {
    id: '21.3', year: 2021,
    type: 'For Time', timecap: 15,
    description: 'For Time — 15 min cap',
    exercises: [
      { name: 'Front Squats', reps: '15', weight: '102.5/70 kg' },
      { name: 'Toes-to-Bar', reps: '30' },
      { name: 'Thrusters', reps: '15', weight: '61/43 kg' },
    ],
  },

  // ── 2020 ──────────────────────────────────────────────────────────────
  {
    id: '20.1', year: 2020,
    type: 'AMRAP', timecap: 15,
    description: 'AMRAP 15 min',
    exercises: [
      { name: 'Ground-to-Overhead', reps: '10', weight: '43/29 kg' },
      { name: 'Bar-facing Burpees', reps: '10' },
    ],
  },
  {
    id: '20.2', year: 2020,
    type: 'AMRAP', timecap: 20,
    description: 'AMRAP 20 min',
    exercises: [
      { name: 'Toes-to-Bar', reps: '4' },
      { name: 'Double-unders', reps: '16' },
      { name: 'Squat Cleans', reps: '2+', weight: '61/43 kg' },
    ],
  },
  {
    id: '20.3', year: 2020,
    type: 'For Time', timecap: 9,
    description: 'For Time — 9 min cap, then 21.3a (1RM DL)',
    exercises: [
      { name: 'Deadlifts', reps: '21', weight: '102.5/70 kg' },
      { name: 'Handstand Push-ups', reps: '21' },
      { name: 'Deadlifts', reps: '15', weight: '127.5/86 kg' },
      { name: 'Handstand Push-ups (HR)', reps: '15' },
      { name: 'Deadlifts', reps: '9', weight: '152.5/102.5 kg' },
      { name: 'Strict HSPU', reps: '9' },
    ],
  },
  {
    id: '20.4', year: 2020,
    type: 'For Time', timecap: 20,
    description: 'For Time — 20 min cap',
    exercises: [
      { name: 'Box Jumps', reps: '30', height: '24/20"' },
      { name: 'Clean & Jerks', reps: '15', weight: '61/43 kg' },
      { name: 'Box Jumps', reps: '30' },
      { name: 'Clean & Jerks', reps: '15', weight: '84/56 kg' },
      { name: 'Box Jumps', reps: '30' },
      { name: 'Clean & Jerks', reps: '10', weight: '102.5/70 kg' },
    ],
  },
  {
    id: '20.5', year: 2020,
    type: 'For Time', timecap: 20,
    description: 'For Time — 20 min cap',
    exercises: [
      { name: 'Thrusters', reps: '7', weight: '43/29 kg' },
      { name: 'Bar Muscle-ups', reps: '7' },
      { name: 'Thrusters', reps: '7' },
      { name: 'Bar Muscle-ups', reps: '7' },
    ],
  },

  // ── 2019 ──────────────────────────────────────────────────────────────
  {
    id: '19.1', year: 2019,
    type: 'AMRAP', timecap: 15,
    description: 'AMRAP 15 min',
    exercises: [
      { name: 'Wall-Ball Shots', reps: '19', weight: '9/6 kg' },
      { name: 'Row', reps: '19 cal' },
    ],
  },
  {
    id: '19.2', year: 2019,
    type: 'For Time', timecap: 8,
    description: 'For Time — starts 8 min, extends per round',
    exercises: [
      { name: 'Toes-to-Bar', reps: '25' },
      { name: 'Double-unders', reps: '50' },
      { name: 'Squat Cleans', reps: '15', weight: '61/43 kg' },
      { name: 'Toes-to-Bar', reps: '25' },
      { name: 'Double-unders', reps: '50' },
      { name: 'Squat Cleans', reps: '13', weight: '84/52 kg' },
    ],
  },
  {
    id: '19.3', year: 2019,
    type: 'For Time', timecap: 10,
    description: 'For Time — 10 min cap',
    exercises: [
      { name: 'Wall Walks', reps: '200 ft HS walk or 50' },
      { name: 'DB Box Step-overs', reps: '50', weight: '22.5/15 kg' },
      { name: 'Pull-ups', reps: '50' },
    ],
  },
  {
    id: '19.4', year: 2019,
    type: 'For Time', timecap: 12,
    description: 'For Time — 12 min, extending time cap',
    exercises: [
      { name: 'Snatches', reps: '3', weight: '43/29 kg' },
      { name: 'Bar-facing Burpees', reps: '3' },
      { name: '(add 3 reps each set)', reps: '…' },
    ],
  },
  {
    id: '19.5', year: 2019,
    type: 'For Time', timecap: 33,
    description: 'For Time — 33-27-21-15-9',
    exercises: [
      { name: 'Thrusters', reps: '33-27-21-15-9', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '33-27-21-15-9' },
    ],
  },

  // ── 2018 ──────────────────────────────────────────────────────────────
  {
    id: '18.1', year: 2018,
    type: 'AMRAP', timecap: 20,
    description: 'AMRAP 20 min',
    exercises: [
      { name: 'Toes-to-Bar', reps: '8' },
      { name: 'DB Hang Clean & Jerks', reps: '10', weight: '22.5/15 kg' },
      { name: 'Row', reps: '14 cal' },
    ],
  },
  {
    id: '18.2', year: 2018,
    type: 'For Time', timecap: 12,
    description: 'For Time — 1-2-3-...-10 ladder, then 18.2a 1RM Clean',
    exercises: [
      { name: 'DB Squats', reps: '1→10', weight: '22.5/15 kg' },
      { name: 'Bar-facing Burpees', reps: '1→10' },
    ],
  },
  {
    id: '18.3', year: 2018,
    type: 'AMRAP', timecap: 14,
    description: 'AMRAP 14 min',
    exercises: [
      { name: 'Chest-to-Bar Pull-ups', reps: '2' },
      { name: 'Squat Snatches', reps: '1', weight: '43/29 kg' },
    ],
  },
  {
    id: '18.4', year: 2018,
    type: 'For Time', timecap: 9,
    description: 'For Time — 9 min cap (repeat of 17.4)',
    exercises: [
      { name: 'Deadlifts', reps: '21', weight: '102.5/70 kg' },
      { name: 'Handstand Push-ups', reps: '21' },
      { name: 'Deadlifts', reps: '15', weight: '127.5/86 kg' },
      { name: 'Handstand Push-ups', reps: '15' },
      { name: 'Deadlifts', reps: '9', weight: '152.5/102.5 kg' },
      { name: 'Handstand Push-ups', reps: '9' },
    ],
  },
  {
    id: '18.5', year: 2018,
    type: 'AMRAP', timecap: 7,
    description: 'AMRAP 7 min (repeat of 11.6 / 12.5)',
    exercises: [
      { name: 'Thrusters', reps: '3→6→9…', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '3→6→9…' },
    ],
  },

  // ── 2017 ──────────────────────────────────────────────────────────────
  {
    id: '17.1', year: 2017,
    type: 'For Time', timecap: 20,
    description: 'For Time — 20 min cap',
    exercises: [
      { name: 'DB Snatches', reps: '10', weight: '22.5/15 kg' },
      { name: 'Box Jump-overs', reps: '15', height: '24/20"' },
      { name: 'DB Snatches', reps: '20', weight: '22.5/15 kg' },
      { name: 'Box Jump-overs', reps: '15' },
      { name: 'DB Snatches', reps: '30', weight: '22.5/15 kg' },
      { name: 'Box Jump-overs', reps: '15' },
    ],
  },
  {
    id: '17.2', year: 2017,
    type: 'AMRAP', timecap: 12,
    description: 'AMRAP 12 min',
    exercises: [
      { name: 'DB Walking Lunges', reps: '50 ft', weight: '22.5/15 kg' },
      { name: 'Toes-to-Bar', reps: '16' },
      { name: 'DB Power Cleans', reps: '8', weight: '22.5/15 kg' },
      { name: 'Bar Muscle-ups', reps: '4' },
    ],
  },
  {
    id: '17.3', year: 2017,
    type: 'AMRAP', timecap: 8,
    description: 'For Time — starts 8 min, extends per round',
    exercises: [
      { name: 'Chest-to-Bar Pull-ups', reps: '6' },
      { name: 'Squat Snatches', reps: '6', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '7' },
      { name: 'Squat Snatches', reps: '5', weight: '61/43 kg' },
    ],
  },
  {
    id: '17.4', year: 2017,
    type: 'For Time', timecap: 13,
    description: 'For Time — 13 min cap (repeat of 16.4)',
    exercises: [
      { name: 'Deadlifts', reps: '55', weight: '102.5/70 kg' },
      { name: 'Wall-Ball Shots', reps: '55', weight: '9/6 kg' },
      { name: 'Calories on Rower', reps: '55' },
      { name: 'Handstand Push-ups', reps: '55' },
    ],
  },
  {
    id: '17.5', year: 2017,
    type: 'For Time', timecap: 40,
    description: 'For Time — 10 rounds',
    exercises: [
      { name: 'Thrusters', reps: '9', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '35' },
      { name: 'Thrusters', reps: '9' },
    ],
  },

  // ── 2016 ──────────────────────────────────────────────────────────────
  {
    id: '16.1', year: 2016,
    type: 'AMRAP', timecap: 20,
    description: 'AMRAP 20 min',
    exercises: [
      { name: 'Overhead Lunges', reps: '25 ft', weight: '43/29 kg' },
      { name: 'Bar-facing Burpees', reps: '8' },
      { name: 'Chest-to-Bar Pull-ups', reps: '8' },
      { name: 'Overhead Lunges', reps: '25 ft' },
    ],
  },
  {
    id: '16.2', year: 2016,
    type: 'AMRAP', timecap: 4,
    description: 'AMRAP starting 4 min, extends with each round',
    exercises: [
      { name: 'Toes-to-Bar', reps: '25' },
      { name: 'Double-unders', reps: '50' },
      { name: 'Squat Cleans', reps: '15', weight: '61/43 kg' },
    ],
  },
  {
    id: '16.3', year: 2016,
    type: 'AMRAP', timecap: 7,
    description: 'AMRAP 7 min',
    exercises: [
      { name: 'Power Snatches', reps: '10', weight: '34/25 kg' },
      { name: 'Bar-facing Burpees', reps: '10' },
    ],
  },
  {
    id: '16.4', year: 2016,
    type: 'For Time', timecap: 13,
    description: 'For Time — 13 min cap',
    exercises: [
      { name: 'Deadlifts', reps: '55', weight: '102.5/70 kg' },
      { name: 'Wall-Ball Shots', reps: '55', weight: '9/6 kg' },
      { name: 'Calories on Rower', reps: '55' },
      { name: 'Handstand Push-ups', reps: '55' },
    ],
  },
  {
    id: '16.5', year: 2016,
    type: 'For Time', timecap: 40,
    description: 'For Time — repeat of 11.6',
    exercises: [
      { name: 'Thrusters', reps: '21-18-15-12-9-6-3', weight: '43/29 kg' },
      { name: 'Bar-facing Burpees', reps: '21-18-15-12-9-6-3' },
    ],
  },

  // ── 2015 ──────────────────────────────────────────────────────────────
  {
    id: '15.1', year: 2015,
    type: 'AMRAP', timecap: 9,
    description: 'AMRAP 9 min',
    exercises: [
      { name: 'Toes-to-Bar', reps: '15' },
      { name: 'Deadlifts', reps: '10', weight: '70/47 kg' },
      { name: 'Snatches', reps: '5', weight: '43/29 kg' },
    ],
  },
  {
    id: '15.2', year: 2015,
    type: 'AMRAP', timecap: 6,
    description: 'AMRAP starting 6 min, extends per round',
    exercises: [
      { name: 'Overhead Squats', reps: '10', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '10' },
    ],
  },
  {
    id: '15.3', year: 2015,
    type: 'AMRAP', timecap: 14,
    description: 'AMRAP 14 min',
    exercises: [
      { name: 'Muscle-ups', reps: '7' },
      { name: 'Snatches', reps: '50', weight: '34/25 kg' },
    ],
  },
  {
    id: '15.4', year: 2015,
    type: 'AMRAP', timecap: 8,
    description: 'AMRAP 8 min',
    exercises: [
      { name: 'Handstand Push-ups', reps: '3' },
      { name: 'Cleans', reps: '3', weight: '61/43 kg' },
      { name: '(add 3 reps each round)', reps: '…' },
    ],
  },
  {
    id: '15.5', year: 2015,
    type: 'For Time', timecap: 40,
    description: 'For Time — 27-21-15-9',
    exercises: [
      { name: 'Row', reps: '27-21-15-9 cal' },
      { name: 'Thrusters', reps: '27-21-15-9', weight: '43/29 kg' },
    ],
  },

  // ── 2014 ──────────────────────────────────────────────────────────────
  {
    id: '14.1', year: 2014,
    type: 'AMRAP', timecap: 10,
    description: 'AMRAP 10 min',
    exercises: [
      { name: 'Double-unders', reps: '30' },
      { name: 'Power Snatches', reps: '15', weight: '34/25 kg' },
    ],
  },
  {
    id: '14.2', year: 2014,
    type: 'AMRAP', timecap: 3,
    description: 'AMRAP starting 3 min, +3 min per round',
    exercises: [
      { name: 'Overhead Squats', reps: '10→12→14…', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '10→12→14…' },
    ],
  },
  {
    id: '14.3', year: 2014,
    type: 'AMRAP', timecap: 8,
    description: 'AMRAP 8 min',
    exercises: [
      { name: 'Deadlifts', reps: '10', weight: '61/43 kg' },
      { name: 'Box Jumps', reps: '15', height: '24/20"' },
      { name: 'Deadlifts', reps: '15', weight: '84/56 kg' },
      { name: 'Box Jumps', reps: '15' },
      { name: 'Deadlifts', reps: '20', weight: '102.5/70 kg' },
      { name: 'Box Jumps', reps: '15' },
    ],
  },
  {
    id: '14.4', year: 2014,
    type: 'AMRAP', timecap: 14,
    description: 'AMRAP 14 min',
    exercises: [
      { name: 'Row', reps: '60 cal' },
      { name: 'Toes-to-Bar', reps: '50' },
      { name: 'Wall-Ball Shots', reps: '40', weight: '9/6 kg' },
      { name: 'Power Cleans', reps: '30', weight: '61/43 kg' },
      { name: 'Muscle-ups', reps: '20' },
    ],
  },
  {
    id: '14.5', year: 2014,
    type: 'For Time', timecap: 40,
    description: 'For Time — 21-18-15-12-9-6-3',
    exercises: [
      { name: 'Thrusters', reps: '21-18-15-12-9-6-3', weight: '43/29 kg' },
      { name: 'Bar-facing Burpees', reps: '21-18-15-12-9-6-3' },
    ],
  },

  // ── 2013 ──────────────────────────────────────────────────────────────
  {
    id: '13.1', year: 2013,
    type: 'AMRAP', timecap: 17,
    description: 'AMRAP 17 min',
    exercises: [
      { name: 'Burpees', reps: '40' },
      { name: 'Snatches', reps: '30', weight: '34/25 kg' },
      { name: 'Burpees', reps: '30' },
      { name: 'Snatches', reps: '30', weight: '52/36 kg' },
    ],
  },
  {
    id: '13.2', year: 2013,
    type: 'AMRAP', timecap: 10,
    description: 'AMRAP 10 min',
    exercises: [
      { name: 'Shoulder-to-Overhead', reps: '5', weight: '52/36 kg' },
      { name: 'Deadlifts', reps: '10', weight: '52/36 kg' },
      { name: 'Box Jumps', reps: '15', height: '24/20"' },
    ],
  },
  {
    id: '13.3', year: 2013,
    type: 'AMRAP', timecap: 12,
    description: 'AMRAP 12 min',
    exercises: [
      { name: 'Wall-Ball Shots', reps: '150', weight: '9/6 kg' },
      { name: 'Double-unders', reps: '90' },
      { name: 'Muscle-ups', reps: '30' },
    ],
  },
  {
    id: '13.4', year: 2013,
    type: 'AMRAP', timecap: 7,
    description: 'AMRAP 7 min',
    exercises: [
      { name: 'Clean & Jerks', reps: '3', weight: '61/43 kg' },
      { name: 'Toes-to-Bar', reps: '3' },
      { name: '(add 3 reps each round)', reps: '…' },
    ],
  },
  {
    id: '13.5', year: 2013,
    type: 'AMRAP', timecap: 4,
    description: 'AMRAP starting 4 min, extends per round',
    exercises: [
      { name: 'Thrusters', reps: '15', weight: '45/30 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '15' },
    ],
  },

  // ── 2012 ──────────────────────────────────────────────────────────────
  {
    id: '12.1', year: 2012,
    type: 'AMRAP', timecap: 7,
    description: 'AMRAP 7 min',
    exercises: [
      { name: 'Burpees', reps: 'Max reps' },
    ],
  },
  {
    id: '12.2', year: 2012,
    type: 'AMRAP', timecap: 10,
    description: 'AMRAP 10 min',
    exercises: [
      { name: 'Snatches', reps: '30', weight: '34/25 kg' },
      { name: 'Snatches', reps: '30', weight: '52/36 kg' },
      { name: 'Snatches', reps: '30', weight: '70/47 kg' },
      { name: 'Snatches', reps: 'Max', weight: '88/61 kg' },
    ],
  },
  {
    id: '12.3', year: 2012,
    type: 'AMRAP', timecap: 18,
    description: 'AMRAP 18 min',
    exercises: [
      { name: 'Box Jumps', reps: '15', height: '24/20"' },
      { name: 'Push Press', reps: '12', weight: '52/36 kg' },
      { name: 'Toes-to-Bar', reps: '9' },
    ],
  },
  {
    id: '12.4', year: 2012,
    type: 'AMRAP', timecap: 12,
    description: 'AMRAP 12 min',
    exercises: [
      { name: 'Wall-Ball Shots', reps: '150', weight: '9/6 kg' },
      { name: 'Row', reps: '90 cal' },
      { name: 'Handstand Push-ups', reps: '30' },
    ],
  },
  {
    id: '12.5', year: 2012,
    type: 'AMRAP', timecap: 7,
    description: 'AMRAP 7 min',
    exercises: [
      { name: 'Thrusters', reps: '3→6→9…', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '3→6→9…' },
    ],
  },

  // ── 2011 ──────────────────────────────────────────────────────────────
  {
    id: '11.1', year: 2011,
    type: 'AMRAP', timecap: 10,
    description: 'AMRAP 10 min',
    exercises: [
      { name: 'Double-unders', reps: '30' },
      { name: 'Power Snatches', reps: '15', weight: '34/25 kg' },
    ],
  },
  {
    id: '11.2', year: 2011,
    type: 'AMRAP', timecap: 15,
    description: 'AMRAP 15 min',
    exercises: [
      { name: 'Deadlifts', reps: '9', weight: '70/45 kg' },
      { name: 'Push-ups', reps: '12' },
      { name: 'Box Jumps', reps: '15', height: '24/20"' },
    ],
  },
  {
    id: '11.3', year: 2011,
    type: 'AMRAP', timecap: 5,
    description: 'AMRAP 5 min',
    exercises: [
      { name: 'Squat Clean & Jerk', reps: 'Max', weight: '75/50 kg' },
    ],
  },
  {
    id: '11.4', year: 2011,
    type: 'AMRAP', timecap: 10,
    description: 'AMRAP 10 min',
    exercises: [
      { name: 'Bar-facing Burpees', reps: '60' },
      { name: 'Overhead Squats', reps: '30', weight: '55/40 kg' },
      { name: 'Muscle-ups', reps: '10' },
    ],
  },
  {
    id: '11.5', year: 2011,
    type: 'AMRAP', timecap: 20,
    description: 'AMRAP 20 min',
    exercises: [
      { name: 'Power Cleans', reps: '5', weight: '61/43 kg' },
      { name: 'Toes-to-Bar', reps: '10' },
      { name: 'Wall-Ball Shots', reps: '15', weight: '9/6 kg' },
    ],
  },
  {
    id: '11.6', year: 2011,
    type: 'AMRAP', timecap: 7,
    description: 'AMRAP 7 min',
    exercises: [
      { name: 'Thrusters', reps: '3→6→9…', weight: '43/29 kg' },
      { name: 'Chest-to-Bar Pull-ups', reps: '3→6→9…' },
    ],
  },
]

export const openYears = [...new Set(openWorkouts.map(w => w.year))].sort((a, b) => b - a)
