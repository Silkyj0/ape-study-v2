# Adaptive learning model

Implemented September 2026 for the APE Part 2 study app.

## Goals

The study engine prioritises retention rather than simply stepping through every question in a module.

Core behaviours:

1. **Consecutive correct answers snooze a question progressively**
   - 1 correct in a row → review in 1 day
   - 2 correct in a row → review in 3 days
   - 3 correct in a row → review in 7 days and treat as mastered
   - 4+ correct in a row → review in 14 days

2. **Wrong answers return quickly**
   - a missed question is reinserted after approximately five other cards in the same session;
   - it can be reinserted up to twice in one session if missed repeatedly;
   - after a miss it is also due again approximately four hours later;
   - a wrong answer resets the consecutive-correct streak.

3. **Correct-but-uncertain answers can be marked `I guessed / not confident`**
   - the answer remains correct for accuracy;
   - the mastery-streak advancement from that attempt is undone;
   - the question returns in approximately 12 hours instead of receiving a long snooze;
   - a low-confidence signal is recorded and contributes to question priority and weak-area detection.

   This distinguishes secure recall from a correct answer reached by luck, elimination or uncertain recall.

4. **Sessions are intentionally limited**
   - module/adaptive review sessions: up to 20 cards;
   - mixed verified exam-bank sessions: up to 25 cards;
   - focus-area sessions: up to 15 cards.

   Due review questions are prioritised. Remaining capacity is filled with unseen questions. Questions that are not yet due stay snoozed.

5. **Weak-area detection**
   - each question is assigned a learning topic from its retained source reading;
   - the dashboard aggregates recent results by topic;
   - a topic is not flagged until there is enough attempt data;
   - low recent accuracy, repeated misses, multiple lapses and repeated low-confidence correct answers increase its focus score;
   - the highest-scoring weak areas are shown in the Stats dashboard and can launch a dedicated focus session.

6. **Progress data retained per question**
   - lifetime attempts and correct answers;
   - consecutive-correct streak;
   - lapse count;
   - last eight results;
   - recent confidence signals and low-confidence count;
   - most recent result, confidence mark and answer time;
   - next due time;
   - learning topic.

## Migration policy

Existing lifetime progress is retained. Historical consecutive-answer streaks cannot be reconstructed accurately from aggregate counts, so no streak is invented during migration. A real streak starts from the learner's next answer. Existing level/due data remains available for continuity.

## Presentation

Question and answer order remain shuffled. Same-session retry cards receive a fresh answer order so the learner cannot rely on remembered answer position.

## PARCS calibration workflow

Sample-question calibration continues in order:

**M5 → M6 → M7 → M8 → M9 → M10 → M11**

For each module:

1. user supplies the sample questions in chat;
2. answer them blind from that module's supplied readings without opening stored answer-key material;
3. user confirms the official PARCS key;
4. compare blind answers with the key and extract any PARCS-specific reasoning rules;
5. audit the authored module bank for those rules;
6. add the supplied samples as immutable `parcs-confirmed` questions with the confirmed key;
7. bump the seed version and verify production before moving to the next module.

## Potential future refinements

Useful additions to consider after observing real study data:
- a final-review mode in the days immediately before the APE;
- topic heatmaps over time;
- separate first-attempt accuracy from retry accuracy;
- optional session-length controls.
