# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation.

Production: `https://ape-study-v2.vercel.app/`  
Repo: `Silkyj0/ape-study-v2`  
Vercel deploys automatically from `main`.

## Current release target — 12 September 2026

### MCQs

**624 total questions** — unchanged by the advanced-flashcard release.

- M1–M11 core/PARCS: 534
- M12 supplementary ABIC: 50
- M13 supplementary CAA2024: 40
- `SEED_VERSION = 36`

M12/M13 remain excluded from the normal 40-question / 60-minute M1–M11 Exam Simulation.

### Flashcards

**322 total flashcards**.

- M1–M11 Acumen: **168** = 113 established + 55 advanced
- M12 ABIC: **77** = 72 established + 5 advanced
- M13 CAA2024: **77** = 72 established + 5 advanced
- Advanced set: **65** = exactly 5 per M1–M13
- `FLASHCARD_SEED_VERSION = 5`

Distribution:

| Module | Cards | Advanced |
| --- | ---: | ---: |
| M1 | 15 | 5 |
| M2 | 15 | 5 |
| M3 | 13 | 5 |
| M4 | 13 | 5 |
| M5 | 13 | 5 |
| M6 | 25 | 5 |
| M7 | 12 | 5 |
| M8 | 13 | 5 |
| M9 | 20 | 5 |
| M10 | 17 | 5 |
| M11 | 12 | 5 |
| M12 | 77 | 5 |
| M13 | 77 | 5 |

Existing flashcard IDs are preserved, so prior learner progress reconciles by stable `seedId`; the 65 new advanced cards enter as unseen.

## Advanced flashcards

Advanced cards are intentionally more specific than the original glossary-style bank. They focus on:

- role/responsibility boundaries;
- procedural triggers and sequences;
- contractual time periods;
- entitlement distinctions;
- consequences of missed steps;
- qualifications that prevent over-broad APE answers.

Each advanced card has `difficulty: 'advanced'` and displays an **Advanced** badge.

The Cards dashboard includes **Advanced review**, which filters to the 65 advanced cards while retaining the spaced-repetition prioritisation of due cards and new cards. Module cards display how many advanced cards they contain.

See `ADVANCED_FLASHCARD_QA.md`.

## Source discipline

1. Supplied material is the source of truth.
2. M1–M11 direct study content remains Acumen/PARCS-derived.
3. M12 direct content uses the supplied ABIC SW 2018 Simple Works Contract.
4. M13 direct content uses the supplied CAA2024 full-services agreement.
5. Existing core cross-references to ABIC/CAA are secondary metadata only unless the item was authored directly from that contract.
6. Confirmed PARCS wording and official keys are immutable.
7. Do not fill source gaps from general model knowledge.
8. Preserve jurisdiction- and contract-specific qualifications.
9. Quality/depth is more important than bank size.

The advanced release revisited the supplied Acumen source files for higher-risk propositions rather than treating existing MCQ explanations as independent authority. See `FLASHCARD_SOURCE_AUDIT.md` and `ADVANCED_FLASHCARD_QA.md`.

## M12 — ABIC SW 2018

Primary source: `reference-contract-abic-sw-2018-c-071118 (1).pdf`.

M12 now contains:

- 50 source-verified MCQs;
- 77 source-verified flashcards;
- 5 advanced cards on A8, F5, G5, H1 and L3 process/timing.

M12 questions use `qaStatus: abic-source-verified`, deliberately excluded from the normal exam pool.

Do not silently repair inconsistencies in the supplied reference copy. `ABIC_SOURCE_AUDIT.md` records the known anomalies.

## M13 — CAA2024

Primary source: `caa2024_fullservices_digital.pdf`, Drive ID `1U7EYkpAml2d0lNOEf6jWmtZyaP7NDFpn`.

M13 now contains:

- 40 source-verified MCQs;
- 77 source-verified flashcards;
- 5 advanced cards on D8, F1, J2, K2 and K3.

High-value CAA distinctions include Cost of Works vs forecast/Total Project Cost, services/scope changes, consultant responsibility, copyright/licence, liability, dispute sequence, K2/K3 termination timing and Schedule A/B/C operation.

M13 questions use `qaStatus: caa2024-source-verified`, deliberately excluded from the normal exam pool.

## PARCS calibration

M3–M11 blind calibration remains **98/109 (89.9%)**. The advanced-flashcard release does not alter any PARCS sample wording, answer key or MCQ result.

Recurring traps remain:

- architect role at the exact contractual moment;
- coordination vs specialist/contractor responsibility;
- current documented position for change control;
- fair tender comparison;
- EOT critical-path/time/cost distinctions;
- workmanship vs design defects;
- contract-specific dispute/termination processes.

## Study modes

### MCQs

Adaptive module study, PARCS-only modes and Exam Simulation remain unchanged.

### Flashcards

Cards now support:

- Smart review;
- **Advanced review**;
- All terms;
- module review;
- topic review.

Recall ratings remain **Knew it / Unsure / Didn’t know**.

### Daily timer

The 60-minute daily study timer remains unchanged: foreground/active-use tracking, five-minute inactivity pause, manual focus mode, seven-day history and streak tracking.

## QA build

Production `npm run build` runs:

1. `scripts/audit-flashcards.mjs`
2. `scripts/audit-abic.mjs`
3. `scripts/audit-caa2024.mjs`
4. `scripts/audit-contract-integration.mjs`
5. `vite build`

Flashcard QA now additionally requires:

- exactly 322 cards;
- exact module distribution;
- exactly 65 advanced cards;
- exactly 5 advanced cards in every module;
- unique IDs/terms;
- non-thin definitions;
- source-specific provenance.

ABIC/CAA audits separately require 77 cards and exactly five advanced cards in each supplementary deck.

## Key QA/source records

Read before modifying study content:

- `QUESTION_WRITING_STANDARD.md`
- `FLASHCARD_SOURCE_AUDIT.md`
- `ADVANCED_FLASHCARD_QA.md`
- `ABIC_SOURCE_AUDIT.md`
- `CAA2024_SOURCE_AUDIT.md`
- `MODULE_CONTRACT_QA.md`

## Recommended next work

Do not immediately add another bulk set. Use the 65 advanced cards in real study, then refine from actual `Unsure` / `Didn’t know` patterns. Good next candidates are targeted second-order cards only where performance reveals a genuine gap, or dedicated timed ABIC/CAA contract drills without changing normal exam weighting.
