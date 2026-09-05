export const MODULE03_DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1HSUBG11Qh7xaC18rii8FXF4BkTn2H9J5';

export const MODULE03_SOURCES = {
  client_generated_agreements: { title: 'Client-generated agreements', id: '16fS1oOjsYE03akKwYkNMP-r8JAbiTlGo' },
  warranties_in_client_and_architect_agreements: { title: 'Warranties in client and architect agreements', id: '1Vk6OCxgoCUMkDdL4TX6IRq1lz5aVQyOz' },
  time_performance_warranties: { title: 'Time performance warranties', id: '1FEYQxAwpEdpERv_uZja5bVh2lQMSvUdf' },
  agreements: { title: 'Agreements', id: '1VGwfckfHZ5Zg5exwgD4W1qcKZW-AIu_V' },
  partial_services_agreements: { title: 'Partial services - agreements', id: '1bqbVsXuqousfjHYg9vPv0okMZfCn89l4' },
  partial_services_fees: { title: 'Partial services - fees', id: '1AK885QMIbsMEkWWPt4K8NBM_1dkzI31u' },
  promotion_via_proposals_and_tenders: { title: 'Promotion via proposals and tenders', id: '1nZG0pqPI_MXGJR6fM8-vj700EJxef9N0' },
  architect_selection_and_commissions: { title: 'Architect selection and commissions', id: '1Y5Hl9AdnCYXWNZXqI8xH14AM_pCj5N5i' },
  fee_calculation: { title: 'Fee calculation', id: '1c6-cPSMbnwAoDRTs_EY-BptuIm2zRwrO' },
  fees: { title: 'Fees', id: '1j9hx2SU5PANzxPkgNDLfsMILHpVg8rhG' },
  determining_fees_for_small_projects: { title: 'Determining fees for small projects', id: '1BJq4vPZo2DXe8oPml8uQz7sCTjAKrNGL' },
  low_fees_implication_for_practices: { title: 'Low fees - implication for practices', id: '1KYr3WQgKSvX2JE-pvaKnhIJcV4J8TXog' },
  architects_engaged_as_secondary_or_subconsultants: { title: 'Architects engaged as secondary or subconsultants', id: '1XuYTE3epVX0cpiZ8zLv6XsS7trjHgT4E' },
  communications: { title: 'Communications', id: '1cAJhsK_Phof-QMj-MXpI95dyY0oDpCuh' },
  project_time_management: { title: 'Project time management', id: '13YIppzDNGFgsEBUDhSUoudjKT3xlL9Ll' },
  contractual_liability: { title: 'Contractual liability', id: '1qXcZL2wAwPik5lW6_y1-rmpm8uQYMbEo' },
  legal_person: { title: 'Legal person', id: '1KonlazsI1xhWttAbMyotUq1VrAuGuIxe' },
  avoiding_personal_contracts: { title: 'Avoiding personal contracts', id: '1ntkMyE97t_5bTsdmHtw-OEzLOnV_eFyW' },
  fitness_for_purpose: { title: 'Fitness for purpose', id: '1tR3c6ZxbeIZ8BJhYmJI4HAvXQ7RM_NVR' },
  collateral_warranties: { title: 'Collateral warranties', id: '1eyIChzCSVbsyuiI9t_wH-YquYL7xcMVq' },
  client_and_architect_agreements: { title: 'Client and architect agreements', id: '1gG4YVlYEuQSSX67o2vFpBHvCBYYociXA' },
  charge_out_rate: { title: 'Charge-out rate', id: '1mRwGS40jKaIY2_Hf8GSreJ-Uq7PFZ_Uj' },
  salaries_and_overheads: { title: 'Salaries and overheads', id: '1FNfyOelbb3nCyk3A3nAPdRnlviN1IkAe' },
  profit_and_profitability: { title: 'Profit and profitability', id: '1rfZPL3TI6JeDtlvx4JcHXk26GNaWh8Ld' },
  architectural_competitions: { title: 'Architectural competitions', id: '1FZUkOfkXPaf-o_KRqeD5d8YyZAgzMyCI' },
  graduate_and_student_commissions: { title: 'Graduate and student commissions', id: '1F4f0unmmR-ywFMi6h-ypzv_FMJYENY6N' },
  core_architectural_services: { title: 'Core architectural services', id: '1xgclDl7GqYxaDn6RJnu39u5pcZiN4knE' },
  other_architectural_services: { title: 'Other architectural services', id: '1c1GqvmY4R9MFd_m3XOWgEU3R0t_pqXYp' },
  report_writing: { title: 'Report writing', id: '1h0gB8yFpTni3j2j6FhlbbTOznXQa52pJ' },
  project_feasibility: { title: 'Project feasibility', id: '19pJZ7Pxa30O5Cx4MqNBXvevmAOvwS76A' },
  record_documents: { title: 'Record documents', id: '1EXuklEmykFjrnX-s-D2MDnO1qFs4kH94' },
  quality_management: { title: 'Quality management', id: '1okEquGx_ToWMZml9Huhs_KIeLwOyQ6t5' },
  quality_management_system_qms_certification: { title: 'Quality Management System (QMS) certification', id: '11CONeZhQ5k_a2FLX8OsuO2I-UMUWDPnW' },
};

export function module03Source(key) {
  const source = MODULE03_SOURCES[key];
  if (!source) throw new Error(`Unknown Module 3 source: ${key}`);
  return {
    source: `Module 3 Acumen: ${source.title}`,
    sourceFileId: source.id,
    sourceUrl: `https://drive.google.com/file/d/${source.id}/view`,
    sourceCheckedOn: '2026-09-05',
  };
}
