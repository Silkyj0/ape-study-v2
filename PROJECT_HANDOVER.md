# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied readings, PARCS sample questions and user-confirmed official answer keys.

Production: `https://ape-study-v2.vercel.app/`

Private repo: `Silkyj0/ape-study-v2`

## Current live bank

| Module | Live | Composition |
| --- | ---: | --- |
| M1 | 44 | source-audited + PARCS |
| M2 | 75 | source-audited + PARCS |
| M3 | 72 | 60 Drive-source-verified + 12 PARCS |
| M4 | 69 | 56 authored + 13 PARCS |
| M5 | 23 | 10 authored + 13 PARCS |
| M6 | 51 | 40 authored + 11 PARCS |
| M7 | 42 | 32 authored + 10 PARCS |
| M8 | 36 | 24 authored + 12 PARCS |
| M9 | 42 | 28 authored + 14 PARCS answer points |
| M10 | 44 | 32 authored + 12 PARCS answer points |
| M11 | 36 | 24 authored + 12 PARCS answer points |

Total live seed: **534 questions**.

- Verified/source-audited authored bank: **406**
- PARCS-confirmed: **128**
- `SEED_VERSION = 34`

Separate Acumen flashcard bank: **30 source-verified cards** across M6, M9, M10 and M11.

- `FLASHCARD_SEED_VERSION = 1`
- Source audit: `FLASHCARD_SOURCE_AUDIT.md`
- Flashcard content source rule: supplied Acumen readings only; definitions and examples must not be filled from general knowledge.

The two M1 items `m1-woolcock` and `m1-introvigne` remain withheld pending source re-checks.

## PARCS blind calibration summary

Modules 3–11 blind calibration total: **98/109 (89.9%)**.

| Module | Blind result | Confirmed misses |
| --- | ---: | --- |
| M3 | 11/12 | 3.2 Q4 |
| M4 | 12/13 | 4.1 Q1 |
| M5 | 11/13 | 5.2 Q3, 5.2 Q4 |
| M6 | 11/11 | none |
| M7 | 8/10 | 7.1 Q1, 7.2 Q1 |
| M8 | 11/12 | 8.2 Q4 |
| M9 | 13/14 | 9.1 Q5 |
| M10 | 10/12 | 10.1 Q2, 10.3 Q2 |
| M11 | 11/12 | 11.1 Q3 |

`PARCS_CALIBRATION_AUDIT.md` records the recurring course-specific reasoning patterns. `src/data/calibrationTraps.js` feeds those traps into adaptive study.

Important calibration themes include:

- exact professional role at the relevant moment: client agent vs independent assessor/certifier;
- consultant/contractor responsibility does not automatically erase the architect's own coordination or professional duty;
- change control is measured against the current documented position, including reinstating an earlier design after an intervening change;
- preserve a fair common tender basis before changing it;
- urgent mitigation should preserve the existing project delivery chain where possible;
- separate EOT entitlement, critical-path effect, overlap/concurrency and cost entitlement;
- distinguish contractor workmanship defects from architect design/detailing errors;
- preserve the official M11 Scenario 11.1 Q3 PARCS key exactly as a course-specific calibration answer rather than generalising it into a universal ABIC rule.

## Modules 5–11 QA audit — completed 7 September 2026

`MODULES05_11_QUALITY_AUDIT.md` is the current detailed audit.

Main finding: **source fidelity and keyed answers were materially sound; the weakness was uneven authored-question difficulty.** Modules 6, 7 and 11 in particular contained too many one-step recall questions compared with the official PARCS style.

A targeted **33 authored questions** across M5–M11 were upgraded in `src/data/laterModuleDifficultyOverrides.js` without changing the underlying source proposition or stored correct-answer position:

- M5: 3
- M6: 6
- M7: 6
- M8: 4
- M9: 4
- M10: 4
- M11: 6

The upgraded items now use richer project facts, plausible competing duties/answers and post-answer `examTip` guidance. `StudyView.jsx` displays this as **Exam reasoning** only after the learner commits to an answer.

PARCS-confirmed wording and official keys were not altered.

Source spot-checks during the QA audit included the supplied readings on tender receiving/selection, inspections/opening up, defects/post-occupancy responsibility, variations and final completion. No new authored keyed-answer conflict was identified.

## Module-specific calibration state

### M3
- 60 authored + 12 immutable PARCS samples.
- Official sample key:
  - 3.1: **D, C, D, C**
  - 3.2: **D, A, B, C**
  - 3.3: **B, B, B, C**
- Confirmed miss: 3.2 Q4, conflict created by accepting an apartment as part of fees.

### M4
- 56 authored + 13 PARCS.
- Blind 12/13.
- Calibration: client-engaged specialist consultant does not eliminate architect briefing/coordination/review/integration responsibility.

### M5
- Deliberately compact at 10 authored + 13 PARCS.
- External PARC-linked websites are not expanded into a large authored bank at the user's direction.
- Blind 11/13.
- Calibration: PM/client instruction changing the current documented position can be an additional service; reinstating an earlier arrangement can itself be a new change.

### M6
- 40 authored + 11 PARCS; blind 11/11.
- Four authored novation questions were added post-calibration in `module06.novation.js`.
- Key themes: procurement structure, D&C, novation, Performance Solutions, documentation/shop drawings and product compliance.

### M7
- 32 authored + 10 PARCS; blind 8/10.
- Calibration: possible future supply disruption does not automatically justify changing tender basis; a non-conforming lowest tender may first be asked whether it stands by its price on the specified conforming basis.

### M8
- 24 authored + 12 PARCS; blind 11/12.
- Calibration: urgent ongoing damage + head contractor unavailable -> contact the existing relevant subcontractor rather than waiting or independently engaging an unrelated replacement.

### M9
- 28 authored + 14 PARCS answer points; blind 13/14.
- T/F cards are supported as fixed TRUE/FALSE option order.
- Calibration: an inspection undertaken specifically to assess a progress claim belongs to the independent assessment/certification function rather than ordinary client-agency administration.

### M10
- 32 authored + 12 PARCS answer points; blind 10/12.
- Official key:
  - 10.1: **D, B, C, FALSE, FALSE**
  - 10.2: **B, D, C**
  - 10.3: **D, B, B, B**
- Misses:
  - 10.1 Q2: late site possession earns the time adjustment; do not simply deny it because another delay overlaps.
  - 10.3 Q2: contractor is not obliged to rectify an architect design/detailing defect as though it were contractor defective workmanship.

### M11
- 24 authored + 12 PARCS answer points; blind 11/12.
- Official key:
  - 11.1: **B, C, C, TRUE, FALSE**
  - 11.2: **C, A, C, A**
  - 11.3: **B, C, D**
- Only miss: 11.1 Q3. Preserve the official PARCS answer as authoritative and course-specific.

## Study modes now live

### Normal adaptive study
- Module sessions up to 20 cards.
- Due/weak items before unseen items.
- Wrong answers reappear after about five cards, up to two same-session retries.
- Correct streak spacing roughly 1, 3, 7 and 14 days.
- Three consecutive confident correct answers = mastered.
- **Pre-answer confidence is required before an answer can be committed:** Confident / Unsure / Guessing.
- A correct **Confident** answer advances mastery normally.
- A correct **Unsure** answer stays correct but does not advance mastery and returns in about 12 hours.
- A correct **Guessing** answer stays correct but does not advance mastery and returns in about 4 hours.
- **Confident-wrong** attempts are explicitly counted and confidence history is retained in saved progress for later misconception analysis.

### Acumen Flashcards
Dedicated **Cards** tab for terminology recall.

- Initial seed contains **30 cards**, all derived from supplied Acumen PDFs.
- Front shows the term plus module/topic context; tap/click flips to definition.
- Back shows a concise source-faithful definition, source-supported examples where useful, exact Acumen reading title and relevant section.
- Smart mixed review, complete-bank review, by-module review and by-topic review.
- Recall ratings: **Knew it / Unsure / Didn’t know**.
- **Knew it** advances the recall streak with spacing of roughly 1, 3, 7 and 14 days.
- **Unsure** returns in about 12 hours.
- **Didn’t know** returns in about 4 hours and can be reinserted after about four other cards, up to two same-session retries.
- Three consecutive **Knew it** ratings = mastered.
- Flashcard progress is stored independently from MCQ progress and survives flashcard seed updates/import reconciliation.
- Never add a flashcard definition or example from general knowledge. Read `FLASHCARD_SOURCE_AUDIT.md` first.

Current flashcard distribution:

- M6: 13 — procurement, novation, PPRs, shop drawings
- M9: 10 — prime cost/provisional/contingency sums, variations, progress payments, security
- M10: 5 — EOTs, critical path and practical completion
- M11: 2 — final completion and final certificate

### PARCS-only section
Dedicated **PARCS** tab contains only supplied confirmed PARCS questions.

- mixed PARCS review;
- PARCS by module;
- immutable confirmed answer keys.

### PARCS Scenario Mode
Official PARCS scenarios can be sat as grouped scenarios:

- scenario remains visible;
- all linked questions answered before reveal;
- no answers/explanations until whole scenario is submitted;
- scenario score and post-submit review.

### PARCS calibration trap drills
Stats includes dedicated drills for recurring patterns exposed by blind calibration. Exact official trap questions appear first, followed by related source-verified questions.

### Exam Simulation
Dedicated **Exam** tab:

- **40 questions**;
- **60-minute countdown**;
- trusted bank only;
- spread across Modules 1–11;
- no feedback or source information during the sitting;
- previous/next navigation and 1–40 navigator;
- flag-for-review;
- unanswered warning;
- auto-submit at 00:00;
- score, module breakdown and detailed review after submission;
- exam results feed adaptive learning only after submission.

No arbitrary pass/fail threshold is displayed.

## Pre-answer confidence — implemented 7 September 2026

The earlier post-answer **I guessed / not confident** control has been replaced in normal card study by a pre-answer confidence choice. This avoids hindsight bias and gives the learning system a cleaner signal about whether a correct answer came from secure recall, uncertainty or guessing.

Implementation files:

- `src/components/StudyView.jsx` — confidence choice must be made before answer options unlock; selected confidence remains visible after reveal.
- `src/App.jsx` — applies confidence-aware scheduling and records confidence counts/history, including confident-wrong attempts.
- `src/lib/progress.js` — preserves confidence data through seed reconciliation and progress imports.

PARCS Scenario Mode and Exam Simulation remain unchanged so their grouped/closed-feedback behavior is preserved.

## Acumen flashcards — implemented 7 September 2026

Implementation files:

- `src/data/flashcards.js` — source-verified flashcard seed and precise reading provenance.
- `src/lib/flashcards.js` — adaptive scheduling, retry logic, mastery and flashcard stats.
- `src/components/FlashcardsView.jsx` — dashboard, module/topic entry points and flip-card study UI.
- `src/App.jsx` — Cards navigation, flashcard sessions, rating persistence and migration.
- `src/lib/progress.js` — separate flashcard seed reconciliation and persistent progress.
- `FLASHCARD_SOURCE_AUDIT.md` — mandatory source standard and initial reading/card map.

## QA architecture

Key files:

- `src/data/questions.js` — live MCQ seed assembly, currently seed v34.
- `src/data/flashcards.js` — Acumen-only flashcard seed, currently seed v1.
- `src/data/qaMetadata.js` — PARCS sample IDs and QA labels.
- `src/data/laterModuleQaOverrides.js` — earlier distractor/shape refinements.
- `src/data/laterModuleDifficultyOverrides.js` — 33 M5–M11 targeted difficulty upgrades and exam reasoning notes.
- `src/data/calibrationTraps.js` — official blind-calibration trap patterns.
- `src/lib/audit.js` — structural option/answer/source QA checks.
- `src/lib/learning.js` — adaptive MCQ learning and focus logic.
- `src/lib/flashcards.js` — adaptive flashcard recall logic.
- `src/lib/scenarios.js` — PARCS scenario grouping.
- `src/lib/exam.js` — 40-question/60-minute exam simulation logic.
- `src/components/StudyView.jsx` — pre-answer confidence, post-answer explanations, Exam reasoning and QA provenance.
- `src/components/FlashcardsView.jsx` — Acumen term recall and source display.
- `src/components/ExamView.jsx` — closed-feedback simulation UI and post-submit review.

QA statuses in use:

- `parcs-confirmed`
- `source-audited`
- `drive-source-verified`
- `parc-external-verified`
- `needs-source-check`
- `legacy-placeholder`
- `user-added`

## Source discipline

Read `QUESTION_WRITING_STANDARD.md` before changing MCQ study content and `FLASHCARD_SOURCE_AUDIT.md` before changing flashcard content.

Core rules:

1. Supplied course material is the source of truth for authored study content.
2. Do not silently fill gaps from general knowledge.
3. Prefer Australian/Queensland framing where the source supports it.
4. Every authored live question needs precise provenance.
5. Quality over volume; pruning is valid QA.
6. Prefer scenario/application judgement over definition recognition for MCQs; use the flashcard mode for terminology recall.
7. Confirmed PARCS samples and official keys are immutable.
8. Withhold uncertainty rather than guessing.
9. Keep course-specific PARCS framing even where broader real-world legal analysis could be more nuanced.
10. Do not expand M5 PARC-linked external website material unless the user changes that instruction.
11. Flashcard definitions, distinctions and examples must come from the supplied Acumen reading itself; do not derive them from the MCQ bank or general knowledge.

## Recommended next work

The MCQ content bank is mature. Do **not** default to adding more MCQ volume.

Recommended next steps:

1. use normal mixed study, Acumen Flashcards and Exam Simulation;
2. expand flashcards module-by-module only where the supplied Acumen PDFs contain a clear, useful term or distinction;
3. watch confident-wrong / repeated-lapse MCQ patterns and Did-not-know / Unsure flashcard patterns;
4. use user QA flags for any question that feels off;
5. create new shadow/variant MCQs only where performance shows memorisation rather than concept transfer;
6. continue refining difficulty only where the learner can identify answers from wording rather than reasoning.

The next planned learning-system feature remains **concept-level mastery and mistake analysis**, now using both pre-answer MCQ confidence and flashcard recall data alongside repeated lapses, weak topics and PARCS calibration traps. It should distinguish confident misconceptions, uncertain knowledge and guess-driven correct answers rather than relying on raw accuracy alone.

## Deployment

Vercel deploys automatically from `main`.

Production URL: `https://ape-study-v2.vercel.app/`
