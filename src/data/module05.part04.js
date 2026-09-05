import { m5Question } from './module05Factory.js';

export const module05Part04 = [
  m5Question({
    id: 'm5-whs-01',
    scenarioText: 'A project team wants Safe Work Australia to determine whether a specific Queensland workplace design complies with WHS law and to issue an enforcement direction.',
    prompt: 'What should the architect explain about Safe Work Australia?',
    options: [
      'Safe Work Australia is a national policy body; WHS laws are regulated and enforced by the Commonwealth, states and territories through their relevant regulators.',
      'Safe Work Australia is the sole national inspectorate responsible for enforcing every state and territory WHS offence.',
      'Safe Work Australia regulates only architects and leaves construction safety to local councils.',
      'Safe Work Australia has no role in model WHS laws or national policy development.'
    ],
    correct: 0,
    sourceKey: 'swa_code',
    explanation: 'The Model Code states that Safe Work Australia is a national policy body, not the WHS regulator. The Commonwealth, states and territories regulate and enforce their own WHS laws.'
  }),
  m5Question({
    id: 'm5-whs-02',
    scenarioText: 'An interstate practice uses one generic WHS procedure and assumes the model WHS Act itself operates identically as legislation in every Australian jurisdiction.',
    prompt: 'What is the better approach?',
    options: [
      'The model Act automatically has force everywhere without local legislation, so no jurisdiction check is required.',
      'Check the WHS/OHS legislation and adopted codes in the project jurisdiction; the model framework is widely implemented but Victoria retains its own OHS system and local amendments/adoptions matter.',
      'Apply Victoria’s OHS legislation nationally because it predates the model laws.',
      'Use only Commonwealth WHS legislation because architects provide professional rather than construction services.'
    ],
    correct: 1,
    sourceKey: 'whs_legislation',
    explanation: 'The reading says architects must understand the legislation in the jurisdiction where they operate. The model WHS laws are implemented broadly, while Victoria remains under its own OHS legislation and local variations/adoptions matter.'
  }),
  m5Question({
    id: 'm5-whs-03',
    scenarioText: 'A designer says an approved Code of Practice is either optional and irrelevant, or else it has exactly the same status as an Act of Parliament.',
    prompt: 'Which statement is more accurate?',
    options: [
      'A code is only marketing material and cannot be considered in a WHS proceeding.',
      'A code is always mandatory word-for-word and no equivalent alternative method can ever be used.',
      'An approved code provides practical guidance and can be evidentiary in court; another method may be used if it achieves an equivalent or higher WHS standard.',
      'A code automatically overrides the WHS Act whenever its recommendations are more detailed.'
    ],
    correct: 2,
    sourceKey: 'swa_code',
    explanation: 'The Model Code explains that approved codes guide compliance and are admissible as evidence. Compliance may be achieved by another method that provides an equivalent or higher standard of health and safety.'
  }),
  m5Question({
    id: 'm5-whs-04',
    scenarioText: 'The architect and contractor both influence a safety-critical design decision. Their contract says the contractor accepts “all WHS responsibility”, so the architect assumes its statutory design duty disappears.',
    prompt: 'Which principle applies?',
    options: [
      'Only the party named first in the construction contract can have a WHS duty for the matter.',
      'A commercial contract can transfer every statutory WHS duty if both parties sign it.',
      'The party with the larger insurance policy becomes the sole duty holder.',
      'WHS duties can be concurrent and overlapping; each duty holder retains responsibility to the extent of its capacity to influence or control the matter.'
    ],
    correct: 3,
    sourceKey: 'swa_code',
    explanation: 'The Model Code reflects the WHS Act principle that more than one person may hold a duty for the same matter. An agreement does not remove a duty holder’s responsibility where it has capacity to influence or control the matter.'
  }),
  m5Question({
    id: 'm5-whs-05',
    scenarioText: 'An architect designing a detached house says safe-design duties can never be relevant because the finished residence is not ordinarily a workplace.',
    prompt: 'What qualification does the Model Code make?',
    options: [
      'Domestic residences are excluded even while workers are constructing or maintaining them.',
      'Designer duties can still be relevant because the residence may be a workplace during lifecycle activities such as construction, maintenance and demolition.',
      'Residential design is covered only where the construction cost exceeds a national threshold.',
      'The designer has duties only if the future homeowner operates a business from the dwelling.'
    ],
    correct: 1,
    sourceKey: 'swa_code',
    explanation: 'The Code states that duties also apply to designers of domestic residences to the extent that stages such as construction, maintenance and demolition involve workplaces and workers whose safety can be affected by design.'
  }),
  m5Question({
    id: 'm5-whs-06',
    scenarioText: 'A client rejects an available design control solely because it costs more than the cheapest option, without considering the severity or likelihood of the hazard.',
    prompt: 'Why is that reasoning incomplete under the “reasonably practicable” test?',
    options: [
      'Cost is never relevant to WHS decisions under any circumstances.',
      'Only the likelihood of an incident can be considered, not the possible degree of harm.',
      'The assessment weighs likelihood, harm, knowledge and available controls before cost is considered, including whether the cost is grossly disproportionate to the risk.',
      'A control is reasonably practicable only if it has already been used on an identical building.'
    ],
    correct: 2,
    sourceKey: 'swa_code',
    explanation: 'Reasonably practicable requires weighing the likelihood and degree of harm, what is known, and the availability and suitability of controls. Cost is then considered in that risk context, including gross disproportion.'
  }),
  m5Question({
    id: 'm5-whs-07',
    scenarioText: 'During construction, a contractor changes a temporary access arrangement and redesigns part of the structure in a way that affects worker safety.',
    prompt: 'How should the design role be understood?',
    options: [
      'Only the original architect can ever be a designer for WHS purposes.',
      'The change is construction means-and-methods work and can never create a design duty.',
      'The contractor becomes the sole designer of the entire project, cancelling every other designer duty.',
      'A person or PCBU that alters or modifies a design can take on designer duties for the change, while other duty holders retain their own applicable responsibilities.'
    ],
    correct: 3,
    sourceKey: 'swa_code',
    explanation: 'The Code includes redesign and modification within design and says a PCBU altering or modifying the design can have designer duties. This does not erase concurrent duties held by others.'
  }),
  m5Question({
    id: 'm5-whs-08',
    scenarioText: 'Before design begins, the client possesses geotechnical information identifying a hazardous site condition relevant to construction but does not think it needs to be provided to the designer.',
    prompt: 'What does the Model Code say about the commissioning client’s role?',
    options: [
      'The client should consult with the designer about eliminating or minimising construction risks and provide relevant site hazard and risk information it holds.',
      'The client should withhold hazard information until a principal contractor is appointed so the architect is not influenced by construction issues.',
      'Only the building certifier may communicate site hazards to the design team.',
      'The client has no safe-design responsibilities because commissioning a design is not a business activity.'
    ],
    correct: 0,
    sourceKey: 'swa_code',
    explanation: 'The Model Code identifies duties for a PCBU commissioning construction work to consult with the designer and provide relevant information it has about site hazards and risks.'
  }),
];
