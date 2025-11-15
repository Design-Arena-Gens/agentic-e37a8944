const warmUp = [
  {
    title: "Pulse Ignition",
    duration: "2 min",
    detail: "March in place with arm swings. Every 20s add a knee drive + overhead reach to elevate heart rate."
  },
  {
    title: "Shoulder + Hip Primer",
    duration: "1 min",
    detail: "PVC dumbbells in hands, perform alternating halos and hip hinges to prep shoulders and posterior chain."
  }
];

const strengthCircuit = [
  {
    title: "Dumbbell Complex (Push-Pull-Core)",
    duration: "6 min",
    detail:
      "4 rounds @90s each: 6 tall kneeling press + 8 bent-over rows + 8 tempo squats (3s down) + 20s front rack march. Rest leftover time."
  },
  {
    title: "Alternating Flow",
    duration: "3 min",
    detail:
      "EMOM x3: 30s split-stance Romanian deadlift (left), 30s split-stance Romanian deadlift (right). Focus on hip drive, shoulder pack."
  }
];

const finisher = [
  {
    title: "Core + Conditioning Ladder",
    duration: "2 min",
    detail:
      "20s crush-grip squat pulses → 20s plank drag (slide bell hand-to-hand) → 20s push-up to row → repeat once. Keep bells tight to ribs."
  },
  {
    title: "Cool Down",
    duration: "1 min",
    detail:
      "Box breathing while holding light overhead stretch; finish with calf + chest openers."
  }
];

const weeklyRhythm = [
  {
    title: "Day A (Foundation)",
    focus: "Run full 15-min session exactly as written."
  },
  {
    title: "Day B (Intensity Bias)",
    focus:
      "Swap tempo squats for squat jumps holding bells at shoulder height; extend finisher with an extra push-up to row set."
  },
  {
    title: "Day C (Volume Bias)",
    focus:
      "Add 1 extra round to the complex (total 5) and replace march with hollow-body DB reach for 20s each round."
  },
  {
    title: "Optional Active Recovery",
    focus:
      "5-8k steps or light mobility (world’s greatest stretch, 90/90 switches) for 10 min."
  }
];

const techniqueKeys = [
  {
    label: "Tempo",
    message:
      "Use a 3-second eccentric on squats and RDLs to keep tension high with lighter load."
  },
  {
    label: "Range",
    message:
      "Front rack march knee lifts to hip height, ribs stacked over pelvis to build core stability."
  },
  {
    label: "Breathing",
    message:
      "Exhale on effort (press, row, stand tall) to brace midline and avoid holding breath."
  },
  {
    label: "Progression",
    message:
      "First priority: remove leftover rest in complex. Second: add reps (+2 per move) while keeping form."
  }
];

export default function Page() {
  return (
    <div className="space-y-10 text-slate-100">
      <header className="section-card space-y-4">
        <span className="badge">PVC DB · 15 Minutes · Full Body</span>
        <h1 className="text-3xl md:text-4xl leading-tight">
          Minimalist Dumbbell Power Session
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl">
          A repeatable 15-minute protocol engineered to drive hypertrophy, strength,
          and aesthetic balance with nothing but your 5 kg PVC dumbbells. Follow the
          flow as often as schedule allows; consistency beats perfection.
        </p>
      </header>

      <section className="section-card space-y-6">
        <h2 className="text-2xl">Daily Session Timeline</h2>
        <div className="timeline space-y-5">
          {[...warmUp, ...strengthCircuit, ...finisher].map((block) => (
            <div key={block.title} className="timeline-step">
              <h3>{block.title}</h3>
              <p className="exercise-detail">{block.duration}</p>
              <p className="text-slate-300 mt-1">{block.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card space-y-6">
        <h2 className="text-2xl">Movement Deep Dive</h2>
        <div className="grid-responsive">
          <article className="exercise-block">
            <h3>Tempo Goblet Squat</h3>
            <p className="text-slate-400 mt-2">
              Hug one bell vertically. Sit to parallel in 3 seconds, pause briefly,
              stand tall with glutes and quads. Keep elbows close, chest lifted.
            </p>
            <p className="tip mt-3">
              <span className="tip-title">Why:</span>
              <span>
                Slow lowering increases mechanical tension for growth despite the
                lighter load, while the pause reinforces knee stability.
              </span>
            </p>
          </article>
          <article className="exercise-block">
            <h3>Tall Kneeling Press</h3>
            <p className="text-slate-400 mt-2">
              Kneel on both knees, squeeze glutes, press bells overhead without
              arching lower back. Control descent for shoulder strength.
            </p>
            <p className="tip mt-3">
              <span className="tip-title">Why:</span>
              <span>
                Kneeling removes leg drive, forcing upper-body and core engagement
                for clean pressing mechanics.
              </span>
            </p>
          </article>
          <article className="exercise-block">
            <h3>Bent-Over Row</h3>
            <p className="text-slate-400 mt-2">
              Hinge at hips, torso 45°. Pull bells to ribs, squeeze shoulder blades,
              release with 1-second stretch to keep lats active.
            </p>
            <p className="tip mt-3">
              <span className="tip-title">Why:</span>
              <span>
                Balances pressing volume and builds postural strength that supports
                an aesthetic upper back.
              </span>
            </p>
          </article>
          <article className="exercise-block">
            <h3>Split-Stance RDL</h3>
            <p className="text-slate-400 mt-2">
              Front foot flat, back foot light. Hinge until hamstrings load, keep
              shoulders above hips, drive through front heel to stand.
            </p>
            <p className="tip mt-3">
              <span className="tip-title">Why:</span>
              <span>
                Single-leg emphasis sharpens glute-ham tie-in and core coordination
                while addressing imbalances.
              </span>
            </p>
          </article>
        </div>
      </section>

      <section className="section-card space-y-6">
        <h2 className="text-2xl">Weekly Rhythm</h2>
        <p className="text-slate-300">
          Rotate through themes when you can train multiple days. Missed days? Slide
          back to Day A and keep momentum alive.
        </p>
        <div className="grid-responsive md:grid-cols-4">
          {weeklyRhythm.map((day) => (
            <article key={day.title} className="exercise-block">
              <h3>{day.title}</h3>
              <p className="text-slate-400 mt-2">{day.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card space-y-6">
        <h2 className="text-2xl">Execution Keys</h2>
        <div className="grid-responsive md:grid-cols-2">
          {techniqueKeys.map((item) => (
            <article key={item.label} className="exercise-block">
              <h3>{item.label}</h3>
              <p className="text-slate-400 mt-2">{item.message}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card space-y-4">
        <h2 className="text-2xl">Consistency Playbook</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2">
          <li>
            Anchor the workout to an existing habit (post-breakfast, post-work) to
            improve adherence even with an irregular week.
          </li>
          <li>
            If you have only 8-10 minutes, run Warm-Up + first Complex loop + Finisher
            Set 1. Progression beats perfection.
          </li>
          <li>
            Track perceived exertion (1-10). Aim for 7-8; when it feels like 6,
            integrate one of the progression levers.
          </li>
        </ul>
      </section>

      <p className="footer-note">
        Stay mindful of form. Stop if you feel pain outside expected muscle fatigue.
        Pair sessions with protein-rich meals and quality sleep for optimal results.
      </p>
    </div>
  );
}
