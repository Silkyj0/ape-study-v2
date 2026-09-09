# CAA2024 Source Audit

## Source

Primary source for supplementary Module 13:

- `caa2024_fullservices_digital.pdf`
- Google Drive file ID: `1U7EYkpAml2d0lNOEf6jWmtZyaP7NDFpn`
- Document: **2024 Client Architect Agreement (CAA2024)**
- Source check completed: 10 September 2026

No external legal commentary or general model knowledge is used as authority for M13. Where the accessible PDF extraction did not support reliable clause/page precision, the detail was withheld rather than guessed.

## Module 13 scope

M13 is a **supplementary contract module**, not an official PARCS module. It is deliberately excluded from the normal M1–M11 Exam Simulation.

Initial bank:

- **40 MCQs**
- **54 flashcards**
- MCQ answer-position distribution: **A 10 / B 10 / C 10 / D 10**
- **11 existing Acumen flashcards** receive a secondary CAA2024 cross-reference while retaining their original Acumen source.

## Verified contract areas used

The source map records only positively verified provisions used by the bank:

- Section A — Services: A1–A6
- Section B — Client obligations
- Section C — Administration
- Section D — Fees: D1–D8
- Section E — Specialist Consultants: E1–E2
- Section F — Intellectual Property & Other Rights: F1–F5
- Section G — Insurances and Liability: G1 used in v1
- Section J — Dispute Resolution
- Section K — Termination: K1–K4
- Section M — Definitions
- Schedule A — Services
- Schedule B — project/commercial Items
- Schedule B Items 1, 2, 3, 4, 5, 6, 7A and 7B

The v1 bank does **not** manufacture headings or clause numbers for extracted portions that were not sufficiently clear from the supplied PDF.

## High-value propositions directly checked

The bank specifically teaches and tests:

- A1 reasonable skill, care and diligence; agency; records; scope-change and conflict notification;
- A2 exclusions including no fitness-for-purpose warranty and the distinction between contract administration and responsibility for ensuring construction compliance;
- A3 Cost of Works forecasting as revisable and indicative rather than guaranteed;
- A4 Program of Services and mutual revision;
- A5 protracted-services notice and negotiation pathway;
- A6 payment/right consequences of suspension;
- Section B Client obligations, including contractor instructions through the Architect where contract administration forms part of the Services;
- D2 monthly payment claims;
- D3 Item 7A payment timing, default 10-business-day period, Item 7B interest and suspension for overdue payment;
- D4 percentage-fee adjustment against Cost of Works;
- D5 lump-sum fees;
- D6 time-based fees and the 7-day records requirement when requested;
- D7 Item 3 Disbursements and the stated 15% administration fee where selected;
- D8 written change-to-Services process and the no-agreement pathway;
- E1/E2 Specialist Consultant engagement, coordination, responsibility and additional consultants;
- F1 copyright ownership and the limited express Client licence;
- F2 Moral Rights and Item 5 attribution;
- F3 indemnity for specified section F breaches;
- F4 electronic data transfer and format-translation risk;
- F5 BIM protocol mechanism;
- G1 professional indemnity/public liability insurance and Item 6 values;
- Section J dispute-resolution location;
- K1/K2/K3 distinction between Client breach, without-reason and Architect-breach termination;
- K4 follow-on termination consequences;
- Schedule A/Schedule B navigation and the key Schedule B Items.

## Definitions

Section M is included as a navigation and interpretation skill. M13 definition cards for `Cost of Works`, `Services`, `Site`, `Specialist Consultant`, `The Design` and `Fee` deliberately explain **how each defined term operates across the agreement** and direct the learner back to Section M for the formal definition. They do not invent verbatim dictionary wording where the extracted text was not sufficiently reliable.

## Existing-bank cross-references

CAA2024 is added as a secondary cross-reference to selected existing Acumen cards covering:

- client–architect agreements and written agreements;
- fitness for purpose;
- Cost of Works/budget management;
- changes to Services;
- Specialist Consultants;
- copyright/licensing;
- moral rights and attribution.

Those cards remain Acumen-derived. CAA2024 does not replace their original source provenance.

## QA safeguards

`scripts/audit-caa2024.mjs` fails the production build if:

- M13 question/card counts drift;
- IDs duplicate;
- a CAA2024 question/card loses CAA provenance;
- a question/card cites a reference not in the verified source map;
- an MCQ loses a keyed answer or explanation;
- answer positions become unbalanced;
- a CAA flashcard becomes too thin;
- an existing-card cross-reference points to an unverified reference.

The general flashcard audit also validates M13 source kind, module number and total bank distribution.
