# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The core study program is based on PARCS Modules 1–11, supplied readings, PARCS sample questions and user-confirmed official answer keys. A supplementary Module 12 now provides direct study of the supplied ABIC SW 2018 Simple Works Contract.

Production: `https://ape-study-v2.vercel.app/`

Repo: `Silkyj0/ape-study-v2`

Vercel deploys automatically from `main`.

## Current release state — 7 September 2026

### MCQ bank

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
| M12 | 50 | supplementary ABIC SW 2018 source-verified |

Total live MCQ seed: **584 questions**.

- Core M1–M11 bank: **534**
- Supplementary ABIC M12: **50**
- PARCS-confirmed: **128**
- `SEED_VERSION = 35`
- `m1-woolcock` and `m1-introvigne` remain withheld pending source re-checks.

M12 is supplementary and is intentionally excluded from the normal 40-question M1–M11 Exam Simulation.

### Flashcard bank

Total flashcards: **185**.

- M1–M11 Acumen bank: **113 source-audited cards**
- M12 ABIC bank: **72 source-verified cards**
- `FLASHCARD_SEED_VERSION = 3`
- Existing pre-v3 IDs remain unchanged so stored progress reconciles by `seedId`; new M12 cards enter as unseen.

M1–M11 Acumen distribution remains:

| Module | Cards |
| --- | ---: |
| M1 | 10 |
| M2 | 10 |
| M3 | 8 |
| M4 | 8 |
| M5 | 8 |
| M6 | 20 |
| M7 | 7 |
| M8 | 8 |
| M9 | 15 |
| M10 | 12 |
| M11 | 7 |
| M12 | 72 |

`FLASHCARD_SOURCE_AUDIT.md` remains the source/QA record for the Acumen M1–M11 bank. `ABIC_SOURCE_AUDIT.md` is the source/QA record for Module 12 and ABIC cross-references.

## ABIC SW 2018 integration v1

Primary source:

- `reference-contract-abic-sw-2018-c-071118 (1).pdf`
- Google Drive file ID retained in `src/data/abic/contractMap.js`

Architecture:

- `src/data/abic/contractMap.js` — canonical source map for schedules, clause headings and selected definitions.
- `src/data/abic/factories.js` — source metadata factory for ABIC questions/cards.
- `src/data/abic/questions01.js` … `questions05.js` — 50 M12 MCQs.
- `src/data/abic/flashcards01.js` … `flashcards04.js` — 72 M12 flashcards.
- `src/data/abic/crossReferences.js` — ABIC clause/page cross-references for relevant existing M8–M11 Acumen content.
- `src/data/module12.js` — M12 question assembly.
- `src/data/flashcards/module12.js` — M12 flashcard assembly.
- `scripts/audit-abic.mjs` — build-time ABIC structural/provenance audit.
- `ABIC_SOURCE_AUDIT.md` — detailed integration/source notes and known reference-copy anomalies.

M12 question mix is deliberately application-heavy:

- 10 foundation/navigation questions;
- 15 clause/procedure mechanics questions;
- 25 scenario/application questions;
- authored correct positions balanced A 13 / B 13 / C 12 / D 12.

The ABIC deck teaches three levels of recall:

1. where contract mechanisms live;
2. how the contractual procedure operates;
3. what high-value defined terms and schedule entries mean.

Existing M8–M11 Acumen content is not reclassified as ABIC content. Relevant items retain their original Acumen source and receive a secondary ABIC clause/page cross-reference only where directly supported by the supplied contract.

The current cross-reference layer covers **40 existing M8–M11 questions** and **22 existing M8–M11 flashcards**.

### ABIC QA status

M12 questions receive:

- `qaStatus: abic-source-verified`
- `qaLabel: ABIC source verified`

This status is intentionally not listed in `EXAM_QA_STATUSES`, which keeps supplementary M12 out of the normal M1–M11 Exam Simulation.

The supplied ABIC reference copy contains a small number of internal schedule/clause cross-reference inconsistencies. Do not silently correct these from outside knowledge. Where a reference-copy inconsistency could create unreliable rote learning, withhold that particular cross-reference and teach the supported substantive contract requirement instead. See `ABIC_SOURCE_AUDIT.md`.

## Acumen flashcard bank — v2 baseline

The original Acumen flashcard QA project remains valid for M1–M11:

- original 30 historical cards retained;
- 83 expansion cards added;
- stable original IDs preserved;
- all definitions/distinctions/examples sourced only from supplied Acumen readings;
- precision refinements applied through `src/data/flashcardQaOverrides.js`.

Important refined concepts include prime cost items vs provisional sums, contingency, security, EOT entitlement vs costs, critical-path effect, practical completion, final completion/final certificate, liquidated damages, defects responsibility and determinative ADR.

## PARCS blind calibration

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

Recurring calibration themes:

- identify the architect's exact role at the relevant moment: owner agent vs independent assessor/valuer/certifier;
- consultant/contractor responsibility does not erase the architect's own coordination/professional duty;
- change control is measured against the current documented position;
- preserve a fair common tender basis;
- urgent mitigation should preserve the project delivery chain where possible;
- separate EOT entitlement, critical-path effect, overlap/concurrency and cost entitlement;
- distinguish contractor workmanship defects from architect design/detailing errors;
- preserve confirmed PARCS keys exactly even where broader real-world analysis may be more nuanced.

Confirmed PARCS keys retained:

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

## Study modes live

### Normal adaptive MCQ study

- Module sessions up to 20 cards.
- Due/weak items before unseen items.
- Wrong answers reappear within the session and become due sooner.
- Correct streak spacing roughly 1, 3, 7 and 14 days.
- The pre-answer Confident / Unsure / Guessing checker is currently disabled in the UI.
- Existing confidence fields are retained in stored progress for backwards compatibility, but the learner goes directly from the question to answer choices.

### Flashcards

- Click/tap to flip term → definition.
- Smart review, complete-bank review, by-module review and by-topic review.
- Recall ratings: **Knew it / Unsure / Didn’t know**.
- Knew it advances spacing roughly 1, 3, 7 and 14 days.
- Unsure returns in about 12 hours.
- Didn’t know returns in about 4 hours and can reappear in-session.
- M1–M11 cards identify Acumen provenance; M12 cards identify ABIC SW 2018 provenance and contract references.

### PARCS-only / Scenario Mode / calibration drills

These remain unchanged. Official supplied scenarios, wording and confirmed keys are immutable.

### Exam Simulation

- 40 questions;
- 60-minute countdown;
- trusted M1–M11 bank only;
- no feedback/source information during the sitting;
- navigation, flag-for-review and unanswered warning;
- auto-submit at 00:00;
- module breakdown and detailed review after submission;
- no arbitrary pass/fail threshold.

M12 ABIC questions do **not** enter this exam pool.

## QA architecture

Key files:

- `src/data/questions.js` — MCQ seed assembly, seed v35.
- `src/data/flashcards.js` — flashcard public entrypoint, seed v3.
- `src/data/qaMetadata.js` — PARCS, Drive, external and ABIC QA classifications.
- `src/data/laterModuleQaOverrides.js` — existing later-module MCQ refinements.
- `src/data/laterModuleDifficultyOverrides.js` — M5–M11 difficulty upgrades.
- `src/data/calibrationTraps.js` — confirmed blind-calibration traps.
- `src/data/abic/` — ABIC source map, questions, cards and cross-references.
- `src/lib/audit.js` — MCQ structural audit.
- `scripts/audit-flashcards.mjs` — flashcard bank audit.
- `scripts/audit-abic.mjs` — ABIC source/reference audit.
- `src/lib/exam.js` — M1–M11 Exam Simulation eligibility and generation.

Production `npm run build` runs flashcard QA and ABIC QA before `vite build`; Vercel therefore fails if those source-bank structural safeguards fail.

QA statuses in use:

- `parcs-confirmed`
- `source-audited`
- `drive-source-verified`
- `parc-external-verified`
- `abic-source-verified`
- `needs-source-check`
- `legacy-placeholder`
- `user-added`

## Source discipline

1. Supplied course/source material is the source of truth for authored study content.
2. Do not silently fill gaps from model/general knowledge.
3. Confirmed PARCS content and keys are immutable.
4. Acumen M1–M11 flashcards must use the supplied Acumen readings; do not use ABIC to silently rewrite Acumen definitions.
5. ABIC M12 contractual content must use the supplied ABIC SW 2018 contract itself.
6. Dual-source/cross-referenced items must preserve the original source and identify ABIC only as a secondary contract cross-reference unless the item was authored directly from ABIC.
7. Preserve contract-specific, jurisdiction-specific and source-specific qualifications.
8. Withhold uncertainty rather than guessing or repairing a source from outside knowledge.
9. Prefer application/professional judgment for MCQs and direct recall/navigation for appropriate flashcards.
10. Quality is more important than bank size.

Read `QUESTION_WRITING_STANDARD.md`, `FLASHCARD_SOURCE_AUDIT.md` and `ABIC_SOURCE_AUDIT.md` before changing study content.

## Recommended next work

Do **not** default to another bulk bank expansion. The content base is now broad enough.

Recommended priorities:

1. use mixed M1–M11 study, Cards and Exam Simulation regularly;
2. use M12 separately for ABIC contract navigation and application practice;
3. monitor repeated-lapse MCQs and Unsure / Didn’t know flashcards;
4. use user QA flags for content that feels off;
5. add targeted questions/cards only where study performance reveals a genuine gap;
6. consider a dedicated ABIC Contract Test later if M12 proves useful, rather than changing normal Exam Simulation weighting;
7. continue concept-level mastery/mistake analysis work using repeated lapses, weak topics, PARCS calibration traps and flashcard recall data.
