# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied Acumen readings, PARCS sample questions and confirmed answer keys.

## Current live content

### Modules 1–2

- The original Module 1 and Module 2 source banks remain archived in the repository (M1 62; M2 146), but the **live curated M1/M2 bank is 119 questions** rather than 208.
- Live Module 1: **44 questions**.
- Live Module 2: **75 questions**.
- Of these 119 questions, **19 are immutable PARCS samples** and **100 are source-audited exam-standard rewrites**.
- Two inherited Module 1 items remain withheld rather than guessed: `m1-woolcock` and `m1-introvigne`, pending primary-source re-checks.
- Lower-value, repetitive and recognition-heavy questions remain archived but are excluded from live study.

### Module 3

- Module 3 has been fully rebuilt from Patrick's connected Google Drive Acumen folder:
  `https://drive.google.com/drive/folders/1HSUBG11Qh7xaC18rii8FXF4BkTn2H9J5`
- The folder contains **47 Acumen readings**.
- Live Module 3: **60 curated exam-standard questions**.
- The two original Module 3 placeholders were replaced rather than retained.
- Module 3 uses several scenario clusters plus standalone application questions covering agreements/contract risk, commissions and selection, fees/profitability, partial services, subconsultancy, time/communications, quality systems and related practice controls.
- **33 of the 47 readings are directly referenced by live questions.** Other readings were reviewed/consolidated or retained as inventory references rather than padded into low-value questions.
- Every live M3 question retains the exact Drive source file ID, source URL and source-check date.
- `MODULE03_SOURCE_MANIFEST.md` records the complete 47-reading inventory and the treatment of each source.
- M3 authored correct-answer positions are exactly **15 A / 15 B / 15 C / 15 D**.
- The M3 structural draft audit returned **0 uniquely-longest-correct flags, 0 high answer-length outliers and 0 major answer-shape flags** under the app's audit thresholds.

### Modules 4–11

- Only the small legacy placeholder/diagnostic set remains for M4–M7 (M4 2, M5 2, M6 4, M7 4); M8–M11 are empty.
- These later-module placeholders remain visibly labelled **Legacy placeholder** until their module is rebuilt directly from source.
- Procurement and tendering (M6/7) are a priority area.

## Current bank totals

The live seed currently comprises:

- M1: 44
- M2: 75
- M3: 60
- M4: 2 legacy placeholders
- M5: 2 legacy placeholders
- M6: 4 legacy placeholders
- M7: 4 legacy placeholders
- M8–M11: 0

Total live seed: **191 questions**.

Verified/authored exam practice includes **160 questions**: 100 source-audited M1/M2 rewrites + 60 Drive-source-verified M3 questions. The 19 immutable PARCS samples remain available through normal module study but are excluded from the mixed Verified exam bank.

## Architecture and question data

- `src/data/questions.js` combines the modules, applies M1/M2 rewrite overlays and filters M1/M2 to their curated active set.
- `src/data/module03.js` assembles the 12 small Module 3 question chunks.
- `src/data/module03Sources.js` stores the Drive source registry used by M3 questions.
- `src/data/module03Factory.js` attaches source metadata consistently to M3 questions.
- `MODULE03_SOURCE_MANIFEST.md` records the 47-reading source inventory.
- Stable seed IDs are used throughout.
- `SEED_VERSION` is now **18** so stored progress reconciles safely to the rebuilt Module 3 bank.

## Study presentation

- Question order is shuffled for every session.
- Answer order is shuffled and correct presentation positions are balanced across A–D.
- Stored source answer indexes are never mutated.
- Normal module study follows spaced-review eligibility.
- The Modules page includes a **Verified exam bank** mode containing source-audited M1/M2 and Drive-verified M3 questions while excluding the immutable PARCS samples.

## Information QA model

The application tracks provenance and review state rather than pretending a static question bank can independently prove legal correctness.

Current QA statuses:

- **PARCS confirmed** — supplied PARCS sample; underlying scenario, stem, options and confirmed answer key are immutable.
- **Source-audited rewrite** — retained M1/M2 proposition, key, source and explanation came from the previous audited bank; wording/distractors were deliberately improved.
- **Drive source verified** — M3 question was built directly from a connected Acumen reading and retains the exact Drive file reference used for checking.
- **Needs source check** — known source ambiguity; withhold rather than guess.
- **Legacy placeholder** — later-module item not yet rebuilt under the source-first workflow.
- **User-added** — manually created question requiring source verification.

The Quality screen separately reports provenance and structural QA. Structural checks include answer-length clues, duplicate options, option-shape differences and answer-position distribution. PARCS samples are excluded from structural scoring because their wording is immutable.

Users can **Flag for QA** from the study screen. Flags persist through local storage, export/import and seed reconciliation and appear in the Quality review queue.

## Source discipline

Read and follow `QUESTION_WRITING_STANDARD.md` before creating or changing study content.

Core rules:

1. Use supplied source material as the source of truth; do not fill gaps from memory.
2. Australian law/cases only; prefer Queensland-specific material where the source supports it.
3. Every question retains a precise source.
4. Quality over volume; consolidation and exclusion are legitimate QA tools.
5. Prefer application/scenario questions over recognition-only recall.
6. PARCS sample questions and confirmed answer keys are immutable.
7. Withhold uncertain questions rather than confidently guessing.
8. Avoid jurisdiction-specific detail from another state where it is not useful to Patrick's Queensland exam preparation.

## Next content task

**Build Module 4 directly from its connected Drive source folder using the Module 3 workflow.**

For each later module:

1. inventory the supplied readings;
2. identify overlapping/high-value examinable themes;
3. curate rather than maximise question count;
4. build scenario clusters where appropriate;
5. retain exact Drive source metadata;
6. run structural/provenance QA;
7. replace legacy placeholders rather than layering new questions over them;
8. bump `SEED_VERSION` and verify the Vercel production build.

M6/7 procurement and tendering should receive particular attention when reached.

## Deployment

Private GitHub repository: `Silkyj0/ape-study-v2`

Production: `https://ape-study-v2.vercel.app/`

Vercel deploys automatically from the GitHub `main` branch.

## M2 source gaps carried forward

Do not create unsupported questions for these until clean sources are available:

- Asset planning (Trust) — status/count needs confirmation against the source manifest;
- CAA2024 Section F — Intellectual Property, because the prior uploaded PDF was corrupted/unreadable;
- CAA2024 Schedule B Item 5 — Form of Attribution.
