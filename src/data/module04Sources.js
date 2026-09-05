export const MODULE04_DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1TOFgmbl80QIplG-eTVYDwat0DXyis8co';

export const MODULE04_SOURCES = {
  brief: { title: 'Brief', id: '1EgifWb4mmOmdYLfg45oFo3nR9J2AyJP8' },
  budget_estimates_overview: { title: 'Budget estimates - overview', id: '11vGwR1pnbAPZnXH6v_FnEgS7P1l1gJLe' },
  project_budget_management: { title: 'Project budget management', id: '15n1EE9yM3K4vH9niluUArpL14x0Lyr1f' },
  contingency_sum: { title: 'Contingency sum', id: '1WEYYaCeOJvBPyYr4MKDkM63jOtCo4su_' },
  prime_cost_provisional: { title: 'Prime cost items and provisional sums', id: '1gOUUzOlWfbtJ2RQh19oYbKy5qP_LsT--' },
  planning_application: { title: 'Planning/Development application', id: '1qnXYHxKG-tJVA-bDYy47yifkzZdPn2sg' },
  certificates_of_title: { title: 'Certificates of title', id: '1gYr3uYy6bsnYqWsE3C_2t6dw2FI68IDN' },
  variation_to_services: { title: 'Variation to services', id: '1Z6i7HFjhoydwrkPRbfD9qQcVs7f2DDfX' },
  consultant_selection: { title: 'Selection and engagement', id: '1xgq8JYUUo0LXJxsLM7cvaFW9lY36s2OM' },
  consultant_scope: { title: 'Specialist consultant scope and responsibility', id: '1Dg9lyYzd6bxWs_zWEnhenMUknUsmBc49' },
  consultant_design: { title: 'Specialist consultants during design and documentation', id: '1Mmv70dicf0suCnyO86_FIpNJDbOj_cEY' },
  project_feasibility: { title: 'Project feasibility', id: '17KHHCxgC9yJ6rUC6Gk0vIaszgtAukUqT' },
  value_management: { title: 'Value management', id: '15Wje7r2JPZPTpo9XPJXnz_qsyBLpFODl' },
  project_management: { title: 'Project management and project managers', id: '1fpYPMLhvt5GBi2TbWXJGprTa2HhM-tK-' },
  fire_engineering: { title: 'Fire safety engineering vs fire services engineering', id: '1r5N1FKZgKW8iAuS69iiKr2eib8s-GCq_' },
  time_warranties: { title: 'Time performance warranties', id: '1p-ZT3wuye5q9CaUBCU8LvqOg3EEgyjAr' },
  project_time_design: { title: 'Project time management in design and documentation', id: '1EE61DpUqyOMaYPbDxGG8CCA7ph_QQb6_' },
};

export function module04Source(key) {
  const source = MODULE04_SOURCES[key];
  if (!source) throw new Error(`Unknown Module 4 source: ${key}`);
  return {
    source: `Module 4 Acumen: ${source.title}`,
    sourceFileId: source.id,
    sourceUrl: `https://drive.google.com/file/d/${source.id}/view`,
    sourceCheckedOn: '2026-09-05',
  };
}
