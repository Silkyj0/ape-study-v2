import { m4Question } from './module04Factory.js';

export const module04Part02 = [
  m4Question({
    id: 'm4-budget-01',
    scenarioText: 'A client appoints a quantity surveyor and tells you that cost control is now entirely the QS’s responsibility.',
    prompt: 'Which statement best reflects the architect’s continuing role?',
    options: [
      'The architect still has responsibility for managing the design against the agreed budget and coordinating the cost information, unless the engagement expressly provides otherwise.',
      'The architect has no further cost responsibility once a quantity surveyor is appointed.',
      'The architect is responsible only for architectural appearance and can ignore cost advice from the QS.',
      'The architect becomes responsible for producing the quantity surveyor’s detailed bill of quantities.'
    ],
    correct: 0,
    sourceKey: 'budget_estimates_overview',
    explanation: 'The reading states that using a quantity surveyor does not remove the architect’s responsibility to manage the project budget and design-cost objectives, except where the engagement specifically changes that responsibility.'
  }),
  m4Question({
    id: 'm4-budget-02',
    scenarioText: 'Early in concept design, the client states a maximum construction budget that must not be exceeded.',
    prompt: 'What should the architect do if the emerging design cannot realistically meet that limit?',
    options: [
      'Continue developing the preferred design and wait for tender to confirm whether the budget is exceeded.',
      'Notify the client promptly that the construction-cost budget is not feasible and seek direction before further commitment.',
      'Reduce the quality of unspecified elements without discussing the change with the client.',
      'Remove contingency from the budget to make the forecast appear compliant.'
    ],
    correct: 1,
    sourceKey: 'budget_estimates_overview',
    explanation: 'The architect is expected to design within the agreed cost limit to the appropriate degree of accuracy and to notify the client when maintaining the budget is not feasible.'
  }),
  m4Question({
    id: 'm4-budget-03',
    scenarioText: 'A client assumes its $5 million Cost of Works allowance represents the total amount it needs to finance for the project.',
    prompt: 'What distinction should the architect explain?',
    options: [
      'The Cost of Works includes all financing, consultant and authority costs, while Total Project Cost excludes them.',
      'The two terms are interchangeable once a design contingency is included.',
      'Total Project Cost includes the Cost of Works plus other project costs such as professional fees, authority charges and other client costs.',
      'Total Project Cost is only relevant to government projects and is not useful for private clients.'
    ],
    correct: 2,
    sourceKey: 'project_budget_management',
    explanation: 'The reading distinguishes the Cost of Works from the broader Total Project Cost, which includes additional project costs such as professional fees, authority charges and other client expenditure.'
  }),
  m4Question({
    id: 'm4-budget-04',
    scenarioText: 'A client asks for a highly accurate pre-tender estimate on a complex project, but the architectural documentation is still incomplete and several major systems are undefined.',
    prompt: 'What is the most appropriate advice?',
    options: [
      'Provide a precise estimate anyway because the architect is required to guarantee the final construction cost.',
      'Use a simple square-metre rate but present it as a detailed pre-tender estimate.',
      'Ask the contractor for an informal price and treat it as the project budget.',
      'Explain the limitations of the available information and engage appropriate specialist cost expertise for the level of accuracy required.'
    ],
    correct: 3,
    sourceKey: 'budget_estimates_overview',
    explanation: 'Where the required accuracy or complexity exceeds the skill expected of a reasonably competent architect, specialist estimating expertise should be used. The limitations of the information must also be explained.'
  }),
  m4Question({
    id: 'm4-budget-05',
    scenarioText: 'A concept-stage cost estimate uses a published square-metre rate from a similar building type.',
    prompt: 'What is the most important qualification when presenting that estimate?',
    options: [
      'Published rates are sufficiently accurate to be presented without qualification at concept stage.',
      'Explain that square-metre rates are preliminary and may not capture project-specific factors, inclusions or exclusions.',
      'Convert the estimate into a guaranteed maximum price before giving it to the client.',
      'Exclude all contingencies so the estimate reflects only known design information.'
    ],
    correct: 1,
    sourceKey: 'budget_estimates_overview',
    explanation: 'Cost-per-square-metre rates are useful for initial estimates but can be inaccurate because they may not reflect many project-specific factors. The advice should be appropriately qualified.'
  }),
  m4Question({
    id: 'm4-budget-06',
    scenarioText: 'A quantity surveyor issues a revised estimate showing the developing design is now materially above the approved budget.',
    prompt: 'What should happen next?',
    options: [
      'Keep the estimate internal until the next formal design stage is complete.',
      'Continue documenting because cost control becomes the contractor’s responsibility once the design is developed.',
      'Inform the client of the changed cost outcome and obtain instructions before proceeding with decisions that commit the project further.',
      'Automatically remove scope equal to the cost overrun without seeking client approval.'
    ],
    correct: 2,
    sourceKey: 'budget_estimates_overview',
    explanation: 'The reading says cost information should be submitted to the client and variations to project-cost outcomes reported as they occur. Client instructions should be obtained before proceeding with material design or variation decisions.'
  }),
  m4Question({
    id: 'm4-budget-07',
    scenarioText: 'A cost estimate prepared by the consultant team later proves to contain a material error.',
    prompt: 'What is the architect’s appropriate response?',
    options: [
      'Say nothing because the error was made by a consultant rather than the architect.',
      'Correct the estimate internally but wait until tender before telling the client.',
      'Ask the quantity surveyor to absorb the difference in its fee.',
      'Inform the client of the budget variation or error and explain the implications for the project.'
    ],
    correct: 3,
    sourceKey: 'budget_estimates_overview',
    explanation: 'The architect is obliged to inform the client of budget variations, including errors made by the architect or a consultant.'
  }),
  m4Question({
    id: 'm4-budget-08',
    scenarioText: 'The project is at an early stage and the client asks whether cost planning should wait until the design is largely resolved.',
    prompt: 'Which approach is most consistent with the readings?',
    options: [
      'Establish a realistic target cost early and integrate cost planning into the design process as the project develops.',
      'Delay cost planning until construction documentation so design creativity is not constrained.',
      'Use cost control only after tender because earlier figures are necessarily meaningless.',
      'Treat cost planning as a separate commercial exercise that should not influence architectural decisions.'
    ],
    correct: 0,
    sourceKey: 'project_budget_management',
    explanation: 'The reading describes cost planning and cost control as a proactive process that should be integrated with the design, with a target cost established at the outset.'
  }),
];
