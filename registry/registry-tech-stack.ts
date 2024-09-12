export type RegistryTech = {
  path: string;
  name: string;
  description: string;
};

export type RegistryTechGroup = {
  id: number;
  groupName: string;
  techs: RegistryTech[];
};

const languages: RegistryTech[] = [
  {
    path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    name: "JavaScript",
    description: "Programming language for web development.",
  },
  {
    path: "https://www.typescriptlang.org/",
    name: "Typescript",
    description: "Superset of JavaScript with static typing.",
  },
  {
    path: "https://dart.dev/",
    name: "Dart",
    description: "Language optimized for mobile apps with Flutter. (Studying)",
  },
  {
    path: "https://www.python.org/",
    name: "Python",
    description: "Versatile language with clear syntax. (Studying)",
  },
  {
    path: "https://www.rust-lang.org/",
    name: "Rust",
    description: "Versatile language with clear syntax. (Studying)",
  },
];

const frontEnd: RegistryTech[] = [
  {
    path: "https://nextjs.org/",
    name: "Next.js",
    description:
      "React framework for building static and dynamic web applications.",
  },
  {
    path: "https://react.dev/",
    name: "React.js",
    description: "JavaScript library for building user interfaces.",
  },
  {
    path: "https://reactnative.dev/",
    name: "React Native",
    description:
      "JavaScript framework for creating native mobile apps using React.",
  },
  {
    path: "https://svelte.dev/",
    name: "Svelte",
    description:
      "JavaScript framework for building user interfaces with a reactive approach.",
  },
  {
    path: "https://tailwindcss.com/",
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for building custom designs.",
  },
  {
    path: "https://www.material-tailwind.com/",
    name: "Material Tailwind",
    description:
      "CSS framework for building designs based on Material Design using Tailwind CSS.",
  },
  {
    path: "https://styled-components.com/",
    name: "Styled Components",
    description:
      "Library for styling React components using tagged template literals.",
  },
  {
    path: "https://stitches.dev/",
    name: "Stitches",
    description: "CSS-in-JS library for styling React applications.",
  },
  {
    path: "https://ant.design/",
    name: "Ant Design",
    description:
      "React UI components library with a sleek and consistent visual style.",
  },
  {
    path: "https://ui.shadcn.com/",
    name: "Shadcn UI",
    description: "UI components library for React.",
  },
  {
    path: "https://mui.com/",
    name: "Material-UI",
    description: "React UI components library based on Material Design.",
  },
  {
    path: "https://v2.chakra-ui.com/",
    name: "Chakra UI",
    description:
      "React UI components library focused on accessibility and simplicity.",
  },
  {
    path: "https://www.radix-ui.com/",
    name: "Radix UI",
    description:
      "High-quality React UI components library for modern applications.",
  },
];

const backEnd: RegistryTech[] = [
  {
    path: "https://nodejs.org/pt",
    name: "Node.js",
    description:
      "Asynchronous JavaScript runtime environment based on Google's V8 engine.",
  },
  {
    path: "https://nestjs.com/",
    name: "Nest.js",
    description:
      "Progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
  },
  {
    path: "https://kita.js.org/",
    name: "Kita.js",
    description: "Minimalist JavaScript framework for building RESTful APIs.",
  },
  {
    path: "https://fastify.dev/",
    name: "Fastify.js",
    description: "Fast and efficient web framework for Node.js.",
  },
  {
    path: "https://expressjs.com/pt-br/",
    name: "Express.js",
    description: "Minimalist and flexible Node.js web framework.",
  },
];

const orm: RegistryTech[] = [
  {
    path: "https://www.prisma.io/",
    name: "Prisma",
    description:
      "Modern and intuitive ORM (Object-Relational Mapping) for Node.js and TypeScript.",
  },
  {
    path: "https://orm.drizzle.team/",
    name: "Drizzle",
    description:
      "A collection of front-end libraries that make developing dApps easier by managing the state and interactions with smart contracts.",
  },
];

const database: RegistryTech[] = [
  {
    path: "https://www.mysql.com/",
    name: "MySQL",
    description: "Open-source relational database management system.",
  },
  {
    path: "https://www.mongodb.com/pt-br",
    name: "MongoDB",
    description: "Document-oriented NoSQL database.",
  },
  {
    path: "https://www.postgresql.org/",
    name: "PostgreSQL",
    description: "Open-source relational database management system.",
  },
  {
    path: "https://www.oracle.com/br/database/",
    name: "Oracle Database",
    description: "Relational database management system developed by Oracle.",
  },
];

const cloud: RegistryTech[] = [
  {
    path: "https://firebase.google.com/?hl=pt",
    name: "Firebase",
    description: "Platform for mobile and web application development.",
  },
  {
    path: "https://vercel.com/matheusscodes-projects",
    name: "Vercel",
    description:
      "Cloud computing platform that allows developers to deploy, scale, and manage web applications and APIs.",
  },
  {
    path: "https://railway.app/",
    name: "Railway",
    description:
      "Cloud development platform that enables simplified deployment and management of web applications and databases.",
  },
];

const packageManagers: RegistryTech[] = [
  {
    path: "https://www.npmjs.com/",
    name: "npm",
    description: "Standard package manager for the Node.js environment.",
  },
  {
    path: "https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable",
    name: "yarn",
    description: "Fast, reliable, and secure package manager for JavaScript.",
  },
  {
    path: "https://pnpm.io/pt/",
    name: "pnpm",
    description:
      "Fast, efficient package manager that uses disk space intelligently.",
  },
];

const tools: RegistryTech[] = [
  {
    path: "https://code.visualstudio.com/",
    name: "Visual Studio Code",
    description: "Source code editor developed by Microsoft.",
  },
  {
    path: "https://www.figma.com/",
    name: "Figma",
    description: "Browser-based user interface design tool.",
  },
  {
    path: "https://www.atlassian.com/br/software/jira",
    name: "Jira",
    description: "Project management and issue tracking software.",
  },
  {
    path: "https://discord.com/",
    name: "Discord",
    description:
      "Voice, video, and text communication platform geared towards gamers.",
  },
  {
    path: "https://insomnia.rest/",
    name: "Insomnia",
    description: "REST client tool for testing APIs and software development.",
  },
  {
    path: "https://www.postman.com/",
    name: "Postman",
    description:
      "Collaboration platform for API development used by developers to build, test, and document APIs.",
  },
  {
    path: "https://workspace.google.com/intl/pt-BR/lp/meet/?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-BKWS-all-all-trial-e-dr-1707806-LUAC0013013&utm_content=text-ad-none-any-DEV_c-CRE_666243411577-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt-General-Meet-KWID_43700079569595329-kwd-803384527321&utm_term=KW_meeting%20google-ST_meeting%20google&gad_source=1&gclid=CjwKCAjwooq3BhB3EiwAYqYoEiDXAaGmA5JLRBKNnagmDKK346SMx2eXGCunjgcmoVGQGAGKu1VwSRoCTSgQAvD_BwE&gclsrc=aw.ds",
    name: "Google Meet",
    description: "Video conferencing platform developed by Google.",
  },
  {
    path: "https://teams.microsoft.com/v2/?clientexperience=t2",
    name: "Microsoft Teams",
    description:
      "Collaboration and communication platform developed by Microsoft.",
  },
];

const devOps: RegistryTech[] = [
  {
    path: "https://www.docker.com/",
    name: "Docker",
    description:
      "Platform for developing, shipping, and running applications in containers.",
  },
];

const monitoringAndObservability: RegistryTech[] = [
  {
    path: "https://www.datadoghq.com/",
    name: "Datadog",
    description:
      "Platform for monitoring, observability, and analytics that provides comprehensive insights into application performance, logs, and metrics.",
  },
];

export const registry_tech_stack: RegistryTechGroup[] = [
  {
    id: 1,
    groupName: "Languages",
    techs: languages,
  },
  {
    id: 2,
    groupName: "Front End",
    techs: frontEnd,
  },
  {
    id: 3,
    groupName: "Back End",
    techs: backEnd,
  },
  {
    id: 4,
    groupName: "Monitoring and Observability",
    techs: monitoringAndObservability,
  },
  {
    id: 5,
    groupName: "ORM",
    techs: orm,
  },
  {
    id: 6,
    groupName: "Database",
    techs: database,
  },
  {
    id: 7,
    groupName: "Cloud",
    techs: cloud,
  },
  {
    id: 8,
    groupName: "DevOps",
    techs: devOps,
  },
  {
    id: 9,
    groupName: "Tools",
    techs: tools,
  },
  {
    id: 10,
    groupName: "Package Managers",
    techs: packageManagers,
  },
];
