import { m5Question } from './module05Factory.js';

export const module05Part05 = [
  m5Question({
    id: 'm5-safe-01',
    scenarioText: 'The design team proposes to leave its first formal safety-in-design review until construction documentation is almost complete.',
    prompt: 'When should safe design begin?',
    options: [
      'At concept development, when decisions about purpose, materials, construction, maintenance, operation and end-of-life can still be influenced effectively.',
      'Only after a principal contractor is appointed and controls the construction site.',
      'At tender close, because hazards cannot be understood before a contractor provides a methodology.',
      'After practical completion, when actual maintenance hazards can be observed.'
    ],
    correct: 0,
    sourceKey: 'whs_guide',
    explanation: 'Safe design is intended to integrate controls early. The guide says it begins during concept development and considers the structure across its lifecycle while design decisions remain flexible.'
  }),
  m5Question({
    id: 'm5-safe-02',
    scenarioText: 'A recurring maintenance task creates a serious fall risk. The team can either redesign the plant location to eliminate the need to work at height or retain the design and require workers to use harnesses.',
    prompt: 'Which approach best reflects the hierarchy of control?',
    options: [
      'Prefer PPE because it transfers responsibility to the person performing the maintenance task.',
      'Where reasonably practicable, eliminate the hazard through design before relying on lower-order controls such as administrative procedures or PPE.',
      'Use whichever control costs less without considering the degree of harm.',
      'Defer the decision to the future maintenance contractor because designers do not consider operational risks.'
    ],
    correct: 1,
    sourceKey: 'whs_guide',
    explanation: 'Safe-design risk management prioritises eliminating hazards, then minimising risks through higher-order controls before relying on administrative measures or PPE.'
  }),
  m5Question({
    id: 'm5-safe-03',
    scenarioText: 'The architect becomes aware of a construction hazard that is unusual and specific to the proposed design.',
    prompt: 'Under the model WHS framework described in the readings, what information obligation is particularly relevant?',
    options: [
      'The architect should keep the hazard confidential so the contractor develops its own independent controls.',
      'The client alone prepares the designer’s risk assessment once tendering begins.',
      'The designer provides the person who commissioned the design with a safety report identifying design-specific construction hazards of which the designer is reasonably aware.',
      'The hazard only needs to appear in the defects list issued after practical completion.'
    ],
    correct: 2,
    sourceKey: 'whs_legislation',
    explanation: 'The reading identifies model WHS Regulation 295: a designer provides a safety report to the commissioning person where design-specific hazards may create risks to persons carrying out construction work.'
  }),
  m5Question({
    id: 'm5-safe-04',
    scenarioText: 'A safety-critical residual risk has been controlled as far as reasonably practicable but cannot be fully eliminated through design.',
    prompt: 'What should happen to that information?',
    options: [
      'Delete it from the project records once the design team has selected the preferred control.',
      'Record it only in the architect’s internal QA file because external parties may misunderstand it.',
      'Leave it to the contractor to rediscover the risk during construction planning.',
      'Document and communicate the residual risk and relevant control information to the people who need it later in the structure’s lifecycle.'
    ],
    correct: 3,
    sourceKey: 'whs_guide',
    explanation: 'Information transfer is a core safe-design principle. Hazards, controls and residual risks need effective documentation and communication to relevant clients, designers, contractors, maintainers and others further along the lifecycle.'
  }),
  m5Question({
    id: 'm5-safe-05',
    scenarioText: 'A design workshop lists every conceivable site hazard, including matters the architect cannot influence and hazards already adequately controlled by recognised standards.',
    prompt: 'How does the Acumen guide frame the designer’s risk-management focus?',
    options: [
      'The designer must personally control every hazard on the future construction site regardless of design influence.',
      'Focus the design risk process on hazards within the designer’s influence, inadequately controlled by recognised standards, or where safety can reasonably be improved through design, while consulting other duty holders as appropriate.',
      'Exclude all construction hazards because only permanent-use risks belong in a design risk register.',
      'Consider only hazards that have previously caused a reportable incident on the same site.'
    ],
    correct: 1,
    sourceKey: 'whs_guide',
    explanation: 'The guide says the designer applies the risk-management process to hazards within the designer’s control, those not adequately controlled by recognised standards, or where safety could be improved through design.'
  }),
  m5Question({
    id: 'm5-safe-06',
    scenarioText: 'Roof-mounted equipment is easy to install but would require repeated unsafe access for servicing over the next 30 years.',
    prompt: 'Which lifecycle principle is most relevant?',
    options: [
      'Maintenance safety is outside design responsibility because it occurs after construction.',
      'Only demolition hazards are relevant once construction methodology has been addressed.',
      'Safe design should consider foreseeable construction, use, maintenance, modification and end-of-life risks, so long-term service access should inform the design now.',
      'The equipment location is a facilities-management decision and cannot be influenced during design.'
    ],
    correct: 2,
    sourceKey: 'swa_code',
    explanation: 'Safe design considers the structure across its lifecycle. Maintenance is expressly part of the designer’s consideration because early design decisions can eliminate or minimise downstream risks.'
  }),
  m5Question({
    id: 'm5-safe-07',
    scenarioText: 'A preliminary hazard analysis was completed at concept stage. The project then changes substantially during design development, but the team decides the original risk register does not need review.',
    prompt: 'What is the better approach?',
    options: [
      'Freeze the original register so later design changes cannot create additional administrative work.',
      'Review hazards only if the building certifier requests it.',
      'Wait until tender and let the principal contractor replace the designer’s entire safe-design process.',
      'Continue an iterative cycle of design, consultation and risk review as the design develops and new or changed hazards become apparent.'
    ],
    correct: 3,
    sourceKey: 'whs_guide',
    explanation: 'The safe-design principles describe design development as a circular process of designing out risks, reviewing the design and consulting as the project evolves.'
  }),
  m5Question({
    id: 'm5-safe-08',
    scenarioText: 'A structure will be constructed, and the design contains unusual construction risks. The architect asks whether a simple internal risk register is the only information that should be provided to the commissioning client.',
    prompt: 'Which response best reflects the model-framework guidance?',
    options: [
      'Where the relevant model-regulation duty applies, the designer should provide the commissioning client with the required safety report for design-specific construction hazards; the risk register can support the wider safe-design record.',
      'A risk register is always legally sufficient and a safety report is never required for designers.',
      'Only the principal contractor can prepare or receive safe-design information.',
      'The architect should provide no written safety information until construction starts.'
    ],
    correct: 0,
    sourceKey: 'whs_guide',
    explanation: 'The Acumen guide distinguishes the designer’s safety report obligation for construction hazards under the model framework from broader risk-register documentation used to record lifecycle hazards and controls.'
  }),
];
