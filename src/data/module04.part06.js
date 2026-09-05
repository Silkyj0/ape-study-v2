import { m4Question } from './module04Factory.js';

export const module04Part06 = [
  m4Question({
    id: 'm4-cons-01',
    scenarioText: 'At proposal stage, the client asks you to keep consultant costs low by deciding later who will be needed.',
    prompt: 'What should the architect do instead?',
    options: [
      'Identify likely specialist consultants, when they are needed, who will engage them, and how responsibilities will be divided before those decisions create gaps in the project team.',
      'Wait until tender so the contractor can identify every specialist consultant required.',
      'Nominate consultants only after the design is fully resolved to avoid influencing the architecture.',
      'Engage every possible consultant immediately regardless of project need.'
    ],
    correct: 0,
    sourceKey: 'consultant_selection',
    explanation: 'The reading says the architect should consider consultant types, timing, engagement, fees and allocation of responsibilities early, often as part of the initial proposal.'
  }),
  m4Question({
    id: 'm4-cons-02',
    scenarioText: 'The architect lacks specialist acoustic expertise, but the client asks the architect to provide that advice without engaging anyone else.',
    prompt: 'What is the most appropriate response?',
    options: [
      'Provide the advice because architects are expected to cover all specialist disciplines.',
      'Recommend a suitably qualified specialist and confirm that recommendation in writing where the architect does not have the requisite competence.',
      'Give informal advice but state verbally that it is not part of the architectural service.',
      'Ask the contractor to provide the design advice after tender.'
    ],
    correct: 1,
    sourceKey: 'consultant_selection',
    explanation: 'Where the architect lacks the requisite knowledge and experience, the reading recommends engaging a suitably qualified specialist and confirming the recommendation in writing.'
  }),
  m4Question({
    id: 'm4-cons-03',
    scenarioText: 'The client refuses to engage a specialist consultant before the planning application because it wants to save fees.',
    prompt: 'What should the architect do?',
    options: [
      'Proceed without comment because consultant timing is solely the client’s risk.',
      'Guarantee that the planning approval will not need amendment later.',
      'Explain and record the risks of delayed specialist input, including redesign, approval amendments and program impacts.',
      'Decline the whole commission automatically.'
    ],
    correct: 2,
    sourceKey: 'consultant_selection',
    explanation: 'The reading warns that delaying specialist advice may cause redesign, amended approvals and longer timeframes; those risks should be specifically communicated if the client declines early engagement.'
  }),
  m4Question({
    id: 'm4-cons-04',
    scenarioText: 'The structural and mechanical consultants each assume the other is responsible for a critical coordination task.',
    prompt: 'What should have been established to reduce this risk?',
    options: [
      'A general statement that all consultants are collectively responsible for every technical issue.',
      'A contractor-led coordination process only after tender.',
      'Separate consultant drawings with no common project brief.',
      'Clear scopes and responsibility boundaries that identify who is responsible for each component and avoid gaps or overlaps.'
    ],
    correct: 3,
    sourceKey: 'consultant_selection',
    explanation: 'The consultant-selection reading emphasises clear allocation of responsibility between the primary and specialist consultants so services do not contain gaps or overlaps.'
  }),
  m4Question({
    id: 'm4-cons-05',
    scenarioText: 'A structural consultant revises its drawings during design development, but the architect assumes no further architectural review is required.',
    prompt: 'What does the consultant-coordination guidance require?',
    options: [
      'The architect should only review consultant drawings at the end of construction documentation.',
      'The architect should review revised consultant documents to maintain coordination and identify clashes, discrepancies or errors promptly.',
      'The consultant’s revision automatically overrides conflicting architectural information.',
      'Only the quantity surveyor needs to review revised consultant drawings.'
    ],
    correct: 1,
    sourceKey: 'consultant_design',
    explanation: 'The reading says document changes must be tracked and revised consultant drawings reviewed to ensure coordination, with discrepancies or clashes raised as soon as practicable.'
  }),
  m4Question({
    id: 'm4-cons-06',
    scenarioText: 'A specialist consultant prepares a cost estimate for its discipline and sends it directly to the client without coordination with the architect.',
    prompt: 'Which process is more consistent with the reading?',
    options: [
      'Specialist consultants should never prepare cost information.',
      'The architect should ignore the specialist estimate and prepare a separate figure from scratch.',
      'The specialist cost information should feed into the architect’s coordinated cost advice, with updates as the design develops.',
      'The client should combine all consultant estimates without architect review.'
    ],
    correct: 2,
    sourceKey: 'consultant_design',
    explanation: 'The reading describes specialist cost estimates being submitted in a form suitable for the architect to incorporate into coordinated cost advice to the client, with regular revision as the design develops.'
  }),
  m4Question({
    id: 'm4-fire-01',
    scenarioText: 'The team needs a consultant to determine the overall strategy for compartmentation, detection, smoke control and other fire-safety measures.',
    prompt: 'Which discipline best fits that high-level role?',
    options: [
      'A fire services contractor responsible only for installation.',
      'A wet-fire services engineer responsible for sprinkler pipe sizing.',
      'An electrical engineer preparing emergency-lighting layouts only.',
      'A fire safety engineer responsible for the building’s overarching fire-safety strategy.'
    ],
    correct: 3,
    sourceKey: 'fire_engineering',
    explanation: 'The reading distinguishes the fire safety engineer as the consultant responsible for the building’s overall fire-safety design and strategic decisions.'
  }),
  m4Question({
    id: 'm4-fire-02',
    scenarioText: 'The fire strategy requires sprinklers and the team now needs detailed design of sprinkler locations, pumps and pipework.',
    prompt: 'Who would usually undertake that detailed implementation design?',
    options: [
      'A fire services engineer acting on the technical system required by the fire-safety strategy.',
      'The fire safety engineer only, because no separate detailed-services role exists.',
      'The architect because sprinkler design is part of architectural documentation.',
      'The planning consultant because sprinklers form part of statutory approval.'
    ],
    correct: 0,
    sourceKey: 'fire_engineering',
    explanation: 'The reading explains that the fire safety engineer determines the strategic need for systems, while the fire services engineer provides the detailed design of those systems.'
  }),
];
