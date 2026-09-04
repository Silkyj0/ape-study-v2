# APE Part 2 Study App — Project Handover

## Purpose

APE Part 2 study application for Patrick's Queensland Architectural Practice Examination preparation. The study program is based on PARCS modules, supplied Acumen readings, PARCS sample questions, and answer keys.

## Current content state

- Module 1: 62 seed questions. Previously redesigned and source-audited under the v1 workflow. Now requires a progressive **difficulty/distractor re-audit** against Question Writing Standard v2; do not assume the existing wording is exam-hard merely because the substance was verified.
- Module 2: 146 seed questions including PARCS sample scenarios. Previously extensively developed/audited, but likewise requires progressive v2 difficulty/distractor review.
- Modules 3–11: only the small original placeholder/diagnostic set is present (M3 2, M4 2, M5 2, M6 4, M7 4; M8–M11 none). Replace these module-by-module from supplied source material rather than expanding unsupported placeholders.
- Weakest self-identified areas: procurement and tendering (Modules 6 and 7).

## v2 architecture changes

The original single `ape_study_app.jsx` has been converted into a Vite/React project.

- Questions are split into `src/data/module01.js` … `module11.js`.
- `src/data/questions.js` combines modules into the seed bank.
- Stable seed IDs are preserved.
- `SEED_VERSION` is now 14 to force a safe migration to the new data shape.
- Existing seed questions default to `difficulty: "unrated"`; this is intentional.
- New manual questions can be tagged `foundation`, `exam`, or `challenge`.
- Study presentation uses balanced runtime shuffling: correct positions are distributed across A–D per session and distractors are independently shuffled.
- The underlying source option order and answer index are never mutated by shuffling.
- A Quality screen and `npm run audit` expose structural bias/length clues without automatically changing study content.
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

1. Only write from supplied source text.
2. Australian law/cases only; Queensland-specific where possible and supported.
3. Every question retains a source.
4. Quality over volume.
5. Lean into PARCS-style scenario + short stems, especially Modules 6–11.
6. Record gaps rather than guessing.

## Recommended next content task

Before adding a large Module 3 batch, rework a representative sample of Module 1 and Module 2 questions against the actual PARCS sample style to validate Question Writing Standard v2. Once the target difficulty feels right, use that standard for all new modules.

## Recommended deployment path

1. Put this project in a private GitHub repository.
2. Run locally with `npm install` then `npm run dev`.
3. Connect the GitHub repository to Vercel for preview and production deployments.
4. Keep the vetted question bank in Git/version control.
5. Add Supabase later for authentication and cross-device/user progress; do not move the canonical question content into Supabase unless there is a deliberate reason.

## Source gaps carried forward from v1

Module 2 had outstanding primary-source gaps around:

- Asset planning (Trust) — status/count needs confirmation against the source manifest;
- CAA2024 Section F — Intellectual Property, because the prior uploaded PDF was corrupted/unreadable;
- CAA2024 Schedule B Item 5 — Form of Attribution.

Do not invent questions for these gaps without clean source text.
