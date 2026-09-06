# Modules 6–11 source manifest

## Scope

Modules 6–11 were rebuilt from the connected Google Drive course readings on 5 September 2026. The PARC sample-question folders for Modules 5–11 were deliberately not opened or used before the blind attempts.

## Live authored counts

| Module | Topic | Live authored questions | Stored answer positions |
| --- | --- | ---: | --- |
| 6 | Building Procurement, Construction Contracts, Construction Documentation | 40 | 10 A / 10 B / 10 C / 10 D |
| 7 | Tendering and Construction Contract Execution | 32 | 8 A / 8 B / 8 C / 8 D |
| 8 | Contract Administration — Construction Commencement | 24 | 6 A / 6 B / 6 C / 6 D |
| 9 | Contract Administration — Money | 28 | 7 A / 7 B / 7 C / 7 D |
| 10 | Contract Administration — Time, EOT Costs, Liquidated Damages | 32 | 8 A / 8 B / 8 C / 8 D |
| 11 | Final Certificate, Dispute Resolution and Termination | 24 | 6 A / 6 B / 6 C / 6 D |

Total M6–M11 authored questions: **180**. Stored correct-answer positions across the six modules are **45 A / 45 B / 45 C / 45 D**. Runtime presentation still shuffles answers independently.

## Module 6 source focus

Live authored questions concentrate on the supplied readings dealing with:
- procurement structure and risk allocation;
- traditional procurement and design and construct;
- construction management and managing contractor;
- two-stage tendering and early contractor involvement;
- alliancing, PPP and turnkey distinctions;
- cost-plus and guaranteed maximum price arrangements;
- building-contract selection;
- construction documentation and shop drawings;
- Performance Solutions;
- product conformity/compliance risk; and
- **novation**, including post-novation contractual relationships, PI/legal review of novation deeds, communications with the former principal and certification conflicts.

The four inherited M6 placeholders are archived in `src/data/module06.legacy.js` and are not part of the live seed.

### Module 6 PARCS calibration

Blind sample attempt: **11/11 correct**.

Confirmed key:
- 6.1: **C, B, D, B, A**
- 6.2: **C, B, D**
- 6.3: **C, D, B**

No keyed authored answer conflicted with the official sample framing. The sample set did reveal that novation deserved stronger representation in the Verified exam bank, so four source-verified novation questions were added from `Novation.pdf`, one at each stored answer position A–D.

The 11 supplied sample questions are stored separately in `src/data/module06.parcs.js` and are marked `parcs-confirmed`. Their scenario, stem, options and confirmed answer key are preserved; only runtime presentation order may shuffle.

## Module 7 source focus

Live questions concentrate on:
- competitive tender principles and fairness;
- tender information, conditions, addenda and selection criteria;
- conforming/non-conforming and late tenders;
- tender validity, checking and evaluation;
- contractor recommendations and professional representation risk;
- negotiated contracts and authority to negotiate;
- contract formation/letters of acceptance; and
- building-contract execution and document identification.

The four inherited M7 placeholders are archived in `src/data/module07.legacy.js` and are not part of the live seed.

## Module 8 source focus

Live questions use the supplied contract-administration readings on:
- contract administration versus supervision;
- inspections and records;
- opening up and hold points;
- dilapidation surveys;
- latent conditions; and
- substitutions, including D&C substitution responsibility.

## Module 9 source focus

Live questions use the supplied readings on:
- progress claims/certification and cash flow;
- set-off;
- security, bank guarantees and cash retention;
- variations and contingency; and
- errors, ambiguities or omissions and allocation of correction/consequential cost.

## Module 10 source focus

Live questions use the supplied readings on:
- extensions of time and critical-path delay;
- EOT with costs versus EOT only;
- prevention principle and duty of cooperation;
- practical completion;
- defects and defects-liability period; and
- liquidated-damages principles.

## Module 11 source focus

Live questions use the supplied readings on:
- final completion and final certificate;
- final security release and latent-defect exceptions;
- insolvency events, ipso-facto restrictions and termination boundaries;
- determinative versus non-determinative ADR;
- mediation, arbitration and adjudication; and
- fee disputes and staged escalation.

## QA treatment

- Every authored M6–M11 question retains a Drive source title, file ID and URL and is classified `drive-source-verified`.
- Question propositions and keyed answers are based on the supplied source material; unsupported detail is not added from general knowledge.
- Stored correct-answer positions remain exactly balanced within each authored module.
- Distractor-only QA overlays in `src/data/laterModuleQaOverrides.js` remove material answer-length cues without changing keyed answers, explanations or provenance.
- The original 176-question M6–M11 build passed the structural audit with 0 material answer-length flags, 0 high length outliers, 0 option-shape flags and 0 duplicate-option flags. The four later novation questions were authored to the same structural standard and keep A–D balance intact.
- Confirmed PARCS samples are excluded from the mixed Verified exam bank and remain available in normal module study.

## Next workflow

Blind calibration continues in order: **M7 → M8 → M9 → M10 → M11**. After each official answer key is confirmed, review that module for any PARC-specific reasoning rule or source-coverage gap before locking the sample questions into the app.
