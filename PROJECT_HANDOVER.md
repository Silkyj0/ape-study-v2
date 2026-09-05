# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied Acumen readings, PARCS sample questions, and answer keys.

## Current content state

- The original Module 1 and Module 2 source banks remain archived in the repository (M1 62; M2 146), but the **live curated M1/M2 bank is now 119 questions** rather than 208.
- Live Module 1: **44 questions**.
- Live Module 2: **75 questions**.
- Of the 119 live M1/M2 questions, **19 are immutable PARCS samples** and **100 are source-audited exam-standard rewrites**.
- The exam-standard rewrites are implemented as reversible override layers so the original vetted source-bank wording remains recoverable.
- Two inherited Module 1 items are currently withheld from normal study rather than guessed or silently corrected: `m1-woolcock` (ratio/emphasis source re-check) and `m1-introvigne` (court-attribution source re-check).
- Lower-value, repetitive and recognition-heavy questions have been removed from the live M1/M2 study bank but remain in the archived source files.
- Some procurement material previously tagged to Module 2 was deliberately not retained in the curated M2 bank because it belongs more naturally in the later procurement modules and can be rebuilt there from source.
- Modules 3–11: only the small original placeholder/diagnostic set is present (M3 2, M4 2, M5 2, M6 4, M7 4; M8–M11 none). These are now visibly marked as **legacy placeholders** and must be replaced module-by-module from supplied source material.
- Weakest self-identified areas: procurement and tendering (Modules 6 and 7).

## v2 architecture changes

The original single `ape_study_app.jsx` has been converted into a Vite/React project.

- Questions are split into `src/data/module01.js` … `module11.js` and chunk files for the larger Modules 1 and 2 banks.
- `src/data/questions.js` combines modules, applies reversible difficulty-rewrite overlays and filters M1/M2 to the curated active set.
- `src/data/calibrationOverrides.js` contains the first 20 exam-standard rewrites (one is currently withheld by QA).
- `src/data/examOverridesBatch02.js` contains the second 32-question rewrite batch.
- `src/data/examOverridesBatch03.js` contains the final 49 retained-question rewrites used to complete the current M1/M2 consolidation.
- `src/data/qaMetadata.js` defines immutable PARCS IDs, withheld source-check items and provenance QA labels.
- Stable seed IDs are preserved.
- `SEED_VERSION` is now **17** so stored progress safely reconciles to the smaller curated bank and new QA metadata.
- Deliberately revised questions are tagged `exam`.
- New manual questions can be tagged `foundation`, `exam`, or `challenge`.
- Study presentation shuffles **question order and answer order** for every session. Correct positions are balanced across A–D per session and distractors are independently shuffled.
- The underlying source option order and stored answer index are never mutated by runtime shuffling.
- A dedicated **Exam-standard bank** mode studies only the 100 rewritten M1/M2 questions and excludes the locked PARCS samples.
- The Quality screen now separates structural QA from information/provenance QA.
- Structural scoring applies only to authored source-audited rewrites, not immutable PARCS samples or provisional later-module placeholders.
- Users can **Flag for QA** from the study screen. Flags persist through local storage, progress export/import and seed reconciliation, and appear in a review queue on the Quality screen.
- Browser `localStorage` is supported for independent hosting. If `window.storage` exists in an artifact environment, it is also read/written for compatibility.
- Progress can be exported/imported as JSON, providing a bridge between Claude/ChatGPT-hosted artifact environments and the independent web app before Supabase is introduced.

## Information QA model

The application does not pretend to independently prove legal correctness without source material. It tracks provenance and review status instead.

Current QA statuses:

- **PARCS confirmed** — supplied PARCS sample question; scenario, stem, options and confirmed answer key must remain unchanged.
- **Source-audited rewrite** — substantive proposition, keyed answer, source and explanation come from the previously audited M1/M2 bank; wording/distractors were revised for exam quality.
- **Needs source check** — a known ambiguity exists; withhold from normal study rather than guessing.
- **Legacy placeholder** — later-module item not yet rebuilt under the source-audited workflow.
- **User-added** — manually created question requiring source verification by the user.

The QA engine also checks for missing source fields, missing explanations, answer-length clues, duplicate options and major answer-shape differences. These structural checks must never auto-correct legal content.

## Data safety

Question content and review progress are separate concerns.

Every seed question has a stable `id`. Runtime progress records use `seedId` to map back to that content. `reconcile()`:

- preserves review progress for seed IDs that still exist;
- drops live progress records for questions deliberately removed from the curated seed bank;
- starts genuinely new seed IDs fresh;
- preserves manual questions sourced as `From your notes`;
- preserves user QA flags for retained questions.

When seed content or its schema changes, bump `SEED_VERSION`.

## Question-authoring process

Read and follow `QUESTION_WRITING_STANDARD.md` before generating or revising questions.

Core source rules remain:

1. Only write from supplied source text or propositions already supported by the vetted bank; do not add unsupported legal specifics.
2. Australian law/cases only; Queensland-specific where possible and supported.
3. Every question retains a source.
4. Quality over volume; curation and deletion from the live bank are legitimate QA tools.
5. Lean into PARCS-style scenario + short stems, especially Modules 6–11.
6. Record gaps rather than guessing.
7. Do not rewrite PARCS sample questions or confirmed sample answer keys.
8. Withhold a question if a source concern cannot be resolved confidently.

## Next content task

**Move to Module 3.**

Do not expand the two legacy Module 3 placeholders from memory. Build Module 3 from the supplied Module 3 Acumen/PARCS source material using the v2 standard from the outset:

- curate rather than maximise question count;
- default to exam/application difficulty;
- preserve precise sources and strong post-answer explanations;
- create PARCS-style scenario sets where the material supports them;
- run structural and provenance QA before merging;
- replace/remove the existing M3 placeholders once the proper source-backed bank is ready.

After Module 3, repeat the same source-first workflow for Modules 4–11. Procurement/tendering (M6/7) should receive particular attention.

## Deployment

The project is hosted from the private GitHub repository `Silkyj0/ape-study-v2` and deployed automatically to Vercel at `https://ape-study-v2.vercel.app/` from the `main` branch.

Keep the vetted question bank in Git/version control. Add Supabase later for authentication and cross-device/user progress; do not move canonical question content into Supabase unless there is a deliberate reason.

## Source gaps carried forward from v1

Module 2 had outstanding primary-source gaps around:

- Asset planning (Trust) — status/count needs confirmation against the source manifest;
- CAA2024 Section F — Intellectual Property, because the prior uploaded PDF was corrupted/unreadable;
- CAA2024 Schedule B Item 5 — Form of Attribution.

Do not invent questions for these gaps without clean source text.
