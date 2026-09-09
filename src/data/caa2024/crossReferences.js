import { CAA2024_SOURCE } from './contractMap.js';

function ref(contractRef) {
  return {
    caaContractSource: CAA2024_SOURCE.name,
    caaContractRef: contractRef,
    caaContractSourceFileId: CAA2024_SOURCE.fileId,
    caaContractSourceUrl: CAA2024_SOURCE.url,
    caaContractCheckedOn: CAA2024_SOURCE.checkedOn,
  };
}

export const CAA2024_FLASHCARD_CROSS_REFS = {
  'fc-m2-copyright': ref('F1'),
  'fc-m2-implied-copyright-licence': ref('F1'),
  'fc-m2-moral-rights': ref('F2'),
  'fc-m2-right-of-attribution': ref('F2'),
  'fc-m3-client-architect-agreement': ref('Front page'),
  'fc-m3-written-agreement': ref('Front page'),
  'fc-m3-fitness-for-purpose': ref('A2'),
  'fc-m4-budget-estimate': ref('A3'),
  'fc-m4-project-budget-management': ref('A3'),
  'fc-m4-variation-to-services': ref('D8'),
  'fc-m4-specialist-consultant': ref('E1'),
};
