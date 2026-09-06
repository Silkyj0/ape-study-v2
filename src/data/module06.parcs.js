const SCENARIO_61 = `You are the architect engaged for full services for a bar/restaurant fit-out on the top storey of a city building. The project has just commenced construction and you are attending the second site meeting.

During the walk around you and your client realise (now that the scaffold and hoarding has been removed from the building opposite), that the introduction of a mezzanine level would achieve a fantastic view of the water with the added bonus of increasing the floor area for the restaurant.

The client is very excited and instructs you to proceed with the additional works immediately saying the increase in revenue in the first year alone would pay for the cost to install the mezzanine twice over.

You are aware that the existing escape stairs in the building cannot be widened.`;

const SCENARIO_62 = `You have been engaged to provide architectural services for a new school of design for a prestigious university. You are engaged by the client to provide design and documentation but it is agreed that the tender will be held based on documents that are 70% complete.

Three design and construct contractors tender on the project and provide offers that include the completion of the design and documentation and the construction of the building. The successful tenderer is engaged by the client. You and the consultant team are novated to this contractor.

Within the atrium of the project you have specified a panelised balustrade. Whilst the project is under construction the contractor's design manager comes to you with an alternative panel material they intend to substitute into the balustrade.

At the time you were making the material selection you researched this product and found that, although it would be a suitable material to use on the external facade, it would not meet the NCC if installed in an atrium.`;

const SCENARIO_63 = `You have been engaged to provide full architectural services including contract administration for a holiday house on the coast. The existing building into which you are designing the dwelling is a heritage listed fishermen's shelter.

As part of the Cultural Management Plan for the project the sand floor of the shelter must be excavated to a depth of 700mm and sieved to collect any remnant historical fishing implements and other culturally significant items.

The client, a coastal history enthusiast, is keen to be involved in the excavation and recovery of any historical artefacts which they intend to donate to the local maritime museum. It is agreed that the excavation should be undertaken first and under a separate contact to the construction of the dwelling.`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation }) => ({
  id,
  module: 6,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 6 — supplied by user',
  difficulty: 'exam',
});

export const module06ParcsQuestions = [
  sample({
    id: 'm6-sc61-1',
    scenarioText: SCENARIO_61,
    prompt: "In response to your client's instruction you",
    options: [
      'advise that the design cannot be changed as construction has commenced',
      'instruct the contractor to begin work on the mezzanine immediately to avoid any delay',
      'advise your client that the building permit/certificate will require amendment with the change',
      'independently assess the merits of including the mezzanine in the design before agreeing to it',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the proposed mezzanine is a material change to the approved design, so the client must be advised that the building approval/permit will require amendment rather than instructing immediate construction.',
  }),
  sample({
    id: 'm6-sc61-2',
    scenarioText: SCENARIO_61,
    prompt: 'To ensure the project meets the requirements of the NCC you',
    options: [
      "reject the client's instruction as adding the mezzanine will render the project non-compliant",
      'recommend the engagement of a fire engineer to provide a performance solution',
      'convince the building surveyor/certifier that the additional occupants will not be a problem',
      "accept the client's instruction to include the mezzanine as long as they indemnify you",
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: where the Deemed-to-Satisfy solution is constrained, a suitably qualified fire engineer should be engaged to investigate and prepare a Performance Solution.',
  }),
  sample({
    id: 'm6-sc61-3',
    scenarioText: SCENARIO_61,
    prompt: 'If the project is later found to be non-compliant with the NCC you will',
    options: [
      'not be liable as compliance is the building surveyor/certifiers responsibility',
      'not be liable as you were operating as the agent of the client when instructing the change',
      "not be liable as compliance with the NCC is the contractor's responsibility",
      'be liable for an unlimited amount to third parties who suffer loss due to the non-compliance',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect cannot avoid its own professional liability for non-compliant design by shifting responsibility entirely to the certifier, contractor or client-agency role.',
  }),
  sample({
    id: 'm6-sc61-4',
    scenarioText: SCENARIO_61,
    prompt: 'Which of the following is not an NCC assessment method',
    options: [
      'verification methods',
      'performance analysis',
      'expert judgement',
      'evidence of suitability',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the NCC Assessment Methods include Evidence of Suitability, Verification Methods, Comparison with the Deemed-to-Satisfy Provisions and Expert Judgement; “performance analysis” is not one of the named methods.',
  }),
  sample({
    id: 'm6-sc61-5',
    scenarioText: SCENARIO_61,
    prompt: 'The performance requirements for a performance solution (fire) for this project would be found in',
    options: [
      'NCC Volume 1',
      'NCC Volume 2',
      'NCC Volume 3',
      'NCC Volume 4',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the restaurant is a Class 2–9 building type, so its building Performance Requirements are found in NCC Volume One.',
  }),
  sample({
    id: 'm6-sc62-1',
    scenarioText: SCENARIO_62,
    prompt: 'After novation you submit your invoices and are paid by',
    options: [
      'the project manager',
      'the construction manager',
      'the contractor',
      'the client',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: after novation the contractor becomes the incoming contractual party to whom the architect provides services and from whom post-novation fees are paid.',
  }),
  sample({
    id: 'm6-sc62-2',
    scenarioText: SCENARIO_62,
    prompt: 'When the design manager comes to you with the proposed panel substitution you should',
    options: [
      'do nothing as being involved increases your exposure to liability',
      'advise the contractor in writing that the panel is unacceptable',
      'tell the contractor the panel is acceptable if it meets the design intent',
      'contact the client to confirm they agree with the substitution',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the architect already knows the proposed use is non-compliant, so the post-novation advice should be given to the contractor in writing rather than accepted or referred directly to the former client.',
  }),
  sample({
    id: 'm6-sc62-3',
    scenarioText: SCENARIO_62,
    prompt: 'If the client contacts you after you have been novated you',
    options: [
      'can answer any of their questions as you have a duty to keep them informed',
      'should change the office phone number and block their calls on your mobile',
      'should not discuss anything whilst at work but meet them socially to talk off the record',
      'should ask them to contact the contractor regarding anything they are concerned with',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: after novation the architect is contracted to the contractor rather than the original principal, so project concerns and instructions should be directed through the contractor.',
  }),
  sample({
    id: 'm6-sc63-1',
    scenarioText: SCENARIO_63,
    prompt: 'The artifact recovery would be best procured under a',
    options: [
      'design and construct contract',
      'traditional fixed price lump sum contract',
      'cost plus contract',
      'alliance contract',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the artefact-recovery scope is inherently uncertain before excavation, making cost-plus the best fit among the offered procurement options for that separate package.',
  }),
  sample({
    id: 'm6-sc63-2',
    scenarioText: SCENARIO_63,
    prompt: 'The dwelling would be best procured under a',
    options: [
      'design and construct contract',
      'public private partnership',
      'cost plus contract',
      'traditional fixed price lump sum contract',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: once the uncertain excavation is separated, the dwelling is suited to traditional procurement with completed architectural documentation, competitive pricing and architect contract administration.',
  }),
  sample({
    id: 'm6-sc63-3',
    scenarioText: SCENARIO_63,
    prompt: 'Which contract will you recommend your client uses for the construction of the dwelling?',
    options: [
      'Australian Standard AS2124',
      'AIA-MBA ABIC SW Housing',
      'MBA lump sum contract',
      'HIA lump sum contract',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: ABIC SW Housing is the architect-administered domestic building contract suited to the detached dwelling scenario among the offered choices.',
  }),
];
