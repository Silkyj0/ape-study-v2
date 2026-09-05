import { m5Question } from './module05Factory.js';

export const module05Part03 = [
  m5Question({
    id: 'm5-access-01',
    scenarioText: 'The Deemed-to-Satisfy access layout would seriously compromise a project, and the team proposes a Performance Solution that provides an equivalent level of accessible performance.',
    prompt: 'How should the absence of the words “Performance Solution” from the Premises Standards be understood?',
    options: [
      'The Access Code can still be satisfied by another solution that meets its Performance Requirements or provides access not less than the relevant Deemed-to-Satisfy benchmark.',
      'The Premises Standards permit only literal Deemed-to-Satisfy compliance in every circumstance.',
      'A Performance Solution is available only if the client first proves unjustifiable hardship.',
      'Any departure from Deemed-to-Satisfy automatically becomes unlawful discrimination under the DDA.'
    ],
    correct: 0,
    sourceKey: 'dda_performance',
    explanation: 'The Acumen note explains that the Premises Standards allow other solutions even though they do not use the older BCA label “Alternative Solution”. The solution must satisfy the applicable performance requirements or meet the stated equivalence benchmark.'
  }),
  m5Question({
    id: 'm5-access-02',
    scenarioText: 'A client says the building certifier “administers the federal Premises Standards” in exactly the same way the certifier administers state building legislation.',
    prompt: 'Which response best reflects the Acumen note?',
    options: [
      'That is correct because the Premises Standards directly appoint every certifier as a federal enforcement officer.',
      'The certifier’s approval/refusal powers arise under state or territory building legislation; the Premises Standards remain a separate federal instrument even though access provisions are closely aligned.',
      'The certifier has no role in accessibility because only the Australian Human Rights Commission may consider access matters.',
      'The Premises Standards supersede the NCC whenever their wording differs, regardless of the certifier’s local statutory powers.'
    ],
    correct: 1,
    sourceKey: 'dda_certification',
    explanation: 'Acumen stresses that the Premises Standards and NCC are separate instruments. A certifier exercises approval powers under the relevant state or territory building legislation, not because the Premises Standards independently confer certification powers.'
  }),
  m5Question({
    id: 'm5-access-03',
    scenarioText: 'An architect confirms that the required ramps, lifts, paths and accessible sanitary facilities comply with the Access Code and then concludes that no other DDA access issues need to be considered.',
    prompt: 'What is the flaw in that conclusion?',
    options: [
      'The Access Code is concerned only with fire safety and does not address accessibility.',
      'The Access Code applies only after a complaint is made rather than during design.',
      'The Access Code covers specified building elements but not every fitout, service or accessibility issue, so the broader DDA may remain relevant to matters outside its scope.',
      'Every item of furniture must instead be certified directly by the Australian Human Rights Commission.'
    ],
    correct: 2,
    sourceKey: 'dda_existing',
    explanation: 'Acumen identifies fitout fixtures and fittings as examples of matters outside the Access Code. Compliance with covered building elements does not mean every possible discrimination issue has disappeared.'
  }),
  m5Question({
    id: 'm5-access-04',
    scenarioText: 'The owner of an existing building asks the architect to rank which access upgrades are legally required, which can be deferred because of unjustifiable hardship, and how likely the owner is to win a DDA complaint.',
    prompt: 'What should the architect do?',
    options: [
      'Provide the requested legal risk ranking because access design automatically includes legal advice.',
      'Ask the contractor to decide which upgrades satisfy unjustifiable hardship.',
      'Prepare an access action plan and lodge it on the owner’s behalf as a standard architectural service.',
      'Define the architectural access deficiencies and possible design responses, but keep legal-risk and unjustifiable-hardship advice with appropriately qualified legal advisers.'
    ],
    correct: 3,
    sourceKey: 'dda_existing',
    explanation: 'The reading says architects should limit advice to matters within architectural expertise and avoid taking responsibility for legal conclusions about unjustifiable hardship, legal risk or an access action plan.'
  }),
  m5Question({
    id: 'm5-access-05',
    scenarioText: 'A previously untouched older public building is now proposed to receive an extension that constitutes building work.',
    prompt: 'What accessibility consequence should be investigated early?',
    options: [
      'No accessibility requirements can apply because the original building predates the Premises Standards.',
      'The building work may trigger application of the Premises Standards and associated access requirements to the affected existing building context, so the scope should be checked before design is committed.',
      'Only the new furniture within the extension can be regulated because existing building fabric is permanently exempt.',
      'The DDA ceases to apply once the project enters the building-approval process.'
    ],
    correct: 1,
    sourceKey: 'dda_overview',
    explanation: 'The Premises Standards apply to relevant existing buildings when renovation, refurbishment or extension constitutes building work. The implications should therefore be identified early rather than assumed away because of the building’s age.'
  }),
  m5Question({
    id: 'm5-access-06',
    scenarioText: 'A proposed accessibility Performance Solution provides a different route from the Deemed-to-Satisfy provisions but the team has not demonstrated its performance or equivalence.',
    prompt: 'What is missing?',
    options: [
      'A statement that the client prefers the alternative route for aesthetic reasons.',
      'A declaration that all Deemed-to-Satisfy access provisions are optional on difficult sites.',
      'Evidence that the alternative satisfies the applicable Performance Requirements or provides a level of access at least equivalent to the relevant Deemed-to-Satisfy outcome.',
      'Proof that the project would otherwise meet the financial test for unjustifiable hardship.'
    ],
    correct: 2,
    sourceKey: 'dda_performance',
    explanation: 'An alternative method is not accepted merely because it is different. The Acumen note identifies satisfaction of the Performance Requirements or equivalence with the Deemed-to-Satisfy access level as the relevant test.'
  }),
  m5Question({
    id: 'm5-access-07',
    scenarioText: 'An owner argues that a public building constructed in accordance with the accessibility rules that applied 25 years ago can never be the subject of a successful DDA access complaint.',
    prompt: 'Which statement is more accurate?',
    options: [
      'Past compliance converts into a permanent exemption from federal discrimination law.',
      'The DDA applies only to buildings first occupied after the Premises Standards commenced.',
      'A complaint can be made only after the owner undertakes building work that changes the access route.',
      'Past building-code compliance does not remove the DDA’s ongoing non-discrimination obligation, although the Premises Standards may not presently apply if no building work is occurring.'
    ],
    correct: 3,
    sourceKey: 'dda_existing',
    explanation: 'Acumen expressly says the DDA obligation is ongoing and is not removed because the building met earlier standards when constructed or last modified.'
  }),
  m5Question({
    id: 'm5-access-08',
    scenarioText: 'A client assumes that if a DDA complaint about building access succeeds, the usual outcome is simply an award of money and no change to the premises.',
    prompt: 'What does the Acumen overview indicate?',
    options: [
      'For a complaint concerning building design, resolution is more likely to involve agreement or an order to modify the building than compensation alone.',
      'The Federal Court has no power to make any order affecting a building after a complaint.',
      'Successful complaints can only be resolved by revoking the building’s occupation approval.',
      'The only available remedy is a penalty payable by the architect to the building certifier.'
    ],
    correct: 0,
    sourceKey: 'dda_overview',
    explanation: 'The Acumen overview notes that where a successful complaint concerns the design of a building, the likely resolution is an agreement or order for modification rather than compensation being the sole response.'
  }),
];
