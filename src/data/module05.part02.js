import { m5Question } from './module05Factory.js';

export const module05Part02 = [
  m5Question({
    id: 'm5-dda-01',
    scenarioText: 'A client treats the Disability Discrimination Act and the building-approval system as if they are the same legal mechanism.',
    prompt: 'Which distinction is most accurate?',
    options: [
      'A failure under the DDA creates exposure to a discrimination complaint, while failure to meet applicable building legislation can prevent lawful building approval or certification.',
      'Both systems are enforced only through complaints to the Australian Human Rights Commission.',
      'The DDA is administered only by state building certifiers, while the NCC is federal civil-rights legislation.',
      'Compliance with building legislation automatically removes every possible disability-discrimination issue associated with the premises.'
    ],
    correct: 0,
    sourceKey: 'dda_overview',
    explanation: 'The Acumen overview distinguishes the DDA complaint mechanism from building-law approval. The systems have been aligned for specified access matters, but they remain different legal mechanisms.'
  }),
  m5Question({
    id: 'm5-dda-02',
    scenarioText: 'A new public building satisfies the Access Code provisions for entrances, circulation and sanitary facilities, but its reception counter is designed so that a wheelchair user cannot reasonably use the service.',
    prompt: 'Why can an accessibility issue still remain?',
    options: [
      'Because the Access Code applies only to residential buildings and not public buildings.',
      'Because the Access Code does not address every aspect of premises and fitout, while the broader DDA may still apply to discriminatory access to services or facilities.',
      'Because every reception counter must be assessed through a native-title consultation process.',
      'Because a building cannot use any Deemed-to-Satisfy access provisions when furniture is included in the project.'
    ],
    correct: 1,
    sourceKey: 'dda_overview',
    explanation: 'Acumen notes that the Access Code does not cover all fitout elements such as reception desks and shop counters. Matters outside the Access Code can remain subject to the broader DDA.'
  }),
  m5Question({
    id: 'm5-dda-03',
    scenarioText: 'An older public building is not currently undergoing any building work. Its owner assumes there can be no disability-access obligation until a renovation is proposed.',
    prompt: 'Which statement best reflects the readings?',
    options: [
      'The Premises Standards apply retrospectively to every existing building whether or not building work occurs.',
      'Neither the Premises Standards nor the DDA has any relevance until a building application is lodged.',
      'The Premises Standards generally do not apply where no building work is occurring, but the ongoing non-discrimination obligations of the DDA can still expose the premises to complaint.',
      'Existing buildings are permanently exempt if they complied with the building rules in force when originally constructed.'
    ],
    correct: 2,
    sourceKey: 'dda_existing',
    explanation: 'The Premises Standards do not generally apply to an existing building not undergoing building work, but the DDA remains an ongoing civil-rights obligation and the owner may still face a complaint.'
  }),
  m5Question({
    id: 'm5-dda-04',
    scenarioText: 'A client asks the architect to certify that providing full access to an existing building would constitute “unjustifiable hardship” under the DDA.',
    prompt: 'What is the most appropriate response?',
    options: [
      'Issue the certificate if the proposed access works exceed the client’s current construction budget.',
      'Ask the building certifier to make the final DDA determination as part of the building approval.',
      'Determine the issue using only the cost of the access work because financial cost is conclusive.',
      'Limit architectural advice to matters within professional expertise and recommend legal advice, because unjustifiable hardship is a DDA question ultimately determined through the federal complaints/court framework.'
    ],
    correct: 3,
    sourceKey: 'dda_existing',
    explanation: 'Acumen cautions architects against advising whether measures amount to unjustifiable hardship. The defence involves wider legal and economic considerations and is ultimately determined through the DDA process, not by the architect.'
  }),
  m5Question({
    id: 'm5-dda-05',
    scenarioText: 'A developer asks what practical protection comes from designing a relevant new public building to comply with the Premises Standards for matters covered by the Access Code.',
    prompt: 'Which answer is most appropriate?',
    options: [
      'It guarantees that no person can ever lodge a disability-discrimination complaint about the premises.',
      'For matters covered by the Disability Standard, compliance provides an effective defence within the DDA framework while also aligning those access requirements with building regulation.',
      'It removes the need to comply with the NCC accessibility provisions because federal law replaces state and territory building regulation.',
      'It transfers all future access responsibility from the owner and designer to the building certifier.'
    ],
    correct: 1,
    sourceKey: 'dda_overview',
    explanation: 'The DDA provides that compliance with an applicable Disability Standard is an effective defence to a complaint concerning matters covered by that Standard. It does not prevent a complaint being lodged or cover every aspect of accessibility.'
  }),
  m5Question({
    id: 'm5-dda-06',
    scenarioText: 'A project team is checking the current relationship between NCC 2022 and the amended Disability (Access to Premises – Buildings) Standards.',
    prompt: 'Which current statement is correct?',
    options: [
      'NCC 2022 ceased to apply when the Premises Standards were amended in 2024.',
      'The Premises Standards were withdrawn and replaced by a single national building act in 2025.',
      'From 29 July 2025, NCC 2022 is read with Amendment 2, which aligns the NCC with the recent amendments to the Premises Standards.',
      'NCC 2022 Amendment 2 applies only to New South Wales because the Premises Standards are a state instrument.'
    ],
    correct: 2,
    sourceKey: 'abcb_access_update',
    explanation: 'The ABCB states that NCC 2022 Amendment 2 applies from 29 July 2025 and aligns the NCC with recent amendments to the federal Premises Standards.'
  }),
  m5Question({
    id: 'm5-dda-07',
    scenarioText: 'A client asks who normally initiates enforcement of the DDA where a person alleges discriminatory access to premises.',
    prompt: 'Which process best reflects the Acumen reading?',
    options: [
      'The local council automatically prosecutes the architect whenever an access defect is identified.',
      'The building certifier issues a federal penalty notice under the DDA before occupation.',
      'The Australian Building Codes Board determines the complaint and orders compensation.',
      'The DDA operates through a complaint to the Australian Human Rights Commission, with conciliation and possible Federal Court determination if unresolved.'
    ],
    correct: 3,
    sourceKey: 'dda_overview',
    explanation: 'The DDA is a federal civil-rights law activated through a complaint. The Acumen overview describes AHRC conciliation and, if unresolved, possible Federal Court orders.'
  }),
  m5Question({
    id: 'm5-dda-08',
    scenarioText: 'An architect assumes the Access Code requires the same public-access provisions within every privately occupied dwelling.',
    prompt: 'What qualification should be made?',
    options: [
      'The Acumen overview says the public-access provisions generally do not extend to privately occupied dwellings in the same way, with short-term accommodation being a relevant exception.',
      'All private dwellings are treated as public transport buildings under the Premises Standards.',
      'Private dwellings are regulated exclusively by the DDA and are excluded from every part of the NCC.',
      'A dwelling is exempt only where it has no external doorway accessible from a public road.'
    ],
    correct: 0,
    sourceKey: 'dda_overview',
    explanation: 'Acumen notes that the DDA provision discussed concerns access for members of the public and does not generally create the same access requirement within privately occupied dwellings, apart from relevant short-term accommodation situations.'
  }),
];
