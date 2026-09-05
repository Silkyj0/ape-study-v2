const SCENARIO_41 = `You have been engaged as principal consultant to provide full services for a public aquarium facility. Part of the requirements for the submission for a planning permit is the preparation of a traffic report. On behalf of your client you call for fee proposals, select and arrange the engagement of a traffic engineer. The Client/Engineer Agreement executed between the selected traffic engineer and your client contains a clause that limit’s the traffic engineer’s liability to $50,000.

You prepare and submit the planning permit documentation (development application) and the application is rejected by Council due to non-compliance of the proposal with the local parking requirements. As a result you will need to redesign the project to accommodate a further 30 parking spaces on an already tightly planned site.

You estimate this redesign will require an additional 6 weeks to complete and cost some $20,000 in fees. The client will also suffer a loss from this redesign due to additional financing costs now required to cover the delay.`;

const SCENARIO_42 = `You are the Architect for a milk processing plant. Your client, Latte Pty Ltd, has a policy that all specialist consultants must be engaged by the Architect. You have a Client-Engineer contract in place with a well-known multidisciplinary engineering firm.

You have recently completed the Design Development stage which was signed off by your client. Your engineers have submitted invoices to you for their work on this stage but you have not yet submitted your invoice to Latte. You read in today’s paper that Latte’s Chief Financial Officer has been embezzling from the firm and has caused the firm to go into liquidation`;

const SCENARIO_43 = `You have been commissioned to design a research facility for a private organisation. Funding is tight and it is imperative budget targets are met. To assist in reducing costs you elect to prepare concept drawings without consultant input other than by the QS who prepares a preliminary cost estimate. The QS is engaged by you.

You subsequently present the drawings and cost estimate to your client. Both are accepted and you are instructed to commence developing the design. It is at this time that the greater consultant team is engaged. During the process of design development you receive consultant advice that impacts significantly on your layouts and cost estimates.`;

const SCENARIO_44 = `You have signed an AIA Client Architect Agreement to provide the design services for a new house. One of the features of the site is an underground bunker that extends under the neighbour’s garage. The client provides you with a survey plan that is 3 years old. This plan does not show the bunker as it was only recently discovered. On inspecting the site you also notice there is a large damp depression adjacent to the estimated location of the old bunker.`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation }) => ({
  id,
  module: 4,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 4 — supplied by user',
  difficulty: 'exam',
});

export const module04ParcsQuestions = [
  sample({
    id: 'm4-sc41-1',
    scenarioText: SCENARIO_41,
    prompt: 'You are required to complete the redesign',
    options: [
      'at no cost to the client',
      'and you can then sue the engineer under contract for any loss of fees',
      'and you may be liable for some of the fees associated with the redesign',
      'and are entitled to be paid by client as you have no liability for the advice of the engineer',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the architect may be liable for some redesign fees. The specialist consultant’s separate responsibility does not make the architect’s own principal-consultant, coordination and professional obligations disappear.',
  }),
  sample({
    id: 'm4-sc41-2',
    scenarioText: SCENARIO_41,
    prompt: 'The traffic engineer is liable',
    options: [
      'for for an unlimited amount, to the client, under contract',
      'for a maximum of $50,000',
      'to the client only',
      'to provide competent advice and you can make a claim against them under tort',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect is not a party to the client-engineer contract, so the architect’s potential claim against the engineer is framed in tort rather than under that contract.',
  }),
  sample({
    id: 'm4-sc42-1',
    scenarioText: SCENARIO_42,
    prompt: 'With respect to your unpaid fees',
    options: [
      'you make a claim for fees for all work to date to the liquidator of Latte Pty Ltd',
      'you cannot claim any fees as you have not yet invoiced for them',
      'you cannot claim fees as Latte Pty Ltd is in liquidation',
      'you can do nothing, the fees will be a bad debt',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the architect should lodge a claim with the liquidator for the value of work performed to date rather than treating the debt as automatically unrecoverable.',
  }),
  sample({
    id: 'm4-sc42-2',
    scenarioText: SCENARIO_42,
    prompt: 'You must pay your consultants',
    options: [
      'when you get paid',
      'if you get paid',
      'within the terms of your agreement with them',
      'at the same rate of cents in the dollar that you are paid by the liquidator',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the consultant agreement is a separate contractual relationship. The architect must pay the consultants in accordance with that agreement rather than making payment conditional on recovery from the client.',
  }),
  sample({
    id: 'm4-sc42-3',
    scenarioText: SCENARIO_42,
    prompt: 'The consultants can',
    options: [
      'invoice you for all their work to date and are entitled to be paid',
      'make a claim to the liquidator for all work to date',
      'not invoice you as the contract with Latte Pty Ltd has been terminated',
      'sue Latte Pty Ltd for breach of the Security of Payment Act',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the consultants are engaged by the architect, so they invoice and pursue payment from the architect under their own agreement.',
  }),
  sample({
    id: 'm4-sc43-1',
    scenarioText: SCENARIO_43,
    prompt: 'Which one of these things are you not responsible for?',
    options: [
      'the cost estimate as provided to the client',
      'the coordination of the QS',
      'management of the Cost of Works budget',
      'warranting the project will be on budget',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect manages and communicates cost information but does not warrant or guarantee that the project will ultimately be on budget.',
  }),
  sample({
    id: 'm4-sc43-2',
    scenarioText: SCENARIO_43,
    prompt: 'The client can legally pursue',
    options: [
      'you under contract and the QS in tort',
      'you under tort',
      'you alone as the QS is a sub-consultant',
      'the QS alone as you did not provide the specialist costing advice',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the client has a contractual relationship with the architect, while a potential claim against the architect-engaged QS is framed in tort.',
  }),
  sample({
    id: 'm4-sc43-3',
    scenarioText: SCENARIO_43,
    prompt: 'The increase in budget required due to the recent consultant advice is',
    options: [
      'not your responsibility as you are not a specialist in these areas of design',
      'not your responsibility as it is up to the QS to determine the budget',
      'not uncommon and clients accept that budget increases are part of the process',
      'your responsibility as you are contractually obliged to manage the budget',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: engaging a QS and other consultants does not remove the architect’s responsibility to manage the design against the Cost of Works budget and coordinate relevant advice.',
  }),
  sample({
    id: 'm4-sc44-1',
    scenarioText: SCENARIO_44,
    prompt: 'You should',
    options: [
      'measure the bunker yourself and add it to the survey plan',
      "avoid the need to measure the bunker by locating the house away from it's location",
      'brief the Land Surveyor to measure the bunker',
      'do nothing as the bunker is below ground',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the newly identified bunker should be measured and incorporated into reliable site information by the appropriate land-survey specialist rather than by the architect.',
  }),
  sample({
    id: 'm4-sc44-2',
    scenarioText: SCENARIO_44,
    prompt: 'The client',
    options: [
      'must provide you with an updated and complete survey plan showing the bunker',
      'can choose to provide you with an updated survey',
      'is entitled to assume that you will measure the bunker yourself as it is not specialist work',
      'can measure the bunker themselves and indemnify you against any problems that may arise',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the architect needs current and adequate site information for the services, and the client is responsible for providing the required updated survey information.',
  }),
  sample({
    id: 'm4-sc44-3',
    scenarioText: SCENARIO_44,
    prompt: 'The structures above the bunker on the neighbours property',
    options: [
      'are not your responsibility',
      'are outside the property boundary and do not need to be documented',
      'should be included in the dilapidation survey',
      'are not your responsibility, but the section of the bunker on the project site is',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: adjoining structures potentially affected by the proposed works should be included in the pre-works dilapidation record.',
  }),
  sample({
    id: 'm4-sc44-4',
    scenarioText: SCENARIO_44,
    prompt: 'When co-ordinating the information provided by the Land Surveyor you should not',
    options: [
      'review the title plan and any written notes within the title document',
      'review the services plans available from service providers / council / dial-before-you-dig',
      'cross check critical dimensions',
      'rely solely on the advice of the Land Surveyor as they are an expert',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: specialist expertise does not remove the architect’s coordination role. Relevant title, services and critical dimensions should still be cross-checked rather than relying blindly on one source.',
  }),
  sample({
    id: 'm4-sc44-5',
    scenarioText: SCENARIO_44,
    prompt: 'If you proceed to Town Planning / DA without identifying an easement over the land you',
    options: [
      'will be required to redocument the project at your own cost',
      'will be liable to the client under contract for any loss or dely costs they suffer',
      'may be liable to pay the fees of other consultants to undertake any redesign',
      'all of the above',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: failing to identify a material easement before progressing the design and DA can expose the architect to its own redesign cost, client loss or delay claims and consequential consultant redesign costs.',
  }),
];
