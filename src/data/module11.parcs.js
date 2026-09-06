const SCENARIO_111 = `You are the architect for a school recreational facility. The project is under construction with an ABIC SW contract in place. The construction is desperately behind schedule. The adjusted date for practical completion is approaching and works are only 65% complete.

Some months later practical completion is finally achieved. The contractor attends to the majority of the outstanding defects but is proving reluctant to return to site to rectify the few remaining.

The school has been very patient and accommodating however they really want the defects complete as the ad-hoc arrival of tradespeople is disruptive for the students and staff. You have exhausted your requirements as administrator under the contract.`;

const SCENARIO_112 = `You were the architect for a multi-residential project. Two years after practical completion you are contacted by your former client, the building owner, as one of the tenants has reported a foul smell in their apartment.

The owner pays you to inspect the apartment and you discover that the condensate to the air-conditioned in the adjacent apartment has not been plumbed and is discharging into the wall cavity. During construction you inspected some, but not all, of the mechanical plumbing rough-in.

The project had a 12 month defects liability period after which you issued the final certificate. You did not identify this or any similar defects at the time.

The subject party wall must now be partially demolished and rebuilt requiring the tenants to vacate until rectification works are complete.

As you leave the building you notice that stone tiles have been installed into one of the access stairwells. The stairs and landings were originally installed without an applied floor finish but with a pre-cast non-slip nosing which is now covered by the tiles.`;

const SCENARIO_113 = `You are the architect for a discount supermarket facility. The project is in the latter stages of the construction period and you are administering the executed ABIC-SW contract. There is a lot of animosity between the contractor and the owner and despite your best endeavours the relationship between them is deteriorating further. You issue your monthly progress certificate to the owner and the contractor and the contractor then issues the owner with a tax invoice to the value of your certificate.

A fortnight later the contractor contacts you to say they have not received payment. Checking the contract you note that item 4 of Schedule 1 states that payment must be made within 7 calendar days of receipt of certificate and tax invoice. Later that day you receive a copy of a notice (issued under Q11) from the contractor to the owner requiring the owner to pay the invoice or explain why they cannot.

The owner calls you to say they are prepared to pay some of the invoice but not all. A few days later you make your regular site visit to find the site locked up and no one in attendance. You call the contractor who says they have stopped work until they get paid and will be issuing a claim for an adjustment to the contract for a time extension and time extension costs.`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation, answerFormat, fixedOptionOrder }) => ({
  id,
  module: 11,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 11 — supplied by user',
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

export const module11ParcsQuestions = [
  sample({
    id: 'm11-sc111-1',
    scenarioText: SCENARIO_111,
    prompt: 'When the adjusted date for practical completion arrives you',
    options: [
      'deduct liquidated damages (LDs) at the next progress claim',
      'advise the owner and contractor in writing that LDs may now be applied by the owner',
      'issue a certificate deducting LDs',
      'advise that LDs are to be applied and will be deducted from the next progress claim',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: when the adjusted date for practical completion passes without practical completion, the architect advises the owner and contractor in writing that the owner may now apply liquidated damages.',
  }),
  sample({
    id: 'm11-sc111-2',
    scenarioText: SCENARIO_111,
    prompt: 'If the owner advises in writing they wish to apply liquidated damages you',
    options: [
      'immediately deduct liquidated damages and issue a progress certificate',
      'deduct the accumulated liquidated damages from the progress claim at PC',
      'advise the contractor in writing that the owner is applying liquidated damages',
      'advise the owner to deduct the liquidated damages from their next payment',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the architect advises the contractor in writing that the owner is applying liquidated damages; subsequent deductions are then dealt with through the contract certification process.',
  }),
  sample({
    id: 'm11-sc111-3',
    scenarioText: SCENARIO_111,
    prompt: 'With respect to rectifying the defects the school can',
    options: [
      'access the security to have the defects rectified',
      'have the defects rectified then access the security',
      'have the defects rectified and then issue a claim to the architect for the rectification costs',
      'do nothing as the contractor has the right to rectify the defects at any time during the DLP',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: have the defects rectified and then issue a claim to the architect for the rectification costs. This course key is preserved exactly; it should not be generalised as a substitute for following the applicable defect and security procedures in another contract scenario.',
  }),
  tfSample({
    id: 'm11-sc111-4',
    scenarioText: SCENARIO_111,
    prompt: "Liquidated Damages are a reasonable pre-estimate of the owners loss",
    correct: 0,
    explanation: 'Confirmed PARCS answer: TRUE.',
  }),
  tfSample({
    id: 'm11-sc111-5',
    scenarioText: SCENARIO_111,
    prompt: 'Liquidated Damages are a penalty for the contractor being late',
    correct: 1,
    explanation: 'Confirmed PARCS answer: FALSE.',
  }),

  sample({
    id: 'm11-sc112-1',
    scenarioText: SCENARIO_112,
    prompt: 'With respect to the defect the contractor',
    options: [
      'is no longer liable as final certificate has been issued',
      'must return to site and rectify the defect at no cost to the owner',
      'is liable and the owner could pursue them legally for damages',
      'is required to contact the mechanical sub-contractor and have them rectify the defect',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the final certificate does not automatically extinguish all potential liability for a construction defect, and the owner may pursue the contractor legally for damages.',
  }),
  sample({
    id: 'm11-sc112-2',
    scenarioText: SCENARIO_112,
    prompt: 'With respect to the defect as the architect you',
    options: [
      'may be liable for some of the damages that represent the rectification works',
      'are not liable as final certificate has been issued',
      'are not liable as the work is non-compliant, the contractor is at fault',
      'are required to inspect all mechanical rough-in works',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: failure to identify faulty construction can expose the architect to some liability depending on the circumstances, even though the contractor also has responsibility for defective work.',
  }),
  sample({
    id: 'm11-sc112-3',
    scenarioText: SCENARIO_112,
    prompt: 'With respect to the tiling installation',
    options: [
      'the contractor is liable for compliance under their warrantees for the project',
      'the installer of the tiles is liable for any claim that arises from non-compliance of the stairs',
      'if there was a claim you may have some liability',
      'the client is liable as they arranged for the installation of the tiles without your knowledge',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: once the architect becomes aware of a potentially unsafe or non-compliant alteration, failing to respond appropriately may create some exposure if a claim later arises.',
  }),
  sample({
    id: 'm11-sc112-4',
    scenarioText: SCENARIO_112,
    prompt: 'With respect to the tiles you should',
    options: [
      'advise the owner in writing to check that the stair finish and balustrade heights meet the NCC',
      'instruct the tiling contractor to provide written confirmation that the installation meets the NCC',
      'contact the contractor to advise them of the tiling installation',
      'do nothing as you were not engaged to provide advise regarding the tiles',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: advise the owner in writing to have the stair finish and balustrade heights checked for NCC compliance rather than ignoring the observed issue or assuming authority over the later tiling contractor.',
  }),

  sample({
    id: 'm11-sc113-1',
    scenarioText: SCENARIO_113,
    prompt: 'The owner',
    options: [
      'is entitled to pay what they believe is owed if they get advice from an independent QS',
      'is in breach of their responsibilities under the contract',
      'has had insufficient time to respond to the notice hence is indemnified',
      'is entitled to terminate the contract as the contractor has stopped work',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: failing to pay the certified amount within the contractual payment period is a breach of the owner’s obligations under the contract.',
  }),
  sample({
    id: 'm11-sc113-2',
    scenarioText: SCENARIO_113,
    prompt: 'The contractor is entitled to',
    options: [
      'stop work and hence cause a delay to the date for practical completion',
      'suspend work and may issue a claim for time and delay costs due to the suspension',
      'claim interest from the client',
      'repudiate the contract',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the contractor is entitled to interest on an overdue amount. The scenario does not establish that the contractual requirements for a valid suspension have yet been satisfied.',
  }),
  sample({
    id: 'm11-sc113-3',
    scenarioText: SCENARIO_113,
    prompt: 'The architect must',
    options: [
      'issue a notice to both parties regarding the delay',
      'approve the contractor claim for time and delay costs',
      'terminate the contract',
      'advise the client to get advice from a construction lawyer',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: where payment default, suspension and possible termination rights are in dispute, the architect should advise the client to obtain construction-law advice rather than provide legal advice or terminate the contract.',
  }),
];
