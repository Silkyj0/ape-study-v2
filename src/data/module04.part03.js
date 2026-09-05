import { m4Question } from './module04Factory.js';

export const module04Part03 = [
  m4Question({
    id: 'm4-contingency-01',
    scenarioText: 'A client asks why a contingency allowance is included when the design team is trying to document the project thoroughly.',
    prompt: 'What is the best explanation?',
    options: [
      'It allows for unknown or unresolved aspects and unforeseen matters that may arise as the design and construction proceed.',
      'It is a reserve intended mainly to fund client-requested upgrades after the contract is signed.',
      'It is an amount the contractor is expected to spend in full before practical completion.',
      'It replaces the need to identify project risks during design.'
    ],
    correct: 0,
    sourceKey: 'contingency_sum',
    explanation: 'The contingency sum is intended to address unknown, unresolved or unforeseen matters. It is not a general allowance for discretionary client changes.'
  }),
  m4Question({
    id: 'm4-contingency-02',
    scenarioText: 'During construction, the owner requests a discretionary upgrade that increases the contract price.',
    prompt: 'How should that cost generally be treated in relation to the contingency sum?',
    options: [
      'Use the contingency first because any variation can be charged against it.',
      'Treat the owner-requested change separately so the contingency remains available for its intended unforeseen matters.',
      'Reduce the architect’s fee by the value of the change to preserve the contingency.',
      'Ignore the cost until final account because contingencies are only reconciled at the end.'
    ],
    correct: 1,
    sourceKey: 'contingency_sum',
    explanation: 'The reading distinguishes owner-instructed changes from the intended use of contingency. Client changes should be treated separately rather than consuming the contingency reserved for unforeseen matters.'
  }),
  m4Question({
    id: 'm4-contingency-03',
    scenarioText: 'A subconsultant includes its own separate contingency allowance within its package and proposes to control expenditure of that amount.',
    prompt: 'What is the preferred approach?',
    options: [
      'Allow each consultant to control its own contingency so decisions can be made quickly.',
      'Delete all contingencies because only the contractor may carry one.',
      'Identify and consolidate consultant contingencies into the overall project or contract contingency and retain overall control of expenditure.',
      'Convert the consultant contingency into a prime cost item regardless of what it relates to.'
    ],
    correct: 2,
    sourceKey: 'contingency_sum',
    explanation: 'The reading discourages separate subconsultant contingencies and recommends that they be identified and, where necessary, incorporated into the total contingency under the architect’s control.'
  }),
  m4Question({
    id: 'm4-contingency-04',
    scenarioText: 'The client wants the contingency reduced to almost nothing before the design is adequately resolved in order to make the project budget look compliant.',
    prompt: 'Which response is most appropriate?',
    options: [
      'Agree because contingency is not part of the real project cost.',
      'Transfer the unresolved amount into the architect’s fee.',
      'Remove the allowance and rely on future variations to restore it if required.',
      'Explain that contingency should reflect the project’s unresolved risk and normally reduces as the design becomes more certain.'
    ],
    correct: 3,
    sourceKey: 'contingency_sum',
    explanation: 'The reading describes contingency as higher when uncertainty is greater and reducing as design resolution improves. Arbitrarily suppressing it understates project risk.'
  }),
  m4Question({
    id: 'm4-pcps-01',
    scenarioText: 'The client has not selected the tapware before tender and wants an allowance included for supply of the future selection.',
    prompt: 'Which allowance most closely fits that situation?',
    options: [
      'A contingency sum for unforeseen construction conditions.',
      'A prime cost item for the supply of a necessary item not yet finally selected.',
      'A provisional sum for the architect’s future design services.',
      'A latent-condition allowance controlled by the contractor.'
    ],
    correct: 1,
    sourceKey: 'prime_cost_provisional',
    explanation: 'A prime cost item is an allowance for the supply of necessary items that have not yet been finally selected, such as taps or door furniture.'
  }),
  m4Question({
    id: 'm4-pcps-02',
    scenarioText: 'Kitchen joinery is required but its extent and detailing cannot be completed before the contract is entered into.',
    prompt: 'Which allowance best matches the reading?',
    options: [
      'A prime cost item because every incomplete item is treated as supply only.',
      'A contingency sum because incomplete documentation is always unforeseen.',
      'A provisional sum for foreseeable necessary work not fully described or detailed at contract commencement.',
      'No allowance should be included because incomplete work cannot form part of a contract price.'
    ],
    correct: 2,
    sourceKey: 'prime_cost_provisional',
    explanation: 'A provisional sum is used for foreseeable necessary work, including materials, where the work is not yet fully described or detailed.'
  }),
  m4Question({
    id: 'm4-pcps-03',
    scenarioText: 'To make the tendered price appear lower, the client asks you to reduce several prime cost and provisional-sum allowances below realistic levels.',
    prompt: 'What risk should you explain?',
    options: [
      'The contractor becomes responsible for absorbing all future increases automatically.',
      'The allowances become fixed prices once the contract is signed.',
      'The architect can later increase the allowances without affecting time or cost.',
      'Unrealistic allowances are likely to create later cost overruns or delays when suitable work or items cannot be obtained within them.'
    ],
    correct: 3,
    sourceKey: 'prime_cost_provisional',
    explanation: 'The reading warns that arbitrarily reducing prime cost items or provisional sums to fit an overall budget can lead to overruns, delays or both.'
  }),
  m4Question({
    id: 'm4-pcps-04',
    scenarioText: 'A project contains many unresolved prime cost items and provisional sums at tender stage.',
    prompt: 'What is the main cost-control consequence?',
    options: [
      'The apparent contract price remains subject to adjustment as those allowances are finalised, so the client should not treat it as a fully resolved final cost.',
      'The contractor must complete all unresolved work for the allowance regardless of actual cost.',
      'The architect may defer all selections until practical completion without affecting the program.',
      'The owner transfers all execution risk for the unresolved items to the architect.'
    ],
    correct: 0,
    sourceKey: 'prime_cost_provisional',
    explanation: 'Over-reliance on these allowances can give an inaccurate impression of the total contract price because the price is adjusted when actual selections and work are finalised.'
  }),
];
