# CAA2024 Source Audit

## Source

Primary source for supplementary Module 13:

- `caa2024_fullservices_digital.pdf`
- Google Drive file ID: `1U7EYkpAml2d0lNOEf6jWmtZyaP7NDFpn`
- Document: **2024 Client Architect Agreement (CAA2024)**
- Source check completed: **10 September 2026**

No external legal commentary or general model knowledge is used as authority for M13. Contract page references use the printed CAA2024 page number. Where the supplied agreement does not support a proposition, the app does not fill the gap from general knowledge.

## Module 13 scope after cross-module QA

M13 is a **supplementary contract module**, not an official PARCS module. It is deliberately excluded from the normal M1–M11 Exam Simulation.

Current bank:

- **40 MCQs**
- **72 flashcards**
- MCQ answer-position distribution: **A 10 / B 10 / C 10 / D 10**
- stable M13 question IDs preserved;
- direct M13 content uses `qaStatus: caa2024-source-verified`;
- selected existing M1–M11 content receives only secondary CAA2024 cross-references and retains its original Acumen/PARCS provenance.

The 72-card deck is intentionally comparable in depth to the 72-card ABIC deck. The QA expansion filled verified gaps rather than adding generic material.

## Verified contract map

The canonical source map in `src/data/caa2024/contractMap.js` contains:

- **12 sections**;
- **46 verified operative/navigation references**;
- **3 schedules**;
- **8 Schedule B Items**;
- **13 defined terms**.

### Sections

- A — Services
- B — Client obligations
- C — Administration
- D — Fees
- E — Specialist Consultants
- F — Intellectual Property & Other Rights
- G — Insurances and Liability
- H — General Conditions
- J — Dispute Resolution
- K — Termination
- L — Special Conditions
- M — Definitions

### Schedules

- Schedule A — Scope of Services
- Schedule B — Scheduled Items
- Schedule C — Special Conditions

### Schedule B Items

- Item 1 — fee basis / service-component allocation
- Item 2 — time-based rates
- Item 3 — Disbursements
- Item 4 — Specialist Consultants
- Item 5 — attribution
- Item 6 — PI / public liability insurance values
- Item 7A — payment period; default **10 business days** where unstated
- Item 7B — overdue interest; default **15% per annum** where unstated

## High-value propositions directly checked

The bank now teaches and tests the following directly from the supplied agreement:

- **A1** — reasonable skill, care and diligence; Client-agent role; records; scope-change and conflict notification;
- **A2** — no fitness-for-purpose warranty; stated exclusions; distinction between contract administration and responsibility for ensuring construction compliance;
- **A3** — Cost of Works forecasts are revisable and indicative, not guaranteed;
- **A4** — Program of Services and mutual revision;
- **A5** — protracted-Services notice, Fee negotiation and revised-program pathway;
- **A6** — payment/right consequences of suspension;
- **B** — Client obligations, including contractor instructions through the Architect where contract administration forms part of the Services;
- **C** — authority of nominated representatives;
- **D2–D8** — monthly claims, payment timing, overdue interest, suspension, percentage/lump-sum/time-based fee mechanisms, Disbursements and written change-to-Services procedures;
- **E1–E2** — Specialist Consultant engagement, coordination, responsibility, reliance and additional consultants;
- **F1–F5** — copyright, express Client licence, Moral Rights/attribution, section-F indemnity, electronic data transfer and BIM protocol;
- **G1** — PI and public-liability insurance requirements using Item 6;
- **G2** — contractual liability allocation, including the net-PI-recovery cap subject to its qualifications and exclusions for specified indirect/consequential/special losses;
- **H1–H10** — writing/email rules, written variations, assignment/novation/transfer, applicable law, statutory protections, entire agreement, pre-execution Services, deemed receipt and GST/currency rules;
- **J1–J2** — continued performance during dispute, dispute notice, meeting within **5 business days**, mediation and legal-action sequence;
- **K1–K5** — Client-breach termination, no-reason termination, Architect-breach termination, termination consequences and surviving obligations;
- **K2** — no-reason termination requires **no less than 30 business days' notice**;
- **K3.2** — specified Architect material breach requires written notice and a **10-business-day** opportunity to remedy before termination; insolvency/bankruptcy under K3.1 is separate;
- **L** — Schedule C special conditions apply and take precedence over other CAA2024 terms;
- **M** — defined-term interpretation;
- **Schedule A** — only items marked `Included` form part of the Services; unmarked/ambiguous items are treated as excluded;
- **Schedule B** — project-specific commercial and responsibility settings.

## Defined-term QA

Section M is used as both a navigation skill and a source of precise commercial distinctions. The map now includes:

- BIM
- Client Information
- Code of Practice
- Cost of Works
- The Design
- Disbursement
- Fee
- Mobilisation Fee
- Project
- Services
- Site
- Specialist Consultant
- Total Project Cost

A key QA correction was made to the existing core-bank treatment of **Cost of Works**: the defined Cost of Works is not simply “the Architect's forecast”. The front page records an initial **forecast of Cost of Works**, while Section M defines the Cost of Works itself and separately defines the broader **Total Project Cost**.

## M13 question QA refinements

The weakest navigation-only questions were replaced, without changing question IDs or overall answer-position balance, by higher-value application questions covering:

- G2 liability allocation;
- H2 written variation requirements;
- H3 assignment/novation/transfer consent;
- J2 five-business-day dispute meeting;
- K2 30-business-day no-reason termination notice;
- K3.2 notice and 10-business-day remedy period;
- K5 surviving obligations;
- Section L / Schedule C precedence;
- Item 7B default 15% p.a. late-interest rate;
- H7 pre-execution Services.

The K3 question was specifically corrected so it no longer suggests that every Architect breach permits immediate termination.

## M13 flashcard QA refinements

The deck was expanded from 65 to **72** source-verified cards to fill identified source-map gaps. Added cards cover:

- Section H — General Conditions;
- Section L — Special Conditions;
- G2 liability;
- H3 assignment/novation/transfer;
- H7 pre-execution Services;
- J2 dispute sequence;
- K2/K3 termination timing.

Existing section-map cards for G, J and K and the Item 7B card were also refined for precision.

## Existing-bank cross-references

CAA2024 cross-references are deliberately **secondary metadata only**. They do not replace an Acumen/PARCS source and are added only when the contract directly supports the proposition being tested.

The cross-module QA pass currently links **22 active core questions** and **20 core flashcards** to CAA2024. The links are concentrated in M1, M3, M4, M7, M8 and M11, with flashcard reinforcement also in M2. Tangential M2/M6/M8 question links were removed rather than treating thematic relevance as contractual support.

## QA safeguards

`scripts/audit-caa2024.mjs` validates the **final M13 assembly after QA overrides**, not just the raw source file. It fails the production build if:

- source-map counts drift;
- M13 question/card counts drift;
- IDs duplicate;
- CAA provenance is lost;
- a reference is outside the verified source map;
- a reference and printed page do not match;
- an MCQ loses a valid key or explanation;
- answer positions cease to be 10/10/10/10;
- a CAA flashcard becomes too thin;
- a core cross-reference points to an unverified CAA reference.

`scripts/audit-contract-integration.mjs` additionally checks that contract cross-references point to active study items, confirmed PARCS questions are not rewritten by the contract precision layer, core items retain their original provenance, and supplementary M12/M13 statuses remain excluded from the normal exam pool.
