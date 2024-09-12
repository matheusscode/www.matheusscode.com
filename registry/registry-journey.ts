import { JourneyDataProps } from "@/ui/journey/journey-post-card";

type Journey = {
  id: number;
  date: string;
  content: JourneyDataProps;
};

export const journey: Journey[] = [
  {
    id: 1,
    date: "2024",
    content: {
      title: "Desenvolvendo Soluções com Push Notifications",
      description:
        "Comecei a projetar um produto focado em push notifications. Foi o início de uma nova e desafiadora jornada na REAM, onde estou aprendendo e contribuindo de maneiras incríveis.",
    },
  },
  {
    id: 2,
    date: "2024",
    content: {
      title: "Um Novo Começo na REAM",
      description:
        "Realizei o sonho de entrar para a REAM, a empresa que sempre admirei. Agora faço parte de um time fantástico, pronto para novos desafios!",
    },
  },
  {
    id: 3,
    date: "2023",
    content: {
      title: "Convite Especial para Trabalhar com Meu Irmão",
      description:
        "Fui convidado para participar de uma entrevista na empresa do meu irmão. Foi uma oportunidade única de aliar trabalho e família em um projeto inovador.",
      picture: "",
    },
  },
  {
    id: 4,
    date: "2023",
    content: {
      title: "Conquista no HAM",
      description:
        "Após muito esforço e dedicação, conquistei meu lugar no Hospital Adventista de Manaus (HAM). Foi um grande desafio superar as barreiras da inexperiência e juventude.",
    },
  },
  {
    id: 5,
    date: "2023",
    content: {
      title: "Primeira Entrevista de Emprego",
      description:
        "Participei de entrevistas para duas grandes oportunidades: uma no Hospital Adventista de Manaus e outra no Grupo ICTS. Ambas foram experiências enriquecedoras e desafiadoras.",
    },
  },
  {
    id: 6,
    date: "2023",
    content: {
      title: "Liderança em Projeto de Gestão Financeira",
      description:
        "Assumi o papel de líder de Front-End em um projeto de gestão financeira. Foi uma grande responsabilidade que me proporcionou muito crescimento profissional.",
    },
  },
  {
    id: 7,
    date: "2023",
    content: {
      title: "Desafio Técnico Superado",
      description:
        "Passei com sucesso em uma entrevista técnica para uma posição de desenvolvimento front-end após demonstrar minhas habilidades em um teste técnico desafiador.",
    },
  },
  {
    id: 8,
    date: "2022",
    content: {
      title: "Uma Mudança de Rumo",
      description:
        "Decidi treinar para entrar nas Forças Armadas, mas acabei percebendo que não era o caminho certo para mim. Essa experiência me ensinou muito sobre foco e autoconhecimento.",
    },
  },
  {
    id: 9,
    date: "2021",
    content: {
      title: "Fim do Ensino Médio",
      description:
        "Concluí o ensino médio e me despedi dos amigos e experiências que marcaram essa fase. Agora, estou pronto para os desafios da próxima etapa da vida.",
    },
  },
  {
    id: 10,
    date: "2020",
    content: {
      title: "Explorando o Mundo da Programação",
      description:
        "Me aprofundei no mundo da programação criando bots para Discord usando JavaScript. Esse foi o começo da minha paixão pela tecnologia e desenvolvimento.",
    },
  },
  {
    id: 11,
    date: "2019",
    content: {
      title: "Primeiros Passos na Programação",
      description:
        "Comecei a estudar lógica de programação com Portugol, C e Scratch. Esses fundamentos foram essenciais para construir uma base sólida no desenvolvimento.",
    },
  },
  {
    id: 12,
    date: "2013",
    content: {
      title: "Primeiros Passos com Java",
      description:
        "Minha primeira aventura no mundo da programação foi desenvolvendo plugins para Minecraft usando Java. Esse foi o primeiro passo em um caminho cheio de possibilidades!",
    },
  },
];
