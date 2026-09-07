# ABIC SW 2018 Integration — Source Audit

## Release

Completed: 7 September 2026

Primary source: `reference-contract-abic-sw-2018-c-071118 (1).pdf`

Google Drive file ID: `1YR9f1eBTQ0XSK2QHhnmTTKjtbRqUw_gS`

Contract: **ABIC SW 2018 — Simple Works Contract**

The supplied reference copy was read directly and used as the primary source for all new contractual propositions in supplementary Module 12. No ABIC clause wording, time period, schedule default or definition was filled from model/general knowledge.

## Source map

`src/data/abic/contractMap.js` records:

- **8 schedules** — Schedules 1–8;
- **142 clause headings** including S1 — Sections A, B, C, D, E, F, G, H, J, K, L, M, N, P, Q, R and S;
- **37 defined terms** from Section S;
- contract page references;
- the exact connected Drive source ID and URL.

Sections I and O do not appear as operative sections in this contract form.

## Supplementary Module 12

Visible title: **Supplementary — ABIC SW 2018 Contract**

This is an app-created supplementary module, not an official PARCS Module 12.

### Questions

- **50 source-verified questions**
- IDs: `m12-abic-01` to `m12-abic-50`
- approximately 10 foundation/navigation questions, 15 clause-mechanics questions and 25 scenario/application questions
- correct source-position distribution: **A 13 / B 13 / C 12 / D 12**
- `qaStatus`: `abic-source-verified`
- excluded from the main M1–M11 Exam Simulation because the exam-eligible QA-status list does not include `abic-source-verified`

Question source display includes the exact ABIC reference and contract page.

### Flashcards

- **72 ABIC flashcards**
- section maps for Sections A–S represented in the contract;
- Schedules 1–8;
- high-value clause/process cards for architect role, documents, security, latent conditions, programming, claims, variations, PC/PS sums, time, completion, payment, disputes, termination and notices;
- selected defined terms from Section S;
- IDs use the `fc-m12-...` namespace.

`FLASHCARD_SEED_VERSION = 3` and the total flashcard bank is **185 cards**.

## Existing-bank ABIC cross-check

The existing Acumen source remains primary for existing M8–M11 authored content. ABIC is added only as a secondary cross-check where the proposition maps cleanly to this contract.

Current cross-reference coverage:

- **40 existing M8–M11 questions**
- **22 existing M8–M11 flashcards**

Question QA notes state the ABIC clause/page while preserving the original Acumen source. Flashcard `sourceSection` displays the retained Acumen section plus the ABIC clause/page.

This prevents a source-category error: an Acumen explanation is not relabelled as if it were direct contract text merely because the same topic appears in ABIC.

## Source-specific safeguards

Production `build` now runs:

1. `scripts/audit-flashcards.mjs`
2. `scripts/audit-abic.mjs`
3. Vite build

The ABIC audit verifies:

- 142 mapped clauses;
- 8 schedules;
- 37 definitions;
- 50 M12 questions;
- 72 M12 flashcards;
- unique IDs;
- valid four-option answer keys;
- balanced authored answer positions;
- ABIC source provenance;
- clause/schedule/definition references against the source map;
- ABIC contract-page bounds;
- existing-bank cross-reference validity.

Vercel therefore fails the production build if these structural/provenance expectations drift.

## Reference-copy anomalies deliberately withheld from recall testing

Two internal cross-reference inconsistencies were identified in the supplied reference copy and are **not** used as rote-memory study points:

1. M1's practical-completion text contains a commissioning-test Schedule 1 item reference that does not align with the commissioning-test item used elsewhere in the contract; the substantive commissioning requirement is taught instead.
2. The Section S definition of `business day` contains a Schedule 1 item reference that does not align with the visible Schedule 1 numbering in this reference copy; no question/card relies on that item number.

These are treated as source-document anomalies rather than silently corrected from outside knowledge.

## Insolvency qualification

ABIC Q2 and Q14 contain contract-form insolvency termination rights. Existing Acumen material separately identifies statutory ipso-facto qualifications. Module 12 does not turn the ABIC insolvency clauses into an unqualified proposition that termination is always legally available. Existing M11 material retains the Acumen qualification and legal-advice boundary.

## Seed/progress effect

- MCQ seed: **v35** — existing question IDs unchanged; 50 M12 IDs enter as unseen.
- Flashcard seed: **v3** — existing 113 flashcard IDs unchanged; 72 M12 IDs enter as unseen.
- Existing learner progress is preserved by stable `seedId` reconciliation.

## Source rule going forward

- Acumen-derived content: supplied Acumen reading remains primary.
- ABIC contractual content: actual supplied ABIC SW 2018 contract is primary.
- Dual-source content: identify both sources and their roles explicitly.
- PARCS supplied questions/keys: immutable.
- If the contract does not clearly support a proposed ABIC proposition, withhold it rather than generalise from another contract form or outside knowledge.
