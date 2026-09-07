# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied readings, PARCS sample questions and user-confirmed official answer keys.

Production: `https://ape-study-v2.vercel.app/`

Private repo: `Silkyj0/ape-study-v2`

Vercel deploys automatically from `main`.

## Current MCQ bank

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

Total live MCQ seed: **534 questions**.

- Verified/source-audited authored bank: **406**
- PARCS-confirmed: **128**
- `SEED_VERSION = 34`
- The two M1 items `m1-woolcock` and `m1-introvigne` remain withheld pending source re-checks.

The MCQ bank is mature. Do not default to adding more volume unless performance exposes a specific gap.

## Acumen flashcard bank — v2 completed 7 September 2026

The dedicated **Cards** mode now uses **113 source-audited Acumen flashcards across Modules 1–11**.

- `FLASHCARD_SEED_VERSION = 2`
- Existing cards retained: **30**
- New cards added: **83**
- Existing flashcard seed IDs changed: **0**
- Source/QA record: `FLASHCARD_SOURCE_AUDIT.md`
- Build-time QA: `scripts/audit-flashcards.mjs`
- Source rule: supplied Acumen readings only. Do not fill definitions, distinctions or examples from general knowledge, the MCQ bank, external websites or unsupplied commentary.

Current distribution:

| Module | Cards | Main coverage |
| --- | ---: | --- |
| M1 | 10 | standard of care, liability, duty to warn/correct, PII |
| M2 | 10 | practice structures, copyright, assignment/licence, moral rights |
| M3 | 8 | client agreements, collateral warranties, fitness for purpose, consultant engagement |
| M4 | 8 | budgets, design stages, variations to services, value management, consultant roles |
| M5 | 8 | safe design, WHS duties, access, embodied/operational impacts |
| M6 | 20 | procurement, novation, NCC pathways, construction documentation |
| M7 | 7 | tendering, addenda, conforming/alternative tenders, contract documents |
| M8 | 8 | construction roles, latent conditions, substitutions, inspections/hold/witness points |
| M9 | 15 | contract sums, variations, progress payments/certification, security, discrepancies |
| M10 | 12 | EOTs, critical path/float, prevention principle, liquidated damages, completion/defects |
| M11 | 7 | final completion/certificate, ADR, insolvency/termination, fee disputes |

### Flashcard v2 architecture

- `src/data/flashcardsCore.js` — historical initial 30-card bank retained intact for auditability and stable IDs.
- `src/data/flashcards/` — M1–M11 modular expansion files containing 83 new source-audited cards.
- `src/data/flashcardsExpanded.js` — assembles the modular expansion.
- `src/data/flashcardQaOverrides.js` — wording refinements applied by stable seed ID after the source QA pass.
- `src/data/flashcards.js` — version-2 public bank entrypoint used by the app; combines the core, QA overrides and expansion.
- `scripts/audit-flashcards.mjs` — checks total count, module distribution, unique IDs/terms, minimum definition depth and Acumen provenance.
- `package.json` — production `build` runs flashcard QA before `vite build`, so Vercel fails if the bank violates the structural standard.
- `src/lib/flashcards.js` — adaptive scheduling, retry logic, mastery and stats.
- `src/components/FlashcardsView.jsx` — module/topic dashboard and click-to-flip study UI.
- `src/App.jsx` — Cards navigation/session state/rating persistence.
- `src/lib/progress.js` — separate flashcard reconciliation and persistent progress.

### Flashcard QA outcome

All original 30 cards were checked against their named supplied Acumen readings. No original card required withdrawal. Refinements were made where qualification improved exam reliability, including:

- Prime cost item vs provisional sum;
- contingency sum;
- contract security / cash retention / unconditional guarantees;
- EOT, EOT-with-costs and EOT-only as distinct contract-dependent entitlements;
- critical-path effect and float;
- practical completion;
- final completion and final certificate.

The expansion was also reviewed for over-generalisation. In particular:

- liquidated damages now avoids presenting an oversimplified universal penalty test;
- defects-liability wording does not imply a contractor automatically owns design defects outside its contractual design responsibility;
- determinative ADR records Acumen's qualification that Security of Payment adjudication can bind while underlying contractual rights may still be pursued.

Flashcard progress survives the v1-to-v2 seed migration because reconciliation matches existing cards by stable `seedId`; the 83 new IDs enter as unseen cards.

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

Important calibration themes:

- identify the professional role at the exact moment: client agent vs independent assessor/certifier;
- consultant/contractor responsibility does not automatically erase the architect's own coordination or professional duty;
- change control is measured against the current documented position, including reinstating an earlier design after an intervening change;
- preserve a fair common tender basis before changing it;
- urgent mitigation should preserve the existing project delivery chain where possible;
- separate EOT entitlement, critical-path effect, overlap/concurrency and cost entitlement;
- distinguish contractor workmanship defects from architect design/detailing errors;
- preserve official PARCS keys exactly even where broader real-world analysis could be more nuanced.

### Key official PARCS keys retained

M3:
- 3.1: **D, C, D, C**
- 3.2: **D, A, B, C**
- 3.3: **B, B, B, C**

M10:
- 10.1: **D, B, C, FALSE, FALSE**
- 10.2: **B, D, C**
- 10.3: **D, B, B, B**

M11:
- 11.1: **B, C, C, TRUE, FALSE**
- 11.2: **C, A, C, A**
- 11.3: **B, C, D**

Confirmed PARCS wording and official keys are immutable.

## Modules 5–11 QA audit — completed 7 September 2026

`MODULES05_11_QUALITY_AUDIT.md` is the detailed audit.

Main finding: source fidelity and keyed answers were materially sound; the weakness was uneven authored-question difficulty. A targeted **33 authored questions** across M5–M11 were upgraded in `src/data/laterModuleDifficultyOverrides.js` without changing the underlying source proposition or stored correct-answer position:

- M5: 3
- M6: 6
- M7: 6
- M8: 4
- M9: 4
- M10: 4
- M11: 6

The upgraded items use richer project facts, plausible competing duties/answers and post-answer `examTip` guidance. `StudyView.jsx` displays this as **Exam reasoning** only after an answer is committed.

## Study modes live

### Normal adaptive MCQ study

- Module sessions up to 20 cards.
- Due/weak items before unseen items.
- Wrong answers reappear after about five cards, up to two same-session retries.
- Correct streak spacing roughly 1, 3, 7 and 14 days.
- Three consecutive confident correct answers = mastered.
- Pre-answer confidence is required: **Confident / Unsure / Guessing**.
- Correct + Confident advances mastery normally.
- Correct + Unsure does not advance mastery and returns in about 12 hours.
- Correct + Guessing does not advance mastery and returns in about 4 hours.
- Confident-wrong attempts are explicitly retained for later misconception analysis.

### Acumen Flashcards

- Front shows term plus module/topic context; tap/click flips to definition.
- Back shows concise source-faithful definition, source-supported examples where useful, exact Acumen reading title and section.
- Smart mixed review, complete-bank review, by-module review and by-topic review.
- Recall ratings: **Knew it / Unsure / Didn’t know**.
- Knew it advances spacing roughly 1, 3, 7 and 14 days.
- Unsure returns in about 12 hours.
- Didn’t know returns in about 4 hours and can be reinserted after several cards, up to two same-session retries.
- Three consecutive Knew it ratings = mastered.
- Flashcard mastery is stored separately from MCQ mastery.

### PARCS-only

Dedicated **PARCS** tab contains only supplied confirmed PARCS questions, with mixed review, by-module review and immutable confirmed keys.

### PARCS Scenario Mode

Official scenarios stay grouped: scenario visible throughout, all linked questions answered before reveal, whole-scenario submit, then score/review.

### PARCS calibration trap drills

Stats includes drills for recurring patterns exposed by blind calibration. Exact official trap questions appear first, followed by related source-verified questions.

### Exam Simulation

Dedicated **Exam** tab:

- 40 questions;
- 60-minute countdown;
- trusted bank only;
- spread across M1–M11;
- no feedback/source information during sitting;
- previous/next navigation and 1–40 navigator;
- flag-for-review;
- unanswered warning;
- auto-submit at 00:00;
- score, module breakdown and detailed review after submission;
- exam results feed adaptive learning only after submission.

No arbitrary pass/fail threshold is displayed.

## QA architecture

Key files:

- `src/data/questions.js` — MCQ seed assembly, seed v34.
- `src/data/flashcards.js` — Acumen flashcard bank entrypoint, seed v2.
- `src/data/flashcardsCore.js` — historical 30-card flashcard core.
- `src/data/flashcardsExpanded.js` + `src/data/flashcards/module01.js` … `module11.js` — 83-card expansion.
- `src/data/flashcardQaOverrides.js` — source-QA refinements by stable ID.
- `scripts/audit-flashcards.mjs` — production flashcard structural/provenance audit.
- `src/data/qaMetadata.js` — PARCS sample IDs and QA labels.
- `src/data/laterModuleQaOverrides.js` — earlier MCQ distractor/shape refinements.
- `src/data/laterModuleDifficultyOverrides.js` — 33 M5–M11 difficulty upgrades.
- `src/data/calibrationTraps.js` — official blind-calibration trap patterns.
- `src/lib/audit.js` — MCQ structural option/answer/source QA checks.
- `src/lib/learning.js` — adaptive MCQ learning and focus logic.
- `src/lib/flashcards.js` — adaptive flashcard recall logic.
- `src/lib/scenarios.js` — PARCS scenario grouping.
- `src/lib/exam.js` — 40-question/60-minute exam simulation logic.

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
6. Prefer scenario/application judgement over definition recognition for MCQs; use Cards for terminology recall.
7. Confirmed PARCS samples and official keys are immutable.
8. Withhold uncertainty rather than guessing.
9. Keep course-specific PARCS framing even where broader real-world legal analysis could be more nuanced.
10. Do not expand M5 PARC-linked external website material unless the user changes that instruction.
11. Flashcard definitions, distinctions and examples must come from the supplied Acumen reading itself.
12. Preserve qualifiers such as contract-specific, jurisdiction-specific, general rule, ABIC-specific and client-approval-dependent.

## Recommended next work

The content banks are now sufficiently broad. Do **not** default to another large MCQ or flashcard expansion.

Recommended next steps:

1. use mixed study, Cards and Exam Simulation regularly;
2. monitor confident-wrong / repeated-lapse MCQ patterns and Didn’t-know / Unsure flashcard patterns;
3. add targeted flashcards only where actual study performance reveals a missing distinction or the user identifies a supplied Acumen term that is not covered;
4. use user QA flags for any MCQ or card that feels off;
5. create shadow/variant MCQs only where performance shows memorisation rather than concept transfer;
6. continue difficulty refinement only where answer wording makes the correct choice too easy.

The next planned learning-system feature is **concept-level mastery and mistake analysis**, combining pre-answer MCQ confidence, repeated lapses, weak topics, PARCS calibration traps and flashcard recall data. It should distinguish confident misconceptions, uncertain knowledge and guess-driven correct answers rather than relying on raw accuracy alone.
