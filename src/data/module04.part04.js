import { m4Question } from './module04Factory.js';

export const module04Part04 = [
  m4Question({
    id: 'm4-plan-01',
    scenarioText: 'A client asks when you should determine whether a planning or development application is required.',
    prompt: 'What is the best answer?',
    options: [
      'Establish the need for planning approval early during design so the approval pathway can inform the project strategy and program.',
      'Wait until construction documentation is complete because planning does not influence design.',
      'Only investigate planning after a building contractor has been appointed.',
      'Leave the issue to the building certifier because planning approval is part of construction certification.'
    ],
    correct: 0,
    sourceKey: 'planning_application',
    explanation: 'The reading says the need for planning or local-authority approval should be established early during the design stage.'
  }),
  m4Question({
    id: 'm4-plan-02',
    scenarioText: 'A site has complex planning controls and the client wants the architect to manage the application without any specialist planning input.',
    prompt: 'What should the architect consider?',
    options: [
      'Planning consultants should never be used because planning is always a core architectural skill.',
      'Recommend a suitably qualified planning consultant where the site controls or project complexity warrant specialist assistance.',
      'Lodge the application first and engage a planner only if it is refused.',
      'Transfer the whole approval process to the contractor.'
    ],
    correct: 1,
    sourceKey: 'planning_application',
    explanation: 'The reading notes that an independent planning consultant may need to be appointed depending on the site controls and project complexity.'
  }),
  m4Question({
    id: 'm4-plan-03',
    scenarioText: 'A development application may require public notification, and the client is asking for a guaranteed approval date.',
    prompt: 'Which advice is most appropriate?',
    options: [
      'Guarantee the date because the architect controls the approval process once the application is lodged.',
      'Exclude the approval period from the project program because it is outside the architect’s control.',
      'Explain that authority timeframes and processes such as public notice may extend the approval period and should be allowed for in the program.',
      'Promise approval before construction documentation is completed to protect the client’s target date.'
    ],
    correct: 2,
    sourceKey: 'planning_application',
    explanation: 'Planning timeframes are determined by the relevant authority and processes such as public notice may lengthen the application period. These external factors should be communicated and programmed realistically.'
  }),
  m4Question({
    id: 'm4-plan-04',
    scenarioText: 'The client asks whether construction approval can simply be pursued without first addressing a required local planning approval.',
    prompt: 'What should the architect explain?',
    options: [
      'Construction approval always replaces planning approval if the NCC is satisfied.',
      'Planning approval can be ignored where the architect considers the design reasonable.',
      'The contractor can obtain planning approval retrospectively after construction starts.',
      'The client should be advised of the required planning process before moving on to the construction-approval pathway.'
    ],
    correct: 3,
    sourceKey: 'planning_application',
    explanation: 'The reading expressly says the client should be advised of the planning process required to obtain local approval prior to applying for construction approval.'
  }),
  m4Question({
    id: 'm4-title-01',
    scenarioText: 'Your prospective client instructs you to design works on land, but their name does not appear as the registered owner on the material they provide.',
    prompt: 'What is the most appropriate initial concern?',
    options: [
      'Assume the client has authority because they approached an architect.',
      'Clarify the client’s authority to contract for and lodge applications affecting the land, using up-to-date title information.',
      'Proceed with the commission but exclude planning services from the agreement.',
      'Ask the builder to verify ownership once construction begins.'
    ],
    correct: 1,
    sourceKey: 'certificates_of_title',
    explanation: 'The title search identifies the registered owner. If the instructing client is a different legal person, the architect should understand the client’s authority to contract and deal with the land.'
  }),
  m4Question({
    id: 'm4-title-02',
    scenarioText: 'The client gives you an old paper copy of its Certificate of Title and says that is sufficient for design purposes.',
    prompt: 'What should the architect recognise?',
    options: [
      'An old duplicate title is always conclusive evidence of all current dealings.',
      'The title is irrelevant if the site boundaries appear obvious on site.',
      'Current title information should be obtained or verified because older copies may not show recent dealings or encumbrances.',
      'Only a building surveyor is permitted to review title information.'
    ],
    correct: 2,
    sourceKey: 'certificates_of_title',
    explanation: 'The reading warns that a duplicate or older Certificate of Title may not be current and recommends an up-to-date title search where current particulars are needed.'
  }),
  m4Question({
    id: 'm4-title-03',
    scenarioText: 'A drainage easement crosses the portion of the site where the client wants the building footprint located.',
    prompt: 'Why is that information important to the architect?',
    options: [
      'Easements only affect land sale and have no design implications.',
      'The architect can override an easement if the planning scheme permits the building.',
      'The easement becomes relevant only when the contractor excavates.',
      'An easement may restrict the use or development of part of the land and therefore needs to inform the design and approvals strategy.'
    ],
    correct: 3,
    sourceKey: 'certificates_of_title',
    explanation: 'The title reading gives drainage easements as a common example that can restrict building over a strip of land, making them directly relevant to design decisions.'
  }),
  m4Question({
    id: 'm4-title-04',
    scenarioText: 'The title search lists more than one registered owner, but only one has been involved in the commission.',
    prompt: 'What should the architect consider before lodging applications over the land?',
    options: [
      'Whether all owners whose consent is required have authorised the commission and proposed application.',
      'Whether the architect can sign on behalf of the remaining owners without further authority.',
      'Whether the contractor is willing to accept ownership risk under the building contract.',
      'Whether the design can be amended so only one owner’s interest is affected.'
    ],
    correct: 0,
    sourceKey: 'certificates_of_title',
    explanation: 'The reading notes that where several owners are listed, their consent and contractual position need to be understood, particularly because applications affecting the land may require all owners’ consent.'
  }),
];
