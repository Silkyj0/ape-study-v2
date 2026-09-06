# Acumen Flashcard Source Audit

## Scope

Initial flashcard release implemented 7 September 2026.

The flashcard bank is deliberately separate from the MCQ seed and follows a stricter source rule: **definitions, distinctions and examples must come from the supplied Acumen readings. General knowledge is not used to fill gaps.**

Current seed: `FLASHCARD_SEED_VERSION = 1`

Current total: **30 source-verified flashcards**.

| Module | Cards | Main coverage |
| --- | ---: | --- |
| M6 | 13 | procurement, novation, PPRs, shop drawings |
| M9 | 10 | contract sums, variations, progress payments, security |
| M10 | 5 | EOTs, critical-path effect, practical completion |
| M11 | 2 | final completion and final certificate |

## Supplied Acumen readings used

### Procurement - alternative methods
Cards derived from the supplied reading:

- Negotiated contract
- Cost-plus contract
- Construction management
- Managing contractor
- Two-stage tender
- Alliancing
- Public Private Partnership (PPP)
- Design and construct
- Turnkey
- Early Contractor Involvement (ECI)

### Novation
Cards derived from the supplied reading:

- Novation
- Principal’s Project Requirements (PPR)

### Shop drawings
Cards derived from the supplied reading:

- Shop drawings

### Prime cost items and provisional sums
Cards derived from the supplied reading:

- Prime cost item
- Provisional sum

The examples on these cards preserve the supplied reading’s own examples. In particular, the initial Provisional Sum card uses joinery/service-connection examples rather than introducing unrelated examples from general construction knowledge.

### Contingency sum
Cards derived from the supplied reading:

- Contingency sum

### Client note: Variations to construction scope
Cards derived from the supplied reading:

- Variation

### Progress payments
Cards derived from the supplied reading:

- Progress payment
- Set-off

### Security – bank guarantees and cash retention
Cards derived from the supplied reading:

- Security
- Cash retention
- Unconditional guarantee
- Surety bond

### Extensions of time
Cards derived from the supplied reading:

- Extension of time (EOT)
- EOT with costs
- EOT only
- Critical-path effect

### Practical completion
Cards derived from the supplied reading:

- Practical completion

### Final completion and certificate
Cards derived from the supplied reading:

- Final completion
- Final certificate

## Flashcard writing standard

1. Use a supplied Acumen reading as the source of truth.
2. Keep the front to one recall target: a term or tightly defined concept.
3. The back should use a concise source-faithful paraphrase rather than adding broader legal or industry commentary.
4. Examples are optional and must be supported by the same supplied reading.
5. Record the exact Acumen reading title and the relevant section on every card.
6. If a term appears important but the supplied reading does not define it sufficiently, withhold the card until a suitable supplied source is located.
7. Do not silently import definitions from legislation, standards, websites, textbooks, existing MCQ explanations or general model knowledge.
8. When the Acumen reading frames a proposition as a general rule or contract-specific point, preserve that qualification.
9. New cards should receive stable seed IDs so progress survives wording refinements and bank expansion.
10. Quality is more important than card volume.

## Learning behaviour

- Front shows the term only, with module/topic context.
- User attempts recall before tapping to flip.
- Back shows definition, source-supported examples where useful, Acumen reading title and section.
- **Knew it:** advances recall streak; spaced roughly 1, 3, 7 and 14 days.
- **Unsure:** returns in about 12 hours and does not receive a full mastery advance.
- **Didn’t know:** returns in about 4 hours and can reappear after several cards in the same session, up to two retries.
- Three consecutive `Knew it` ratings = mastered.
- Flashcard mastery is stored independently from MCQ mastery.

## Next content work

Expand the bank module-by-module by inspecting the supplied PARC Acumen reading pathways and then the actual linked Acumen PDFs. Do not create cards merely from the pathway headings; the underlying supplied reading must contain enough text to source the definition or distinction.
