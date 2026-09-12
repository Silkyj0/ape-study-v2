# Flashcard Bank Source Audit — 12 September 2026

## Current bank

- `FLASHCARD_SEED_VERSION = 5`
- **322 total flashcards**
- **65 advanced cards** — exactly 5 per M1–M13
- Existing seed IDs changed: **0**
- Previous learner progress reconciles by stable `seedId`

### Module distribution

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

## Primary-source discipline

### M1–M11

The supplied **Acumen/PARCS source files** remain the authority. The original 113 cards retain their source-audited provenance and 55 new advanced cards are added from the same supplied source set.

The source rule is strict: an MCQ explanation or model knowledge is not sufficient authority for a flashcard. The advanced pass revisited the supplied source files for higher-risk distinctions and tightened draft wording where the source was narrower than the initial formulation.

### M12

Primary source is the supplied **ABIC SW 2018 — Simple Works Contract**. M12 now contains 77 cards: 72 existing source-verified cards plus 5 advanced process/timing cards.

### M13

Primary source is the supplied **CAA2024 — Client Architect Agreement**. M13 now contains 77 cards: 72 existing source-verified cards plus 5 advanced process/licence/termination cards.

## Advanced-card design standard

Advanced cards are not just longer definitions. They should test at least one of:

- a role/responsibility boundary;
- a procedural trigger or sequence;
- a contractual time period;
- a consequence of a missed step;
- a distinction between similar entitlements or concepts;
- a qualification that prevents an over-broad exam answer.

Each advanced card has `difficulty: 'advanced'` and is available through the dedicated **Advanced review** mode.

## High-risk source checks completed in this pass

The underlying supplied readings were revisited for propositions including:

- reasonable skill/care vs outcome warranties and PI risk;
- Queensland proportionate-liability contracting-out position;
- employee/contractor substance test and copyright ownership;
- DDA/Premises Standards coverage boundary;
- shop-drawing review and contractor responsibility;
- late/alternative tenders and one-tenderer-at-a-time post-tender negotiation;
- discrepancy rectification vs work that benefits the owner regardless of the error;
- architect progress monitoring vs contractor programming/sequencing responsibility;
- mediation, arbitration and Security of Payment adjudication distinctions.

See `ADVANCED_FLASHCARD_QA.md` for the detailed expansion record.

## Structural safeguards

`scripts/audit-flashcards.mjs` validates:

- exact total and module distribution;
- unique IDs and recall terms;
- non-trivial definitions;
- required source metadata;
- M1–M11 Acumen primary provenance;
- M12 ABIC provenance/pages;
- M13 CAA2024 provenance/pages;
- exactly 65 advanced cards and exactly 5 per module.

`scripts/audit-abic.mjs`, `scripts/audit-caa2024.mjs` and `scripts/audit-contract-integration.mjs` provide the supplementary contract/cross-module safeguards.
