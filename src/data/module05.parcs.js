const SCENARIO_51 = `You are providing full architectural services for a restaurant project. The documentation phase is close to completion when the client comes to you with a change. They want to enclose the veranda area saying “just put an extra bit of glass around it.” You are aware it is not quite as simple as this. Apart from other considerations enclosing the veranda will have a major impact on the air conditioning and fire suppression systems.

The client has a fixed timeline for the completion of the project and requires the tender documents to go out without delay (despite the new changes required to your documentation). This is an important client to you with the prospect of many more restaurants to be rolled out after this one. You are motivated not to disappoint them.`;

const SCENARIO_52 = `You have been engaged to provide architectural services on a large regional medical clinic. The client is a private medical services provider with offices in all major cities around Australia. A project manager has been engaged to facilitate the project.

The remote location of the proposed facility is proving challenging as there is currently only rudimentary infrastructure to the site. The client has briefed you to provide diesel generators, and associated fuel storage tanks, to ensure continuous power is available. Continuous power is essential to the functioning of the facility’s intensive care unit.

As the client is not local to the project the project manager had established a pattern of monthly project meeting with the client and the full design team. And project team meetings, without the client, on the alternate fortnights.

At one of the fortnightly team meeting the project manager instructs you to reduce the number of diesel storage tanks. At the subsequent client meeting the client tells you to reinstate the original number of tanks.`;

const SCENARIO_53 = `You have been engaged to provide architectural services for a new holiday house. The client is very enthusiastic about the project utilising Ecologically Sustainable Design. In particular they would like the building to have low whole life carbon.`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation }) => ({
  id,
  module: 5,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 5 — supplied by user',
  difficulty: 'exam',
});

export const module05ParcsQuestions = [
  sample({
    id: 'm5-sc51-1',
    scenarioText: SCENARIO_51,
    prompt: 'You must advise your client',
    options: [
      'in writing of any additional fees that will be charged for this change in scope',
      'that adding the glazing will result in non-compliance with the NCC so it cannot be done',
      'that the glass is not part of the agreed scope and cannot be added at this late stage',
      'that as the change is not in line with the design intent you will not allow it',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the late client-directed scope change should be documented as a variation, including any additional fee consequences before the additional services proceed.',
  }),
  sample({
    id: 'm5-sc51-2',
    scenarioText: SCENARIO_51,
    prompt: 'When a client instructs an increase in scope you',
    options: [
      'must reject the instruction if it causes the budget to be exceeded',
      'must accept the clients instruction as they are responsible for the budget',
      'are not required to advise on the impact of the increased scope on the budget',
      'must advise in writing of the budget implications of the change before you make it',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect should advise the client in writing of the budget implications of an instructed increase in scope before implementing the change.',
  }),
  sample({
    id: 'm5-sc51-3',
    scenarioText: SCENARIO_51,
    prompt: 'To meet your commitment to the tender deadline you',
    options: [
      'advise the client the change cannot be made unless they increase the time available',
      'convince your staff to work overtime to meet the existing deadline',
      'contact your consultant team to confirm they can deliver the revised documents in time',
      'do as much as you can in the time and work out any problems later on site',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: before committing to the unchanged tender deadline after a scope change, the architect should confirm that the consultant team can deliver the revised work in time.',
  }),
  sample({
    id: 'm5-sc51-4',
    scenarioText: SCENARIO_51,
    prompt: 'The project has already achieved Development Approval/Planning Permit',
    options: [
      "As such you will be compliant with council's requirements despite the change",
      'You should issue revised drawings to council for approval and continue documenting the change to avoid any delays',
      'You advise your client you cannot proceed with the documentation without council approval',
      'You advise your client council approval will be required and request their written authority to proceed with documenting the design change in advance of the approval.',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect should identify the need for further council approval and obtain written client authority before proceeding with documentation in advance of that approval.',
  }),
  sample({
    id: 'm5-sc52-1',
    scenarioText: SCENARIO_52,
    prompt: 'Regarding the uninterrupted power supply for the ICU you',
    options: [
      "you must comply with the client's brief to utilise diesel generators",
      'you cannot use diesel generators as this is not the lowest carbon option',
      'can utilise diesel generators as long as the generator units have low embodied carbon',
      'you have a professional obligation to propose alternative lower carbon power options',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect should not simply accept or reject the client-nominated diesel solution; the professional obligation is to propose lower-carbon alternatives while addressing the essential functional requirement for uninterrupted ICU power.',
  }),
  sample({
    id: 'm5-sc52-2',
    scenarioText: SCENARIO_52,
    prompt: 'The biggest opportunity to reduce embodied carbon in the building is during the',
    options: [
      'briefing stage',
      'design development stage',
      'documentation stage',
      'construction services stage',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the greatest opportunity to reduce embodied carbon occurs at briefing, when fundamental decisions about need, scale, reuse and material intensity remain open.',
  }),
  sample({
    id: 'm5-sc52-3',
    scenarioText: SCENARIO_52,
    prompt: 'When the project manager instructs you to reduce the number of tanks you',
    options: [
      'ignore the instruction as the client needs the tanks to ensure uninterrupted power',
      'provide the project manager with a fee for the change before proceeding with it',
      'make the change as instructed',
      'wait until the next meeting when the client is in attendance to ask them for direction',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the project-manager instruction is treated as a change requiring a fee variation before the architect proceeds, rather than being implemented without dealing with the additional services.',
  }),
  sample({
    id: 'm5-sc52-4',
    scenarioText: SCENARIO_52,
    prompt: 'When the client instructs you to reinstate the original number of tanks documented you',
    options: [
      'ignore the instruction as you can only take instruction from the project manager',
      'provide the client with a fee for the change before proceeding with it',
      'make the change as instructed',
      'advise them the change is not possible as the project manages has changed the brief',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: reinstating the earlier arrangement is another instructed change from the current documented position, so the architect should deal with the additional fee before proceeding.',
  }),
  sample({
    id: 'm5-sc53-1',
    scenarioText: SCENARIO_53,
    prompt: "A building's whole life carbon includes",
    options: [
      'embodied carbon from "cradle to practical completion"',
      'operational carbon from "cradle to grave"',
      'embodied and operational carbon dioxide but excludes other green house gases',
      'embodied and operational carbon',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: whole-life carbon includes both embodied and operational carbon across the building lifecycle.',
  }),
  sample({
    id: 'm5-sc53-2',
    scenarioText: SCENARIO_53,
    prompt: "A building's embodied carbon is considered",
    options: ['Scope 1', 'Scope 2', 'Scope 3', 'outside the scope'],
    correct: 2,
    explanation: 'Confirmed PARCS answer: building embodied carbon is treated as Scope 3 indirect value-chain emissions in the course framing.',
  }),
  sample({
    id: 'm5-sc53-3',
    scenarioText: SCENARIO_53,
    prompt: 'The embodied carbon of a material is calculated by',
    options: [
      'embodied carbon coefficient x mass of material',
      'embodied carbon coefficient x surface of material',
      'embodied carbon coefficient x length of material',
      'embodied carbon coefficient x flexibility of material',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the embodied-carbon coefficient is applied to the mass of material.',
  }),
  sample({
    id: 'm5-sc53-4',
    scenarioText: SCENARIO_53,
    prompt: 'Which of the following is not a way to reduce embodied carbon',
    options: [
      'reduce the size of the building',
      'reduce the amount of power needed to use the building',
      'repurpose an existing building',
      'reduce the amount of materials used in the building',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: reducing power used during occupation principally targets operational carbon rather than embodied carbon.',
  }),
  sample({
    id: 'm5-sc53-5',
    scenarioText: SCENARIO_53,
    prompt: 'Currently in most buildings in Australia the embodied carbon is',
    options: [
      'more than the operational carbon',
      'about the same as the operational carbon',
      'less that the operational carbon',
      'negligible',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the course treats embodied carbon as now exceeding operational carbon in most Australian buildings, reflecting its increasing share of whole-life emissions as operational performance improves.',
  }),
];
