# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied Acumen/readings, PARCS-directed current resources, PARCS sample questions and confirmed answer keys.

## Current live content

### Modules 1–2

- The original Module 1 and Module 2 source banks remain archived in the repository (M1 62; M2 146), but the **live curated M1/M2 bank is 119 questions** rather than 208.
- Live Module 1: **44 questions**.
- Live Module 2: **75 questions**.
- Of these 119 questions, **19 are immutable PARCS samples** and **100 are source-audited exam-standard rewrites**.
- Two inherited Module 1 items remain withheld rather than guessed: `m1-woolcock` and `m1-introvigne`, pending primary-source re-checks.

### Module 3

- Module 3 was rebuilt from the connected Google Drive Acumen folder.
- Live Module 3: **60 curated Drive-source-verified exam questions**.
- 33 of 47 reviewed readings are directly represented; overlapping/lower-value readings were consolidated rather than padded into questions.
- `MODULE03_SOURCE_MANIFEST.md` records the source inventory and treatment.
- M3 authored answer positions: **15 A / 15 B / 15 C / 15 D**.

### Module 4

- Module 4 — Project Fundamentals, Planning & Consultants — has been fully rebuilt from connected Drive readings.
- Live Module 4: **69 questions**:
  - **56 Drive-source-verified authored exam questions**;
  - **13 immutable PARCS-confirmed sample questions** from Scenarios 4.1–4.4.
- Authored M4 answer positions: **14 A / 14 B / 14 C / 14 D**.
- Module 4 sample questions were attempted blind after the authored bank was completed: **12/13 correct**.
- Confirmed key:
  - 4.1: **C, D**
  - 4.2: **A, C, A**
  - 4.3: **D, A, D**
  - 4.4: **C, A, C, D, D**
- Calibration rule from the only miss: a consultant being engaged directly by the client does **not** mean the architect necessarily has zero liability. Separate the specialist's technical responsibility from the architect/principal consultant's own selection, briefing, coordination, review, integration and other obligations.
- A targeted review of the 56 authored M4 questions found no repeat of that over-absolute logic.
- `MODULE04_SOURCE_MANIFEST.md` records the source and sample-calibration workflow.

### Module 5

- Module 5 — Responsible Design: Country, Environment, Equity, Safety & Amenity — has been rebuilt before opening its PARCS sample questions.
- Root Drive folder: `https://drive.google.com/drive/folders/1DcoNkcK1jNuDCmutM1379XXaJbsL_fhS`
- Live Module 5: **56 authored exam-standard questions** replacing the two legacy placeholders.
- Seven groups of eight questions cover:
  - Country, community engagement, native title, PBCs and NNTT;
  - DDA / Premises Standards fundamentals and current NCC alignment;
  - accessibility application, existing buildings, performance solutions and professional-advice boundaries;
  - WHS model-law structure, designer/PCBU duties and reasonably practicable;
  - safety-in-design lifecycle, consultation, risk control, safety reports and information transfer;
  - embodied vs operational carbon/energy and life-cycle thinking;
  - climate-responsive passive design, NatHERS and NABERS.
- Authored M5 answer positions: **14 A / 14 B / 14 C / 14 D**.
- Provenance is deliberately split:
  - **39 Drive-source-verified** questions checked against supplied Module 5 PDFs;
  - **17 PARC-external-source-verified** questions checked against current public resources explicitly directed by the supplied PARC Unit 5 guide.
- The external source class is used particularly for Country and current rating/regulatory resources; it is not a licence to fill source gaps from general web knowledge.
- NSW Connecting with Country material is treated as PARC-directed conceptual/good-practice guidance, **not Queensland law**.
- The November 2024 Safe Work Australia Model Code is used as model-framework guidance; jurisdictional adoption/local law must still be checked. Victoria is not treated as the Queensland default.
- One older `edg_71_rc_edited.pdf` file has garbled extracted text; precise LCEA propositions rely on the clean assigned LCEA summary rather than guessing from the corrupted extraction.
- `MODULE05_SOURCE_MANIFEST.md` records the full source/provenance strategy.
- The Module 5 Sample Questions folder remains deliberately unopened. Next calibration step is a blind attempt after the live build is verified.

### Modules 6–11

- Legacy placeholders remain only for M6 and M7: M6 4, M7 4.
- M8–M11 are empty.
- Procurement and tendering (M6/7) remain a priority area.

## Current bank totals

- M1: 44
- M2: 75
- M3: 60
- M4: 69
- M5: 56
- M6: 4 legacy placeholders
- M7: 4 legacy placeholders
- M8–M11: 0

Total live seed: **312 questions**.

Verified/authored exam practice: **272 questions**:
- 100 source-audited M1/M2 rewrites
- 60 Drive-source-verified M3
- 56 Drive-source-verified M4
- 56 verified-source M5 (39 Drive + 17 PARC-directed external)

There are **32 PARCS-confirmed questions** in the live seed: 19 from M1/M2 and 13 from M4. PARCS-confirmed questions remain available through normal module study but are excluded from the mixed Verified exam bank.

## Architecture and question data

- `src/data/questions.js` combines modules and applies the M1/M2 curated overlay logic.
- `src/data/module03.js`, `module03Sources.js`, `module03Factory.js` and `MODULE03_SOURCE_MANIFEST.md` contain M3.
- `src/data/module04.js`, seven authored M4 chunks, `module04.parcs.js`, `module04Sources.js`, `module04Factory.js` and `MODULE04_SOURCE_MANIFEST.md` contain M4.
- `src/data/module05.js` assembles seven authored M5 chunks.
- `src/data/module05Sources.js` supports both Drive and PARC-directed external source records.
- `src/data/module05Factory.js` attaches source metadata consistently.
- `MODULE05_SOURCE_MANIFEST.md` records the M5 Drive inventory, external-source list and jurisdiction/source caveats.
- `src/data/qaMetadata.js` contains immutable PARCS IDs and provenance statuses.
- Stable seed IDs are used throughout.
- `SEED_VERSION` is **21** so existing local progress reconciles safely to the rebuilt M5 bank.

## Study presentation

- Question order and answer order are shuffled for every session.
- Correct presentation positions are balanced across A–D without mutating stored canonical answers.
- Normal module study uses spaced-review eligibility.
- The **Verified exam bank** includes `source-audited`, `drive-source-verified` and `parc-external-verified` authored questions and excludes immutable PARCS samples.

## Information QA model

Current QA statuses:

- **PARCS confirmed** — supplied PARCS sample; scenario, stem, options and confirmed key are immutable.
- **Source-audited rewrite** — retained M1/M2 proposition/key/source from the earlier audited bank with improved wording/distractors.
- **Drive source verified** — authored question built directly from a connected reading and retaining the Drive file reference/check date.
- **PARC external source verified** — M5 question built from a current public source explicitly directed by the supplied PARC Unit 5 guide, retaining exact URL/check date.
- **Needs source check** — known ambiguity; withheld rather than guessed.
- **Legacy placeholder** — later-module item not yet rebuilt.
- **User-added** — manually created question requiring source verification.

The Quality screen reports provenance and structural QA separately. Users can **Flag for QA** while studying; flags persist through local storage and export/import.

## Source discipline

Read and follow `QUESTION_WRITING_STANDARD.md` before creating or changing study content.

Core rules:

1. Use supplied source material as the source of truth; do not fill gaps from memory.
2. Where the supplied PARC guide explicitly directs a current external source, use that exact source and label the provenance separately.
3. Australian law/cases only; prefer Queensland-specific material where the source supports it.
4. Do not convert NSW guidance into Queensland law.
5. Every authored question retains a precise source.
6. Quality over volume; consolidation and exclusion are legitimate QA tools.
7. Prefer application/scenario questions over recognition-only recall.
8. PARCS sample questions and confirmed answer keys are immutable.
9. Withhold uncertain questions rather than confidently guessing.
10. Do not infer that a specialist consultant's responsibility eliminates the architect's own coordination or professional liability; analyse each party's separate obligations.
11. For model WHS material, distinguish model guidance from the legislation actually enacted in the project jurisdiction.

## Next content task

**Attempt the Module 5 PARCS sample questions blind against the completed M5 source set.**

Workflow:
1. user supplies the M5 sample screenshots/PDF in chat;
2. answer blind from the assigned M5 readings/current PARC-directed sources;
3. user provides the official answer key;
4. compare any misses and extract calibration rules;
5. review the 56 authored M5 questions for the identified issue(s);
6. add confirmed samples as immutable PARCS questions;
7. bump `SEED_VERSION` again if sample questions are added;
8. verify Vercel production;
9. then proceed to Module 6 — Building Procurement, Construction Contracts & Construction Documentation.

M6/7 procurement and tendering should receive particular attention because they are Patrick's weaker study areas.

## Deployment

Private GitHub repository: `Silkyj0/ape-study-v2`

Production: `https://ape-study-v2.vercel.app/`

Vercel deploys automatically from GitHub `main`.

## M2 source gaps carried forward

Do not create unsupported questions for these until clean sources are available:
- Asset planning (Trust) — status/count needs confirmation against the source manifest;
- CAA2024 Section F — Intellectual Property, prior PDF corrupted/unreadable;
- CAA2024 Schedule B Item 5 — Form of Attribution.
