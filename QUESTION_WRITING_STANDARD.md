# APE Study — Question Writing Standard v2

This standard applies to all new seed questions and to the progressive re-audit of the existing bank.

## 1. Source discipline is non-negotiable

- Write questions only from source text actually available in the working conversation/project: uploaded Acumen readings, PARCS materials, answer keys, or other source documents explicitly supplied for the study bank.
- Do not invent statutory details, case law, clause wording, numerical thresholds, dates, or legal propositions from memory.
- Australian law/case law only, with Queensland-specific material preferred where the source supports it.
- Every seed question must retain a precise `source` field.
- If the relevant reading is unavailable, record a gap; do not fill it from general knowledge.

## 2. Target difficulty

Every authored question should be explicitly classified:

- `foundation`: verifies an essential rule, definition, role, or distinction. Useful for early learning but should still have plausible distractors.
- `exam`: default target. Requires discrimination between plausible alternatives and typically applies a source principle rather than simply recalling a phrase.
- `challenge`: deliberately close alternatives, competing propositions, or multi-step application. The best answer must still be unambiguous from the supplied source.

Existing unrevised questions remain `unrated` until deliberately reviewed.

## 3. No answer-position clue

Authoring should not favour A, B, C, or D. Across a batch, correct source positions should be approximately balanced.

The application also shuffles presentation order at runtime and balances correct presentation positions across each study session. This is a second line of defence; it does not excuse biased authoring.

## 4. No answer-length clue

The correct answer must not routinely be identifiable because it is longer, more qualified, or more professionally written.

As a default:

- keep all four options in a similar grammatical form;
- keep them within a broadly comparable length range;
- avoid putting a mini-explanation inside only the correct option;
- put explanatory nuance in the post-answer `explanation`, not in the answer choice itself.

Long answers are allowed where the concept genuinely requires them, but competing distractors should be equally specific.

## 5. Distractors must be plausible

Every distractor should represent a mistake a reasonably prepared APE candidate could make.

Good distractor sources include:

- the right principle applied to the wrong party;
- the right obligation at the wrong stage or time;
- a neighbouring contractual mechanism;
- confusing architect, client, contractor, superintendent/contract administrator, consultant, regulator, or insurer responsibilities;
- confusing entitlement with procedure;
- confusing an obligation with recommended good practice;
- a correct statement that does not answer the question asked;
- a partially correct answer missing a necessary condition;
- a nearby procurement, tendering, contract-administration, copyright, liability, or registration concept from the same supplied reading.

Avoid joke answers, absolutes that are obviously false, and options a novice can eliminate without understanding the topic.

## 6. Prefer application over recognition

Where the source permits, prefer:

> facts → professional decision → best answer

rather than:

> terminology → definition

Standalone knowledge questions remain useful for foundational material, but the overall bank should increasingly test professional judgment and application.

## 7. PARCS-style scenarios are the model

For scenario-heavy material, especially Modules 6–11:

- provide one realistic `scenarioText`;
- ask several short question stems from that scenario;
- avoid repeating all facts in each stem;
- vary what is being tested: responsibility, sequence, entitlement, communication, documentation, timing, risk, and consequence;
- make each set feel like the supplied PARCS samples rather than four independent trivia questions.

## 8. Competing true propositions are allowed

Difficulty can come from having more than one option that sounds broadly correct. However, only one answer may be the best response to the exact facts and wording.

Use stems such as:

- “The architect should first…”
- “The most appropriate response is…”
- “Which statement best describes…”
- “The client is entitled to…”
- “Before doing X, the architect should…”

Do not use ambiguity as difficulty. The source must support why the keyed answer is superior.

## 9. Remove linguistic tells

Audit for clues such as:

- correct answer repeats unusual wording from the stem;
- correct answer is the only option with a statute/clause citation;
- correct answer is the only qualified answer while distractors are categorical;
- only one option uses professional terminology;
- correct answer is consistently more detailed;
- “always”, “never”, “automatically”, or other obvious absolutes appear mainly in distractors;
- three options form one grammatical pattern and the correct answer forms another.

## 10. Explanations come after the decision

The answer choice should test the candidate. The explanation should teach them.

A good explanation should:

1. state why the correct option is correct;
2. identify the decisive fact/rule;
3. briefly explain why the closest distractor fails where useful;
4. stay within what the cited source supports.

## 11. Batch quality gate

Before a new batch is merged into the seed bank:

- verify every answer against the supplied source;
- audit jurisdiction;
- check stable IDs;
- check duplicates/near-duplicates;
- check correct-answer distribution;
- check option-length outliers;
- check that distractors are plausible;
- check scenario questions against the style of supplied PARCS samples;
- prefer fewer strong questions over padding the bank.

Run `npm run audit` for structural checks. Structural flags are prompts for human/source review; they must never automatically rewrite legal content.

## 12. Progressive re-audit of Modules 1 and 2

Do not bulk-rewrite the existing bank mechanically. Work reading-by-reading or scenario-by-scenario using the original source material. Preserve stable question IDs where the concept is unchanged so study progress survives. Use a new ID when a question is replaced with a materially different concept.
