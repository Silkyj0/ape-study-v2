# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The core program is based on PARCS Modules 1–11, supplied readings, PARCS sample questions and user-confirmed official keys. Supplementary M12 provides direct ABIC SW 2018 study and supplementary M13 provides direct CAA2024 Client Architect Agreement study.

Production: `https://ape-study-v2.vercel.app/`

Repo: `Silkyj0/ape-study-v2`

Vercel deploys automatically from `main`.

## Current release state — 10 September 2026

### MCQ bank

| Module | Live | Composition |
| --- | ---: | --- |
| M1 | 44 | source-audited + PARCS |
| M2 | 75 | source-audited + PARCS |
| M3 | 72 | Drive-source-verified + PARCS |
| M4 | 69 | authored + PARCS |
| M5 | 23 | authored + PARCS |
| M6 | 51 | authored + PARCS |
| M7 | 42 | authored + PARCS |
| M8 | 36 | authored + PARCS |
| M9 | 42 | authored + PARCS |
| M10 | 44 | authored + PARCS |
| M11 | 36 | authored + PARCS |
| M12 | 50 | supplementary ABIC SW 2018 source-verified |
| M13 | 40 | supplementary CAA2024 source-verified |

Total live MCQ seed after M13 release: **624 questions**.

- Core M1–M11 bank: **534**
- Supplementary ABIC M12: **50**
- Supplementary CAA2024 M13: **40**
- PARCS-confirmed: **128**
- `SEED_VERSION = 36`
- `m1-woolcock` and `m1-introvigne` remain withheld pending source re-checks.

M12 and M13 are supplementary and are intentionally excluded from the normal 40-question M1–M11 Exam Simulation.

### Flashcard bank

Total flashcards after M13 release: **239**.

- M1–M11 Acumen: **113 source-audited cards**
- M12 ABIC: **72 source-verified cards**
- M13 CAA2024: **54 source-verified cards**
- `FLASHCARD_SEED_VERSION = 4`
- Existing IDs are preserved so stored progress reconciles by `seedId`; new M13 cards enter as unseen.

Distribution:

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
| M13 | 54 |

Source/QA records: `FLASHCARD_SOURCE_AUDIT.md`, `ABIC_SOURCE_AUDIT.md`, `CAA2024_SOURCE_AUDIT.md`.

## Supplementary M12 — ABIC SW 2018

Primary source: `reference-contract-abic-sw-2018-c-071118 (1).pdf`.

M12 contains 50 contract MCQs and 72 flashcards. The ABIC source map covers schedules, clauses and selected definitions; build-time QA is in `scripts/audit-abic.mjs`. Relevant existing M8–M11 Acumen items retain their Acumen provenance and receive ABIC clause/page cross-references only where directly supported.

M12 questions use `qaStatus: abic-source-verified`, which is deliberately absent from `EXAM_QA_STATUSES`.

Do not silently repair inconsistencies in the supplied ABIC reference copy from outside knowledge. `ABIC_SOURCE_AUDIT.md` records the known source-copy cross-reference issues.

## Supplementary M13 — CAA2024

Primary source:

- `caa2024_fullservices_digital.pdf`
- Drive file ID: `1U7EYkpAml2d0lNOEf6jWmtZyaP7NDFpn`

M13 contains **40 MCQs** and **54 flashcards**. The question bank is deliberately scenario-heavy and focuses on applying the architect–client engagement rather than memorising clause labels alone.

High-value coverage includes:

- A1 Architect obligations and standard of care;
- A2 scope exclusions and no fitness-for-purpose warranty;
- A3 Cost of Works forecasting;
- A4–A6 program, protracted Services and suspension;
- Section B Client obligations and contractor instructions through the Architect where CA is included;
- Section C authorised representatives;
- D1–D8 Fees, claims, payment, interest, percentage/lump/time fees, Disbursements and changes to Services;
- E1–E2 Specialist Consultants;
- F1–F5 copyright/licence, Moral Rights, section F indemnity, electronic data and BIM;
- G1 insurance requirements and Item 6;
- Section J dispute resolution;
- K1–K4 termination pathways;
- Schedule A Services and Schedule B commercial/project Items;
- Section M defined-term navigation.

Architecture:

- `src/data/caa2024/contractMap.js` — verified source/provision map;
- `src/data/caa2024/factories.js` — CAA source metadata factories;
- `src/data/caa2024/questions.js` — 40 M13 questions;
- `src/data/caa2024/flashcards.js` + `flashcardsItems.js` — 54 M13 cards;
- `src/data/caa2024/crossReferences.js` — secondary CAA references for selected existing Acumen cards;
- `src/data/module13.js` and `src/data/flashcards/module13.js` — M13 assembly;
- `scripts/audit-caa2024.mjs` — build-time CAA source/structure audit;
- `CAA2024_SOURCE_AUDIT.md` — source discipline and coverage record.

The M13 keyed-answer distribution is deliberately balanced **A 10 / B 10 / C 10 / D 10**.

CAA2024 definition cards explain how important defined terms operate across the agreement and direct the learner to Section M for the formal definition. They do not invent verbatim definition wording where the accessible source extraction is insufficiently reliable.

Eleven existing M2–M4 Acumen flashcards receive a secondary CAA2024 cross-reference while retaining their original Acumen source.

M13 questions use `qaStatus: caa2024-source-verified`, deliberately excluded from the normal Exam Simulation.

## Acumen M1–M11 baseline

The original 113-card Acumen bank remains source-audited and unchanged in primary provenance. Do not use ABIC or CAA2024 to silently rewrite Acumen-derived definitions. Contract cross-references are secondary context only unless a card/question is authored directly as M12 or M13 content.

The MCQ bank is mature. Do not default to large-volume expansion unless actual performance reveals a missing distinction.

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

Recurring traps: exact architect role at the relevant moment; consultant/contractor responsibility vs architect coordination duty; current documented position for change control; fair tender basis; EOT/critical-path/overlap/cost distinctions; workmanship vs design defects; preserving course-specific official keys.

Official PARCS keys remain immutable:

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

## Study modes

### Adaptive MCQ study

Module sessions prioritise due/weak items and space correct answers. Wrong answers can reappear in-session. The pre-answer Confident / Unsure / Guessing UI is currently disabled; legacy confidence fields remain in stored progress for compatibility.

### Flashcards

Cards support Smart review, full-bank, module and topic review. Recall ratings are **Knew it / Unsure / Didn’t know**. M1–M11 identify Acumen provenance; M12 identifies ABIC; M13 identifies CAA2024.

### PARCS and Exam

PARCS-only, grouped scenario mode and calibration drills remain unchanged. Confirmed PARCS wording and keys are immutable.

Exam Simulation remains **40 questions / 60 minutes**, using only trusted M1–M11 QA statuses. M12 ABIC and M13 CAA2024 do not enter the normal exam pool.

## Daily study timer

The app includes a persistent **60-minute daily study goal**:

- automatic tracking begins after the learner first interacts with the app;
- hidden tabs do not count;
- automatic tracking pauses after 5 minutes of inactivity;
- a manual focus timer supports deliberate low-interaction reading;
- floating progress indicator is visible across the app;
- expanded view shows time remaining, 7-day history, weekly total, goal days and current streak;
- timer data is browser-local under `ape-study-daily-time-v1` and is intentionally separate from MCQ/flashcard progress in v1.

See `STUDY_TIMER.md`.

## QA architecture

Production `npm run build` runs:

1. `scripts/audit-flashcards.mjs`
2. `scripts/audit-abic.mjs`
3. `scripts/audit-caa2024.mjs`
4. `vite build`

Key source-specific QA statuses:

- `parcs-confirmed`
- `source-audited`
- `drive-source-verified`
- `parc-external-verified`
- `abic-source-verified`
- `caa2024-source-verified`
- `needs-source-check`
- `legacy-placeholder`
- `user-added`

## Source discipline

1. Supplied material is the source of truth for authored study content.
2. Do not silently fill gaps from model/general knowledge.
3. Confirmed PARCS wording and keys are immutable.
4. M1–M11 Acumen content remains Acumen-derived.
5. M12 contractual content uses the supplied ABIC SW 2018 contract.
6. M13 contractual content uses the supplied CAA2024 full-services agreement.
7. Cross-referenced items preserve their original source; contract references are secondary unless the item was authored directly from that contract.
8. Preserve contract-specific, jurisdiction-specific and source-specific qualifications.
9. Withhold uncertainty rather than guessing or repairing a source from outside knowledge.
10. Prefer application/professional judgment in MCQs and use flashcards for appropriate navigation/recall.
11. Quality is more important than bank size.

Read `QUESTION_WRITING_STANDARD.md`, `FLASHCARD_SOURCE_AUDIT.md`, `ABIC_SOURCE_AUDIT.md` and `CAA2024_SOURCE_AUDIT.md` before changing study content.

## Recommended next work

Do not default to another bulk expansion. Priorities are actual study use and performance-driven refinement:

1. use M1–M11 adaptive study, Cards and Exam Simulation regularly;
2. use M12 separately for ABIC contract administration/navigation;
3. use M13 separately for client–architect agreement practice;
4. use the 60-minute daily timer to build consistency;
5. monitor repeated-lapse MCQs and Unsure / Didn’t know flashcards;
6. add targeted variants only where performance shows a genuine concept gap;
7. consider dedicated ABIC/CAA contract tests later rather than changing the normal exam weighting;
8. continue concept-level mastery and mistake-analysis work using actual performance data.
