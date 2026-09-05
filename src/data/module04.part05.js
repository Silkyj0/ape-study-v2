import { m4Question } from './module04Factory.js';

export const module04Part05 = [
  m4Question({
    id: 'm4-var-01',
    scenarioText: 'After the agreed scope is signed, the client substantially changes the brief and asks you to redesign several areas.',
    prompt: 'How should the architect treat the change?',
    options: [
      'As a likely variation to services because the client-instructed change alters the agreed scope and may affect fee and program.',
      'As part of the architect’s normal iterative design process with no need to revisit the agreement.',
      'As a construction variation even though no building contract exists yet.',
      'As a consultant coordination issue that cannot affect the architect’s fee.'
    ],
    correct: 0,
    sourceKey: 'variation_to_services',
    explanation: 'Client-instructed changes to the brief are identified as a common source of legitimate variations to an agreed scope of architectural services.'
  }),
  m4Question({
    id: 'm4-var-02',
    scenarioText: 'The client asks you to complete the same agreed deliverables two weeks earlier than the established program.',
    prompt: 'Why might the architect be entitled to seek a fee adjustment?',
    options: [
      'Any reduction in project duration automatically doubles the agreed fee.',
      'Acceleration may require overtime, additional labour or disruption to other work, increasing the resources needed to deliver the same scope.',
      'The architect may charge a variation whenever the client asks a question about timing.',
      'A shorter program always reduces the architect’s professional liability and therefore attracts a premium.'
    ],
    correct: 1,
    sourceKey: 'variation_to_services',
    explanation: 'The reading explains that program acceleration can increase cost because additional resources, overtime or changes to other project commitments may be required.'
  }),
  m4Question({
    id: 'm4-var-03',
    scenarioText: 'A local authority unexpectedly imposes a condition that requires redesign after an earlier design sign-off.',
    prompt: 'What is the best contractual response?',
    options: [
      'Absorb all redesign time because authority decisions are always included in a fixed architectural fee.',
      'Refuse to carry out the work because authority changes cannot form part of an architectural service.',
      'Follow the agreement’s variation procedure, document the cause, and address any resulting change to scope, fee, budget or program.',
      'Proceed with the redesign first and decide months later whether to tell the client it was additional work.'
    ],
    correct: 2,
    sourceKey: 'variation_to_services',
    explanation: 'Unforeseeable authority changes are given as an example of a legitimate variation. The reading stresses following the agreed procedure and documenting the consequences when they occur.'
  }),
  m4Question({
    id: 'm4-var-04',
    scenarioText: 'The architect believes a scope variation has occurred but has only discussed it verbally with the client and continues the extra work for several months.',
    prompt: 'What is the main risk in this approach?',
    options: [
      'Verbal discussions automatically invalidate the original client-architect agreement.',
      'The architect loses copyright in all documents prepared during the additional work.',
      'The client becomes responsible for setting the architect’s hourly rates retrospectively.',
      'A later fee dispute is more likely because the variation, consequences and client approval were not properly recorded when the change occurred.'
    ],
    correct: 3,
    sourceKey: 'variation_to_services',
    explanation: 'The reading notes that fee disputes commonly arise where variations were not properly recorded. It recommends documenting each variation and the client’s agreement at the time.'
  }),
  m4Question({
    id: 'm4-time-01',
    scenarioText: 'A client-drafted consultancy agreement requires the architect to warrant completion of all design services by a fixed date and imposes a financial penalty for delay.',
    prompt: 'What is the preferred risk-management response?',
    options: [
      'Accept the clause if the architect believes the internal program is achievable.',
      'Avoid the penalty-based time warranty if possible and, if it cannot be removed, assess it cautiously with realistic allowances and appropriate insurer advice.',
      'Accept the penalty because PI insurance automatically covers contractual penalties.',
      'Replace all client approval periods in the program with zero days so the deadline can be achieved.'
    ],
    correct: 1,
    sourceKey: 'time_warranties',
    explanation: 'The reading says penalty provisions for time non-performance should not be accepted where possible. If unavoidable they require caution, realistic timing, allowance for external delay and PI insurer review.'
  }),
  m4Question({
    id: 'm4-time-02',
    scenarioText: 'A project program assumes the architect can control authority approvals, consultant delivery dates and the client’s decision-making time.',
    prompt: 'What should be changed?',
    options: [
      'Nothing; the architect is responsible for guaranteeing every project milestone.',
      'Remove all external activities from the program so only architectural work is shown.',
      'Make the program contingent on relevant external inputs and allow for risks outside the architect’s control, while communicating those dependencies to the client.',
      'Require the client to accept all delays without notice because external events are never the architect’s concern.'
    ],
    correct: 2,
    sourceKey: 'project_time_design',
    explanation: 'The time-management reading stresses that authority, client, consultant and other external delays should be identified, communicated and allowed for in realistic project programs.'
  }),
  m4Question({
    id: 'm4-time-03',
    scenarioText: 'A consultant has not confirmed its ability to meet the project dates, but the architect is about to promise a fixed documentation milestone to the client.',
    prompt: 'What should the architect do first?',
    options: [
      'Promise the date and require the consultant to meet it later.',
      'Exclude consultant coordination from the program because consultants run independent businesses.',
      'Allow no time for coordination so the consultant has the full period available.',
      'Confirm consultant commitments and include sufficient time to coordinate their work before committing the overall delivery date.'
    ],
    correct: 3,
    sourceKey: 'project_time_design',
    explanation: 'The reading says consultant time commitments should be confirmed before the architect commits to project dates, with enough time retained for coordination before issue.'
  }),
  m4Question({
    id: 'm4-time-04',
    scenarioText: 'The client is slow to review design submissions, but the agreed program assumes prompt client decisions.',
    prompt: 'What is the best project-management response?',
    options: [
      'Identify the client approval obligation and promptly communicate the effect of delayed decisions on the program and any resulting revised dates.',
      'Continue working indefinitely without client approvals so the original completion date is protected.',
      'Treat every delayed client response as the architect’s own delay.',
      'Stop all services permanently because any client delay terminates the agreement automatically.'
    ],
    correct: 0,
    sourceKey: 'project_time_design',
    explanation: 'The reading recommends clear client response periods, ongoing communication of program impacts and prompt updates when delivery dates change.'
  }),
];
