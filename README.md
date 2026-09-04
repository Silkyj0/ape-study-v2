# APE Study v2

A portable React/Vite version of the APE Part 2 study app.

## What changed in v2

- existing 222 seed questions migrated without rewriting their substantive content;
- question bank split by module;
- balanced answer shuffling in study mode;
- structural question-quality audit;
- difficulty metadata for new/reworked questions;
- browser storage for independent hosting;
- progress JSON export/import;
- project documentation for consistent AI-assisted question authoring.

Read `QUESTION_WRITING_STANDARD.md` before adding or rewriting seed questions, and `PROJECT_HANDOVER.md` before continuing development in a new AI conversation.

## Run locally

Requirements: a current Node.js release supported by Vite 8 (Vite's current guide requires Node 20.19+ or 22.12+).

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Audit the question bank

```bash
npm run audit
```

This reports structural clues such as correct-answer position bias and answer-length outliers. It does **not** verify legal accuracy.

## Deploy

The intended workflow is GitHub → Vercel. Vite produces a static production build, so the app can be hosted without a custom server at this stage.

## Progress storage

The independent app stores progress in browser localStorage under the existing key `ape-study-v1`. The Data screen can export/import progress JSON. This lets progress be migrated between environments until cross-device Supabase accounts are added.
