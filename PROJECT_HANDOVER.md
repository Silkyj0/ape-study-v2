# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied readings, PARCS sample questions and confirmed answer keys.

## Current live content

### Modules 1–2

- Original source banks remain archived (M1 62; M2 146).
- Live Module 1: **44 questions**.
- Live Module 2: **75 questions**.
- Across M1/M2, **19 are immutable PARCS samples** and **100 are source-audited exam-standard rewrites**.
- `m1-woolcock` and `m1-introvigne` remain withheld pending primary-source re-checks.

### Module 3

- Rebuilt from the connected Google Drive Acumen folder.
- Live Module 3: **60 Drive-source-verified authored questions**.
- 33 of 47 reviewed readings are directly represented; overlap was consolidated.
- Authored answer positions: **15 A / 15 B / 15 C / 15 D**.
- `MODULE03_SOURCE_MANIFEST.md` records the source treatment.

### Module 4

- Rebuilt from connected Drive readings.
- Live Module 4: **69 questions**:
  - 56 Drive-source-verified authored questions;
  - 13 immutable PARCS-confirmed questions from Scenarios 4.1–4.4.
- Authored answer positions: **14 A / 14 B / 14 C / 14 D**.
- Blind sample attempt: **12/13 correct**.
- Confirmed key:
  - 4.1: **C, D**
  - 4.2: **A, C, A**
  - 4.3: **D, A, D**
  - 4.4: **C, A, C, D, D**
- Calibration rule: a client-engaged specialist consultant does not automatically remove the architect's own liability. Distinguish specialist technical responsibility from the architect/principal consultant's own briefing, coordination, review, integration and related duties.
- `MODULE04_SOURCE_MANIFEST.md` records the workflow.

### Module 5

- Module 5 — Responsible Design: Country, Environment, Equity, Safety & Amenity — is deliberately the **smallest authored module**.
- The PARC Unit 5 guide references many evolving external websites. At the user's direction, these external sources are **not used in the live M5 authored bank**.
- A larger draft remains archived in `module05.part01.js` to `module05.part07.js`, but `module05.js` filters the live set to **20 Drive-source-verified questions** only.
- Live authored answer positions: **5 A / 5 B / 5 C / 5 D**.
- Live themes:
  - DDA / equitable access: 4 questions;
  - WHS / safety in design: 8 questions;
  - operational vs embodied energy/carbon and life-cycle thinking: 8 questions.
- Deliberately excluded from the live authored bank: external Country/native-title websites, current ABCB web updates, Your Home, NatHERS, NABERS and other externally linked material.
- The Victoria-only OHS note is not used as the Queensland default.
- The Module 5 sample-question material remains unused for answer-key purposes.
- `MODULE05_SOURCE_MANIFEST.md` records the curation and exclusions.

### Modules 6–11

Modules 6–11 were rebuilt from the connected Drive course readings. The sample-question folders remain deliberately unused so later calibration is blind.

- **M6 — Building Procurement, Construction Contracts, Construction Documentation: 36 questions** — 9 A / 9 B / 9 C / 9 D.
- **M7 — Tendering and Construction Contract Execution: 32 questions** — 8 A / 8 B / 8 C / 8 D.
- **M8 — CA: Construction Commencement: 24 questions** — 6 A / 6 B / 6 C / 6 D.
- **M9 — CA: Money: 28 questions** — 7 A / 7 B / 7 C / 7 D.
- **M10 — CA: Time, EOT Costs, Liquidated Damages: 32 questions** — 8 A / 8 B / 8 C / 8 D.
- **M11 — Final Certificate, Dispute Resolution + Termination: 24 questions** — 6 A / 6 B / 6 C / 6 D.

Across M6–M11 there are **176 Drive-source-verified authored questions**, with stored answer positions exactly **44 A / 44 B / 44 C / 44 D**.

M6/7 deliberately receive the deepest coverage because procurement and tendering are priority study areas. The four inherited M6 and four inherited M7 placeholders are retained in `module06.legacy.js` and `module07.legacy.js` for provenance but are no longer live.

`MODULES06_11_SOURCE_MANIFEST.md` records source focus, counts and QA treatment.

## Current bank totals

| Module | Live questions |
| --- | ---: |
| M1 | 44 |
| M2 | 75 |
| M3 | 60 |
| M4 | 69 |
| M5 | 20 |
| M6 | 36 |
| M7 | 32 |
| M8 | 24 |
| M9 | 28 |
| M10 | 32 |
| M11 | 24 |

Total live seed: **444 questions**.

Verified/authored exam practice: **412 questions**:
- 100 source-audited M1/M2 rewrites;
- 312 Drive-source-verified authored questions across M3–M11.

There are **32 PARCS-confirmed questions** in the live seed: 19 from M1/M2 and 13 from M4. PARCS-confirmed questions remain available through normal module study but are excluded from the mixed Verified exam bank.

## Architecture and question data

- `src/data/questions.js` combines all modules and applies M1/M2 curated overlay logic plus later-module distractor-only QA refinements.
- `src/data/module03.js`, `module03Sources.js`, `module03Factory.js`, `MODULE03_SOURCE_MANIFEST.md` contain M3.
- `src/data/module04.js`, the M4 authored chunks, `module04.parcs.js`, `module04Sources.js`, `module04Factory.js`, `MODULE04_SOURCE_MANIFEST.md` contain M4.
- `src/data/module05.js` is the live curation layer for M5 and exposes 20 selected IDs from the archived M5 draft files.
- `src/data/module06.js` to `src/data/module11.js` contain the source-built later-module banks.
- `src/data/module06.legacy.js` and `src/data/module07.legacy.js` preserve the inherited placeholders but are not imported by the live seed.
- `src/data/laterModuleQaOverrides.js` contains distractor-only wording refinements for later modules; it does not change keyed answers, explanations or source provenance.
- `MODULES06_11_SOURCE_MANIFEST.md` records the M6–M11 source/QA workflow.
- `src/data/qaMetadata.js` contains immutable PARCS IDs and provenance statuses.
- Stable seed IDs are used throughout.
- `SEED_VERSION` is **23** so stored progress reconciles safely to the fully source-built M6–M11 bank.

## Study presentation

- Question order and answer order are shuffled for every session.
- Correct presentation positions are balanced across A–D without mutating canonical answers.
- Normal module study uses spaced-review eligibility.
- The **Verified exam bank** contains `source-audited` and `drive-source-verified` authored questions and excludes immutable PARCS samples.
- The Verified exam bank now spans M1–M11 and contains **412 questions**.

## Information QA model

Current QA statuses:
- **PARCS confirmed** — supplied PARCS sample; scenario, stem, options and confirmed key are immutable.
- **Source-audited rewrite** — retained M1/M2 proposition/key/source from the earlier audited bank with improved wording/distractors.
- **Drive source verified** — authored question built directly from a connected reading and retaining the Drive file reference/check date.
- **Needs source check** — known ambiguity; withheld rather than guessed.
- **Legacy placeholder** — retained only for genuinely unreconstructed/user data; the live seed currently has no M6–M11 legacy placeholders.
- **User-added** — manually created question requiring source verification.

The repository still contains an inactive `parc-external-verified` pathway for archived M5 draft questions, but no current live M5 question uses that status.

Users can **Flag for QA** during study; flags persist through local storage and export/import.

The structural audit now distinguishes material answer-length cues from trivial one-character length differences. M6–M11 received a dedicated distractor-only length-cue pass; source propositions and confirmed/keyed answers were not changed to satisfy structural QA.

## Source discipline

Read and follow `QUESTION_WRITING_STANDARD.md` before creating or changing study content.

Core rules:
1. Use supplied source material as the source of truth; do not fill gaps from memory.
2. Australian law/cases only; prefer Queensland-specific material where the source supports it.
3. Every live authored question retains a precise source.
4. Quality over volume; consolidation and exclusion are legitimate QA tools.
5. Prefer application/scenario questions over recognition-only recall.
6. PARCS sample questions and confirmed answer keys are immutable.
7. Withhold uncertain questions rather than confidently guessing.
8. Do not infer that a specialist consultant's responsibility eliminates the architect's own coordination or professional liability.
9. For model WHS material, distinguish model guidance from the legislation actually enacted in the project jurisdiction.
10. For Module 5 specifically, do not expand the live bank from PARC-referenced external websites unless the user changes that instruction.

## Next content task

**Blind sample-question calibration from Module 5 onward.**

Proceed in order: **M5 → M6 → M7 → M8 → M9 → M10 → M11**.

For each module:
1. user supplies sample screenshots/PDF in chat;
2. answer blind from that module's supplied readings without opening the stored sample-answer material;
3. user confirms the official answer key;
4. extract any PARCS-specific reasoning rules from differences;
5. review the authored bank for those issues;
6. add confirmed samples as immutable PARCS questions if desired;
7. bump `SEED_VERSION` when samples are added;
8. verify Vercel production before moving to the next module.

M6/7 procurement and tendering deserve particular attention during calibration because they are Patrick's priority weakness areas.

## Deployment

Private GitHub repository: `Silkyj0/ape-study-v2`

Production: `https://ape-study-v2.vercel.app/`

Vercel deploys automatically from GitHub `main`.

## M2 source gaps carried forward

Do not create unsupported questions for these until clean sources are available:
- Asset planning (Trust) — status/count needs confirmation against the source manifest;
- CAA2024 Section F — Intellectual Property, prior PDF corrupted/unreadable;
- CAA2024 Schedule B Item 5 — Form of Attribution.
