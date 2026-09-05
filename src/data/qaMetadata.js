export const PARCS_SAMPLE_IDS = [
  'm1-reg-1', 'm1-reg-2', 'm1-reg-3', 'm1-reg-4', 'm1-reg-5',
  'm2-sc21-1', 'm2-sc21-2', 'm2-sc21-3', 'm2-sc21-4',
  'm2-sc22-1', 'm2-sc22-2', 'm2-sc22-3',
  'm2-sc23-1', 'm2-sc23-2', 'm2-sc23-3', 'm2-sc23-4',
  'm2-sc24-1', 'm2-sc24-2', 'm2-sc24-3',
  'm4-sc41-1', 'm4-sc41-2',
  'm4-sc42-1', 'm4-sc42-2', 'm4-sc42-3',
  'm4-sc43-1', 'm4-sc43-2', 'm4-sc43-3',
  'm4-sc44-1', 'm4-sc44-2', 'm4-sc44-3', 'm4-sc44-4', 'm4-sc44-5',
];

export const PARCS_SAMPLE_SET = new Set(PARCS_SAMPLE_IDS);

// These source-bank items are deliberately withheld from normal study until the
// original reading is checked again. They remain in the archived module files.
export const WITHHELD_QA_ITEMS = [
  {
    id: 'm1-woolcock',
    module: 1,
    reason: 'Primary-source re-check recommended for the precise ratio/emphasis before this item returns to the live bank.',
  },
  {
    id: 'm1-introvigne',
    module: 1,
    reason: 'Court attribution in the inherited source note was flagged for re-check; the item is withheld rather than silently corrected.',
  },
];

export const WITHHELD_QA_IDS = new Set(WITHHELD_QA_ITEMS.map((item) => item.id));

export function getQaMetadata(question) {
  if (!question) return { qaStatus: 'unknown', qaLabel: 'Unknown', qaNote: '' };

  if (PARCS_SAMPLE_SET.has(question.id)) {
    return {
      qaStatus: 'parcs-confirmed',
      qaLabel: 'PARCS confirmed',
      qaNote: 'Supplied PARCS sample question. Scenario, stem, options and confirmed answer key are preserved unchanged; only presentation order may shuffle.',
    };
  }

  if (WITHHELD_QA_IDS.has(question.id)) {
    return {
      qaStatus: 'needs-source-check',
      qaLabel: 'Needs source check',
      qaNote: WITHHELD_QA_ITEMS.find((item) => item.id === question.id)?.reason || 'Primary-source verification required.',
    };
  }

  if (question.module === 1 || question.module === 2) {
    return {
      qaStatus: 'source-audited',
      qaLabel: 'Source-audited rewrite',
      qaNote: 'The substantive proposition, keyed answer, source and explanation come from the previously source-audited M1/M2 bank. The question wording and distractors were revised for exam difficulty without changing the underlying proposition.',
    };
  }

  if ([3, 4, 5].includes(question.module) && question.sourceKind !== 'parc-external' && question.sourceFileId && question.sourceUrl) {
    return {
      qaStatus: 'drive-source-verified',
      qaLabel: 'Drive source verified',
      qaNote: `Built directly from the connected Module ${question.module} reading and checked against that source${question.sourceCheckedOn ? ` on ${question.sourceCheckedOn}` : ''}. The source Drive file ID and URL are retained with the question.`,
    };
  }

  if (question.module === 5 && question.sourceKind === 'parc-external' && question.sourceUrl) {
    return {
      qaStatus: 'parc-external-verified',
      qaLabel: 'PARC external source verified',
      qaNote: `Built from a current public source explicitly directed by the PARC Module 5 reading guide and checked${question.sourceCheckedOn ? ` on ${question.sourceCheckedOn}` : ''}. The exact source URL is retained with the question.`,
    };
  }

  if (question.source === 'From your notes') {
    return {
      qaStatus: 'user-added',
      qaLabel: 'User-added',
      qaNote: 'Manually added question. Verify against the source material you used to create it.',
    };
  }

  return {
    qaStatus: 'legacy-placeholder',
    qaLabel: 'Legacy placeholder',
    qaNote: 'This later-module item has not yet been rebuilt under the source-audited exam-standard workflow. Treat it as provisional until that module is rebuilt.',
  };
}
