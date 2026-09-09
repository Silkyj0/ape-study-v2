export const CAA2024_SOURCE = {
  name: 'CAA2024 — Client Architect Agreement',
  fileId: '1U7EYkpAml2d0lNOEf6jWmtZyaP7NDFpn',
  url: 'https://drive.google.com/file/d/1U7EYkpAml2d0lNOEf6jWmtZyaP7NDFpn/view?usp=drivesdk',
  checkedOn: '2026-09-10',
};

// This map intentionally contains only provisions positively verified in the supplied
// caa2024_fullservices_digital.pdf. It is not padded with guessed headings or clause numbers.
export const CAA2024_SECTIONS = [
  { id: 'A', title: 'Services' },
  { id: 'B', title: 'Client obligations' },
  { id: 'C', title: 'Administration' },
  { id: 'D', title: 'Fees' },
  { id: 'E', title: 'Specialist consultants' },
  { id: 'F', title: 'Intellectual property & other rights' },
  { id: 'G', title: 'Insurances and liability' },
  { id: 'J', title: 'Dispute resolution' },
  { id: 'K', title: 'Termination' },
  { id: 'M', title: 'Definitions' },
];

export const CAA2024_PROVISIONS = [
  { ref: 'Front page', title: 'Parties, project, site and initial Cost of Works forecast' },
  { ref: 'A1', title: "Architect's obligations" },
  { ref: 'A2', title: 'Services or responsibilities not included' },
  { ref: 'A3', title: 'The Cost of Works' },
  { ref: 'A4', title: 'Program of Services' },
  { ref: 'A5', title: 'Protracted Services' },
  { ref: 'A6', title: 'Suspended Services' },
  { ref: 'Section B', title: 'Client obligations' },
  { ref: 'Section C', title: 'Administration and authorised representatives' },
  { ref: 'D1', title: 'Fees payable' },
  { ref: 'D2', title: 'Submitting claims' },
  { ref: 'D3', title: 'Paying claims' },
  { ref: 'D4', title: 'Percentage fee' },
  { ref: 'D5', title: 'Lump sum fee' },
  { ref: 'D6', title: 'Time-based rate fee' },
  { ref: 'D7', title: 'Disbursements' },
  { ref: 'D8', title: 'Change to the Services' },
  { ref: 'E1', title: 'Specialist Consultant engagement' },
  { ref: 'E2', title: 'Additional Specialist Consultants' },
  { ref: 'F1', title: 'Copyright' },
  { ref: 'F2', title: 'Moral Rights' },
  { ref: 'F3', title: 'Indemnity for specific breaches of section F' },
  { ref: 'F4', title: 'Electronic Data Transfer' },
  { ref: 'F5', title: 'Building Information Modelling' },
  { ref: 'G1', title: 'Insurances' },
  { ref: 'Section J', title: 'Dispute resolution' },
  { ref: 'K1', title: "Termination for the Client's breach" },
  { ref: 'K2', title: 'Termination, without reason' },
  { ref: 'K3', title: "Termination for the Architect's breach" },
  { ref: 'K4', title: 'Consequences and procedure following termination' },
  { ref: 'Section M', title: 'Defined terms' },
];

export const CAA2024_SCHEDULES = [
  { ref: 'Schedule A', title: 'Services schedule' },
  { ref: 'Schedule B', title: 'Commercial and project items' },
];

export const CAA2024_ITEMS = [
  { ref: 'Item 1', title: 'Fee basis and allocation' },
  { ref: 'Item 2', title: 'Time-based rates' },
  { ref: 'Item 3', title: 'Disbursements and related charges' },
  { ref: 'Item 4', title: 'Specialist Consultants and engagement responsibility' },
  { ref: 'Item 5', title: 'Form of attribution' },
  { ref: 'Item 6', title: 'Insurance values' },
  { ref: 'Item 7A', title: 'Period for payment of claims' },
  { ref: 'Item 7B', title: 'Interest rate on overdue payments' },
];

export const CAA2024_DEFINITION_REFS = [
  'Definition: Code of Practice',
  'Definition: Cost of Works',
  'Definition: Disbursements',
  'Definition: Fee',
  'Definition: Project',
  'Definition: Services',
  'Definition: Site',
  'Definition: Specialist Consultant',
  'Definition: The Design',
  'Definition: Total Project Cost',
];

const VALID_REFS = new Set([
  ...CAA2024_PROVISIONS.map((item) => item.ref),
  ...CAA2024_SCHEDULES.map((item) => item.ref),
  ...CAA2024_ITEMS.map((item) => item.ref),
  ...CAA2024_DEFINITION_REFS,
]);

export function isValidCaa2024Ref(ref) {
  return VALID_REFS.has(ref);
}
