const SCENARIO_81 = `You are the architect for a complex renovation and restoration of a historically significant public building. The existing building has a number of light fittings that were designed and manufactured especially for the project. The existing light fittings were removed by the contractor and securely stored for reinstallation. Not all of the light fitting were in good repair and it was agreed that six of them were incomplete, damaged or unsafe and required replacement.

At great expense the client sourced the original fabrication dies and materials and had the six lights remade. At your scheduled fortnightly site meeting the client delivers the six light fittings to the contractor. The contractor inspects the fittings and discovers the hand blown glass diffuser to one is cracked. The client agrees to provide a replacement diffuser.

As you leave the meeting you observe a sub-contractor who is careful removing the pressed metal ceiling to the central corridor. The pressed metal was previously hidden behind a flush plaster suspended ceiling.

In the ceiling space there is revealed some lagged pipework. The insulation has deteriorated substantially and you suspect it may contain friable asbestos. Some of this material has become dislodged and is descending out of the ceiling onto the sub-contractor and the area around him.

Later when the contractor comes to install the light fittings two of the existing fittings are missing and one of the newly fabricated fittings is defective. The contractor requests the client provides three light fixtures to replace them.`;

const SCENARIO_82 = `You are the architect on a two story domestic renovation. The client/owner is in occupation of the front of the house while the construction is underway at the rear. Overnight a leaking pipe on the site has created a pool of water that extends into the area in occupation by your client.

Early the next morning the owner's mother slips in the now substantial puddle knocking over a hat stand that smashes a newly installed window. The contractor, just arriving, looks up at the noise. He dodges the hatstand, which sails into the neighbour's empty spa, but in the process is showered by broken glass.

The elderly lady sustains a broken hip and is raced to hospital. The contractor has a piece of glass lodged in his eye and, also undergoing medical treatment, cannot be contacted. The contractor's ute is damaged by falling debris and the neighbour's spa is cracked.

Meanwhile the leak has gone unattended and is now further damaging both the new works and the existing first floor parquetry and plasterboard ceiling below. You first learn of the disaster when you receive a frantic message from the owner on your mobile demanding you “do something”. The contractor holds “contractor's all risk insurance”.`;

const SCENARIO_83 = `Work has commenced on site for a residential building for which you have been appointed for full architectural services. Whilst attending the regular site meeting you are advised that the tiling subcontractor has completed the tiling installation to the shower. On inspection you suspect that the specified waterproofing membrane has not been provided beneath the tiles.

You advise your client, (the owner), that you intend to instruct the tiling works be opened up so you may inspect the waterproofing material. The owner vigorously disagrees with this approach saying that even if the waterproofing is not the one specified they believe that the tiling subcontractor is honest and would not use anything substandard. You subsequently receive a call from the subcontractor to say that the membrane material used was, in fact, of better quality than the system you specified.

Meanwhile the client has spoken to the contractor (who has received your written architect's instruction and is also furious) and told them not to remove any tiles as they don't think it's required.`;

const sample = ({ id, scenarioText, prompt, options, correct, explanation }) => ({
  id,
  module: 8,
  scenarioText,
  prompt,
  options,
  correct,
  explanation,
  source: 'PARC 2026 Winter Sample Questions Unit 8 — supplied by user',
  difficulty: 'exam',
});

export const module08ParcsQuestions = [
  sample({
    id: 'm8-sc81-1',
    scenarioText: SCENARIO_81,
    prompt: 'The light fixtures supplied by the client',
    options: [
      'are the responsibility of the contractor. They must replace, at their cost, any that are defective',
      'are a client supplied item and hence the contractor had no responsibility for their installation',
      'have been delivered to the contractor hence the defective fitting is their responsibility to replace',
      'are the property of the owner and they must provide them in working order or replace them',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: owner-supplied replacement fittings remain the owner’s property and the owner must provide them in working order or replace defective supplied items.',
  }),
  sample({
    id: 'm8-sc81-2',
    scenarioText: SCENARIO_81,
    prompt: 'The existing light fittings to be reused are',
    options: [
      'the property and responsibility of the contractor',
      'the property of the owner and the responsibility of the contractor',
      "the owner's responsibility and the owner must supply any that are subsequently missing",
      'to be stored by the owner and delivered to the contractor when required',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: the existing fittings remain the owner’s property but, once removed and stored by the contractor for the works, are the contractor’s responsibility for custody.',
  }),
  sample({
    id: 'm8-sc81-3',
    scenarioText: SCENARIO_81,
    prompt: 'When you see the pipe lagging material has been dislodged you',
    options: [
      'tell the sub-contractor to stop work and immediately advise the site manager of your suspicions',
      "do nothing as WHS (OHS) is the contractor's responsibility, you cannot instruct sub-contractors",
      'instruct the sub-contractor to reinstate the pressed metal ceiling to keep the material contained',
      'do nothing as your Client-Architect agreement states you do not provide advice on asbestos',
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: an immediate suspected friable-asbestos exposure warrants stopping the immediate activity and promptly alerting the site manager rather than ignoring the hazard.',
  }),
  sample({
    id: 'm8-sc81-4',
    scenarioText: SCENARIO_81,
    prompt: 'If the pipe lagging is found to be asbestos then the contractor',
    options: [
      'has no claim as they should have inspected the pipework and identified the asbestos at tender',
      'must stop all work on site and engage specialists to remove it at their own cost',
      'is entitled to a claim for the time and cost impact of discovering the asbestos',
      'has no contractual responsibility with respect to the discovery of the asbestos',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the contractor may claim the contractual time and cost consequences of discovering and dealing with the asbestos.',
  }),
  sample({
    id: 'm8-sc82-1',
    scenarioText: SCENARIO_82,
    prompt: 'The contractor',
    options: [
      'cannot claim on his insurance as he was injured outside the formal boundary of the site',
      "will claim on the project's public liability insurance for his damaged ute",
      "will claim on his workers' compensation insurance for his injury",
      "will claim on the project's works insurance for his injury",
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the contractor’s personal injury is addressed through workers’ compensation rather than contract works or project public-liability cover.',
  }),
  sample({
    id: 'm8-sc82-2',
    scenarioText: SCENARIO_82,
    prompt: "The owner's mother will claim her injury related medical expenses on the",
    options: [
      "contractor's public liability policy",
      "owner's contents insurance",
      "contractor's works insurance",
      "their workers' compensation insurance",
    ],
    correct: 0,
    explanation: 'Confirmed PARCS answer: the owner’s mother is a third party injured in connection with the construction incident, so the contractor’s public-liability cover is the relevant policy.',
  }),
  sample({
    id: 'm8-sc82-3',
    scenarioText: SCENARIO_82,
    prompt: 'The neighbour',
    options: [
      "will claim on the contractor's works insurance",
      'cannot claim as the spa is not part of the works',
      "will claim on the client's building insurance",
      "will claim on the contractor's public liability insurance",
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: damage to the neighbour’s spa is third-party property damage and is addressed through the contractor’s public-liability insurance.',
  }),
  sample({
    id: 'm8-sc82-4',
    scenarioText: SCENARIO_82,
    prompt: 'You should',
    options: [
      'wait until the contractor can be contacted and instruct them to rectify the leak',
      'contact the plumbing subcontractor immediately',
      'make a file note of the date and time of the incident and wait for the contractor to call',
      'contact a local plumber and engage them to go to site and fix the leak',
    ],
    correct: 1,
    explanation: 'Confirmed PARCS answer: with ongoing damage and the contractor unavailable, the immediate response is to contact the existing plumbing subcontractor rather than wait or independently engage an unrelated plumber.',
  }),
  sample({
    id: 'm8-sc83-1',
    scenarioText: SCENARIO_83,
    prompt: 'The contractor',
    options: [
      'is not required to respond to this instruction as the work is built to Australian Standards',
      'can make an agreement with the client not to remove the tiles',
      'must remove the tiles as instructed',
      'is entitled to substitute a material if it is equal to or better than the material specified',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: the contractor must comply with the architect’s valid opening-up instruction; an unapproved substitution is not justified merely because the contractor believes it is equal or better.',
  }),
  sample({
    id: 'm8-sc83-2',
    scenarioText: SCENARIO_83,
    prompt: 'As the architect you',
    options: [
      'are not a party to the building contract and hence have no authority in this matter',
      'are responsible for supervising the works',
      'are operating as the agent of the client and must follow their instruction',
      'must independently assess if the works are required to be opened up',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: the architect must independently exercise the contract-administration power to determine whether opening up is warranted rather than simply follow the owner’s preference.',
  }),
  sample({
    id: 'm8-sc83-3',
    scenarioText: SCENARIO_83,
    prompt: 'If the works are constructed as per the contract documents',
    options: [
      'the owner is entitled to make a claim against you for instructing them be opened up',
      'the contractor is entitled to make a claim against you',
      'you were operating outside your remit to instruct the works to be opened up',
      'the contractor is entitled to make a claim for opening up and making good the works',
    ],
    correct: 3,
    explanation: 'Confirmed PARCS answer: where opening up proves the work complied, the contractor is entitled to the applicable cost of opening up and making good under the contract.',
  }),
  sample({
    id: 'm8-sc83-4',
    scenarioText: SCENARIO_83,
    prompt: 'If you do not issue the instruction to open up and subsequently the shower leaks causing damage',
    options: [
      'the contractor must rectify the defect and you are legally protected',
      'the contractor is entirely responsible as they warranted the works',
      'you may be liable for damages connected with any rectification works',
      'the client has no legal recourse to you as they instructed the works not be opened up',
    ],
    correct: 2,
    explanation: 'Confirmed PARCS answer: failing to exercise the architect’s own inspection/contract-administration duty may expose the architect to liability even where the contractor also bears responsibility for defective work.',
  }),
];
