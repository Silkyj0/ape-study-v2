import { SEED } from '../src/data/questions.js';
import { auditQuestionBank } from '../src/lib/audit.js';

const report = auditQuestionBank(SEED);
console.log('APE Study question-bank structural audit');
console.log('----------------------------------------');
console.log(`Questions: ${report.totalQuestions}`);
console.log(`Questions with answer keys: ${report.readyQuestions}`);
console.log(`Correct position: A ${report.positionCounts[0]} | B ${report.positionCounts[1]} | C ${report.positionCounts[2]} | D ${report.positionCounts[3]}`);
console.log(`Correct option is longest: ${report.correctLongest}/${report.readyQuestions} (${report.correctLongestPercent}%)`);
console.log(`High length outliers: ${report.lengthOutliers}`);
console.log(`Questions with structural flags: ${report.flagged.length}`);
console.log('');
console.log('By module');
for (const module of report.modules) {
  console.log(`M${String(module.moduleId).padStart(2, '0')}: ${module.total} questions | ${module.flagged} flagged | A/B/C/D ${module.positionCounts.join('/')}`);
}
