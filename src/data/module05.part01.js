import { m5Question } from './module05Factory.js';

export const module05Part01 = [
  m5Question({
    id: 'm5-country-01',
    scenarioText: 'At project inception, the team uses the AIATSIS Map of Indigenous Australia to identify the Traditional Custodians and proposes to record that group as definitive without further checking.',
    prompt: 'What is the most appropriate response?',
    options: [
      'Use the map as a starting point only, then verify project-specific Country and appropriate contacts through more authoritative local sources and community engagement.',
      'Treat the map boundaries as legally conclusive because AIATSIS is a national institution.',
      'Use the map only if a native title claim has already been determined over the site.',
      'Avoid identifying Country until the design is complete so cultural information cannot influence the brief.'
    ],
    correct: 0,
    sourceKey: 'aiatsis_map',
    explanation: 'AIATSIS expressly says the map shows general locations, not exact or fixed boundaries, and is not suitable for native title or land claims. It is a useful starting point, not definitive project-specific evidence.'
  }),
  m5Question({
    id: 'm5-country-02',
    scenarioText: 'A design team improves habitat, water management and landscape performance but has had no involvement from the relevant Aboriginal community. It proposes to describe the project as “designing with Country”.',
    prompt: 'Which description is most consistent with the Connecting with Country guidance?',
    options: [
      'The project is designing with Country because environmental performance alone establishes the required cultural process.',
      'Without Aboriginal community involvement, the work is better described as an environmentally sensitive approach rather than a designing-with-Country process.',
      'The project can use the term if the architect has previously completed cultural-awareness training.',
      'Community involvement is only relevant if a statutory planning condition expressly requires consultation.'
    ],
    correct: 1,
    sourceKey: 'country_gansw',
    explanation: 'The current Connecting with Country FAQ distinguishes an environmentally sensitive approach without Aboriginal community involvement from a Country-centred approach and designing-with-Country process guided by community.'
  }),
  m5Question({
    id: 'm5-country-03',
    scenarioText: 'A positive native title determination has been made over land affected by a proposed project. The project team needs to understand who manages the recognised native title rights and interests.',
    prompt: 'What is the principal role of a Prescribed Body Corporate in this context?',
    options: [
      'To replace the Federal Court as the body that determines whether native title exists.',
      'To act as the local planning authority for all development occurring on native title land.',
      'To hold or manage native title rights and interests on behalf of the native title holders and act as a key contact for engagement after determination.',
      'To convert native title automatically into ordinary freehold title that can be sold by the corporation.'
    ],
    correct: 2,
    sourceKey: 'pbc',
    explanation: 'After a positive determination, a PBC holds or manages native title rights and interests for native title holders and becomes an important contact for people seeking to engage or do business on Country.'
  }),
  m5Question({
    id: 'm5-country-04',
    scenarioText: 'A client assumes the National Native Title Tribunal is the court that finally determines every native title claim.',
    prompt: 'What should the architect understand about the Tribunal?',
    options: [
      'It is a private advisory body with no functions under Commonwealth legislation.',
      'It is the national regulator that issues development approvals on land affected by native title.',
      'It replaces prescribed bodies corporate once a native title determination has been made.',
      'It is an independent body established by the Native Title Act with functions including mediation on Federal Court referral, inquiries and native-title administration.'
    ],
    correct: 3,
    sourceKey: 'nntt',
    explanation: 'The Native Title Act establishes the NNTT as an independent body with statutory functions including mediation when referred by the Federal Court, special inquiries and register/administrative functions.'
  }),
  m5Question({
    id: 'm5-country-05',
    scenarioText: 'The project team plans to finish the concept design and then hold one consultation meeting with community so that Indigenous motifs can be added to the completed scheme.',
    prompt: 'What is the strongest criticism of this approach?',
    options: [
      'The only problem is that community engagement should occur after construction rather than during design.',
      'Meaningful engagement should influence the process and relationships from early stages; a late, one-off exercise risks becoming tokenistic rather than Country- and community-informed design.',
      'The approach is acceptable if the motifs are designed by the architect rather than copied from existing artworks.',
      'Community engagement is unnecessary once the project team has identified the relevant nation group on a published map.'
    ],
    correct: 1,
    sourceKey: 'country_djinjama_engaging',
    explanation: 'Djinjama frames engaging with Country as requiring authentic relationships, changed ways of working and responsibility beyond a token project consultation. Country, community and culture should inform the process rather than decorate a finished scheme.'
  }),
  m5Question({
    id: 'm5-country-06',
    scenarioText: 'A client describes native title as equivalent to freehold ownership and assumes the same exclusive rights will exist in every determination.',
    prompt: 'Which statement is more accurate?',
    options: [
      'Native title always gives the holders an unrestricted right to exclude every other interest from the land.',
      'Native title is a single nationally standardised right that does not vary according to traditional law or custom.',
      'Native title is a bundle of recognised rights and interests whose content varies with traditional laws and customs and may coexist with other rights as non-exclusive native title.',
      'Native title has no procedural relevance to future activities once another form of tenure also exists over the land.'
    ],
    correct: 2,
    sourceKey: 'native_title',
    explanation: 'Native title rights and interests vary according to the traditional laws and customs recognised in the determination. Native title is often non-exclusive and can coexist with other interests, while still carrying procedural rights in relation to future acts.'
  }),
  m5Question({
    id: 'm5-country-07',
    scenarioText: 'A Queensland architect reads the NSW Connecting with Country Framework and proposes to cite it as a mandatory Queensland planning control.',
    prompt: 'What is the better way to use the framework?',
    options: [
      'Treat it as Commonwealth legislation because it concerns First Nations cultural matters.',
      'Apply every NSW process verbatim because Country-centred design is identical in every community.',
      'Ignore it completely because principles developed in another jurisdiction can never inform professional practice.',
      'Use it as PARC-directed good-practice guidance and conceptual material, while separately identifying the actual Queensland legal requirements and the relevant community-specific protocols.'
    ],
    correct: 3,
    sourceKey: 'country_gansw',
    explanation: 'The framework describes itself as guidance and does not create new planning requirements. Its concepts can inform practice, but it is NSW material and cannot be treated as Queensland law or as a substitute for local community protocols.'
  }),
  m5Question({
    id: 'm5-country-08',
    scenarioText: 'A project report claims that the design was developed with Country, but the file contains only the architect’s own narrative and no evidence of community guidance or response to cultural advice.',
    prompt: 'What evidence would most strengthen that claim?',
    options: [
      'Records of appropriate community involvement, cultural advice, how the design responded to that advice, and community review or support for the resulting approach.',
      'A statement that the design team used native planting and therefore no further evidence is necessary.',
      'A copy of the AIATSIS national map with the project site marked on it.',
      'A generic acknowledgement of Country inserted into the drawing title block after design completion.'
    ],
    correct: 0,
    sourceKey: 'country_gansw',
    explanation: 'Current Connecting with Country guidance emphasises community-guided process. Evidence should demonstrate the advice received, design responses and appropriate community feedback or support rather than relying on self-declared cultural intent.'
  }),
];
