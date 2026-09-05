import { m4Question } from './module04Factory.js';

export const module04Part01 = [
  m4Question({
    id: 'm4-brief-01',
    scenarioText: 'A client gives you a list of preferred room sizes and finishes but has not explained how the organisation operates or what outcomes the building needs to support.',
    prompt: 'What is the best next step before extensive design work begins?',
    options: [
      'Develop and confirm a broader brief covering functions, objectives, time, cost and quality before the design becomes committed.',
      'Treat the room list as the complete brief because spatial requirements are the architect’s main concern.',
      'Prepare a detailed concept first, then use the completed design to determine the project brief.',
      'Proceed directly to documentation and resolve operational requirements during consultant coordination.'
    ],
    correct: 0,
    sourceKey: 'brief',
    explanation: 'The reading describes the brief as the contextual basis for design and says it should identify the client’s expectations, functions and broad time, cost and quality parameters before extensive design work proceeds.'
  }),
  m4Question({
    id: 'm4-brief-02',
    scenarioText: 'During schematic design, the client changes several operational requirements that were recorded in the original brief.',
    prompt: 'How should the architect manage the brief?',
    options: [
      'Retain the original brief unchanged so there is only one project reference document.',
      'Document the changes as revisions, reissue the brief and obtain client sign-off on the revised requirements.',
      'Record the changes only in meeting minutes because the brief should not change after design starts.',
      'Allow the design drawings to supersede the written brief without further client confirmation.'
    ],
    correct: 1,
    sourceKey: 'brief',
    explanation: 'The brief is described as a dynamic document. Changes should be documented as revisions and the client should sign off the revised brief so the design team has a current agreed basis for further work.'
  }),
  m4Question({
    id: 'm4-brief-03',
    scenarioText: 'A school client tells you exactly where every room must sit on the site, even though the operational relationships have not been tested.',
    prompt: 'Which approach is most consistent with the briefing guidance?',
    options: [
      'Accept the spatial arrangement as binding because clients are responsible for design solutions in the brief.',
      'Remove all client requirements from the brief so the architect has complete design freedom.',
      'Restate the needs in functional terms so the architect can test the most effective physical relationships and design response.',
      'Delay the brief until after concept design so spatial solutions can be compared first.'
    ],
    correct: 2,
    sourceKey: 'brief',
    explanation: 'The reading recommends stating requirements in functional rather than spatial terms. The brief should describe what the building needs to do rather than prescribe the design solution.'
  }),
  m4Question({
    id: 'm4-brief-04',
    scenarioText: 'A client wants a project program but has not allowed any time for its own approvals, authority reviews or contingency.',
    prompt: 'What should the architect do when developing the program in the brief?',
    options: [
      'Use only the architect’s internal design milestones because external processes are outside the architect’s scope.',
      'Adopt the client’s requested completion date and omit approval periods so the program remains competitive.',
      'Show authority approvals only after construction documentation because they do not affect design timing.',
      'Include major milestones, client approval periods, authority processes and appropriate float or contingency allowances.'
    ],
    correct: 3,
    sourceKey: 'brief',
    explanation: 'The brief guidance says the project program should identify design submissions, approvals, documentation, tendering and construction milestones as well as client sign-offs and contingency or float allowances.'
  }),
  m4Question({
    id: 'm4-brief-05',
    scenarioText: 'The client says the project budget is $8 million but cannot explain whether that amount includes consultant fees, authority charges or contingencies.',
    prompt: 'What is the architect’s most appropriate response during briefing?',
    options: [
      'Assume the figure is the Cost of Works because that is the usual meaning of a project budget.',
      'Clarify how the budget was compiled and record its inclusions, exclusions and assumptions in the brief.',
      'Wait until tender returns are received because budget definitions are not useful during briefing.',
      'Treat all non-construction costs as the client’s private matter and exclude them from briefing discussions.'
    ],
    correct: 1,
    sourceKey: 'brief',
    explanation: 'The brief should identify project-budget inclusions and exclusions, and the architect should discuss how the budget was compiled and what assumptions underpin it.'
  }),
  m4Question({
    id: 'm4-brief-06',
    scenarioText: 'A complex client organisation has several departments giving conflicting directions to the design team.',
    prompt: 'Which briefing information would most directly reduce this risk?',
    options: [
      'A longer list of finishes and room sizes.',
      'A more detailed construction specification prepared before concept design.',
      'Defined project personnel, authority levels, lines of communication and approval procedures.',
      'A requirement that all consultant communication bypass the client.'
    ],
    correct: 2,
    sourceKey: 'brief',
    explanation: 'The briefing guidance specifically identifies project personnel, roles, authority, communication lines and approval procedures as important client administration and management information.'
  }),
  m4Question({
    id: 'm4-brief-07',
    scenarioText: 'The client has not completed the brief, but a small amount of preliminary design work could help test whether the stated requirements make sense.',
    prompt: 'What does the reading suggest?',
    options: [
      'No design work should ever occur until every part of the brief is finalised and signed.',
      'The architect should replace the unfinished brief with the preliminary design drawings.',
      'The architect should proceed immediately to detailed design because the brief will inevitably change.',
      'Limited tentative design can assist briefing, but the brief should be compiled and signed off before extensive design proceeds.'
    ],
    correct: 3,
    sourceKey: 'brief',
    explanation: 'The reading recognises that briefing and design can overlap and preliminary design may test requirements, but warns against extensive design work before the brief is compiled and signed off.'
  }),
  m4Question({
    id: 'm4-brief-08',
    scenarioText: 'A site has possible easements, heritage constraints and geotechnical issues that have not yet been investigated.',
    prompt: 'How should these matters be treated in the project brief?',
    options: [
      'They should be identified as relevant site information and constraints because they may materially affect the design response.',
      'They should be omitted until a planning authority formally raises them.',
      'They should be treated solely as construction-stage matters for the contractor.',
      'They only need to be recorded if they change the client’s preferred room schedule.'
    ],
    correct: 0,
    sourceKey: 'brief',
    explanation: 'The reading says a comprehensive brief should include site information such as survey constraints, statutory limits, geotechnical information and heritage issues.'
  }),
];
