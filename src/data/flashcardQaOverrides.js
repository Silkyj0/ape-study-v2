export const FLASHCARD_QA_OVERRIDES = {
  'fc-m9-prime-cost-item': {
    definition: 'An allowance in the contract for the supply of a necessary item that has not yet been finally selected or accurately priced when the contract is entered into. The key distinction is that a prime cost item is an allowance for the item itself, rather than an allowance for incompletely described work.',
  },
  'fc-m9-provisional-sum': {
    definition: 'An allowance in the contract for foreseeable and necessary work, including associated materials, that cannot be fully described or detailed when the contract is entered into. Unlike a prime cost item, it relates to work rather than only the supply of an item.',
  },
  'fc-m9-contingency-sum': {
    definition: 'A reserve for unknown, unresolved or unforeseen project matters and minor discrepancies that could not reasonably be identified when the documents were prepared. Acumen distinguishes this from money for discretionary client scope changes; as a project-control measure it is best treated as a genuine contingency rather than assumed spare budget.',
    source: 'Acumen — Contingency sum / Errors, ambiguities or omissions',
    sourceSection: 'The contingency sum / Managing contingency sums',
  },
  'fc-m9-security': {
    definition: 'Contract security is an assurance held for the contractor’s performance of its obligations under the building contract. Its form, amount, entitlement to recourse and release are governed by the particular contract; common forms include cash retention and an unconditional bank guarantee.',
  },
  'fc-m9-cash-retention': {
    definition: 'A form of contract security created by retaining money otherwise payable to the contractor. The amount is held and released only as the building contract permits, commonly with a partial release at practical completion and final release after the relevant post-completion requirements are satisfied.',
  },
  'fc-m9-unconditional-guarantee': {
    definition: 'A form of bank security under which the financial institution undertakes to pay when a complying demand is made in accordance with the guarantee instrument. Whether and when the owner is contractually entitled to make that demand is a separate question governed by the building contract and the security instrument.',
  },
  'fc-m10-eot': {
    definition: 'A contractual adjustment to the date for practical completion for a delay that qualifies under the relevant building contract. A delaying event does not automatically justify an EOT: the contract’s cause, notice, timing and assessment requirements must be satisfied.',
  },
  'fc-m10-eot-with-costs': {
    definition: 'An extension of time where the relevant building contract also gives the contractor a separate entitlement to delay-related costs. The grant of time does not by itself create a cost entitlement; both time and cost depend on the contract and the cause of delay.',
    examples: ['A principal-caused delay or variation may carry both time and cost consequences where the contract says so; always check the particular delay clause.'],
  },
  'fc-m10-eot-only': {
    definition: 'An extension of time that adjusts the date for practical completion without an accompanying entitlement to delay costs under the relevant contract.',
    examples: ['Acumen uses inclement weather as a common example of a delay that may attract time only, subject to the wording of the particular contract.'],
  },
  'fc-m10-critical-path-effect': {
    definition: 'The requirement, under the relevant contract and program logic, to show that a claimed delay affects the chain of critical activities leading to practical completion. A delaying event that only consumes available float and does not delay practical completion will not necessarily justify an EOT.',
  },
  'fc-m10-practical-completion': {
    definition: 'The contractual stage at which the works satisfy the particular contract’s requirements for practical completion and are fit for the intended occupation or use contemplated by that contract. Under ABIC, minor defects or incomplete items may remain if they do not unreasonably affect occupation or use and the other requirements are met.',
  },
  'fc-m11-final-completion': {
    definition: 'The post-practical-completion stage reached when the contractual requirements for final completion have been satisfied, including the relevant defects-liability obligations. Under an architect-administered contract such as ABIC, this leads to the final certification process and final release of security as the contract provides.',
    examples: ['The timing is contract-defined. It commonly follows expiry of a defects-liability period, which is often about 12 months, but should not be assumed without checking the contract.'],
  },
  'fc-m11-final-certificate': {
    definition: 'The final payment certificate issued in accordance with the building contract after the requirements for final completion have been satisfied. Under ABIC it has significant evidentiary effect as to completion of contractual obligations, subject to the exceptions stated in the contract.',
  },
  'fc-m10-liquidated-damages': {
    definition: 'A pre-agreed amount or rate stated in the building contract for specified delay, commonly where the contractor does not reach practical completion by the date for practical completion as properly adjusted. The contractual wording and applicable law control whether the amount is recoverable; it should be set by reference to the owner’s anticipated delay loss rather than treated as a punishment.',
  },
  'fc-m10-defects-liability-period': {
    definition: 'The contractually stated period beginning at practical completion during which the contractor must rectify defects for which it is responsible under the contract, such as defects in workmanship or construction-related material or equipment performance. It does not automatically transfer responsibility for design defects that fall outside the contractor’s own contractual design obligations, nor for normal wear, misuse or other excluded causes.',
  },
  'fc-m11-determinative-adr': {
    definition: 'A dispute-resolution process in which an independent decision-maker determines an outcome that binds the parties in the manner provided by the relevant process. Examples include arbitration, expert determination and adjudication under Security of Payment legislation; Acumen notes that an adjudication determination can be binding while underlying contractual rights may still later be pursued.',
  },
};
