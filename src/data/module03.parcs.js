const SCENARIO_31 = `You are a recently registered Architect with a young practice that is rapidly attracting good media and interesting clients. Part of your studio’s ethic is to provide services at a reduced fee to victims of natural disasters. A recent bushfire has bought a number of these clients to your door. With your fellow directors and staff you agree you will have the cash flow and resources to take on five of these projects. You sign AIA client / architect agreements with the selected five clients for full services. Three months later your flat-pac micro-house prototype is picked up by a large Japanese construction company Chiisai and they have request that you and your team be sequestered at their Osaka plant to work with the manufacturing team for a six week concentrated buildability workshop.`;

const SCENARIO_32 = `A former residential client of yours has been placed in charge of engaging an architect for the construction of her legal firm’s new offices and associated high end apartments. She gives you a call and after taking a general brief you discuss a fee for full services. You follow up with an email confirming your conversation and attach a letter setting out your fees, terms and conditions and a copy of the AIA Client Architect Agreement.

A few days later you receive a call from her saying the proposal generally looks good but the firm would like to make some changes to the agreement. She emails the new version over and notes that, as there is a partnership meeting early next week, she would really like to get it signed as soon as possible. You receive a hard copy original by express mail the following day.

You take the agreement home and read it over. You note that it contains statements like “the architect warrants that all work will be of the highest quality...” and “the architect indemnifies the client and their employees against any loss or damage intentional or otherwise except where not a direct or indirect consequence of the actions of the architect”. You also note a revision to your proposed fee structure. Under the revision you have been offered one of the apartments in place of one third of your fee. When you do the maths you will be about $100K better off accepting this option even if the real estate market remains flat. Looking at the office accounts you have sufficient cash flow to allow taking up this option. You are very keen to sign an agreement as this work is an example of the direction in which you wish to grow your office.`;

const SCENARIO_33 = `Having recently successfully completed the APE you are inspired to start your own practice. You organise your PI insurance and pay your registration fees and are now legally an Architect. Friends of yours are delighted you have ‘made the jump’ and send prospective clients in your direction. You have done some calculations and set up a fee scale for your new venture. The fee scale is in line with market value for Architects with your level of experience. Several potential clients reject your fee proposals on the basis that your fees are too high.`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation }) => ({
  id,
  module: 3,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 3 — supplied by user',
  difficulty: 'exam',
});

export const module03ParcsQuestions = [
  sample({
    id: 'm3-sc31-1',
    scenarioText: SCENARIO_31,
    prompt: 'You contact Chiisai and advise that you',
    options: [
      'are unable to attend the workshop as you have contractual commitments with others',
      'intend to leave for the workshop immediately',
      'will send representatives to the workshop as you must remain to supervise the office',
      'can attend the workshop but would like to negotiate the timing',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the new opportunity can be pursued, but its timing should be negotiated so the practice continues to meet its existing contractual commitments.',
  }),
  sample({
    id: 'm3-sc31-2',
    scenarioText: SCENARIO_31,
    prompt: 'The clients with whom you have signed an agreement',
    options: [
      'can have their projects delayed as the contract has provision for program changes',
      'will accept their projects may go on hold as they are paying reduced fees',
      'are entitled to expect their project timelines will not be altered',
      'have no rights under the contract to do with the timing of their projects',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: reduced-fee clients retain the contractual service and program expectations agreed with the architect; the practice cannot simply put them on hold for a new opportunity.',
  }),
  sample({
    id: 'm3-sc31-3',
    scenarioText: SCENARIO_31,
    prompt: 'When staffing the office you should',
    options: [
      'require your staff to work overtime to accommodate the additional workload',
      "require your staff to work for free on the bush fire victims' projects",
      'engage additional full time staff to manage the additional workload',
      'engage contract staff to manage the additional workload',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: temporary contract staff are the proportionate response to a defined temporary increase in workload rather than imposing unpaid or compulsory overtime or creating permanent staffing commitments unnecessarily.',
  }),
  sample({
    id: 'm3-sc31-4',
    scenarioText: SCENARIO_31,
    prompt: 'When undertaking work for no fee (pro-bono) you are',
    options: [
      'less liable as you are not being paid',
      'more liable as you have the community good to consider',
      'as liable as you would be if you were being paid a fee',
      'not under any contractual obligations as with no fee there is no contract',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: providing services pro-bono does not reduce the professional standard of care or liability merely because no fee is charged.',
  }),

  sample({
    id: 'm3-sc32-1',
    scenarioText: SCENARIO_32,
    prompt: 'Given the client wants the contract signed quickly you',
    options: [
      'sign the agreement and return it',
      'ask that the warrantee clauses be removed then sign and return it',
      'ask that the apartment offer be removed and then sign and return it',
      'negotiate an amended version of the contract that you are prepared to sign',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: urgency does not justify accepting unacceptable risk terms; negotiate an agreement whose obligations you are prepared to accept.',
  }),
  sample({
    id: 'm3-sc32-2',
    scenarioText: SCENARIO_32,
    prompt: 'When a non standard client-architect agreement is proposed the architect should',
    options: [
      'contact their PI insurer and have them review the contract wording',
      'contact their accountant and have them review the contract wording',
      'reject the contract outright stating the AIA Client-Architect agreement must be used',
      'accept the terms as any negotiation may cause the project to fall through',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: unfamiliar or client-generated risk terms should be reviewed with the architect’s PI insurer before they are accepted.',
  }),
  sample({
    id: 'm3-sc32-3',
    scenarioText: SCENARIO_32,
    prompt: 'The offer of an apartment in place of fees will',
    options: [
      'not be acceptable as this constitutes a gift',
      "be legally acceptable providing you declare it's value as business income",
      'void the contract as fees must be in legal currency',
      'be acceptable if it is transferred outside of the fee agreement',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: non-cash remuneration can be accepted, but its value remains business income and must be treated accordingly.',
  }),
  sample({
    id: 'm3-sc32-4',
    scenarioText: SCENARIO_32,
    prompt: 'Signing this agreement creates a conflict of interest with',
    options: ['no one', 'the client', 'the contractor', 'the owners of the other apartments'],
    correct: 2,
    explanation: 'Confirmed PARCS answer: taking an apartment as part of the architect’s fee gives the architect a direct proprietary/financial interest in the development, creating a conflict with the contractor while the architect performs professional and contract-administration functions affecting the works.',
  }),

  sample({
    id: 'm3-sc33-1',
    scenarioText: SCENARIO_33,
    prompt: 'You should revise your fee offers by',
    options: [
      'reducing fees initially and then later increase them once the client is engaged',
      'negotiating with your potential clients to reduce the scope of services for a reduced fee',
      'drop your fees substantially as without doing so you will not attract clients',
      'no amount as offering work at a reduced fee is damaging to the industry',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: if a lower fee is required, negotiate a corresponding reduction or change in scope rather than simply discounting the same service.',
  }),
  sample({
    id: 'm3-sc33-2',
    scenarioText: SCENARIO_33,
    prompt: 'Under the AIA Client-Architect Agreement a percentage fee is',
    options: [
      'based on the Contract Price including GST',
      'based on the Cost of Works excluding GST',
      'based on the Total Project Cost',
      'an unethical way to charge fees',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the percentage fee is based on the Cost of Works excluding GST under the course agreement framing.',
  }),
  sample({
    id: 'm3-sc33-3',
    scenarioText: SCENARIO_33,
    prompt: 'An architect should',
    options: [
      'have issued a fee proposal before commencing work on a commission',
      'have a signed fee agreement before commencing work on a commission',
      'have a verbal agreement to the provision of fees before commencing work',
      'have a letter from the client to proceed with the project regardless of a fee agreement',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: establish and sign the fee agreement before commencing the commission rather than relying on an unsigned proposal or informal understanding.',
  }),
  sample({
    id: 'm3-sc33-4',
    scenarioText: SCENARIO_33,
    prompt: 'Which equation is the correct one to calculate the salaries multiplier for charge out rates',
    options: [
      'Expenses / Technical Salaries = Multiplier',
      'Expenses / Profit = Multiplier',
      '(Expenses + Profit) / Technical Salaries = Multiplier',
      'Income / Profit = Multiplier',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the salaries multiplier is calculated as (Expenses + Profit) divided by Technical Salaries.',
  }),
];
