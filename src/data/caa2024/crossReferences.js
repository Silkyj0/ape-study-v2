import { CAA2024_SOURCE, caaReferencePage } from './contractMap.js';

function ref(contractRef) {
  return {
    caaContractSource: CAA2024_SOURCE.name,
    caaContractRef: contractRef,
    caaContractPage: caaReferencePage(contractRef),
    caaContractSourceFileId: CAA2024_SOURCE.fileId,
    caaContractSourceUrl: CAA2024_SOURCE.url,
    caaContractCheckedOn: CAA2024_SOURCE.checkedOn,
  };
}

// Secondary cross-references only. The original Acumen/PARCS source remains primary.
// Add a cross-reference only where the contract directly supports the proposition being tested.
export const CAA2024_QUESTION_CROSS_REFS = {
  // M1 — professional liability / CAA mechanics
  'm1-limitation-g2': ref('G2'),
  'm1-caa-costofworks': ref('Definition: Cost of Works'),
  'm1-caa-scheduleA': ref('Schedule A'),
  'm1-caa-copyright': ref('F1'),
  'm1-caa-termination': ref('K2'),

  // M3 — agreement scope, fitness-for-purpose, early services and remuneration
  'm3-sc-agreement-2': ref('A2'),
  'm3-sc-agreement-4': ref('H7'),
  'm3-sc-partial-1': ref('Schedule A'),
  'm3-fit-purpose': ref('A2'),
  'm3-agreement-scope': ref('Schedule A'),
  'm3-agreement-remuneration': ref('D8'),

  // M4 — budget/cost terminology and consultant engagement
  'm4-budget-02': ref('A3'),
  'm4-budget-03': ref('Definition: Total Project Cost'),
  'm4-budget-06': ref('A3'),
  'm4-cons-01': ref('E1'),

  // M7 — architect acting as the Client's agent when the engagement includes the task
  'm7-02': ref('A1'),

  // M8 — construction-compliance boundary in the Client–Architect agreement
  'm8-01': ref('A2'),
  'm8-02': ref('A2'),

  // M11 — architect-client fee dispute and variation mechanisms
  'm11-18': ref('J2'),
  'm11-19': ref('D8'),
  'm11-20': ref('D8'),
  'm11-23': ref('J2'),
};

export const CAA2024_FLASHCARD_CROSS_REFS = {
  // M1
  'fc-m1-standard-of-care': ref('A1'),
  'fc-m1-limitation-of-liability': ref('G2'),
  'fc-m1-professional-indemnity-insurance': ref('G1'),

  // M2 — CAA implementation of copyright / attribution concepts
  'fc-m2-copyright': ref('F1'),
  'fc-m2-implied-copyright-licence': ref('F1'),
  'fc-m2-moral-rights': ref('F2'),
  'fc-m2-right-of-attribution': ref('F2'),

  // M3
  'fc-m3-client-architect-agreement': ref('Front page'),
  'fc-m3-written-agreement': ref('H1'),
  'fc-m3-fitness-for-purpose': ref('A2'),

  // M4
  'fc-m4-budget-estimate': ref('A3'),
  'fc-m4-project-budget-management': ref('A3'),
  'fc-m4-concept-design': ref('Schedule A'),
  'fc-m4-design-development': ref('Schedule A'),
  'fc-m4-variation-to-services': ref('D8'),
  'fc-m4-specialist-consultant': ref('E1'),

  // M8
  'fc-m8-contract-administration-v-supervision': ref('A2'),

  // M11
  'fc-m11-alternative-dispute-resolution': ref('J2'),
  'fc-m11-non-determinative-adr': ref('J2'),
  'fc-m11-fee-dispute-prevention': ref('D8'),
};
