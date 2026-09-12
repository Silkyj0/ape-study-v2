import { caaFlashcard } from './factories.js';

export const CAA2024_ADVANCED_FLASHCARDS = [
  caaFlashcard({
    id: 'fc-m13-advanced-d8-change-process',
    topic: 'Changes to Services',
    term: 'Advanced · D8 change-to-Services process and failed negotiation',
    definition: 'When the Architect considers that the Project requires a greater or reduced scope of Services, D8 requires prompt notice of the Fee effect, good-faith negotiation and a written record of any agreed change. If no change is agreed, the existing Services and Fee continue unless the Architect can no longer perform, in which case the stated 10-business-day termination notice pathway applies.',
    sourceSection: 'D8 — Change to the Services',
    contractRef: 'D8',
  }),
  caaFlashcard({
    id: 'fc-m13-advanced-f1-licence-status',
    topic: 'Copyright and licence',
    term: 'Advanced · F1 licence can revoke, reinstate and later become irrevocable',
    definition: 'The Client receives an express non-exclusive, non-transferable licence to use The Design for the Project on the Site. The licence can be revoked for an overdue invoice and automatically reinstates when overdue amounts are paid; after completion of all Services and full payment of invoices, the licence becomes irrevocable.',
    sourceSection: 'F1 — Copyright and Client licence',
    contractRef: 'F1',
  }),
  caaFlashcard({
    id: 'fc-m13-advanced-j2-dispute-sequence',
    topic: 'Dispute resolution',
    term: 'Advanced · J2 dispute sequence — meeting first, then mediation',
    definition: 'After a dispute notice, J2 requires a bona fide meeting within 5 business days. If the dispute is not resolved or the meeting does not occur, either party may propose mediation; only after the contractual mediation pathway fails may a party proceed to legal action under the clause.',
    sourceSection: 'J2 — Dispute resolution procedure',
    contractRef: 'J2',
  }),
  caaFlashcard({
    id: 'fc-m13-advanced-k2-no-reason',
    topic: 'Termination',
    term: 'Advanced · K2 termination without reason — at least 30 business days',
    definition: 'CAA2024 permits either party to terminate the agreement without giving a reason, but K2 requires no less than 30 business days’ notice of the intention to terminate. The consequences of a proper termination are then dealt with under K4.',
    sourceSection: 'K2 — Termination without reason',
    contractRef: 'K2',
  }),
  caaFlashcard({
    id: 'fc-m13-advanced-k3-two-paths',
    topic: 'Termination',
    term: 'Advanced · K3 has two different Architect-breach termination paths',
    definition: 'K3 separates insolvency or bankruptcy from a material breach of A1 or G1. Insolvency/bankruptcy may support immediate termination by notice, while the specified material breach requires written notice identifying the breach and a 10-business-day opportunity to remedy before termination.',
    sourceSection: 'K3 — Termination for the Architect’s breach',
    contractRef: 'K3',
  }),
].map((card) => ({ ...card, difficulty: 'advanced' }));
