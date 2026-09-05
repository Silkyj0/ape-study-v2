import { m4Question } from './module04Factory.js';

export const module04Part07 = [
  m4Question({
    id: 'm4-feas-01',
    scenarioText: 'A developer asks whether it is worth proceeding with a proposed project before committing to full design services.',
    prompt: 'Which service is most directly aimed at answering that question?',
    options: [
      'A feasibility study examining project objectives, constraints, costs, returns, planning controls and site opportunities before major commitment.',
      'A defects inspection undertaken after construction.',
      'A final account review after tender.',
      'A fire services coordination workshop.'
    ],
    correct: 0,
    sourceKey: 'project_feasibility',
    explanation: 'The reading describes feasibility studies as assessing economic viability and comparing project or option outcomes before proceeding further.'
  }),
  m4Question({
    id: 'm4-feas-02',
    scenarioText: 'The feasibility analysis depends heavily on market return assumptions and future conditions that the architect cannot control.',
    prompt: 'How should those factors be handled?',
    options: [
      'Guarantee the assumptions so the client can rely on a fixed feasibility outcome.',
      'Clearly explain material issues and assumptions beyond the participants’ control that may affect the feasibility result.',
      'Exclude them from the report because uncertain factors cannot be discussed professionally.',
      'Transfer responsibility for all assumptions to the planning authority.'
    ],
    correct: 1,
    sourceKey: 'project_feasibility',
    explanation: 'The reading stresses clear explanation of matters outside participants’ control that can affect feasibility outcomes.'
  }),
  m4Question({
    id: 'm4-value-01',
    scenarioText: 'A client says value management is simply a late-stage exercise for cutting enough items to bring the project back under budget.',
    prompt: 'What is the better description?',
    options: [
      'It is a tender-negotiation method used only after contractor prices are known.',
      'It is a process for substituting the cheapest product in each building element.',
      'It is a structured process for defining project value, testing options and balancing cost, quality, performance, time and client objectives.',
      'It is a process that removes the client from design decisions so the consultant team can reduce cost independently.'
    ],
    correct: 2,
    sourceKey: 'value_management',
    explanation: 'The reading says value management is not simply cost cutting; it examines options and helps stakeholders define and balance what value means for the particular project.'
  }),
  m4Question({
    id: 'm4-value-02',
    scenarioText: 'A value-management review is proposed after the design is highly developed and documentation is well advanced.',
    prompt: 'What consequence should the architect highlight?',
    options: [
      'Late value management is always more effective because the final design is known.',
      'Late changes never affect documentation because value management only changes cost assumptions.',
      'The architect should treat all workshop changes as included in the original fee regardless of scope.',
      'Late reviews may produce limited benefit while causing redesign, re-documentation, delay and wider consequences that need careful assessment.'
    ],
    correct: 3,
    sourceKey: 'value_management',
    explanation: 'The reading says value management is most effective early and that late changes can have significant re-documentation, delay and indirect-cost consequences.'
  }),
  m4Question({
    id: 'm4-value-03',
    scenarioText: 'The client proposes a value-management workshop during brief development.',
    prompt: 'Why is this timing advantageous?',
    options: [
      'It allows the contractor to fix the construction price before design begins.',
      'It allows key objectives, brief requirements, budget and design criteria to be tested before the design becomes highly committed.',
      'It prevents any future design change after the workshop.',
      'It removes the need for a project brief because the workshop replaces it.'
    ],
    correct: 1,
    sourceKey: 'value_management',
    explanation: 'The reading identifies brief development and early design as the period when value management can have the greatest benefit because decisions remain flexible.'
  }),
  m4Question({
    id: 'm4-pm-01',
    scenarioText: 'A client appoints an independent project manager and assumes this means the architect should no longer communicate directly with the owner or user about design intent.',
    prompt: 'Which statement best reflects the reading?',
    options: [
      'The project manager should replace all architect-client communication once appointed.',
      'The architect should communicate only with the contractor after a project manager is engaged.',
      'The project manager’s involvement should not impede the important interpretive relationship between the architect and owner/user.',
      'The architect’s role becomes limited to producing drawings under the project manager’s sole direction.'
    ],
    correct: 2,
    sourceKey: 'project_management',
    explanation: 'The reading specifically cautions that a third-party project manager should not impede the interpretive process between architect and owner/user.'
  }),
  m4Question({
    id: 'm4-pm-02',
    scenarioText: 'An architectural practice is considering offering independent project-management services for the first time.',
    prompt: 'What should it assess before accepting the commission?',
    options: [
      'Only whether the client is prepared to pay a higher fee than for architectural services.',
      'Whether the role will give the practice control over every consultant and contractor.',
      'Whether the project manager title itself limits professional liability.',
      'Whether the practice has the experience, resources, defined scope, appropriate compensation, realistic terms and PI cover for the role.'
    ],
    correct: 3,
    sourceKey: 'project_management',
    explanation: 'The reading lists competence, resources, role definition, compensation, liability, contract terms and PI insurance as key matters to consider before offering independent project-management services.'
  }),
  m4Question({
    id: 'm4-pm-03',
    scenarioText: 'A client asks what an independent project manager may do across the project lifecycle.',
    prompt: 'Which description is most accurate?',
    options: [
      'The role can extend from feasibility and briefing through design, approvals, tendering, construction and handover, depending on the agreed scope.',
      'The role is confined to chairing construction-site meetings after a builder is appointed.',
      'The role begins only once planning approval has been obtained.',
      'The role is limited to cost control and cannot include design or procurement management.'
    ],
    correct: 0,
    sourceKey: 'project_management',
    explanation: 'The reading describes project management as potentially spanning the project from inception and feasibility through design, procurement, construction and post-contract activities.'
  }),
];
