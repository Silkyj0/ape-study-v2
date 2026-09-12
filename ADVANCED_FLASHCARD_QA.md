# Advanced Flashcard Expansion — Source QA

Reviewed: **12 September 2026**

## Scope

This release adds **65 advanced flashcards**: exactly **5 per module across M1–M13**.

The objective is depth rather than glossary volume. Advanced cards concentrate on:

- role and responsibility boundaries;
- procedural triggers and required sequences;
- timing and notice requirements where the supplied contract states them;
- distinctions that are easy to confuse in APE scenarios;
- consequences of getting the process wrong;
- source-specific contractual mechanics.

## Source rules

- **M1–M11:** supplied Acumen/PARCS source files remain primary. The mature MCQ bank was used only to identify concepts worth revisiting; it was not treated as independent authority for a new card.
- **M12:** supplied **ABIC SW 2018 Simple Works Contract** is primary.
- **M13:** supplied **CAA2024 Client Architect Agreement** is primary.
- No advanced card is sourced from general model knowledge or an external website.
- PARCS sample wording and official keys are unaffected.

## Expansion counts

| Module | Previous | Advanced added | New total |
| --- | ---: | ---: | ---: |
| M1 | 10 | 5 | 15 |
| M2 | 10 | 5 | 15 |
| M3 | 8 | 5 | 13 |
| M4 | 8 | 5 | 13 |
| M5 | 8 | 5 | 13 |
| M6 | 20 | 5 | 25 |
| M7 | 7 | 5 | 12 |
| M8 | 8 | 5 | 13 |
| M9 | 15 | 5 | 20 |
| M10 | 12 | 5 | 17 |
| M11 | 7 | 5 | 12 |
| M12 | 72 | 5 | 77 |
| M13 | 72 | 5 | 77 |

**Previous bank:** 257 cards  
**New bank:** 322 cards  
**Advanced set:** 65 cards

`FLASHCARD_SEED_VERSION = 5`.

Existing seed IDs are unchanged, so previous recall progress continues to reconcile by `seedId`; the 65 new cards enter as unseen.

## Advanced module themes

- **M1:** concurrent contract/tort duties, Queensland proportionate liability, contractual standards vs PI cover, gratuitous advice, claim notification/admissions.
- **M2:** employee/contractor substance test, employee vs contractor copyright, written moral-rights consent, private-commission practice exposure, NES minimum floor.
- **M3:** scope creep/change control, fee-basis risk, low-fee professional risk, performance warranties, client-drafted consultancy terms.
- **M4:** contingency vs client change, prime cost vs provisional sum, consultant responsibility boundaries, estimate accuracy, feasibility assumptions.
- **M5:** concurrent WHS duties, client hazard information, lifecycle safe design, Premises Standards/DDA boundary, whole-life carbon trade-offs.
- **M6:** novation client change, post-novation PPR discipline, shop-drawing responsibility, Performance Solution assessment, evidence of suitability.
- **M7:** late tenders, qualifications, alternative tenders, post-tender negotiation, contract schedules.
- **M8:** site visits vs supervision, substitution evidence, RFI vs variation, opening-up/testing, latent-condition threshold.
- **M9:** progress claim vs certificate, effect of certification, drawing security, variation entitlement/value/time, discrepancy cost vs owner benefit.
- **M10:** critical-path effect, architect/contractor programming boundary, float, practical-completion consequences, workmanship vs design defects.
- **M11:** final completion vs final certificate, mediation vs arbitration, SOP adjudication, ipso-facto qualification, contemporaneous fee-dispute records.
- **M12:** A8 dispute timing, F5 latent-condition notice, G5 program, H1 claim timing, L3 delay notices.
- **M13:** D8 service changes, F1 licence status, J2 dispute sequence, K2 no-reason termination, K3 two termination paths.

## Direct source spot-checks

The release QA revisited the underlying supplied source files for higher-risk propositions rather than relying on existing question explanations alone. Examples include:

- `Architects standard of care.pdf`: overlapping contractual/negligence standard and the risk of outcome-based promises exceeding reasonable skill and care / PI protection.
- `Proportionate liability legislation.pdf`: Queensland does not allow contracting out; the reading also flags insurance risk where liability is contractually enlarged.
- `Engagement of contract staff.pdf`: ABN/contract label is not decisive; control/integration matter; employee and contractor copyright positions differ.
- `DDA overview - building access.pdf`: Premises Standards compliance is an effective defence only for the Access Code attributes it covers; broader DDA matters remain.
- `Shop drawings.pdf`: architect review does not relieve the contractor of dimensions, quantities, calculations or manufacturing methods and is limited to general accordance with contract intent.
- `Tenders - receiving and selecting.pdf`: late-tender treatment must be established; alternative tenders should preserve a conforming comparison basis; post-tender negotiation should proceed with one tenderer at a time; substantial scope change requires re-tendering.
- `Errors, ambiguities or omissions.pdf`: distinguishes architect-cost correction from work the project would have required anyway, which remains a client benefit/cost.
- `Managing time during construction.pdf`: the architect may monitor and seek programs where contractually empowered but must not usurp the contractor’s programming, methods or sequencing role.
- `Alternative dispute resolution.pdf`: mediation is non-determinative, arbitration is determinative, and SOP adjudication is binding while underlying contractual rights can still be pursued.

Two draft cards were tightened during this check: post-tender negotiation and construction-time programming were rewritten to follow the supplied Acumen wording more closely.

## Contract-specific advanced cards

### ABIC SW 2018

The five advanced M12 cards use exact contract references/pages and teach:

- A8 — 20-working-day dispute period and architect’s 10-working-day decision period;
- F5 — latent-condition notice within 5 working days;
- G5 — program within 10 working days of possession; program is not part of the contract;
- H1 — detailed claim within agreed/default 20 working days;
- L3 — start/end delay notices within 2 working days.

### CAA2024

The five advanced M13 cards use the verified CAA source map and printed page provenance and teach:

- D8 — written change-to-Services process and failed-negotiation pathway;
- F1 — licence revocation/reinstatement and later irrevocability after completion/full payment;
- J2 — dispute meeting within 5 business days, then mediation sequence;
- K2 — termination without reason on no less than 30 business days’ notice;
- K3 — insolvency/bankruptcy vs material A1/G1 breach with 10-business-day remedy opportunity.

## Product behaviour

Advanced cards carry `difficulty: 'advanced'` and an **Advanced** badge in the UI.

The Cards dashboard includes an **Advanced review** action that filters to the 65 advanced cards while retaining normal spaced-repetition priority. Each module card also shows its advanced-card count.

## Automated safeguards

`audit-flashcards` now fails if:

- total bank is not **322**;
- any module does not have the expected total;
- the advanced set is not exactly **65**;
- any module does not have exactly **5 advanced cards**;
- IDs/recall terms collide;
- definitions are too thin;
- source/provenance rules fail.

ABIC and CAA2024 audits separately require **77 cards** in each supplementary module and exactly **5 advanced cards** in each contract deck.
