# Modules 6–11 source manifest

## Scope

Modules 6–11 were rebuilt from the connected Google Drive course readings on 5 September 2026. The PARC sample-question folders for Modules 5–11 were deliberately not opened or used, preserving a later blind calibration exercise.

## Live authored counts

| Module | Topic | Live authored questions | Stored answer positions |
| --- | --- | ---: | --- |
| 6 | Building Procurement, Construction Contracts, Construction Documentation | 36 | 9 A / 9 B / 9 C / 9 D |
| 7 | Tendering and Construction Contract Execution | 32 | 8 A / 8 B / 8 C / 8 D |
| 8 | Contract Administration — Construction Commencement | 24 | 6 A / 6 B / 6 C / 6 D |
| 9 | Contract Administration — Money | 28 | 7 A / 7 B / 7 C / 7 D |
| 10 | Contract Administration — Time, EOT Costs, Liquidated Damages | 32 | 8 A / 8 B / 8 C / 8 D |
| 11 | Final Certificate, Dispute Resolution and Termination | 24 | 6 A / 6 B / 6 C / 6 D |

Total M6–M11 authored questions: **176**. Stored correct-answer positions across the six modules are **44 A / 44 B / 44 C / 44 D**. Runtime presentation still shuffles answers independently.

## Module 6 source focus

Live questions concentrate on the supplied readings dealing with:
- procurement structure and risk allocation;
- traditional procurement and design and construct;
- construction management and managing contractor;
- two-stage tendering and early contractor involvement;
- alliancing, PPP and turnkey distinctions;
- cost-plus and guaranteed maximum price arrangements;
- building-contract selection;
- construction documentation and shop drawings;
- Performance Solutions; and
- product conformity/compliance risk.

The four inherited M6 placeholders are archived in `src/data/module06.legacy.js` and are not part of the live seed.

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

- Every live M6–M11 question retains a Drive source title, file ID and URL and is classified `drive-source-verified`.
- Question propositions and keyed answers are based on the supplied source material; unsupported detail is not added from general knowledge.
- Correct-answer source positions are exactly balanced within each module.
- Distractor-only QA overlays in `src/data/laterModuleQaOverrides.js` remove material answer-length cues without changing keyed answers, explanations or provenance.
- `src/lib/audit.js` treats only material length differences as answer-length clues; trivial one-character differences are not counted as meaningful structural defects.
- Sample questions remain outside the authored source pass until the user supplies them for blind answering and confirms the official PARC key.

## Next workflow

Blind calibration should proceed in order: **M5 → M6 → M7 → M8 → M9 → M10 → M11**. After each official answer key is confirmed, review that module for any PARC-specific reasoning rule before locking sample questions into the app.
