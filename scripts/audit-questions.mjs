import { SEED } from '../src/data/questions.js';
import { auditQuestionBank } from '../src/lib/audit.js';

const report = auditQuestionBank(SEED);
const authored = SEED.filter((q) => ['source-audited', 'drive-source-verified', 'parc-external-verified'].includes(q.qaStatus));
const authoredReport = auditQuestionBank(authored);

console.log('APE Study question-bank QA audit');
console.log('--------------------------------');
console.log(`Live seed questions: ${report.totalQuestions}`);
console.log(`Questions with answer keys: ${report.readyQuestions}`);
console.log(`PARCS confirmed: ${report.qaCounts['parcs-confirmed'] || 0}`);
console.log(`Source-audited rewrites: ${report.qaCounts['source-audited'] || 0}`);
console.log(`Drive source verified: ${report.qaCounts['drive-source-verified'] || 0}`);
console.log(`PARC external source verified: ${report.qaCounts['parc-external-verified'] || 0}`);
console.log(`Legacy placeholders: ${report.qaCounts['legacy-placeholder'] || 0}`);
console.log(`User/source QA flags: ${report.informationFlagged.length}`);
console.log('');
console.log('Authored/verified exam-bank structural audit');
console.log(`Questions: ${authoredReport.totalQuestions}`);
console.log(`Correct position: A ${authoredReport.positionCounts[0]} | B ${authoredReport.positionCounts[1]} | C ${authoredReport.positionCounts[2]} | D ${authoredReport.positionCounts[3]}`);
console.log(`Correct option is longest: ${authoredReport.correctLongest}/${authoredReport.readyQuestions} (${authoredReport.correctLongestPercent}%)`);
console.log(`High length outliers: ${authoredReport.lengthOutliers}`);
console.log(`Questions with structural flags: ${authoredReport.flagged.length}`);
console.log('');
console.log('By module');
for (const module of report.modules) {
  console.log(`M${String(module.moduleId).padStart(2, '0')}: ${module.total} questions | ${module.flagged} structural | ${module.informationFlagged} info-QA | A/B/C/D ${module.positionCounts.join('/')}`);
}

if (report.userFlagged.length) {
  console.log('');
  console.log('User-flagged review queue');
  for (const question of report.userFlagged) {
    console.log(`- M${question.moduleId} ${question.seedId || question.id}: ${question.prompt}`);
  }
}
