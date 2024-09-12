export type RegistryJob = (typeof registry_jobs)[0];

export const registry_jobs_columns: string[] = [
  "Company",
  "Office",
  "Beginning and end",
] as const;

export const registry_jobs = [
  {
    id: 1,
    company: "Ream",
    office: "JR Software Engineer",
    beginning_and_end: "01/24 - Actual",
    route: "https://ream.com.br/",
  },
  {
    id: 2,
    company: "H.A.M",
    office: "JR Fullstack Developer",
    beginning_and_end: "04/23 - 07/2024",
    route: "https://ham.org.br/",
  },
  {
    id: 3,
    company: "Trixx",
    office: "TR Frontend Developer",
    beginning_and_end: "04/23 - 07/2024",
    route: "https://www.trixxtem.com.br/",
  },
];
