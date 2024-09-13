export type RegistryTech = {
  path: string;
  key: string;
  name: string;
};

export type RegistryTechGroup = {
  id: number;
  key: string;
  groupName: string;
  techs: RegistryTech[];
};

const languages: RegistryTech[] = [
  {
    path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    key: "javascript",
    name: "JavaScript",
  },
  {
    path: "https://www.typescriptlang.org/",
    key: "typescript",
    name: "Typescript",
  },
  {
    path: "https://dart.dev/",
    key: "dart",
    name: "Dart",
  },
  {
    path: "https://www.python.org/",
    key: "python",
    name: "Python",
  },
  {
    path: "https://www.rust-lang.org/",
    key: "rust",
    name: "Rust",
  },
];

const frontEnd: RegistryTech[] = [
  {
    path: "https://nextjs.org/",
    key: "next_js",
    name: "Next.js",
  },
  {
    path: "https://react.dev/",
    key: "react_js",
    name: "React.js",
  },
  {
    path: "https://reactnative.dev/",
    key: "react_native",
    name: "React Native",
  },
  {
    path: "https://svelte.dev/",
    key: "svelte",
    name: "Svelte",
  },
  {
    path: "https://tailwindcss.com/",
    key: "tailwind_css",
    name: "Tailwind CSS",
  },
  {
    path: "https://www.material-tailwind.com/",
    key: "material_tailwind",
    name: "Material Tailwind",
  },
  {
    path: "https://styled-components.com/",
    key: "styled_components",
    name: "Styled Components",
  },
  {
    path: "https://stitches.dev/",
    key: "stitches",
    name: "Stitches",
  },
  {
    path: "https://ant.design/",
    key: "ant_design",
    name: "Ant Design",
  },
  {
    path: "https://ui.shadcn.com/",
    key: "shadcn_ui",
    name: "Shadcn UI",
  },
  {
    path: "https://mui.com/",
    key: "chakra_ui",
    name: "Material-UI",
  },
  {
    path: "https://v2.chakra-ui.com/",
    key: "material_ui",
    name: "Chakra UI",
  },
  {
    path: "https://www.radix-ui.com/",
    key: "radix_ui",
    name: "Radix UI",
  },
];

const backEnd: RegistryTech[] = [
  {
    path: "https://nodejs.org/pt",
    key: "node_js",
    name: "Node.js",
  },
  {
    path: "https://nestjs.com/",
    key: "nest_js",
    name: "Nest.js",
  },
  {
    path: "https://kita.js.org/",
    key: "kita_js",
    name: "Kita.js",
  },
  {
    path: "https://fastify.dev/",
    key: "fastify_js",
    name: "Fastify.js",
  },
  {
    path: "https://expressjs.com/pt-br/",
    key: "express_js",
    name: "Express.js",
  },
];

const orm: RegistryTech[] = [
  {
    path: "https://www.prisma.io/",
    key: "prisma",
    name: "Prisma",
  },
  {
    path: "https://orm.drizzle.team/",
    key: "drizzle",
    name: "Drizzle",
  },
];

const database: RegistryTech[] = [
  {
    path: "https://www.mysql.com/",
    key: "mysql",
    name: "MySQL",
  },
  {
    path: "https://www.mongodb.com/pt-br",
    key: "mongodb",
    name: "MongoDB",
  },
  {
    path: "https://www.postgresql.org/",
    key: "postgresql",
    name: "PostgreSQL",
  },
];

const cloud: RegistryTech[] = [
  {
    path: "https://firebase.google.com/?hl=pt",
    key: "firebase",
    name: "Firebase",
  },
  {
    path: "https://vercel.com/matheusscodes-projects",
    key: "vercel",
    name: "Vercel",
  },
  {
    path: "https://railway.app/",
    key: "railway",
    name: "Railway",
  },
];

const packageManagers: RegistryTech[] = [
  {
    path: "https://www.npmjs.com/",
    key: "npm",
    name: "npm",
  },
  {
    path: "https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable",
    key: "yarn",
    name: "yarn",
  },
  {
    path: "https://pnpm.io/pt/",
    key: "pnpm",
    name: "pnpm",
  },
];

const tools: RegistryTech[] = [
  {
    path: "https://code.visualstudio.com/",
    key: "visual_studio_code",
    name: "Visual Studio Code",
  },
  {
    path: "https://www.figma.com/",
    key: "figma",
    name: "Figma",
  },
  {
    path: "https://www.atlassian.com/br/software/jira",
    key: "jira",
    name: "Jira",
  },
  {
    path: "https://discord.com/",
    key: "discord",
    name: "Discord",
  },
  {
    path: "https://insomnia.rest/",
    key: "insomnia",
    name: "Insomnia",
  },
  {
    path: "https://www.postman.com/",
    key: "postman",
    name: "Postman",
  },
  {
    path: "https://workspace.google.com/intl/pt-BR/lp/meet/?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-BKWS-all-all-trial-e-dr-1707806-LUAC0013013&utm_content=text-ad-none-any-DEV_c-CRE_666243411577-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt-General-Meet-KWID_43700079569595329-kwd-803384527321&utm_term=KW_meeting%20google-ST_meeting%20google&gad_source=1&gclid=CjwKCAjwooq3BhB3EiwAYqYoEiDXAaGmA5JLRBKNnagmDKK346SMx2eXGCunjgcmoVGQGAGKu1VwSRoCTSgQAvD_BwE&gclsrc=aw.ds",
    key: "google_meet",
    name: "Google Meet",
  },
  {
    path: "https://teams.microsoft.com/v2/?clientexperience=t2",
    key: "microsoft_teams",
    name: "Microsoft Teams",
  },
];

const devOps: RegistryTech[] = [
  {
    path: "https://www.docker.com/",
    key: "docker",
    name: "Docker",
  },
];

const monitoringAndObservability: RegistryTech[] = [
  {
    path: "https://www.datadoghq.com/",
    key: "data_dog",
    name: "Datadog",
  },
];

export const registry_tech_stack: RegistryTechGroup[] = [
  {
    id: 1,
    key: "languages",
    groupName: "Languages",
    techs: languages,
  },
  {
    id: 2,
    key: "front_end",
    groupName: "Front End",
    techs: frontEnd,
  },
  {
    id: 3,
    key: "back_end",
    groupName: "Back End",
    techs: backEnd,
  },
  {
    id: 4,
    key: "monitoring_and_observability",
    groupName: "Monitoring and Observability",
    techs: monitoringAndObservability,
  },
  {
    id: 5,
    key: "orm",
    groupName: "ORM",
    techs: orm,
  },
  {
    id: 6,
    key: "database",
    groupName: "Database",
    techs: database,
  },
  {
    id: 7,
    key: "cloud",
    groupName: "Cloud",
    techs: cloud,
  },
  {
    id: 8,
    key: "devops",
    groupName: "DevOps",
    techs: devOps,
  },
  {
    id: 9,
    key: "tools",
    groupName: "Tools",
    techs: tools,
  },
  {
    id: 10,
    key: "package_managers",
    groupName: "Package Managers",
    techs: packageManagers,
  },
];
