// Stable-ID precision refinements identified during the ABIC + CAA2024 integration QA pass.
// These do not change confirmed PARCS wording/keys and do not replace the original source provenance.

export const CONTRACT_INTEGRATION_QA_OVERRIDES = {
  'm1-limitation-g2': {
    prompt: 'Under CAA2024 G2, what does the liability provision generally use as the Architect’s maximum aggregate liability to the Client, subject to the clause qualifications and applicable law?',
    options: [
      'An arbitrary fixed dollar figure unrelated to insurance',
      'The net amount actually recovered under the Architect’s professional indemnity insurance policy',
      'Double the Total Project Cost',
      'CAA2024 contains no contractual limit of liability',
    ],
    correct: 1,
    explanation: 'CAA2024 G2 states, to the maximum extent permitted by law and subject to its further subclauses, that the Architect’s maximum aggregate liability is limited to the net amount actually recovered under the Architect’s professional indemnity insurance policy. G2 also excludes specified indirect, consequential and special losses and contains a separate Australian Consumer Law fallback.',
  },
  'm1-caa-costofworks': {
    prompt: "Under CAA2024, what is the key distinction between the defined terms 'Cost of Works' and 'Total Project Cost'?",
    options: [
      'They are identical defined terms used interchangeably',
      'Cost of Works is the defined final cost of work designed, specified or scheduled by the Architect (including coordinated Specialist Consultant work), while Total Project Cost adds the Client’s other project costs; the front-page amount is a forecast of Cost of Works, not the definition itself',
      'Total Project Cost is always lower than Cost of Works',
      'Cost of Works includes GST while Total Project Cost does not',
    ],
    correct: 1,
    explanation: 'Section M defines Cost of Works as the final cost of the relevant designed/specified/scheduled work, subject to the stated inclusions and exclusions. Total Project Cost is broader: it includes Cost of Works plus the Client’s other project costs such as contingencies, professional fees, authority/legal costs, finance/marketing and specified other expenditure. The signing page records an initial forecast of Cost of Works that A3 permits to be revised.',
  },
  'm1-caa-scheduleA': {
    explanation: 'Schedule A states that only Services marked “Included” form part of the Services. If a line item is not marked, or if there is any ambiguity, that item is treated as excluded.',
  },
  'm1-caa-copyright': {
    explanation: 'CAA2024 F1 states that the Architect retains copyright in the Services and The Design. The Client receives an express non-exclusive, non-transferable, revocable licence for the Project on the Site subject to the clause conditions; on completion of all Services and full payment of all invoices the Architect is entitled to submit, that licence becomes irrevocable.',
  },
  'm1-caa-termination': {
    explanation: 'CAA2024 K2 permits either party to terminate without reason by giving the other party no less than 30 business days’ notice, after which K4 applies. The Acumen CAA2024 reading identifies the extension of the no-reason termination right to both parties as a change from earlier editions.',
  },
};
