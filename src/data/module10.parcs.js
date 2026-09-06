const SCENARIO_101 = `You are the administrator of an ABIC MW contract for the construction of a micro-brewery that is to be delivered in 3 stages. The contractor requests a re-sequencing of the stages. This re-sequencing would decrease the overall time required for construction without increasing the contract price. The request is accepted and the contract is adjusted to reflect the new date(s) for practical completion.

One of the consequences of the re-sequencing is a requirement for additional structural engineering work and a revised building permit/certificate. The engineering consultants for the project are engaged by the contractor for these additional works. The consultants are very slow in their delivery of the work and the additional work load is slowing them down on work required under their original contract with the owner/client.

The project has not yet commenced on site and you receive a claim for an adjustment to the contract (time and cost) for delays and delay costs due to consultant non-performance, specifically provision of engineering advice in association with the re-sequencing.`;

const SCENARIO_102 = `You have been engaged for full services on a retail development that includes a cinema. An ABIC contract is underway and construction is approximately 30% complete. The contract includes a provisional sum of $30,000 for supply and installation of mechanical exhaust to the back of house areas.

The exhaust design is dependent on the tenancy kitchen layouts and could not be prepared within the original contract documents. The contractor's program shows the date for delivery of design documents is coming up and you have contacted the mechanical engineer to confirm they are on track to deliver the trade package.

Despite your best efforts the date for delivery of the documents passes with no sign of any mechanical trade package documentation. You receive an email from the contractor the following day advising they will be submitting a claim to adjust the contract for delays due to not receiving the documentation and associated costs.

As the project nears practical completion there are high winds on the site for three days including Thursday, Friday and Saturday. The contractor submits a claim for a delay due to disruptive weather that has delayed the installation of the exterior billboard signage. Their request is for three days of time and three days of time delay costs.

The provisional period for delay for weather (Item 20 Schedule 1) shows 45 days. 40 of these days have already been allocated by you. The appropriate rate for adjustment of time costs (item 18 Schedule 1) for this stage of the project is $300 per day.`;

const SCENARIO_103 = `You are the administrator of an ABIC contract for the construction of a large residential project. The project is nearing completion. Whilst attending a site meeting with the client the contractor advises that they expect to reach practical completion by the end of the following week. As you make your site inspection you note that, all being well, practical completion could be realistically achieved within this time line. The client tells you they think completion is “miles off.”

At the end of the following week you receive the contractor’s advice that they believe the project is practically complete and their associated progress claim. You attend site and assess that the project is indeed practically complete and any defects are minor in nature. You contact your client and advise them of your intention to issue your notice and to remind them of their responsibilities regarding insurances. The client is not happy emailing you a list of things that they think are incomplete and/or unacceptable.

The project reaches practical completion (PC) in March and the owners move in over Easter. Mid winter they fly to New Zealand for 6 weeks skiing. Locally it is raining and the building begins to leak. The leaks are first noticed by the cleaning staff who are preparing the house for the owners’ return. The cleaners contact the owners who call you in great distress from the first class lounge telling you to “sort it out!”

You arrange to meet the contractor on site as soon as possible with drawings in hand and organise for the cleaners to let you both into the building. Upon inspection you realise the problem is likely the flashing detail to the windows. To your great dismay you realise that the detail in the documentation does not show a physical flashing but a run of silicon at the window/wall junction which is obviously insufficient.

You instruct the contractor to provide a temporary cover to the windows to stop the immediate problem of water ingress and further instruct them to remove the windows, install a flashing and make good.`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation, answerFormat, fixedOptionOrder }) => ({
  id,
  module: 10,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 10 — supplied by user',
  difficulty: 'exam',
  ...(answerFormat ? { answerFormat } : {}),
  ...(fixedOptionOrder ? { fixedOptionOrder } : {}),
});

const tfSample = ({ id, scenarioText, prompt, correct, explanation }) => sample({
  id,
  scenarioText,
  prompt,
  options: ['TRUE', 'FALSE'],
  correct,
  explanation,
  answerFormat: 'true-false',
  fixedOptionOrder: true,
});

export const module10ParcsQuestions = [
  sample({
    id: 'm10-sc101-1',
    scenarioText: SCENARIO_101,
    prompt: 'When assessing the claim you',
    options: [
      'allow the time but not the associated costs',
      'allow the associated costs but not the time',
      'you allow some of the time and some of the costs',
      'you reject the claim',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the claimed consultant non-performance arises from additional engineering services engaged by the contractor in connection with the contractor-requested resequencing, so the claim is rejected on these facts.',
  }),
  sample({
    id: 'm10-sc101-2',
    scenarioText: SCENARIO_101,
    prompt: 'If the owner does not give the contractor access to the site on time you',
    options: [
      'make a file note and otherwise do nothing until the contractor makes a claim',
      'extend the date for PC by the number of working days site possession was late',
      'do not extend the date for PC as this delay would overlap with the consultant delay',
      'do nothing as the owner can give the contractor access to the site when it suits them',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: late site possession is an owner-risk delay that supports an adjustment to the date for practical completion. The presence of another overlapping delay does not justify simply denying the time adjustment.',
  }),
  sample({
    id: 'm10-sc101-3',
    scenarioText: SCENARIO_101,
    prompt: 'Achieving the revised building permit/construction certificate is the responsibility of the',
    options: ['owner', 'architect', 'contractor', 'engineer'],
    correct: 2,
    explanation: 'Confirmed PARCS answer: in this scenario the revised approval arises from the contractor-requested resequencing and associated contractor-engaged additional design work, so responsibility rests with the contractor.',
  }),
  tfSample({
    id: 'm10-sc101-4',
    scenarioText: SCENARIO_101,
    prompt: 'Typically the regulatory permission to commence construction is provided by the Owner under a Design & Construct Contract',
    correct: 1,
    explanation: 'Confirmed PARCS answer: FALSE.',
  }),
  tfSample({
    id: 'm10-sc101-5',
    scenarioText: SCENARIO_101,
    prompt: 'Typically the regulatory permission to commence construction is provided by the Contractor under a Lump Sum Contract',
    correct: 1,
    explanation: 'Confirmed PARCS answer: FALSE.',
  }),

  sample({
    id: 'm10-sc102-1',
    scenarioText: SCENARIO_102,
    prompt: 'With respect to the delay claim for consultant non-performance you should',
    options: [
      'approve the claim for time and cost',
      'check the critical path and any concurrent delays then assess for time and cost',
      'approve for time and cost and take the time out of the provisional period for delay',
      'approve for time and cost and take the cost out of the provisional sum',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: delay entitlement must be assessed against the critical path, including any concurrent delays, before determining time and cost.',
  }),
  sample({
    id: 'm10-sc102-2',
    scenarioText: SCENARIO_102,
    prompt: 'With respect to the delay claim for disruptive weather you',
    options: [
      'adjust the date for PC by three working days and contract price by $900',
      'adjust the date for PC by two calendar days',
      'reject the claim as the billboard installation will not affect regulatory approval',
      'make no change to the date for practical completion',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the three-day weather event remains within the stated 45-day provisional allowance because only 40 days have previously been allocated, so no adjustment to the date for practical completion is made.',
  }),
  sample({
    id: 'm10-sc102-3',
    scenarioText: SCENARIO_102,
    prompt: 'For their delay claim to be valid the contractor must advise of the delay',
    options: [
      'at any time prior practical completion',
      'at any time prior to final certificate',
      'within a specific time from the start or end of the delay as defined by the contract',
      'at the same time as they make their delay claim',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the contractor must give delay notice within the timeframe prescribed by the contract from the relevant start or end of the delay.',
  }),

  sample({
    id: 'm10-sc103-1',
    scenarioText: SCENARIO_103,
    prompt: "When you receive the client's email and defects list you",
    options: [
      'revisit the site and review your decision',
      'you issue a qualified notice of PC stating the project is PC subject to the defects list',
      'you issue a notice of PC and a progress certificate for the full value of the works',
      'you issue a notice of PC and a defects list',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: where the architect independently determines that practical completion has been achieved and remaining defects are minor, issue the notice of practical completion together with the defects list.',
  }),
  sample({
    id: 'm10-sc103-2',
    scenarioText: SCENARIO_103,
    prompt: 'The contractor',
    options: [
      'must carry out your instruction to remove the windows, install a flashing & make good',
      'is not obliged to remove the windows, install a flashing and make good',
      'is not required to return to site to attend to defects after practical completion',
      'is required to return to site to attend to defects after final certificate',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the inadequate flashing is a design/detailing defect in the architect’s documentation, not a contractor defect. The contractor is therefore not obliged to rectify it as though it were defective workmanship under the contract.',
  }),
  sample({
    id: 'm10-sc103-3',
    scenarioText: SCENARIO_103,
    prompt: 'The liability for the works required to address the leak is with the',
    options: [
      'contractor as they are required to rectify defects',
      'architect and you should call your PI insurer',
      'client as they now have site possession and hence provide the insurance',
      'window supplier as the windows have been supplied incorrectly',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the scenario identifies an inadequate architectural flashing detail, so the architect faces potential design liability and should notify the PI insurer rather than admit liability.',
  }),
  sample({
    id: 'm10-sc103-4',
    scenarioText: SCENARIO_103,
    prompt: 'After practical completion the works and public liability insurances are',
    options: [
      'transferred to the owner from the contractor',
      'provided by the contractor and the owner provides their own insurances from PC',
      'no longer required as the project has reached practical completion',
      'to be maintained by the contractor indefinitely',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: construction-related contract works/public-liability cover continues as required by the contract, while from practical completion the owner should also have appropriate insurance for the ordinary risks of occupation.',
  }),
];
