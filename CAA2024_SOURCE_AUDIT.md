# CAA2024 Source Audit

## Source

Primary source for supplementary Module 13:

- `caa2024_fullservices_digital.pdf`
- Google Drive file ID: `1U7EYkpAml2d0lNOEf6jWmtZyaP7NDFpn`
- **2024 Client Architect Agreement (CAA2024)**

No external legal commentary or general model knowledge is used as authority for direct M13 content. Contract page references use the printed CAA2024 page number.

## Module 13 scope

M13 is supplementary and remains excluded from the normal M1–M11 Exam Simulation.

Current bank:

- **40 MCQs**
- **77 flashcards**
- MCQ answer-position distribution A10 / B10 / C10 / D10
- 72 established source-verified cards plus **5 advanced cards**
- stable existing IDs preserved
- `qaStatus: caa2024-source-verified` for direct M13 questions

## Verified contract map

`src/data/caa2024/contractMap.js` records:

- 12 sections;
- 46 verified operative/navigation references;
- 3 schedules;
- 8 Schedule B Items;
- 13 defined terms;
- printed-page provenance.

## High-value contract coverage

The M13 bank covers A1–A6 Services, Client obligations, Administration, D1–D8 Fees, E1–E2 Specialist Consultants, F1–F5 intellectual property/data/BIM, G1–G2 insurance/liability, H General Conditions, J dispute resolution, K1–K5 termination, L/Schedule C special conditions, Section M definitions, Schedule A scope and Schedule B project/commercial settings.

Key numerical/process distinctions include:

- D3 default payment period: **10 business days** where Item 7A is blank;
- Item 7B default overdue interest: **15% p.a.** where unstated;
- J2 dispute meeting: within **5 business days** of the notice;
- K2 termination without reason: **no less than 30 business days’ notice**;
- K3.2 specified material breach: written notice plus **10 business days** to remedy before termination;
- K3.1 insolvency/bankruptcy is a separate termination path.

## Advanced M13 cards

The five advanced cards teach:

1. **D8** — prompt Fee-effect notice, good-faith scope/Fee negotiation, written agreement and the failed-negotiation termination pathway.
2. **F1** — express licence status: revocation for overdue invoices, automatic reinstatement after payment, and irrevocability after completion of Services/full payment.
3. **J2** — dispute notice, five-business-day meeting, mediation and later legal-action sequence.
4. **K2** — no-reason termination on at least 30 business days’ notice, followed by K4 consequences.
5. **K3** — immediate insolvency/bankruptcy path vs A1/G1 material breach requiring notice and a 10-business-day remedy opportunity.

All five use the verified source map and printed contract page metadata and carry `difficulty: 'advanced'`.

## Cost of Works QA

The app preserves the distinction between:

- the front-page **forecast of Cost of Works**;
- the Section M defined **Cost of Works**; and
- the broader **Total Project Cost**.

The defined Cost of Works is not taught merely as “the Architect's forecast”.

## Core-bank cross-references

CAA2024 references on existing M1–M11 questions/cards are secondary metadata only. The original Acumen/PARCS provenance remains primary, and tangential links are not treated as contractual authority.

## Automated safeguards

`scripts/audit-caa2024.mjs` validates the final M13 assembly and fails the build if:

- source-map counts drift;
- M13 is not exactly 40 questions / **77 cards**;
- there are not exactly **5 advanced M13 cards**;
- IDs duplicate;
- CAA provenance is lost;
- a contract reference/page is invalid or mismatched;
- an MCQ loses a valid key/explanation or 10/10/10/10 balance;
- a card is too thin;
- a core cross-reference points outside the verified source map.

`scripts/audit-contract-integration.mjs` separately protects active-item references, PARCS immutability, core provenance and M12/M13 exam exclusion.
