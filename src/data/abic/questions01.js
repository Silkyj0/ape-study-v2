import { abicQuestion as q } from './factories.js';

export const ABIC_QUESTIONS_01 = [
  q({
    "id": "m12-abic-01",
    "prompt": "Which ABIC schedule records provisional sums?",
    "options": ["Schedule 6", "Schedule 7", "Schedule 4", "Schedule 8"],
    "correct": 0,
    "explanation": "Schedule 6 is the contract schedule for provisional sums; Schedule 7 is for prime cost sums.",
    "contractRef": "Schedule 6",
    "contractPage": 13,
    "learningTopic": "Schedules & contract navigation",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-02",
    "prompt": "Which ABIC schedule records prime cost sums?",
    "options": ["Schedule 5", "Schedule 7", "Schedule 6", "Schedule 3"],
    "correct": 1,
    "explanation": "Schedule 7 records prime cost sums. Schedule 6 records provisional sums.",
    "contractRef": "Schedule 7",
    "contractPage": 14,
    "learningTopic": "Schedules & contract navigation",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-03",
    "prompt": "Which statement best describes the architect's role under clause A6?",
    "options": ["The architect is always the owner's agent for every contract function", "The architect is never permitted to act for the owner", "The architect acts for the owner when instructing, but independently when assessing, valuing or certifying", "The architect acts only as a mediator between owner and contractor"],
    "correct": 2,
    "explanation": "A6 distinguishes agency functions from independent assessment, valuation and certification functions.",
    "contractRef": "A6",
    "contractPage": 18,
    "learningTopic": "Architect's role",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-04",
    "prompt": "Where does ABIC set the default order of precedence for contract documents?",
    "options": ["Schedule 8 only", "Clause A7 only", "Schedule 4 only", "Clause B2 together with Schedule 3 and the listed contract hierarchy"],
    "correct": 3,
    "explanation": "B2 sets the document hierarchy and Schedule 3 identifies the other contract documents relevant to that hierarchy.",
    "contractRef": "B2",
    "contractPage": 20,
    "learningTopic": "Documents & instructions",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-05",
    "prompt": "What is the status of the contractor's program given under G5?",
    "options": ["It is information required by the contract but does not itself become part of the contract", "It replaces the date for practical completion", "It automatically overrides the drawings", "It becomes a special condition once issued"],
    "correct": 0,
    "explanation": "G5 requires a program, but expressly provides that the program is not part of the contract.",
    "contractRef": "G5",
    "contractPage": 30,
    "learningTopic": "Programming & site administration",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-06",
    "prompt": "Which section contains the general procedure for a contractor's claim to adjust the contract?",
    "options": ["Section G", "Section H", "Section L only", "Section N"],
    "correct": 1,
    "explanation": "Section H is the general claim-to-adjust mechanism. Other sections can create entitlements that are pursued through H.",
    "contractRef": "H1",
    "contractPage": 32,
    "learningTopic": "Claims & adjustments",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-07",
    "prompt": "Which clause defines when the works reach practical completion?",
    "options": ["M13", "N11", "M1", "M9"],
    "correct": 2,
    "explanation": "M1 sets the substantive practical-completion requirements.",
    "contractRef": "M1",
    "contractPage": 40,
    "learningTopic": "Completion & defects",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-08",
    "prompt": "Which clause governs the architect's assessment of a contractor's progress claim?",
    "options": ["N1", "N3", "N6", "N4"],
    "correct": 3,
    "explanation": "N4 governs the architect's progress certificate and the assessment of the progress claim.",
    "contractRef": "N4",
    "contractPage": 43,
    "learningTopic": "Payment & certification",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-09",
    "prompt": "Which ABIC clause begins the contractual dispute-resolution sequence with a compulsory conference?",
    "options": ["P2", "P3", "A8", "Q1"],
    "correct": 0,
    "explanation": "P2 requires the compulsory conference process once a dispute notice is given.",
    "contractRef": "P2",
    "contractPage": 47,
    "learningTopic": "Dispute resolution",
    "difficulty": "foundation"
  }),
  q({
    "id": "m12-abic-10",
    "prompt": "In the ABIC definitions, what does 'promptly' mean?",
    "options": ["Within 2 working days", "As soon as practicable", "Before the next progress claim", "Within 10 business days"],
    "correct": 1,
    "explanation": "Section S defines 'promptly' as 'as soon as practicable'.",
    "contractRef": "Definition: promptly",
    "contractPage": 55,
    "learningTopic": "Definitions",
    "difficulty": "foundation"
  })
];
