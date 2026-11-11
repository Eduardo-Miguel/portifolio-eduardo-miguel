import type { Content } from "./types";

export const pt: Content = {
  role: "Desenvolvedor Full Stack Sênior",
  roleLong: "Desenvolvedor Full Stack Sênior · C#/.NET · React & TypeScript",
  location: "Campo Grande, MS, Brasil",
  locationShort: "Campo Grande, BR",
  availability: "Aberto a freelas e projetos pontuais",
  whatsappMessage: "Oi Eduardo — encontrei seu portfólio e gostaria de conversar sobre um projeto.",
  ariaMenuToggle: "Abrir menu",
  ariaThemeToggle: "Alternar tema",

  nav: {
    about: "Sobre",
    services: "Serviços",
    stack: "Stack",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
  },

  meta: {
    title: "Eduardo Miguel — Desenvolvedor Full Stack Sênior",
    description:
      "Eduardo Miguel é um desenvolvedor full stack sênior com seis anos construindo e modernizando sistemas em produção com C#/.NET e React. Atualmente migrando aplicações .NET legadas para .NET 8 para um cliente nos EUA, remoto do Brasil.",
    keywords: [
      "Eduardo Miguel",
      "Desenvolvedor Full Stack",
      "Desenvolvedor C#",
      "Desenvolvedor .NET",
      "Desenvolvedor React",
      "Desenvolvedor Next.js",
      "TypeScript",
      "ASP.NET",
      "Modernização de Legado",
      "engenheiro de software Brasil",
      "desenvolvedor remoto",
    ],
    ogLocale: "pt_BR",
  },

  hero: {
    badge: "Aberto a freelas e projetos pontuais",
    headingPrefix: "Tire sua ideia do papel e",
    headingAccent: "coloque no ar",
    headingSuffix: "— eu cuido do resto.",
    ctaPrimary: "VAMOS CONVERSAR",
    ctaSecondary: "VER TRABALHOS",
    locationLabel: "LOCALIZAÇÃO",
    statusLabel: "STATUS",
    specialtyLabel: "ESPECIALIDADE",
    specialtyValue: "FULL STACK · .NET/REACT",
  },

  terminal: {
    stackValue: "C# · .NET 8 · React · Next.js · TypeScript",
  },

  about: {
    sectionLabel: "SOBRE",
    headingPrefix: "Mais que um programador — seu parceiro",
    headingAccent: "técnico",
    headingSuffix: ".",
    paragraphs: [
      "Seis anos construindo e modernizando sistemas em produção com C#/ASP.NET e React. Atualmente atendendo um cliente nos EUA, migrando aplicações legadas em .NET Framework para .NET 8.",
      "Por conta própria, projetei, desenvolvi e mantenho a Shopemgo — um sistema de vendas, estoque e catálogo online para lojas pequenas, com várias lojas no mesmo sistema, do banco PostgreSQL e da API em .NET 8 ao front em Next.js e ao pipeline de deploy. Está em produção para uma cliente pagante e abriu o cadastro de lojas pelo próprio lojista em outubro de 2026.",
      "Antes disso, supervisionei uma pequena equipe de produto e lancei o SAJ Rastreamento do zero — uma plataforma web e mobile de rastreamento de veículos que hoje acompanha mais de 1.000 veículos, incluindo caminhões, rodando em React Native, React, C# ASP.NET e SQL Server.",
      "Eu me importo com código que sobrevive ao contato com produção: SOLID, testado, documentado e chato do jeito certo. Fluente em inglês, nativo em português, confortável trabalhando de forma assíncrona em fusos diferentes.",
    ],
    stats: [
      { label: "EXPERIÊNCIA", value: "6+", detail: "Anos entregando código em produção" },
      { label: "CERTIFICAÇÕES", value: "23+", detail: "Certificados concluídos na Alura" },
      { label: "IMPACTO", value: "1.000+", detail: "Veículos rastreados por uma plataforma que eu construí" },
    ],
  },

  services: {
    sectionLabel: "SERVIÇOS",
    heading: "Onde eu mais entrego valor",
    items: [
      {
        title: "Sites e Sistemas Sob Medida",
        description:
          "Do site da sua empresa ao sistema de vendas e estoque: eu desenho, construo, coloco no ar e mantenho — como fiz com o Shopemgo.",
        icon: "code",
        link: { text: "Shopemgo", href: "https://shopemgo.com" },
      },
      {
        title: "Modernização de Legado",
        description:
          "Aplicações em .NET Framework e Web Forms migradas para .NET 8 sem quebrar o que já funciona em produção.",
        icon: "refresh",
      },
      {
        title: "Cloud & DevOps",
        description:
          "Deploys em Azure e AWS, pipelines de CI/CD no Azure DevOps, infraestrutura na Cloudflare.",
        icon: "cloud",
      },
      {
        title: "APIs & Integrações",
        description:
          "APIs REST, integrações com terceiros e cache com Redis para sistemas que precisam se comunicar de forma confiável.",
        icon: "plug",
      },
      {
        title: "Arquitetura & Code Review",
        description:
          "SOLID, design patterns e processo em Scrum/Kanban para times que querem uma segunda opinião técnica.",
        icon: "review",
      },
      {
        title: "Suporte Contínuo",
        description:
          "Triagem de bugs em produção e chamados de mudança — o trabalho pouco glamoroso que mantém um sistema confiável.",
        icon: "support",
      },
    ],
  },

  stack: {
    sectionLabel: "STACK",
    heading: "Ferramentas que eu uso",
    groups: [
      {
        label: "Backend",
        items: ["C#", "ASP.NET Core", "ASP.NET Framework", ".NET 8", "Web Forms", "REST APIs", "Entity Framework Core", "Dapper", "Redis"],
      },
      {
        label: "Frontend",
        items: ["React", "Next.js", "React Native", "Angular", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      },
      {
        label: "Dados",
        items: ["SQL Server", "Oracle SQL", "PostgreSQL"],
      },
      {
        label: "Cloud & DevOps",
        items: ["Azure", "Azure DevOps CI/CD", "GitHub Actions", "Docker", "AWS", "Google Cloud", "Oracle Cloud", "Cloudflare", "Vercel", "Git", "GitHub"],
      },
      {
        label: "Práticas",
        items: ["SOLID", "Design Patterns", "Modernização de Legado", "SaaS Multi-tenant", "Testes", "Revisão de Código", "Scrum", "Kanban"],
      },
    ],
  },

  experience: {
    sectionLabel: "EXPERIÊNCIA",
    heading: "Onde eu trabalhei",
    items: [
      {
        title: "Desenvolvedor Full Stack Sênior",
        company: "Revelo",
        companyDetail: "cliente: Tassel · Califórnia, EUA (remoto)",
        date: "Jun 2025 — Atual",
        points: [
          "Migrando aplicações em .NET Framework 4.5 para .NET 8 para um cliente nos EUA.",
          "Entregando funcionalidades e correções em frontends Angular e React (Next.js) e em serviços C# ASP.NET, além de integrar produtos de terceiros.",
          "Contribuindo com decisões de arquitetura — .NET 8, SQL Server, Redis, CI/CD no Azure DevOps, testes unitários e de integração.",
        ],
      },
      {
        title: "Fundador e Desenvolvedor",
        company: "Shopemgo",
        companyDetail: "produto próprio · shopemgo.com",
        date: "Out 2024 — Atual",
        points: [
          "Projetei e desenvolvi sozinho um SaaS multi-loja para lojas pequenas: venda no balcão com leitura de código de barras pela câmera, estoque, promoções, fiado, etiquetas em PDF e um catálogo online que recebe pedidos pelo WhatsApp.",
          "API REST em .NET 8 (JWT, EF Core, Dapper, PostgreSQL, DbUp, testes unitários e de integração) e front em Next.js 15 / React / TypeScript; subdomínio e feature flags por loja, frete pelo Melhor Envio, notificações push.",
          "Roda em Docker com CI/CD no GitHub Actions e nginx na Oracle Cloud, além de Vercel e Cloudflare Workers. Em produção para uma cliente pagante; cadastro de lojas pelo próprio lojista aberto em out/2026.",
        ],
      },
      {
        title: "Desenvolvedor Full Stack Pleno/Sênior",
        company: "Ei Soluções Inteligentes",
        companyDetail: "Campo Grande, MS",
        date: "Fev 2023 — Jun 2025",
        points: [
          "Desenvolvi e mantive aplicações web em React com Next.js e C# ASP.NET (Framework, Core e Web Forms).",
          "Desenvolvi o GPP Online, um gerador de propostas de preço para licitações: o fornecedor abre pelo link da licitação, orça cada lote, gera o PDF e envia a proposta pelo navegador.",
          "Corrigi erros em produção e atendi chamados de mudança; Oracle SQL, Azure Repos, pipelines no Azure DevOps, code review em Scrum e Kanban.",
        ],
      },
      {
        title: "Supervisor Full Stack",
        company: "SAJ Clube de Benefícios",
        companyDetail: "Campo Grande, MS",
        date: "Ago 2020 — Fev 2023",
        points: [
          "Liderei uma equipe de quatro analistas de suporte e um desenvolvedor.",
          "Lancei o SAJ Rastreamento, um produto web e mobile de rastreamento de veículos que hoje rastreia mais de 1.000 veículos, incluindo caminhões.",
          "Construí em React Native, React e C# ASP.NET sobre SQL Server; a infraestrutura rodava em AWS, Google Cloud e Cloudflare.",
        ],
      },
      {
        title: "Programador de Sistemas de Informação",
        company: "TDR Informática",
        date: "Fev 2020 — Jun 2020",
        points: ["Relatórios com Jaspersoft Studio, PostgreSQL e SQL."],
      },
      {
        title: "Assistente de Operações de Plataforma",
        company: "BTCC Conexão Cliente",
        date: "Mai 2019 — Fev 2020",
        points: ["Atendimento de incidentes e suporte à plataforma SIP/Genesys."],
      },
    ],
    educationLabel: "FORMAÇÃO",
    education: [
      { degree: "Bacharelado em Sistemas para Internet", school: "IFMS — Instituto Federal de Mato Grosso do Sul", date: "2019–2022" },
      { degree: "Técnico em Informática", school: "IFMS", date: "2011–2015" },
    ],
    certificationsLabel: "CERTIFICAÇÕES",
    certificationsNote:
      "23 certificados na Alura, incluindo ASP.NET Core Expert, Software Architect, ASP.NET MVC 5 Expert e SOLID com C# e Design Patterns em C#.",
  },

  projects: {
    sectionLabel: "PROJETOS",
    heading: "Trabalhos selecionados",
    moreOnGithub: "Mais no GitHub",
    placeholderBadge: "EXEMPLO",
    items: [
      {
        name: "Shopemgo",
        description:
          "Sistema de vendas e estoque para lojas, que criei e mantenho sozinho: venda no balcão com código de barras pela câmera, estoque, promoções, etiquetas em PDF e um catálogo online que recebe pedidos pelo WhatsApp.",
        tags: ["Next.js", "TypeScript", "C# .NET 8", "PostgreSQL", "Docker"],
        link: { label: "Ver online", href: "https://shopemgo.com" },
      },
      {
        name: "SAJ Rastreamento",
        description:
          "Plataforma de rastreamento de veículos e frotas construída e lançada do zero, hoje acompanhando mais de 1.000 veículos, incluindo caminhões, em produção.",
        tags: ["React Native", "React", "C# ASP.NET", "SQL Server", "AWS"],
      },
      {
        name: "GPP Online",
        description:
          "Gerador de Proposta de Preço que desenvolvi na Ei Soluções: o fornecedor abre pelo link da licitação, monta o orçamento de cada lote, gera o PDF e envia a proposta pelo navegador.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
    ],
  },

  contact: {
    sectionLabel: "CONTATO",
    headingPrefix: "Tem um projeto? Vamos",
    headingAccent: "conversar",
    headingSuffix: ".",
    blurb: "remoto. Fluente em inglês, nativo em português, confortável em fusos diferentes.",
    formNameLabel: "NOME",
    formEmailLabel: "EMAIL",
    formMessageLabel: "MENSAGEM",
    formSubmit: "ENVIAR MENSAGEM",
    formHelper: "Abre seu cliente de email com esta mensagem pré-preenchida — nada é enviado por esta página.",
    mailSubjectPrefix: "Contato via portfólio de",
  },

  footer: {
    tagline: "Construído com Next.js, hospedado na Vercel.",
  },
};
