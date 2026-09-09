# Daily Study Timer

## Purpose

The app includes a persistent daily study-time tracker with a default target of **60 minutes per day**.

## Behaviour

- The collapsed timer remains visible as a floating progress bar throughout the app.
- The daily target is 60 minutes.
- Automatic tracking begins only after the learner first interacts with the app.
- Automatic tracking pauses after 5 minutes without interaction.
- Tracking pauses whenever the browser tab is hidden.
- A manual focus timer can be started for deliberate reading/review periods with little interaction.
- Daily progress is stored locally in the browser under `ape-study-daily-time-v1`.
- The expanded timer shows today's elapsed time, time remaining, seven-day history, number of goal days, weekly total and current goal streak.
- Today's recorded time can be reset manually.

## Files

- `src/lib/studyTimer.js` — persistence, local-day keys, formatting, history and streak calculations.
- `src/hooks/useDailyStudyTimer.js` — foreground-aware timer state and ticking.
- `src/components/DailyStudyBar.jsx` — persistent collapsed progress UI.
- `src/components/StudyTimerView.jsx` — expanded timer dashboard.
- `src/components/StudyTimerWidget.jsx` — floating widget, inactivity detection and auto-tracking controls.
- `src/main.jsx` — mounts the timer alongside the main application.

## Persistence note

Timer history is intentionally stored separately from MCQ/flashcard learning progress so frequent timer updates cannot overwrite study-answer progress. Timer data is currently browser-local and is not included in the app's progress export/import file.
