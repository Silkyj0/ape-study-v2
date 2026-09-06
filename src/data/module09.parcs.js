const SCENARIO_91 = `You are administering an ABIC SW contract for a new development containing medical suites. The project is financed.

The contractor has issued a progress claim. The claim includes an amount for medical equipment that was to be paid for (at the client’s request) ahead of time by the contractor to secure a discounted price. According to the program the site will not be ready to accept the equipment for another two months.

In the preparation of your certificate, amongst other activates, you visit the site and, in addition, make a special visit to the medical equipment manufacturer’s warehouse. You sight the specified equipment which is ready for collection by the contractor upon full payment of their account.

The manufacturer however has heard rumours that the contractor might be in financial trouble and is concerned about being paid at all. They advise that they will be strictly adhering to their terms and conditions stating that the equipment must be paid for within 14 days otherwise it will be returned to stock and your client’s discounted price lost. Your specification is silent as to payment for offsite materials and/or goods.

The financier’s Quantity Surveyor has rejected the claim by the contractor for the medical equipment and has certified an amount due to the contractor for this claim that is less than your assessment.`;

const SCENARIO_92 = `You are administering an ABIC SW contract for the construction of a family run pastry shop. It is nearing the end of the financial year and during a walk around the site you overhear the owner (your client) saying to the contractor that it would be helpful if they could ‘bump up’ their end of financial year claim for the pastry shop’s tax purposes.

The contractor is happy to claim ‘on account’ as this will assist his cash flow. Later that week you receive the contractor’s claim. When the client realises you have overheard the conversation on site with the contractor they offer to indemnify you.

You issue your progress certificate and the owner insists on paying the contractor more than the amount shown.`;

const SCENARIO_93 = `Your office has been engaged for full services for a cafe fit-out. The project is under construction and you are administering the ABIC-SW contract.

You receive a request for a contract price adjustment from the contractor due to additional work by the joinery subcontractor in connection with the works covered by the joinery provisional sum.

The joinery was initially in the tender documents as a provisional sum. Early on in the tender period your office issued an addenda detailing the joinery and deleting the provisional sum amount.

Within the contract there is a prime cost item with a value of $2000 (ex GST) for supply only of a coffee machine. The selected coffee machine has a value of $2400 (ex GST).

The coffee machine requires power and water supply and a waste connection. The power and water supply are both shown in the contract documents but the waste connection is not. The ex GST cost for this connection is $600 including materials, labour and associated preliminaries.

The % for contractor overhead and profit on variations is 15% (Item 17 Schedule 1). The % for contractor overhead and profit on PC/PS overrun is 10% (Item 19 Schedule 1)`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation, answerFormat, fixedOptionOrder }) => ({
  id,
  module: 9,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 9 — supplied by user',
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

export const module09ParcsQuestions = [
  sample({
    id: 'm9-sc91-1',
    scenarioText: SCENARIO_91,
    prompt: 'When assessing the claim for the medical equipment you',
    options: [
      "certify the claim as this is in the client's best interests",
      'do not certify it as the equipment must be fixed into the works for the claim to be valid',
      'certify it and separately arrange for the owner to pay for the equipment directly',
      'insist on a bank guarantee, insurance and for title to have passed to the contractor',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: where exceptional payment for off-site equipment is contemplated, appropriate protection is required, including security, insurance and title arrangements.',
  }),
  sample({
    id: 'm9-sc91-2',
    scenarioText: SCENARIO_91,
    prompt: "Given the manufacturer's comments you",
    options: [
      'certify the claim for a decreased amount to manage the risk of the contractor going into liquidation',
      "tell your client of the manufacturer's concerns",
      'make a file note but do not advise the owner as it is only a rumour',
      'advise the owner to terminate the contract',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the manufacturer’s concern about the contractor’s financial position is material information that should be communicated to the client, without manipulating the independent valuation or prematurely advising termination.',
  }),
  sample({
    id: 'm9-sc91-3',
    scenarioText: SCENARIO_91,
    prompt: "When the financier's QS's assessment differs from yours",
    options: [
      'the owner must pay the amount on your certificate',
      "the owner must pay the amount on the financier's QS's certificate",
      "you must adjust your certificate to match the QS's as otherwise the owner will be unable to pay",
      "the client should engage the QS to assess all the contractor's progress claims on the project",
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the building-contract payment obligation follows the architect’s properly issued certificate; the financier’s QS assessment is part of a separate funding arrangement.',
  }),
  tfSample({
    id: 'm9-sc91-4',
    scenarioText: SCENARIO_91,
    prompt: "The architect is acting as the client's agent when assessing the progress claim",
    correct: 1,
    explanation: 'Confirmed PARCS answer: FALSE. When assessing, valuing or certifying a progress claim, the architect acts independently rather than as the client’s agent.',
  }),
  tfSample({
    id: 'm9-sc91-5',
    scenarioText: SCENARIO_91,
    prompt: "The architect is acting as the client's agent when inspecting the equipment",
    correct: 1,
    explanation: 'Confirmed PARCS answer: FALSE. In this scenario the equipment inspection is undertaken as part of the progress-claim assessment, so PARCS treats it as part of the architect’s independent assessor/valuer/certifier function.',
  }),

  sample({
    id: 'm9-sc92-1',
    scenarioText: SCENARIO_92,
    prompt: 'When you receive the claim you',
    options: [
      "certify it for the submitted value after you obtain the client's indemnification in writing",
      'certify it for a reduced amount to make a point about who is in charge',
      'return it to the contractor as you cannot process a claim that is inaccurate',
      'make your own independent assessment and valuation and issue a progress certificate',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect must independently assess and value the claim and issue the certificate required by the contract; neither an owner indemnity nor the contractor’s preferred amount determines the certificate.',
  }),
  sample({
    id: 'm9-sc92-2',
    scenarioText: SCENARIO_92,
    prompt: 'To assist the client with their situation you propose to both the owner and contractor that',
    options: [
      'the contractor purchase materials, secures them on site, then issues another progress claim',
      'they change your certificate value, as the parties to a contract can agree to vary the contract',
      'they engage another architect to process the claims hence protecting yourself from liability',
      'the owner pays the contractor a lump sum bonus payment separately to the contract payments',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: purchasing materials and securing them on site can create genuine additional value capable of being assessed in a later progress claim, rather than falsifying or manipulating the certificate.',
  }),
  sample({
    id: 'm9-sc92-3',
    scenarioText: SCENARIO_92,
    prompt: 'After you learn the owner has paid the contractor more than the value of your certificate you',
    options: [
      'revise your certificate to include the amount paid',
      'deduct the additional amount paid from the next progress certificate',
      'instruct the contractor to repay the additional amount',
      'make a file note and remind the client of your responsibilities under the contract',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: do not retrospectively manipulate a properly issued independent certificate; record what occurred and remind the client of the architect’s contractual certification responsibilities.',
  }),
  tfSample({
    id: 'm9-sc92-4',
    scenarioText: SCENARIO_92,
    prompt: 'You are acting as the independent administrator when assessing the progress claim',
    correct: 0,
    explanation: 'Confirmed PARCS answer: TRUE. Assessment and certification of progress claims is an independent contract-administration function.',
  }),
  tfSample({
    id: 'm9-sc92-5',
    scenarioText: SCENARIO_92,
    prompt: 'You are acting as the independent administrator when making your proposal to the client and the contractor',
    correct: 1,
    explanation: 'Confirmed PARCS answer: FALSE. General advice or a practical proposal is not itself the independent assessor/valuer/certifier function.',
  }),

  sample({
    id: 'm9-sc93-1',
    scenarioText: SCENARIO_93,
    prompt: 'With regard to the claim for joinery the contractor is entitled to',
    options: [
      'a contract price adjustment if the cost for the joinery work is more than the provisional sum',
      'a contract price adjustment however you must ask for invoices to substantiate their claim',
      'nothing, the claim is invalid',
      'an adjustment to the contract price and is not required to substantiate their claim',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the provisional sum was deleted by tender addendum once the joinery was detailed, so the contractor cannot later claim an adjustment against a provisional sum that is no longer part of the contract basis.',
  }),
  sample({
    id: 'm9-sc93-2',
    scenarioText: SCENARIO_93,
    prompt: 'If you are concerned that the joiner is not working with the latest drawing issue you',
    options: [
      'contact them asap to confirm which drawing revisions they are working from',
      'issue them with the latest drawing set',
      'check which drawings revisions they have at the next site meeting',
      'contact the contractor and advise them of your concerns',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: communicate through the head contractor rather than directly administering or issuing documents to the contractor’s joinery subcontractor.',
  }),
  sample({
    id: 'm9-sc93-3',
    scenarioText: SCENARIO_93,
    prompt: 'The contract price adjustment for the waste connection is',
    options: [
      '($600 + GST) x 115% = $759',
      '($600 x 115%) + GST = $759',
      '($600 + GST) x 110% = $726',
      '($600 x 115%) = $690',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the undocumented waste connection is a variation, so the $600 ex-GST cost attracts the 15% variation overhead/profit margin, then GST: $600 × 1.15 × 1.10 = $759.',
  }),
  sample({
    id: 'm9-sc93-4',
    scenarioText: SCENARIO_93,
    prompt: 'The contract price adjustment for the coffee machine prime cost is',
    options: [
      '($2400 - $2000) x 110% + GST = $484',
      '($2400 + GST) – ($2000 + GST) = $440',
      '($2400 - $2000) x 110% = $440',
      '($2400 - $2000) x 115% + GST = $506',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the $400 ex-GST prime-cost overrun is increased by the 10% Item 19 PC/PS percentage, then GST is added, producing $484.',
  }),
];
