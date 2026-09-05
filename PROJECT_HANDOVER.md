# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied Acumen readings, PARCS sample questions, and answer keys.

## Current content state

- Module 1: 62 seed questions. Previously redesigned and source-audited under the v1 workflow. A progressive **difficulty/distractor re-audit** is underway against Question Writing Standard v2.
- Module 2: 146 seed questions including PARCS sample scenarios. Previously extensively developed/audited and now also undergoing progressive v2 difficulty/distractor review.
- Revised exam-standard set: **52 questions total** across Modules 1 and 2 (the original 20-question calibration plus a second 32-question batch). These use stable IDs and override only presentation/content fields while retaining the original source and explanation underneath.
- PARCS-supplied sample questions and confirmed answer keys are immutable source material: do not rewrite their scenario text, stems, options or keyed answers. Their question order and answer presentation order may be shuffled at runtime.
- Modules 3–11: only the small original placeholder/diagnostic set is present (M3 2, M4 2, M5 2, M6 4, M7 4; M8–M11 none). Replace these module-by-module from supplied source material rather than expanding unsupported placeholders.
- Weakest self-identified areas: procurement and tendering (Modules 6 and 7).

## v2 architecture changes

The original single `ape_study_app.jsx` has been converted into a Vite/React project.

- Questions are split into `src/data/module01.js` … `module11.js` and chunk files for the larger Modules 1 and 2 banks.
- `src/data/questions.js` combines modules into the seed bank and applies reversible difficulty-rewrite overlays.
- `src/data/calibrationOverrides.js` contains the first 20 exam-standard rewrites.
- `src/data/examOverridesBatch02.js` contains the second 32-question rewrite batch.
- Stable seed IDs are preserved.
- `SEED_VERSION` is now **16** to force safe reconciliation of the revised content.
- Existing unrevised seed questions default to `difficulty: "unrated"`; deliberately revised questions are tagged `exam`.
- New manual questions can be tagged `foundation`, `exam`, or `challenge`.
- Study presentation now shuffles **question order and answer order** for every session. Correct positions are balanced across A–D per session and distractors are independently shuffled.
- The underlying source option order and stored answer index are never mutated by runtime shuffling.
- A dedicated **Revised exam bank · 52 questions** study mode lets the user test only the deliberately reworked questions.
- A Quality screen and `npm run audit` expose structural bias/length clues without automatically changing legal content.
- Browser `localStorage` is supported for independent hosting. If `window.storage` exists in an artifact environment, it is also read/written for compatibility.
- Progress can be exported/imported as JSON, providing a bridge between Claude/ChatGPT-hosted artifact environments and the independent web app before Supabase is introduced.

## Data safety

Question content and review progress are separate concerns.

Every seed question has a stable `id`. Runtime progress records use `seedId` to map back to that content. `reconcile()`:

- preserves review progress for seed IDs that still exist;
- drops seed questions that were deliberately removed;
- starts genuinely new seed IDs fresh;
- preserves manual questions sourced as `From your notes`.

When seed content or its schema changes, bump `SEED_VERSION`.

## Question-authoring process

Read and follow `QUESTION_WRITING_STANDARD.md` before generating or revising questions.

Core source rules remain:

1. Only write from supplied source text or propositions already supported by the vetted bank; do not add unsupported legal specifics.
2. Australian law/cases only; Queensland-specific where possible and supported.
3. Every question retains a source.
4. Quality over volume.
5. Lean into PARCS-style scenario + short stems, especially Modules 6–11.
6. Record gaps rather than guessing.
7. Do not rewrite PARCS sample questions or confirmed sample answer keys.

## Current content task

Continue the progressive Module 1 and Module 2 re-audit in controlled batches. Prioritise questions flagged by the quality audit for answer-length clues, weak distractors or recognition-style wording. Preserve source and explanation fields, keep stable IDs where the tested concept is unchanged, and use the now-approved revised exam-bank style as the benchmark.

After Modules 1 and 2 are substantially improved, build Module 3 from supplied primary source material using the v2 standard from the outset.

## Deployment

The project is hosted from the private GitHub repository `Silkyj0/ape-study-v2` and deployed automatically to Vercel at `https://ape-study-v2.vercel.app/` from the `main` branch.

Keep the vetted question bank in Git/version control. Add Supabase later for authentication and cross-device/user progress; do not move canonical question content into Supabase unless there is a deliberate reason.

## Source gaps carried forward from v1

Module 2 had outstanding primary-source gaps around:

- Asset planning (Trust) — status/count needs confirmation against the source manifest;
- CAA2024 Section F — Intellectual Property, because the prior uploaded PDF was corrupted/unreadable;
- CAA2024 Schedule B Item 5 — Form of Attribution.

Do not invent questions for these gaps without clean source text.
