import { CAA2024_FLASHCARDS } from '../caa2024/flashcards.js';
import { CAA2024_ITEM_FLASHCARDS } from '../caa2024/flashcardsItems.js';
import { CAA2024_ADVANCED_FLASHCARDS } from '../caa2024/advancedFlashcards.js';
import { caaFlashcard as c } from '../caa2024/factories.js';

const CARD_REFINEMENTS = {
  'fc-m13-section-g': {
    definition: 'Section G contains the Architect’s insurance and liability settings. G1 requires professional indemnity and public liability insurance at the Item 6 values; G2 then limits aggregate liability subject to its qualifications and excludes specified indirect, consequential and special losses.',
  },
  'fc-m13-j-disputes': {
    term: 'CAA2024 Section J — dispute process',
    definition: 'Section J requires the parties to continue performing their obligations while a dispute exists, then provides a notice-and-meeting pathway followed by mediation. A J2 dispute notice can require a meeting within 5 business days, and legal action comes only after the specified mediation pathway has failed.',
  },
  'fc-m13-section-k': {
    definition: 'Section K separates termination for Client breach, termination without reason and termination for Architect breach, then sets the payment/document consequences in K4 and identifies in K5 the provisions that survive after the agreement ends or is terminated.',
  },
  'fc-m13-item7b': {
    definition: 'Item 7B records the interest rate that D3 applies to overdue payments. In the supplied CAA2024 form, if no rate is stated in Item 7B, the default applicable interest rate is 15% per annum.',
  },
};

const QA_EXPANSION = [
  c({ id: 'fc-m13-section-h', topic: 'Section maps', term: 'CAA2024 Section H — General Conditions', definition: 'Section H contains the agreement’s general administration rules, including written notices and approvals, written variations, consent to assignment/novation/transfer, applicable law, statutory protections, entire agreement, pre-execution Services, deemed receipt and GST/currency rules.', sourceSection: 'Section H — General Conditions (H1–H10)', contractRef: 'H1' }),
  c({ id: 'fc-m13-section-l', topic: 'Section maps', term: 'CAA2024 Section L — Special Conditions', definition: 'Section L gives effect to the special conditions recorded in Schedule C and states that those special conditions apply to and take precedence over all other terms of CAA2024.', sourceSection: 'Section L — Special Conditions; Schedule C', contractRef: 'Section L' }),
  c({ id: 'fc-m13-g2-liability', topic: 'Insurance & liability', term: 'CAA2024 G2 — liability allocation', definition: 'Subject to G2’s qualifications and applicable law, the Architect’s maximum aggregate liability to the Client is limited to the net amount actually recovered under the Architect’s professional indemnity policy, and specified indirect, consequential or special losses are excluded.', sourceSection: 'G2 — Liability', contractRef: 'G2' }),
  c({ id: 'fc-m13-h3-novation', topic: 'General conditions & change control', term: 'CAA2024 H3 — assignment, novation and transfer', definition: 'Except where a change occurs by operation of law, H3 prevents either party from assigning, novating or transferring CAA2024 without first obtaining the other party’s consent.', sourceSection: 'H3 — assignment, novation and transfer', contractRef: 'H3' }),
  c({ id: 'fc-m13-h7-preexecution', topic: 'Agreement formation & administration', term: 'CAA2024 H7 — Services before formal execution', definition: 'H7 states that CAA2024 applies to all Services delivered by the Architect before formal execution of the agreement, so formally signing later does not leave those earlier Services outside the agreement.', sourceSection: 'H7 — pre-execution Services', contractRef: 'H7' }),
  c({ id: 'fc-m13-j2-process', topic: 'Dispute resolution', term: 'CAA2024 J2 — dispute sequence', definition: 'J2 allows either party to issue a dispute notice requiring a meeting within 5 business days. If that process does not resolve the dispute, either party may propose mediation; legal action is available only after the specified mediation pathway fails and the mediator confirms that failure in writing.', sourceSection: 'J2 — Dispute Resolution process', contractRef: 'J2' }),
  c({ id: 'fc-m13-k2-k3-timing', topic: 'Termination', term: 'CAA2024 termination timing — K2 vs K3', definition: 'K2 termination without reason requires no less than 30 business days’ notice. K3.2 material breach by the Architect requires the specified written notice and a 10-business-day opportunity to remedy; K3.1 insolvency or bankruptcy is a separate immediate-termination trigger.', sourceSection: 'K2–K3 — Termination', contractRef: 'K3' }),
];

function refine(card) {
  return CARD_REFINEMENTS[card.id] ? { ...card, ...CARD_REFINEMENTS[card.id] } : card;
}

export const FLASHCARDS_M13 = [
  ...CAA2024_FLASHCARDS.map(refine),
  ...CAA2024_ITEM_FLASHCARDS.map(refine),
  ...QA_EXPANSION,
  ...CAA2024_ADVANCED_FLASHCARDS,
];
