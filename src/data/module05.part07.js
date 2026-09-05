import { m5Question } from './module05Factory.js';

export const module05Part07 = [
  m5Question({
    id: 'm5-climate-01',
    scenarioText: 'A residential design strategy copied from a cool temperate project is proposed unchanged for a hot humid site because the team regards passive design as a universal set of details.',
    prompt: 'What is the better principle?',
    options: [
      'Passive design should respond to the local climate so orientation, shading, ventilation, insulation, glazing and thermal mass are selected to support comfort with minimal heating and cooling.',
      'Passive design requires the same northern glazing and thermal-mass strategy in every Australian climate zone.',
      'Climate should influence mechanical systems only; the building form and envelope can remain unchanged.',
      'Passive design is relevant only where the project is pursuing a voluntary Green Star rating.'
    ],
    correct: 0,
    sourceKey: 'passive_design',
    explanation: 'Your Home defines passive design as working with the local climate to maintain comfort while reducing or eliminating active heating and cooling. Appropriate strategies therefore vary by climate and site.'
  }),
  m5Question({
    id: 'm5-climate-02',
    scenarioText: 'A client asks whether a NatHERS thermal star rating tells them the exact electricity consumption that the future household will record on its bills.',
    prompt: 'Which response is most accurate?',
    options: [
      'Yes. A NatHERS thermal star rating is a measurement of the actual household energy used during the previous 12 months.',
      'No. The thermal rating models the heating and cooling energy needed to maintain comfort under standard assumptions and describes building-shell performance rather than guaranteeing actual consumption.',
      'Yes. NatHERS uses utility-meter data from an occupied dwelling to calculate its thermal shell rating.',
      'No. NatHERS assesses only water consumption and does not model thermal performance.'
    ],
    correct: 1,
    sourceKey: 'nathers',
    explanation: 'NatHERS thermal ratings use modelling to estimate heating and cooling demand needed for comfort under standard assumptions. They are design-performance assessments, not a prediction or measurement of an individual household’s actual bills.'
  }),
  m5Question({
    id: 'm5-climate-03',
    scenarioText: 'An occupied commercial building wants to benchmark how efficiently it is actually operating against comparable buildings using current performance data.',
    prompt: 'Which rating approach best fits that objective?',
    options: [
      'A NatHERS thermal star rating of the original design documentation.',
      'A native-title determination of the building site.',
      'A NABERS rating using operational performance data for relevant categories such as energy, water, waste or indoor environment.',
      'A safety-in-design risk register prepared before construction.'
    ],
    correct: 2,
    sourceKey: 'nabers',
    explanation: 'NABERS benchmarks current operational performance of buildings and workplaces, with ratings available for areas including energy, water, waste and indoor environment.'
  }),
  m5Question({
    id: 'm5-climate-04',
    scenarioText: 'A housing project achieves a strong NatHERS thermal-shell rating, and the client assumes this automatically describes the efficiency of hot water, lighting, installed appliances, onsite generation and storage.',
    prompt: 'What should the architect clarify?',
    options: [
      'The thermal star rating already measures every appliance and energy system in the finished home.',
      'NatHERS has no way to consider installed systems or onsite generation in any form.',
      'Whole of Home replaces the thermal assessment and ignores building-fabric performance.',
      'NatHERS Whole of Home builds on the thermal assessment and separately considers energy systems and appliances, including onsite generation and storage where applicable.'
    ],
    correct: 3,
    sourceKey: 'nathers',
    explanation: 'NatHERS Whole of Home is separate from but builds on the thermal rating. It considers specified energy systems and appliances and can include onsite renewable generation and storage.'
  }),
  m5Question({
    id: 'm5-climate-05',
    scenarioText: 'A house is being designed in NCC Climate Zone 2, with warm humid summers and mild winters.',
    prompt: 'Which passive-design priority best matches the Your Home guidance?',
    options: [
      'Maximise unshaded summer solar gain and minimise natural ventilation so internal heat is retained.',
      'Prioritise effective cooling through shading, exposure to cooling breezes and cross-ventilation while reducing unwanted heat gain.',
      'Use the same cold-climate strategy as an alpine site, with the primary objective of maximising winter heating demand.',
      'Ignore humidity because NCC climate zones relate only to temperature and not building design.'
    ],
    correct: 1,
    sourceKey: 'passive_design',
    explanation: 'For Climate Zone 2, Your Home identifies cooling in a humid climate as the main concern and recommends strategies including shading and design for cooling breezes and cross-ventilation.'
  }),
  m5Question({
    id: 'm5-climate-06',
    scenarioText: 'An office received a strong NABERS Energy rating two years ago and the owner wants to advertise that old result as if it were the building’s current certified operational performance.',
    prompt: 'What is the relevant NABERS limitation?',
    options: [
      'A NABERS rating remains current for the entire life of the building unless the façade is replaced.',
      'NABERS ratings are design-stage predictions and therefore never expire after occupation.',
      'NABERS ratings are valid for 12 months, supporting the scheme’s focus on current operational performance.',
      'A NABERS rating expires only when the building changes ownership.'
    ],
    correct: 2,
    sourceKey: 'nabers',
    explanation: 'NABERS states that ratings are valid for twelve months so that the rating continues to represent current building or workplace operational performance.'
  }),
  m5Question({
    id: 'm5-climate-07',
    scenarioText: 'An architect applies a fixed orientation rule to projects in Darwin, Brisbane, Melbourne and alpine Victoria without considering local heat, humidity, seasonal sun or cooling breezes.',
    prompt: 'What is the key design error?',
    options: [
      'Orientation is irrelevant once insulation is specified to the NCC minimum.',
      'Every Australian climate requires maximum winter sun and minimum summer ventilation.',
      'Passive design works only in Climate Zones 7 and 8.',
      'Orientation and other passive strategies need to respond to climate; hot-humid zones prioritise limiting heat gain and capturing breezes, while cooler zones place greater emphasis on useful winter solar access.'
    ],
    correct: 3,
    sourceKey: 'passive_design',
    explanation: 'Your Home gives different orientation and passive-design objectives for different NCC climate zones. The principles are climate-responsive rather than a universal detailing formula.'
  }),
  m5Question({
    id: 'm5-climate-08',
    scenarioText: 'The team is using the broad NCC climate-zone map but wants more local resolution for a residential thermal assessment.',
    prompt: 'Which statement best reflects the Your Home guidance?',
    options: [
      'Australia has 8 main NCC climate zones, while NatHERS uses a more detailed set of regional climate zones/subzones to model local residential thermal performance.',
      'Australia has only one national climate zone and NatHERS creates the eight NCC zones for each project.',
      'NatHERS climate data is unrelated to geographic location because all thermal ratings use the same weather file.',
      'The NCC climate zones are replaced by NABERS star bands whenever the building is residential.'
    ],
    correct: 0,
    sourceKey: 'passive_design',
    explanation: 'Your Home identifies 8 main NCC climate zones and notes that NatHERS uses more detailed regional climate zones/subzones to reflect local geographic and climatic conditions in residential modelling.'
  }),
];
