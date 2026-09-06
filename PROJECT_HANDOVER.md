# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied readings, PARCS sample questions and confirmed answer keys.

## Current live content

### Modules 1–2
- Live M1: **44 questions**.
- Live M2: **75 questions**.
- Across M1/M2: **19 immutable PARCS samples** + **100 source-audited rewrites**.
- `m1-woolcock` and `m1-introvigne` remain withheld pending source re-checks.

### Module 3
- **60 Drive-source-verified authored questions**.
- Stored authored answers: 15 A / 15 B / 15 C / 15 D.
- Blind PARCS sample attempt completed previously: **11/12**; samples are not yet locked into the live M3 bank.

### Module 4
- **69 live questions** = 56 authored + 13 PARCS-confirmed.
- Blind sample score: **12/13**.
- Confirmed key:
  - 4.1: C, D
  - 4.2: A, C, A
  - 4.3: D, A, D
  - 4.4: C, A, C, D, D
- Calibration rule: a client-engaged specialist consultant does not automatically remove the architect's own liability; distinguish specialist technical responsibility from the architect/principal consultant's own briefing, coordination, review and integration duties.

### Module 5
- Module 5 is deliberately the **smallest live module**.
- External PARC-linked Country/native-title/rating-tool/passive-design websites are not expanded into authored questions at the user's direction.
- Live M5: **23 questions** = **10 Drive-source-verified authored** + **13 PARCS-confirmed samples**.
- Blind sample score: **11/13**.
- Confirmed key:
  - 5.1: A, D, C, D
  - 5.2: D, A, B, B
  - 5.3: D, C, A, B, A
- Only misses: 5.2 Q3 and Q4.
- Calibration rule: when the PM/client instructs a change to the current brief/documented position, PARCS expects the architect to identify the additional-service/fee consequence before proceeding. Reinstating an earlier arrangement after an intervening instructed change is still another change from the current position.

### Module 6
- Live M6: **51 questions** = **40 Drive-source-verified authored** + **11 PARCS-confirmed samples**.
- Original source-built M6 set: 36 questions.
- Four additional source-verified novation questions were added after calibration because the official sample set exposed a useful Verified-bank coverage gap.
- Authored M6 answer positions remain exactly balanced: **10 A / 10 B / 10 C / 10 D**.
- Blind sample score: **11/11**.
- Confirmed key:
  - 6.1: **C, B, D, B, A**
  - 6.2: **C, B, D**
  - 6.3: **C, D, B**
- No official-answer mismatch required a keyed authored correction.
- M6 calibration themes reinforced:
  - material construction-stage design changes may require amended approval;
  - Performance Solutions are valid NCC compliance pathways and fire solutions ordinarily require suitably qualified fire-engineering input;
  - architects retain their own NCC/compliance exposure rather than shifting it entirely to certifiers or contractors;
  - NCC Assessment Methods do not include “performance analysis” as a named method;
  - after novation the architect’s contractual relationship is with the contractor, not the former principal;
  - non-compliant substitutions must be rejected/advised against in the architect’s current contractual chain;
  - genuinely indeterminate heritage-recovery scope may suit cost-plus, while the separately documented dwelling may suit traditional fixed-price lump sum and architect-administered ABIC SW Housing.
- `src/data/module06.novation.js` contains the four authored novation questions.
- `src/data/module06.parcs.js` contains the 11 immutable confirmed samples.

### Module 7
- Live M7: **42 questions** = **32 Drive-source-verified authored** + **10 PARCS-confirmed samples**.
- Authored M7 answer positions remain exactly balanced: **8 A / 8 B / 8 C / 8 D**.
- Blind sample score: **8/10**.
- Confirmed key:
  - 7.1: **D, C, D**
  - 7.2: **B, C, A, D**
  - 7.3: **B, A, B**
- Blind misses:
  - 7.1 Q1: answered A; official D.
  - 7.2 Q1: answered C; official B.
- Calibration rules:
  - A possible external supply disruption does not automatically justify changing the tender basis. Until sufficient verified information establishes that the issued tender basis must change, PARCS expects tenderers to price the documents as issued while the architect separately advises the client of likely cost/time implications if the risk materialises.
  - For a lowest tender that is non-conforming because of a proposed substitution, PARCS permits clarification by asking whether the tenderer will stand by its price using the specified conforming product before moving to recommendation.
- The authored bank was reviewed against both rules. No keyed authored question conflicted, so no authored answer was changed or removed.
- `src/data/module07.parcs.js` contains the 10 immutable confirmed samples.

### Modules 8–11
All are rebuilt from connected Drive course readings. Their stored sample-question folders remain unused so blind calibration can continue.

- M8: **24** — CA commencement.
- M9: **28** — CA money.
- M10: **32** — time, EOT costs, LDs.
- M11: **24** — final certificate, disputes, termination.

Across authored M6–M11: **180 Drive-source-verified questions**, stored answers exactly **45 A / 45 B / 45 C / 45 D**.

## Current bank totals

| Module | Live questions |
| --- | ---: |
| M1 | 44 |
| M2 | 75 |
| M3 | 60 |
| M4 | 69 |
| M5 | 23 |
| M6 | 51 |
| M7 | 42 |
| M8 | 24 |
| M9 | 28 |
| M10 | 32 |
| M11 | 24 |

Total live seed: **472 questions**.

Verified/authored exam practice: **406 questions**:
- 100 source-audited M1/M2 rewrites;
- 306 Drive-source-verified authored questions across M3–M11.

PARCS-confirmed live questions: **66**:
- 19 from M1/M2;
- 13 from M4;
- 13 from M5;
- 11 from M6;
- 10 from M7.

PARCS-confirmed questions are available in normal module study but excluded from the mixed Verified exam bank.

## Adaptive learning model

The app uses adaptive review rather than a simple deck:
- module sessions up to 20 cards; mixed verified bank up to 25; focus sessions up to 15;
- due/weak questions are prioritised before unseen questions;
- wrong answers return after about five other cards, up to two same-session retries, and are due again later that day;
- consecutive correct answers snooze progressively: roughly 1, 3, 7 and 14 days;
- 3 consecutive confident correct answers = mastered;
- a correct answer marked **Not confident / I guessed** still counts for accuracy but rolls mastery back one step, returns in about 12 hours, and contributes to weak-area detection;
- Stats identifies weak source topics from recent accuracy, repeated misses, lapses and low-confidence correct answers, and can launch a focused topic session;
- answer position and question order remain shuffled, including retries.

`ADAPTIVE_LEARNING.md` records this logic.

## QA / architecture

- `src/data/questions.js` assembles all modules and applies QA overlays.
- `src/data/qaMetadata.js` owns PARCS IDs and provenance statuses.
- `module04.parcs.js`, `module05.parcs.js`, `module06.parcs.js` and `module07.parcs.js` contain immutable confirmed samples.
- `module06.novation.js` contains the calibration-driven authored novation expansion.
- `module06.legacy.js` and `module07.legacy.js` retain inherited placeholders but they are not live.
- `laterModuleQaOverrides.js` contains distractor-only wording refinements and does not change keyed propositions.
- `SEED_VERSION` is **27** after Module 7 sample integration.

QA statuses:
- `parcs-confirmed`
- `source-audited`
- `drive-source-verified`
- `needs-source-check`
- `legacy-placeholder`
- `user-added`

## Source discipline

Read and follow `QUESTION_WRITING_STANDARD.md` before changing study content.

Core rules:
1. Use supplied course material as source of truth; do not fill gaps from memory.
2. Prefer Australian / Queensland framing where supported.
3. Every live authored question retains precise provenance.
4. Quality over volume; pruning is valid QA.
5. Prefer application/scenario decisions over recall-only questions.
6. PARCS supplied samples and confirmed keys are immutable.
7. Withhold uncertainty rather than guessing.
8. Do not infer that consultant responsibility eliminates the architect's own coordination/professional duties.
9. Distinguish model WHS guidance from legislation actually adopted in the project jurisdiction.
10. Do not expand M5 from external PARC-linked websites unless the user changes that instruction.
11. For PARCS calibration, preserve the course's tested framing even where a broader real-world analysis could identify additional issues.

## Next task

Proceed with blind sample calibration in order:
**M8 → M9 → M10 → M11**.

For each module:
1. user supplies screenshots/PDF;
2. answer blind from the supplied readings without using stored sample-answer material;
3. user confirms the official key;
4. record score and calibration rules;
5. review authored questions for conflicts or coverage gaps;
6. add samples as immutable PARCS questions;
7. bump `SEED_VERSION`;
8. verify Vercel before moving on.

## Deployment

Private repo: `Silkyj0/ape-study-v2`

Production: `https://ape-study-v2.vercel.app/`

Vercel deploys automatically from `main`.

## M2 source gaps carried forward
Do not create unsupported questions for these until clean sources are available:
- Asset planning (Trust) — status/count needs confirmation against the source manifest;
- CAA2024 Section F — Intellectual Property, prior PDF corrupted/unreadable;
- CAA2024 Schedule B Item 5 — Form of Attribution.
