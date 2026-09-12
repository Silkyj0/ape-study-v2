# Module-by-Module Contract Integration QA

Reviewed: **12 September 2026**

## Rules

1. M1–M11 retain Acumen/PARCS as their primary source.
2. ABIC/CAA2024 may be added to a core item only where the supplied contract directly supports the proposition.
3. Confirmed PARCS wording/keys are immutable.
4. Thematic relevance alone is not enough for a contract cross-reference.
5. M12 and M13 remain supplementary and outside the normal Exam Simulation.

## Module outcomes

| Module | Contract-integration outcome |
| --- | --- |
| M1 | CAA2024 reinforces G2 liability, Cost of Works/Total Project Cost, Schedule A, copyright/licence and termination; Acumen remains primary. |
| M2 | CAA2024 F1/F2 is secondary support for copyright/moral-rights cards; statutory/business/employment material remains source-pure. |
| M3 | CAA2024 A2, H7, Schedule A and D8 reinforce agreement scope, fitness for purpose, pre-execution Services and fee/scope changes. |
| M4 | CAA2024 reinforces budget/consultant/service mechanics; ABIC K1/K4 reinforces prime-cost/provisional-sum adjustment. |
| M5 | No forced contract overlay; DDA/WHS/carbon content stays source-pure. |
| M6 | Procurement/documentation content stays source-pure where ABIC/CAA would only be tangential. |
| M7 | Targeted CAA A1 and ABIC Schedule 1/B2 support agency, tender contract settings and contract-document execution. |
| M8 | ABIC supports contractor responsibility/opening-up/latent-condition mechanics; CAA A2 reinforces the architect–client role boundary. |
| M9 | ABIC is the relevant owner–contractor source for certification, security, variations and payment administration; CAA fee mechanics are not mixed in. |
| M10 | ABIC supports time/EOT/PC/LD/defects/security mechanics; broader Acumen time-management principles remain primary. |
| M11 | ABIC supports owner–contractor final certificate/security/dispute mechanics; CAA supports architect–client fee/scope/dispute mechanisms. |
| M12 | Direct ABIC module: **50 MCQs / 77 flashcards**, including 5 advanced process/timing cards. |
| M13 | Direct CAA2024 module: **40 MCQs / 77 flashcards**, including 5 advanced change/licence/dispute/termination cards. |

## Cross-module QA safeguards

`scripts/audit-contract-integration.mjs` checks that:

- contract question cross-references point to active study questions;
- flashcard cross-references point to real cards;
- contract precision overrides do not alter `parcs-confirmed` items;
- M12/M13 retain their source-verified statuses;
- supplementary QA statuses stay outside `EXAM_QA_STATUSES`;
- core M1–M11 material is not silently reclassified as contract-authored.

The original contract-integration review caught and removed archived/tangential links rather than maximising the number of references.

## Advanced-card effect

The 12 September advanced expansion does **not** change the contract role separation above. It adds five harder cards to every module while retaining the same source boundaries:

- M1–M11 advanced cards remain Acumen-derived;
- M12 advanced cards are direct ABIC clauses/pages;
- M13 advanced cards are direct CAA2024 references/pages.

See `ADVANCED_FLASHCARD_QA.md` for the source-specific advanced-card review.
