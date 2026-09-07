# Flashcard Bank QA — 7 September 2026

## Release summary

- Seed version: `FLASHCARD_SEED_VERSION = 2`
- Total source-audited cards: **113**
- Existing cards retained: **30**
- New cards added: **83**
- Existing seed IDs changed: **0**
- Modules represented: **M1–M11**

## Module coverage

| Module | Cards | Coverage |
| --- | ---: | --- |
| M1 | 10 | standard of care, liability, duty to warn/correct, PII |
| M2 | 10 | practice structures, copyright, assignment/licence, moral rights |
| M3 | 8 | client agreements, collateral warranties, fitness for purpose, consultant engagement |
| M4 | 8 | budgets, design stages, variations to services, value management, consultant roles |
| M5 | 8 | safe design, WHS duties, access, embodied/operational impacts |
| M6 | 20 | procurement, novation, NCC pathways, construction documentation |
| M7 | 7 | tendering, tender addenda, conformity/alternatives, contract documents |
| M8 | 8 | construction roles, latent conditions, substitutions, inspections/hold/witness points |
| M9 | 15 | contract sums, variations, progress payments/certification, security, discrepancies |
| M10 | 12 | EOTs, critical path/float, prevention principle, liquidated damages, completion/defects |
| M11 | 7 | final completion/certificate, ADR, insolvency/termination, fee disputes |

## QA method

Every existing card was checked against its named supplied Acumen reading for:

1. factual accuracy;
2. preservation of contract-specific or general-rule qualifications;
3. sufficient detail to distinguish the term from nearby concepts;
4. source-supported examples only;
5. a specific Acumen reading title and section;
6. absence of unsupported general-knowledge additions.

No original card required withdrawal. The QA pass refined wording by stable ID where added qualification materially improves exam reliability.

## Core refinements

The following existing concepts were strengthened without changing their seed IDs:

- Prime cost item — emphasises supply-item allowance vs incompletely described work.
- Provisional sum — emphasises work/materials not sufficiently described at contract formation.
- Contingency sum — distinguishes genuine unforeseen/discrepancy reserve from discretionary scope changes.
- Security / cash retention / unconditional guarantee — makes contractual entitlement and release mechanics explicit.
- EOT / EOT with costs / EOT only — makes clear that time and money are separate contractual entitlements.
- Critical-path effect — explains float and why a delay event alone is insufficient.
- Practical completion — preserves ABIC qualification that minor defects/incomplete work can remain where contract requirements are met.
- Final completion / final certificate — removes any assumption of a fixed one-year timing and makes the contract control explicit.

Expansion cards were also tightened where needed:

- Liquidated damages — avoids treating a simplistic penalty test as universal; contract and applicable law control recoverability.
- Defects liability period — avoids implying the contractor is responsible for design outside its own contractual design obligations.
- Determinative ADR — records Acumen's qualification that Security of Payment adjudication can bind while underlying contract rights may still be pursued.

## Source discipline

The source rule remains strict: **the supplied Acumen readings are the source of truth for flashcards.** Definitions, distinctions and examples are concise paraphrases of those readings. No card is created merely because a term appears in a pathway heading, an MCQ explanation, model knowledge, legislation commentary elsewhere, or an external website.

Where a reading frames a proposition as dependent on the building contract, jurisdiction, form of procurement or particular facts, the card must preserve that qualification.

## Structural safeguards

The version-2 bank entrypoint checks at runtime that:

- total count is exactly 113;
- every seed ID is unique;
- every card has a valid M1–M11 module;
- every card has topic, term, definition, source and source section.

The existing 30-card seed is retained as a historical core. QA overrides are applied by seed ID and the 83-card modular expansion is then appended. Reconciliation continues to preserve learner progress using stable seed IDs.
