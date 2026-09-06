const SCENARIO_71 = `You have designed and documented a gymnasium building for a secondary school. The project is out to (selected) tender. The tender documents include a monetary allowance for supply only of fixed gymnasium equipment. The prime cost value is based on a quotation received from a well-respected local manufacturer specialising in educational equipment, Kangaroo Kids.

On the way into work you hear a news report of an overnight fire at the Kangaroo Kids factory. Your immediate concern is for the safety of all involved and you are relieved to learn that no one was hurt.

Your thoughts then turn to the implications for the project. The Kangaroo Kids equipment range is unique as are their proprietary fixing details. There is no local alternative and you will have to look offshore for an equivalent supplier. Any change will also involve some redesign as the tender documents currently show fixing details that are specific to the Kangaroo Kids equipment.

Tenders are due to close in two days. Arson investigators are describing the fire as suspicious. Your online newsfeed tells you there will be a long investigation into the fire. You have tried and are unable to contact anyone from Kangaroo Kids.`;

const SCENARIO_72 = `Your office has been engaged to provide full architectural services for a small multi-residential project. On behalf of your client you are preparing a list of tenderers for the selected tender. The client calls you saying they recently met a contractor and wants to include them on the list.

After investigating this prospective tenderer you don’t believe they have the appropriate licence to build commercial work of this scale. You advise your client of this. The client then tells you that the contractor is “in the process” of upgrading the licence and insists you include them on the list as she has been promised “a great price”.

Meanwhile one of the other contractors you are considering for inclusion in the tender list drops by the office to see if you would like to take a sail on his boat over the weekend.

Tenders close and the tenderer your client instructed you to include has the lowest price. Their price, however, is conditional on the substitution of the specified window frames with an alternative system that you have not heard of.

The windows are a substantial component of the overall building cost and during documentation you went to considerable lengths to select the most appropriate system.`;

const SCENARIO_73 = `You are engaged to provide full architectural services for a new kinder room in the Community Child Care facility your niece & nephew attend. The project is funded purely by donation. For this same reason the budget is fixed and cannot be exceeded.

Everyone is delighted with your work to date. The parent-run building committee happily sign off on the tender documents and the pre-tender estimate which is on budget. On their behalf you call for tenders.

Tenders come in and the lowest tender is 20% over the budget. After negotiation with this tenderer you reach a figure that is 7% over budget but cannot find further savings without re-documentation.`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation }) => ({
  id,
  module: 7,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 7 — supplied by user',
  difficulty: 'exam',
});

export const module07ParcsQuestions = [
  sample({
    id: 'm7-sc71-1',
    scenarioText: SCENARIO_71,
    prompt: 'Given the situation you should',
    options: [
      'extend the tender deadline',
      'issue a tender addendum to increase the provisional sum',
      'issue revised fixing details',
      'contact the tenderers and tell them to price the documents as they stand',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the fire creates a potential future supply risk, but the tender basis has not yet been established as unavailable or invalid. Tenderers should continue to price the issued documents as they stand while the client is separately advised of the possible consequences.',
  }),
  sample({
    id: 'm7-sc71-2',
    scenarioText: SCENARIO_71,
    prompt: 'You should contact the client to advise them',
    options: [
      'the tender must be suspended until the results of the arson investigation are known',
      'you will need to extend the tender deadline',
      'of the likely cost and time implications if the KK equipment is no longer available',
      'you must re-run the tender at a later time',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the architect should advise the client of the likely cost and program consequences if the nominated equipment becomes unavailable, without prematurely assuming the tender must be suspended, extended or re-run.',
  }),
  sample({
    id: 'm7-sc71-3',
    scenarioText: SCENARIO_71,
    prompt: 'The school will have a claim against',
    options: [
      'you for negligence',
      'Kangaroo Kids',
      'the tenderers',
      'no one',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: on the facts given, the unforeseen factory fire does not itself establish negligence or contractual liability by the architect, supplier or tenderers.',
  }),
  sample({
    id: 'm7-sc72-1',
    scenarioText: SCENARIO_72,
    prompt: 'When you identify that the lowest tender is non-conforming you',
    options: [
      'ask this tenderer to re-submit a conforming tender',
      'ask this tenderer if they will stand by their price using the specified windows',
      'ask the client if they would like to use the alternate windows',
      'ask the other tenderers to re-submit a price using the alternate windows',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: first clarify whether the lowest tenderer will stand by its submitted price on the specified conforming basis, rather than immediately adopting the substitution or altering the common tender basis.',
  }),
  sample({
    id: 'm7-sc72-2',
    scenarioText: SCENARIO_72,
    prompt: 'After assessing the tenders you recommend that your client',
    options: [
      'contact the second and third lowest tenderers to see if they can bring their price down',
      'engages the lowest tenderer and accepts the window substitution',
      'engages the tenderer with the lowest conforming tender offer',
      'runs the tender again',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the architect should recommend the tenderer with the lowest conforming offer rather than privileging a non-conforming alternative or creating a new post-close competition.',
  }),
  sample({
    id: 'm7-sc72-3',
    scenarioText: SCENARIO_72,
    prompt: 'The client',
    options: [
      'may accept any of the tenders offered',
      'must accept the lowest tender',
      'can only accept a conforming tender',
      'must accept one of the tenders',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the client makes the final decision and is not automatically bound to accept the lowest or a particular tender, subject to the stated tender conditions and the architect’s professional advice.',
  }),
  sample({
    id: 'm7-sc72-4',
    scenarioText: SCENARIO_72,
    prompt: 'In response to the contractors invitation to go sailing you',
    options: [
      'take up the offer but exclude this contractor from the selected tender list',
      'suggest the staff go in your place',
      'agree a sailing trip is a great idea but insist you go on your boat',
      'politely decline the invitation',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect should politely decline hospitality from a prospective tenderer during the selection process to avoid an actual or perceived conflict affecting impartiality.',
  }),
  sample({
    id: 'm7-sc73-1',
    scenarioText: SCENARIO_73,
    prompt: 'As the architect you',
    options: [
      'warrant that the tenders will come in on budget',
      'must re-document at your own cost to bring the project back on budget',
      'have provided your services adequately as the 7% overrun is within acceptable tolerances',
      'are not responsible as the client set the budget',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: where the agreed budget is a fixed maximum and the tendered project exceeds it, the architect may be required to re-document at their own cost to bring the project back within that agreed constraint.',
  }),
  sample({
    id: 'm7-sc73-2',
    scenarioText: SCENARIO_73,
    prompt: 'It is the clients responsibility to',
    options: [
      'work with you to agree a reasonable budget',
      'ensure they can fund the project as documented as they signed off the scope',
      'make allowances for cost overruns',
      'check the pre-tender estimate and confirm it is reasonable',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the client and architect should work together to establish a reasonable project budget; professional cost-management responsibility is not transferred to the client merely because they approve the design.',
  }),
  sample({
    id: 'm7-sc73-3',
    scenarioText: SCENARIO_73,
    prompt: 'If the tender prices are all substantially in excess of the pre-tender estimate you',
    options: [
      'can do nothing as the client set the brief',
      'may be liable to forfeit part or all of your fee',
      'are not responsible as architects do not provide costing advice',
      'advise your client that the result is typical as market fluctuations impact on pricing',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: substantial divergence between the pre-tender estimate and tender prices can expose the architect to fee consequences where the architect has failed to meet the agreed budget/design-cost responsibilities.',
  }),
];
