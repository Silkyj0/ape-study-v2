# ABIC SW 2018 Integration — Source Audit

## Source

Primary source: `reference-contract-abic-sw-2018-c-071118 (1).pdf`  
Google Drive file ID: `1YR9f1eBTQ0XSK2QHhnmTTKjtbRqUw_gS`  
Contract: **ABIC SW 2018 — Simple Works Contract**

All direct M12 contractual propositions come from this supplied reference copy. No clause wording, time period, schedule default or definition is filled from general model knowledge.

## Source map

`src/data/abic/contractMap.js` records:

- 8 schedules;
- 142 clause headings including S1;
- 37 defined terms;
- contract-page references;
- the connected Drive source metadata.

Sections I and O do not appear as operative sections in this contract form.

## Supplementary Module 12

M12 remains an app-created supplementary module and is excluded from the normal M1–M11 Exam Simulation.

### Questions

- **50 source-verified MCQs**
- IDs `m12-abic-01`–`m12-abic-50`
- answer-position distribution A13 / B13 / C12 / D12
- `qaStatus: abic-source-verified`

### Flashcards

- **77 source-verified ABIC flashcards**
- 72 established section/schedule/clause/definition cards
- **5 new advanced cards** covering:
  - A8 dispute timing;
  - F5 latent-condition notice;
  - G5 construction program timing/status;
  - H1 claim timing;
  - L3 start/end delay notices.

The advanced cards preserve exact clause/page provenance and use `difficulty: 'advanced'`.

## Advanced mechanics verified

- **A8:** dispute period of 20 working days; architect then has 10 working days for the written decision.
- **F5:** relevant latent-condition notice within 5 working days.
- **G5:** construction program within 10 working days after possession; includes major stages, practical-completion date, trades and critical path; program is expressly not part of the contract.
- **H1:** detailed claim within the agreed period or default 20 working days where applicable.
- **L3:** delay-start and delay-end notices each within 2 working days.

## Existing-bank cross-checks

Existing core questions/cards retain their Acumen/PARCS primary source. ABIC is secondary metadata only where the supplied contract directly supports the proposition. The contract-integration audit rejects references to inactive items and prevents core items from being reclassified as ABIC-authored.

## Automated safeguards

Production QA verifies:

- source map counts;
- 50 M12 questions;
- **77 M12 cards**;
- exactly **5 advanced M12 cards**;
- unique IDs;
- ABIC provenance and valid contract pages/references;
- MCQ answer keys/balance;
- existing-bank ABIC cross-reference validity.

## Reference-copy anomalies

Two internal source-copy inconsistencies remain deliberately excluded from rote-memory testing:

1. M1 contains a commissioning-test Schedule 1 item reference that does not align with the commissioning-test item used elsewhere. The substantive commissioning requirement is taught instead.
2. Section S's `business day` definition refers to a Schedule 1 item that does not align with the visible Schedule 1 numbering. No card/question relies on that item number.

These are treated as source-document anomalies and are not silently repaired from outside material.

## Insolvency qualification

ABIC Q2/Q14 contain contractual insolvency termination provisions. Existing Acumen M11 content separately preserves statutory ipso-facto qualifications. M12 does not teach the ABIC clauses as an unqualified statement that termination is always legally enforceable.
