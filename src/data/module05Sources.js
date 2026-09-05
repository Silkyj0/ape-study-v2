export const MODULE05_DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1DcoNkcK1jNuDCmutM1379XXaJbsL_fhS';

const checkedOn = '2026-09-05';

export const MODULE05_SOURCES = {
  dda_overview: { kind: 'drive', title: 'DDA overview - building access', id: '1AK5Dhh47CbJVFN9ixk8DMoJ4lj92sCbR' },
  dda_performance: { kind: 'drive', title: 'DDA - the Premises Standards, BCA and alternative solutions', id: '1vX2JbAQkKVgyJih6LtHW4tlkQPtLsyrc' },
  dda_certification: { kind: 'drive', title: 'DDA - the Premises Standards and building certification', id: '14e0_g5TskZqprA2M8Wwda1qT-fiCxWlu' },
  dda_existing: { kind: 'drive', title: 'DDA – Existing Buildings not undergoing building work', id: '17sAeeNDWuOrJpSy4PMnWFxleEdJA1A7b' },
  whs_guide: { kind: 'drive', title: 'Safety in design guide', id: '1DGJBaDce2IX2v5hG3cE3bO_q9mnM65uj' },
  whs_legislation: { kind: 'drive', title: 'Understanding work health and safety (WHS) legislation', id: '1vSylGg_7iZVtpV5DfhipGAVw3e2svkBH' },
  swa_code: { kind: 'drive', title: 'Safe Work Australia Model Code of Practice - Safe Design of Structures, November 2024', id: '1Gp21oqDdntfb-4IiHiA31Ak01n41kwYm' },
  energy: { kind: 'drive', title: 'Energy', id: '1FA-wojoxhRpER708HXupnG2fgpGdR5p2' },
  embodied_carbon: { kind: 'drive', title: 'Embodied carbon in buildings', id: '1arayrBwwNkDgSfarcruPaObevWO3BbTj' },
  lifetime_ghg: { kind: 'drive', title: 'Cutting lifetime residential greenhouse gas (GHG) emissions', id: '1HHJyKo9RCR6twTDD-aAxoMM0oSfijZ07' },
  lcea: { kind: 'drive', title: 'Life cycle energy analysis', id: '16OeOwg5-WpskVFjSlKCIgpFCsk3U4hlE' },

  country_gansw: {
    kind: 'parc-external',
    title: 'Government Architect NSW - Connecting with Country',
    url: 'https://planning.nsw.gov.au/government-architect-nsw/policies-and-frameworks/connecting-with-country',
  },
  country_djinjama_protocols: {
    kind: 'parc-external',
    title: 'Djinjama - Cultural Principles and Protocols for Designers',
    url: 'https://djinjama.com/publication/cultural-principles-and-protocols-for-designers/',
  },
  country_djinjama_engaging: {
    kind: 'parc-external',
    title: 'Djinjama - An Approach for Engaging with Country',
    url: 'https://djinjama.com/wp-content/uploads/2024/08/Engaging-with-Country_Daniele-Hromek.pdf',
  },
  aiatsis_map: {
    kind: 'parc-external',
    title: 'AIATSIS - Map of Indigenous Australia',
    url: 'https://aiatsis.gov.au/explore/map-indigenous-australia',
  },
  native_title: {
    kind: 'parc-external',
    title: 'PBC - Native title, rights and interests',
    url: 'https://nativetitle.org.au/learn/native-title-and-pbcs/native-title-rights-and-interests',
  },
  pbc: {
    kind: 'parc-external',
    title: 'PBC - Roles and functions of a Prescribed Body Corporate',
    url: 'https://nativetitle.org.au/learn/role-and-function-pbc',
  },
  nntt: {
    kind: 'parc-external',
    title: 'National Native Title Tribunal - Role of the Tribunal',
    url: 'https://www.nntt.gov.au/about-us',
  },
  abcb_access_update: {
    kind: 'parc-external',
    title: 'ABCB/NCC - NCC 2022 Amendment 2 and amended Premises Standards',
    url: 'https://ncc.abcb.gov.au/',
  },
  passive_design: {
    kind: 'parc-external',
    title: 'Your Home - Passive design and design for climate',
    url: 'https://www.yourhome.gov.au/passive-design/design-climate',
  },
  nathers: {
    kind: 'parc-external',
    title: 'NatHERS - Certificate and Whole of Home guidance',
    url: 'https://www.nathers.gov.au/',
  },
  nabers: {
    kind: 'parc-external',
    title: 'NABERS - What is NABERS?',
    url: 'https://www.nabers.gov.au/about/what-nabers',
  },
};

export function module05Source(key) {
  const source = MODULE05_SOURCES[key];
  if (!source) throw new Error(`Unknown Module 5 source: ${key}`);

  if (source.kind === 'drive') {
    return {
      source: `Module 5 Acumen/reading: ${source.title}`,
      sourceKind: 'drive',
      sourceFileId: source.id,
      sourceUrl: `https://drive.google.com/file/d/${source.id}/view`,
      sourceCheckedOn: checkedOn,
    };
  }

  return {
    source: `PARC-directed external source: ${source.title}`,
    sourceKind: 'parc-external',
    sourceUrl: source.url,
    sourceCheckedOn: checkedOn,
  };
}
