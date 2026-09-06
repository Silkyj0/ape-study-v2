export const PARCS_CALIBRATION_TRAPS = [
  {
    questionId: 'm3-sc32-4',
    module: 3,
    scenario: '3.2',
    questionNumber: 4,
    patternId: 'role-boundaries',
    topic: 'Agreements & professional liability',
    officialAnswer: 'the contractor',
    lesson: 'A remuneration arrangement can create a direct financial or proprietary interest that changes the architect’s conflict position. Do not analyse the fee arrangement only as a tax or payment issue.',
  },
  {
    questionId: 'm4-sc41-1',
    module: 4,
    scenario: '4.1',
    questionNumber: 1,
    patternId: 'role-boundaries',
    topic: 'Consultants & coordination',
    officialAnswer: 'you may be liable for some of the fees associated with the redesign',
    lesson: 'A specialist consultant’s separate liability does not erase the architect’s own principal-consultant, briefing, coordination, review and integration duties.',
  },
  {
    questionId: 'm5-sc52-3',
    module: 5,
    scenario: '5.2',
    questionNumber: 3,
    patternId: 'change-control',
    topic: 'Variations',
    officialAnswer: 'provide the project manager with a fee for the change before proceeding with it',
    lesson: 'Treat an authorised project-manager instruction that changes the current documented position as a service variation. Deal with the additional fee before simply implementing the change.',
  },
  {
    questionId: 'm5-sc52-4',
    module: 5,
    scenario: '5.2',
    questionNumber: 4,
    patternId: 'change-control',
    topic: 'Variations',
    officialAnswer: 'provide the client with a fee for the change before proceeding with it',
    lesson: 'Returning to an earlier design is still a new change from the current documented position. Rework created by successive instructions can be an additional service even where the final outcome resembles an earlier version.',
  },
  {
    questionId: 'm7-sc71-1',
    module: 7,
    scenario: '7.1',
    questionNumber: 1,
    patternId: 'tender-basis',
    topic: 'Tendering & tender evaluation',
    officialAnswer: 'contact the tenderers and tell them to price the documents as they stand',
    lesson: 'Do not prematurely change a common tender basis because of a possible future supply problem. Preserve a fair common basis unless and until a formal change is actually required.',
  },
  {
    questionId: 'm7-sc72-1',
    module: 7,
    scenario: '7.2',
    questionNumber: 1,
    patternId: 'tender-basis',
    topic: 'Tendering & tender evaluation',
    officialAnswer: 'ask this tenderer if they will stand by their price using the specified windows',
    lesson: 'When the lowest tender is non-conforming, first clarify whether that tenderer will stand by its price on the conforming basis rather than immediately adopting the substitution or creating a new post-close competition.',
  },
  {
    questionId: 'm8-sc82-4',
    module: 8,
    scenario: '8.2',
    questionNumber: 4,
    patternId: 'urgent-chain',
    topic: 'CA & site inspections',
    officialAnswer: 'contact the plumbing subcontractor immediately',
    lesson: 'Urgent mitigation can justify immediate action, but use the existing project chain where possible. PARCS distinguishes contacting the known project subcontractor from independently engaging an unrelated new contractor.',
  },
  {
    questionId: 'm9-sc91-5',
    module: 9,
    scenario: '9.1',
    questionNumber: 5,
    patternId: 'role-boundaries',
    topic: 'Progress payments & certification',
    officialAnswer: 'FALSE',
    lesson: 'The independent assessor/valuer/certifier role extends to fact-finding undertaken specifically for that assessment. An inspection made to value a progress claim is not automatically an owner-agent act.',
  },
  {
    questionId: 'm10-sc101-2',
    module: 10,
    scenario: '10.1',
    questionNumber: 2,
    patternId: 'time-entitlement',
    topic: 'EOTs & delay',
    officialAnswer: 'extend the date for PC by the number of working days site possession was late',
    lesson: 'Separate entitlement from overlap. Late possession is an owner-risk delay that can earn time; the existence of another concurrent or overlapping delay does not justify simply denying the time entitlement.',
  },
  {
    questionId: 'm10-sc103-2',
    module: 10,
    scenario: '10.3',
    questionNumber: 2,
    patternId: 'role-boundaries',
    topic: 'Errors, omissions & contingency',
    officialAnswer: 'is not obliged to remove the windows, install a flashing and make good',
    lesson: 'Distinguish defective workmanship from an architect’s design/detailing omission. A contractor is not obliged to rectify the architect’s design error as though it were the contractor’s defect; any remedial work needs the proper contractual mechanism.',
  },
  {
    questionId: 'm11-sc111-3',
    module: 11,
    scenario: '11.1',
    questionNumber: 3,
    patternId: 'defect-remedy',
    topic: 'Defects & defects liability',
    officialAnswer: 'have the defects rectified and then issue a claim to the architect for the rectification costs',
    lesson: 'Preserve the PARCS course key exactly for this scenario. It is a course-specific trap and should not be generalised into a universal substitute for the defect/security procedure under every building contract.',
  },
];

export const CALIBRATION_TRAP_BY_ID = new Map(
  PARCS_CALIBRATION_TRAPS.map((trap) => [trap.questionId, trap]),
);

export const CALIBRATION_TRAP_IDS = new Set(PARCS_CALIBRATION_TRAPS.map((trap) => trap.questionId));

export const CALIBRATION_PATTERNS = [
  {
    id: 'role-boundaries',
    title: 'Role boundaries & residual responsibility',
    summary: 'A consultant, contractor, client or certifier role can change who does what, but it rarely makes the architect’s own duty disappear. Ask which role the architect is performing at that exact moment.',
    learningTopics: [
      'Agreements & professional liability',
      'Consultants & coordination',
      'Progress payments & certification',
      'Errors, omissions & contingency',
    ],
  },
  {
    id: 'change-control',
    title: 'Change control: current position, authority, fee',
    summary: 'A change is measured against the current agreed/documented position. Even reinstating an earlier design can create rework and an additional-service fee.',
    learningTopics: ['Variations', 'Project time management'],
  },
  {
    id: 'tender-basis',
    title: 'Preserve the tender basis before changing it',
    summary: 'PARCS repeatedly prefers a fair common tender basis and targeted clarification over premature addenda, substitutions or post-close repricing.',
    learningTopics: ['Tendering & tender evaluation', 'Negotiated tendering'],
  },
  {
    id: 'urgent-chain',
    title: 'Urgent action without casually bypassing the chain',
    summary: 'When damage or safety risk is active, act promptly, but preserve the existing project chain and contractual relationships as far as the emergency allows.',
    learningTopics: ['CA & site inspections', 'Latent conditions & substitutions'],
  },
  {
    id: 'time-entitlement',
    title: 'Separate delay entitlement from causation and cost',
    summary: 'First identify whether an event is an owner-risk or contractor-risk delay; then analyse overlap, critical path and cost consequences. Do not collapse those steps into one yes/no decision.',
    learningTopics: ['EOTs & delay', 'Prevention principle & cooperation'],
  },
  {
    id: 'defect-remedy',
    title: 'Defects: identify whose defect and the correct remedy',
    summary: 'Distinguish workmanship defects, design defects, latent defects and the contractual remedy available at that stage. The same physical problem can produce different answers depending on who caused it and when it is discovered.',
    learningTopics: ['Defects & defects liability', 'Final certificate', 'Security & retention'],
  },
].map((pattern) => ({
  ...pattern,
  questionIds: PARCS_CALIBRATION_TRAPS
    .filter((trap) => trap.patternId === pattern.id)
    .map((trap) => trap.questionId),
}));

export function getCalibrationTrap(questionOrId) {
  const id = typeof questionOrId === 'string'
    ? questionOrId
    : questionOrId?.seedId || questionOrId?.id;
  return CALIBRATION_TRAP_BY_ID.get(id) || null;
}
