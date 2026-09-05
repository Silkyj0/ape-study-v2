import { m5Question } from './module05Factory.js';

export const module05Part06 = [
  m5Question({
    id: 'm5-carbon-01',
    scenarioText: 'A client believes that reducing a building’s greenhouse impact is only about lowering heating, cooling and lighting energy after occupation.',
    prompt: 'Which distinction should the architect explain?',
    options: [
      'Operational impacts arise from energy used during building operation, while embodied impacts include emissions associated with materials, products and construction processes.',
      'Embodied carbon refers only to electricity used by occupants after practical completion.',
      'Operational carbon and embodied carbon are interchangeable terms for the same emissions source.',
      'Embodied carbon is relevant only to temporary buildings because permanent materials do not create emissions.'
    ],
    correct: 0,
    sourceKey: 'embodied_carbon',
    explanation: 'The Acumen embodied-carbon note contrasts operational emissions from heating, cooling, lighting and ventilation with embodied carbon associated with building materials and construction.'
  }),
  m5Question({
    id: 'm5-carbon-02',
    scenarioText: 'A high-performance new building has very low forecast operational energy, and the team therefore proposes to ignore material-related emissions.',
    prompt: 'Why is that approach increasingly unreliable?',
    options: [
      'Material emissions are excluded from all life-cycle approaches once a building meets its operational energy target.',
      'As operational emissions reduce, embodied carbon can form a very substantial proportion of total life-cycle emissions and may exceed half for many new Australian buildings.',
      'Embodied carbon is counted only if the building is demolished within ten years.',
      'Operational efficiency automatically offsets embodied emissions at the date of construction.'
    ],
    correct: 1,
    sourceKey: 'embodied_carbon',
    explanation: 'The Acumen note says embodied carbon is significant and is likely to be responsible for over half of total life-cycle emissions for many new Australian buildings.'
  }),
  m5Question({
    id: 'm5-carbon-03',
    scenarioText: 'The team wants a method that specifically compares the energy embodied in a building with the energy used to operate it over the building’s lifetime.',
    prompt: 'Which method best fits that purpose?',
    options: [
      'A NABERS Water rating.',
      'A planning-scheme sustainability overlay review.',
      'Life Cycle Energy Analysis, which assesses embodied and operational energy across the building lifecycle.',
      'A construction-program critical-path analysis.'
    ],
    correct: 2,
    sourceKey: 'lcea',
    explanation: 'The Acumen summary defines Life Cycle Energy Analysis as a method for assessing both embodied and operational energy over the lifetime of a building.'
  }),
  m5Question({
    id: 'm5-carbon-04',
    scenarioText: 'The architect is considering adding more insulation. It takes energy to manufacture the additional material, but it may significantly reduce heating and cooling energy for decades.',
    prompt: 'What is the most useful life-cycle way to assess the decision?',
    options: [
      'Reject the insulation because any increase in embodied energy makes an energy-saving measure self-defeating.',
      'Ignore the embodied energy because operational performance is the only relevant environmental measure.',
      'Assess only the first-year operational saving because later energy use is too uncertain to matter.',
      'Consider the initial embodied-energy cost against the operational-energy savings over time, including the net life-cycle benefit or energy payback period.'
    ],
    correct: 3,
    sourceKey: 'lcea',
    explanation: 'Life-cycle energy thinking evaluates energy-saving measures in net terms. An initial embodied-energy investment such as insulation can be compared with operational savings accruing over the building’s life.'
  }),
  m5Question({
    id: 'm5-carbon-05',
    scenarioText: 'A residential client says greenhouse emissions can be dealt with later by changing appliances, so early architectural design decisions have little long-term effect.',
    prompt: 'Which response is most consistent with the reading?',
    options: [
      'The statement is correct because building fabric and material decisions cease to matter once construction ends.',
      'Design, construction and initial fit-out decisions can materially affect emissions from material production and supply, decades of operation and eventual end-of-life outcomes.',
      'Only furniture and plug-in appliances are considered in the Acumen lifetime-emissions approach.',
      'The reading treats transport emissions as the architect’s principal building-design responsibility.'
    ],
    correct: 1,
    sourceKey: 'lifetime_ghg',
    explanation: 'The reading stresses that decisions made during design, construction and initial fit-out can have substantial consequences for material-related emissions, operational emissions and end-of-life emissions.'
  }),
  m5Question({
    id: 'm5-carbon-06',
    scenarioText: 'A project team is choosing between materials, equipment and building systems and asks whether environmental energy performance is determined only by the mechanical-services design.',
    prompt: 'What does the Acumen Energy overview indicate?',
    options: [
      'Only mechanical equipment selection can influence operational or embodied energy.',
      'Material selection can influence embodied energy but architectural design cannot affect operational energy.',
      'Building design together with choices of materials, appliances, equipment and technologies can all contribute to reducing operational and embodied energy.',
      'Energy performance is determined solely by the building’s sustainability rating label rather than design decisions.'
    ],
    correct: 2,
    sourceKey: 'energy',
    explanation: 'The Energy overview expressly identifies building design and the selection of materials, appliances, equipment and technologies as contributors to minimising both operational and embodied energy.'
  }),
  m5Question({
    id: 'm5-carbon-07',
    scenarioText: 'Two schemes achieve the same very low annual operational energy target. Scheme A retains and adapts substantial existing structure, while Scheme B replaces it with a materially intensive new structure. The client concludes their climate impact must therefore be identical.',
    prompt: 'What is the key flaw in that conclusion?',
    options: [
      'Operational-energy targets include every embodied emission automatically, so the comparison is already complete.',
      'Only end-of-life emissions distinguish projects once operating energy is equal.',
      'Existing structural material has no embodied history relevant to life-cycle decision-making.',
      'Equal operational performance does not establish equal life-cycle emissions; embodied carbon associated with materials and construction also needs consideration.'
    ],
    correct: 3,
    sourceKey: 'embodied_carbon',
    explanation: 'The embodied-carbon reading warns against focusing only on operational energy. Material and construction emissions form a significant part of whole-life climate impact and can differentiate otherwise similar operating outcomes.'
  }),
  m5Question({
    id: 'm5-carbon-08',
    scenarioText: 'A consultant proposes to use Life Cycle Energy Analysis as if it were a complete assessment of every environmental impact associated with a building.',
    prompt: 'How should its scope be described?',
    options: [
      'LCEA is an energy-focused form of life-cycle assessment; it is useful for embodied and operational energy decisions but is narrower than a full environmental LCA.',
      'LCEA measures only construction cost and has no environmental application.',
      'LCEA considers operational water but deliberately excludes all energy use.',
      'LCEA is a mandatory Australian building rating scheme that replaces NatHERS and NABERS.'
    ],
    correct: 0,
    sourceKey: 'lcea',
    explanation: 'The full life-cycle energy reading describes LCEA as an energy-focused, readily conducted form of LCA. It supports energy-efficiency decisions but does not replace broader environmental assessment across other impact categories.'
  }),
];
