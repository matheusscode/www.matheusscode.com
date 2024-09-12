export type RegistryCurriculum = typeof registry_curriculum;

export const registry_curriculum = {
  role: "Software Engineer",
  name: "Matheus dos Santos Figueiredo",
  phone: "(92) 99982-7649",
  email: "matheussdev3@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/matheussfigueiredo/",
    github: "https://github.com/matheusscode",
  },
  updated_at: new Date().toISOString(),
  bio: "I am passionate about continuous learning and have experience developing modular, scalable, and high-performance applications. I have worked with various technologies and am always seeking new challenges to enhance my skills.",
  education: [
    {
      id: 1,
      school: "UFAM - Federal University of Amazonas",
      period: "Scheduled for 2025",
      course: "Software Engineering Course",
    },
    {
      id: 2,
      school: "Nathália Uchôa State School",
      period: "2020 - 2021",
      course: "High School",
    },
  ],
  experiences: [
    {
      id: 1,
      company: "Ream (Refinaria de Manaus)",
      locale: "Amazonas, Brazil",
      title: "Software Engineer",
      description:
        "Developed applications using React, TypeScript, Jest, Material UI, IoC, Next.js, React Native, Data Dog, and Feature Flags.",
      stack:
        "React, TypeScript, Jest, Material UI, IoC, Next.js, React Native, Data Dog, Feature Flags",
      date: "2024 - Today",
    },
    {
      id: 2,
      company: "H.A.M (Hospital Adventista de Manaus)",
      locale: "Amazonas, Brazil",
      title: "Software Engineer and Systems Analyst",
      description:
        "Worked with React, TypeScript, Jest, ChakraUI, Next.js, OracleDB, Node.js, Express.js, JavaScript, PostgreSQL, React Native, and Styled Components.",
      stack:
        "React, TypeScript, Jest, ChakraUI, Next.js, OracleDB, Node.js, Express.js, JavaScript, PostgreSQL, React Native, Styled Components",
      date: "2023 - 2024",
    },
    {
      id: 3,
      company: "Trixx - Tecnologia e Marketing",
      locale: "São Paulo, Brazil",
      title: "Front End Developer",
      description:
        "Developed user interfaces using React, TypeScript, ChakraUI, Next.js, Styled Components, React Native, and TailwindCSS.",
      stack:
        "React, TypeScript, ChakraUI, Next.js, Styled Components, React Native, TailwindCSS",
      date: "2023",
    },
  ],
};
