export type Tech = {
  path: string;
  name: string;
  description: string;
};

export type TechGroup = {
  id: number;
  groupName: string;
  techs: Tech[];
};

const languages: Tech[] = [
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

const frontEnd: Tech[] = [
  {
    path: "nextjs-docs",
    name: "Next.js",
    description:
      "React framework for building static and dynamic web applications.",
  },
  {
    path: "react-docs",
    name: "React",
    description: "JavaScript library for building user interfaces.",
  },
  {
    path: "react-native-docs",
    name: "React Native",
    description:
      "JavaScript framework for creating native mobile apps using React.",
  },
  {
    path: "svelte-docs",
    name: "Svelte",
    description:
      "JavaScript framework for building user interfaces with a reactive approach.",
  },
  {
    path: "tailwindcss-docs",
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for building custom designs.",
  },
  {
    path: "material-tailwind-docs",
    name: "Material Tailwind",
    description:
      "CSS framework for building designs based on Material Design using Tailwind CSS.",
  },
  {
    path: "styled-components-docs",
    name: "Styled Components",
    description:
      "Library for styling React components using tagged template literals.",
  },
  {
    path: "stitches-docs",
    name: "Stitches",
    description: "CSS-in-JS library for styling React applications.",
  },
  {
    path: "ant-design-docs",
    name: "Ant Design",
    description:
      "React UI components library with a sleek and consistent visual style.",
  },
  {
    path: "shadcn-ui-docs",
    name: "Shadcn UI",
    description: "UI components library for React.",
  },
  {
    path: "material-ui-docs",
    name: "Material-UI",
    description: "React UI components library based on Material Design.",
  },
  {
    path: "chakra-ui-docs",
    name: "Chakra UI",
    description:
      "React UI components library focused on accessibility and simplicity.",
  },
  {
    path: "radix-ui-docs",
    name: "Radix UI",
    description:
      "High-quality React UI components library for modern applications.",
  },
];

const backEnd: Tech[] = [
  {
    path: "nodejs-docs",
    name: "Node.js",
    description:
      "Asynchronous JavaScript runtime environment based on Google's V8 engine.",
  },
  {
    path: "nestjs-docs",
    name: "Nest.js",
    description:
      "Progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
  },
  {
    path: "kitajs-docs",
    name: "Kita.js",
    description: "Minimalist JavaScript framework for building RESTful APIs.",
  },
  {
    path: "fastify-docs",
    name: "Fastify",
    description: "Fast and efficient web framework for Node.js.",
  },
  {
    path: "express-docs",
    name: "Express",
    description: "Minimalist and flexible Node.js web framework.",
  },
  {
    path: "typescript-docs",
    name: "TypeScript",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript.",
  },
];

const orm: Tech[] = [
  {
    path: "prisma-docs",
    name: "Prisma",
    description:
      "Modern and intuitive ORM (Object-Relational Mapping) for Node.js and TypeScript.",
  },
];

const database: Tech[] = [
  {
    path: "mysql-docs",
    name: "MySQL",
    description: "Open-source relational database management system.",
  },
  {
    path: "mongodb-docs",
    name: "MongoDB",
    description: "Document-oriented NoSQL database.",
  },
  {
    path: "postgres-docs",
    name: "PostgreSQL",
    description: "Open-source relational database management system.",
  },
  {
    path: "oracle-docs",
    name: "Oracle Database",
    description: "Relational database management system developed by Oracle.",
  },
];

const cloud: Tech[] = [
  {
    path: "firebase-docs",
    name: "Firebase",
    description: "Platform for mobile and web application development.",
  },
  {
    path: "vercel-docs",
    name: "Vercel",
    description:
      "Cloud computing platform that allows developers to deploy, scale, and manage web applications and APIs.",
  },
  {
    path: "railway-docs",
    name: "Railway",
    description:
      "Cloud development platform that enables simplified deployment and management of web applications and databases.",
  },
];

const packageManagers: Tech[] = [
  {
    path: "npm",
    name: "npm",
    description: "Standard package manager for the Node.js environment.",
  },
  {
    path: "yarn",
    name: "yarn",
    description: "Fast, reliable, and secure package manager for JavaScript.",
  },
  {
    path: "pnpm",
    name: "pnpm",
    description:
      "Fast, efficient package manager that uses disk space intelligently.",
  },
];

const tools: Tech[] = [
  {
    path: "vscode-docs",
    name: "Visual Studio Code",
    description: "Source code editor developed by Microsoft.",
  },
  {
    path: "figma-docs",
    name: "Figma",
    description: "Browser-based user interface design tool.",
  },
  {
    path: "jira-docs",
    name: "Jira",
    description: "Project management and issue tracking software.",
  },
  {
    path: "discord-docs",
    name: "Discord",
    description:
      "Voice, video, and text communication platform geared towards gamers.",
  },
  {
    path: "spotify-docs",
    name: "Spotify",
    description: "Digital music streaming service.",
  },
  {
    path: "insomnia-docs",
    name: "Insomnia",
    description: "REST client tool for testing APIs and software development.",
  },
  {
    path: "postman-docs",
    name: "Postman",
    description:
      "Collaboration platform for API development used by developers to build, test, and document APIs.",
  },
  {
    path: "google-meet-docs",
    name: "Google Meet",
    description: "Video conferencing platform developed by Google.",
  },
  {
    path: "teams-docs",
    name: "Microsoft Teams",
    description:
      "Collaboration and communication platform developed by Microsoft.",
  },
];

const devOps: Tech[] = [
  {
    path: "docker-docs",
    name: "Docker",
    description:
      "Platform for developing, shipping, and running applications in containers.",
  },
];

const monitoringAndObservability: Tech[] = [
  {
    path: "datadog-docs",
    name: "Datadog",
    description:
      "Platform for monitoring, observability, and analytics that provides comprehensive insights into application performance, logs, and metrics.",
  },
];

export const groupStack: TechGroup[] = [
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
