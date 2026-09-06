const SOURCE = {
  title: 'Novation.pdf',
  id: '11qITQqdMZYLl914u8lsPyF1OSark9ukI',
  url: 'https://drive.google.com/file/d/11qITQqdMZYLl914u8lsPyF1OSark9ukI/view',
};

function q(id, scenarioText, prompt, options, correct, explanation) {
  return {
    id,
    module: 6,
    scenarioText,
    prompt,
    options,
    correct,
    explanation,
    difficulty: 'exam',
    source: `Acumen — ${SOURCE.title}`,
    sourceKind: 'drive-reading',
    sourceFileId: SOURCE.id,
    sourceUrl: SOURCE.url,
    sourceCheckedOn: '2026-09-06',
  };
}

export const module06NovationQuestions = [
  q(
    'm6-nov-01',
    'An architect is initially engaged by the owner to develop a D&C project to tender. The agreement anticipates novation to the successful contractor after tender.',
    'What contractual change occurs at novation?',
    [
      'The owner is substituted by the contractor, forming the post-novation architect–contractor relationship on the agreed terms',
      'The architect becomes a subcontractor to the owner while the contractor remains outside the consultancy agreement',
      'The original client–architect contract continues unchanged and the contractor merely gains a right to issue informal requests',
      'The architect automatically becomes the independent superintendent under the head contract',
    ],
    0,
    'Novation substitutes the outgoing party with the incoming party. Typically the owner is replaced by the contractor while the architect continues under the novated consultancy arrangement.'
  ),
  q(
    'm6-nov-02',
    'A novation deed presented to an architect introduces warranties, removes the existing liability cap and expands site-observation obligations beyond the original engagement.',
    'What should the architect do before signing?',
    [
      'Accept the deed because novation necessarily overrides all previous risk allocations',
      'Treat the new obligations as a material risk change and obtain legal and PI-insurer review before agreeing',
      'Sign first so the project can proceed, then seek to restore the original protections after construction starts',
      'Rely on the contractor to decide whether the new warranties are insurable',
    ],
    1,
    'Acumen warns that novation can introduce additional, concurrent or uninsured liabilities. New terms should be reviewed by legal advisers and the architect’s PI insurer before acceptance.'
  ),
  q(
    'm6-nov-03',
    'After novation, the original principal asks the architect for direct monthly quality reports even though the novated agreement contains no transparent reporting protocol back to the principal.',
    'Which response best reflects the architect’s contractual position?',
    [
      'Continue reporting directly because the principal originally appointed the architect',
      'Provide the report only if the principal agrees to pay an additional fee directly to the architect',
      'Recognise that the architect is now responsible to the contractor and should not assume a continuing direct reporting duty to the former principal',
      'Refuse to record any quality concern because post-novation reporting creates automatic liability',
    ],
    2,
    'After novation the architect is responsible to the contractor and no longer has the original contractual duty to report directly to the principal unless the agreed arrangements provide otherwise.'
  ),
  q(
    'm6-nov-04',
    'A novated architect is asked to certify the contractor’s progress payments and practical completion under the same D&C contract in which the architect is engaged by that contractor.',
    'What is the principal concern?',
    [
      'The architect cannot attend site after novation under any circumstances',
      'The architect must obtain the principal’s verbal permission before issuing each certificate',
      'The architect may certify only if every consultant is also novated to the contractor',
      'Certification for the contractor creates a conflict of interest because the novated architect is not independent of the contractor',
    ],
    3,
    'The Novation reading says a novated architect should not certify contractor payments or practical completion because that would create a conflict of interest.'
  ),
];
