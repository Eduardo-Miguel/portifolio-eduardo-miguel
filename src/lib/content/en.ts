import type { Content } from "./types";

export const en: Content = {
  role: "Senior Full Stack Engineer",
  roleLong: "Senior Full Stack Engineer · C#/.NET · React & TypeScript",
  location: "Campo Grande, MS, Brazil",
  locationShort: "Campo Grande, BR",
  availability: "Open to freelance and short-term projects",
  whatsappMessage: "Hi Eduardo — I found your portfolio and would like to talk about a project.",
  ariaMenuToggle: "Toggle menu",
  ariaThemeToggle: "Toggle color theme",

  nav: {
    about: "About",
    services: "Services",
    stack: "Stack",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },

  meta: {
    title: "Eduardo Miguel — Senior Full Stack Engineer",
    description:
      "Eduardo Miguel is a senior full stack engineer with six years building and modernizing production systems in C#/.NET and React. Currently migrating legacy .NET applications to .NET 8 for a US client, remote from Brazil.",
    keywords: [
      "Eduardo Miguel",
      "Full Stack Engineer",
      "C# Developer",
      ".NET Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript",
      "ASP.NET",
      "Legacy Modernization",
      "Brazil software engineer",
      "remote software engineer",
    ],
    ogLocale: "en_US",
  },

  hero: {
    badge: "Open to freelance and short-term projects",
    headingPrefix: "Full-stack software that",
    headingAccent: "ships",
    headingSuffix: "— and keeps running.",
    ctaPrimary: "LET'S TALK",
    ctaSecondary: "VIEW WORK",
    locationLabel: "LOCATION",
    statusLabel: "STATUS",
    specialtyLabel: "SPECIALTY",
    specialtyValue: "FULL STACK · .NET/REACT",
  },

  terminal: {
    stackValue: "C# · .NET 8 · React · Next.js · TypeScript",
  },

  about: {
    sectionLabel: "ABOUT",
    headingPrefix: "More than a coder — your technical",
    headingAccent: "partner",
    headingSuffix: ".",
    paragraphs: [
      "Six years building and modernizing production systems in C#/ASP.NET and React. Currently contracting for a US client, migrating legacy .NET Framework applications to .NET 8.",
      "Before that, I supervised a small product team and shipped SAJ Rastreamento from the ground up — a web and mobile vehicle-tracking platform that now follows more than 1,000 vehicles, including trucks, running on React Native, React, C# ASP.NET and SQL Server.",
      "I care about code that survives contact with production: SOLID, tested, documented, and boring in the best way. Fluent in English, native in Portuguese, comfortable working async across time zones.",
    ],
    stats: [
      { label: "EXPERIENCE", value: "6+", detail: "Years shipping production code" },
      { label: "CERTIFICATIONS", value: "23+", detail: "Alura certificates completed" },
      { label: "IMPACT", value: "1,000+", detail: "Vehicles tracked by a platform I built" },
    ],
  },

  services: {
    sectionLabel: "SERVICES",
    heading: "Where I add the most value",
    items: [
      {
        title: "Full-Stack Development",
        description:
          "End-to-end features across React/Next.js frontends and C# ASP.NET services — from data model to deployed UI.",
        icon: "code",
      },
      {
        title: "Legacy Modernization",
        description:
          ".NET Framework and Web Forms applications migrated to .NET 8 without breaking what already works in production.",
        icon: "refresh",
      },
      {
        title: "Cloud & DevOps",
        description:
          "Azure and AWS deployments, CI/CD pipelines in Azure DevOps, infrastructure on Cloudflare.",
        icon: "cloud",
      },
      {
        title: "APIs & Integrations",
        description:
          "REST APIs, third-party integrations, and Redis caching for systems that need to talk to each other reliably.",
        icon: "plug",
      },
      {
        title: "Architecture & Code Review",
        description:
          "SOLID, design patterns, and Scrum/Kanban process for teams that want a technical second opinion.",
        icon: "review",
      },
      {
        title: "Ongoing Support",
        description:
          "Production bug triage and change requests — the unglamorous work that keeps a system trustworthy.",
        icon: "support",
      },
    ],
  },

  stack: {
    sectionLabel: "STACK",
    heading: "Tools I reach for",
    groups: [
      {
        label: "Backend",
        items: ["C#", "ASP.NET Core", "ASP.NET Framework", ".NET 8", "Web Forms", "REST APIs", "Redis"],
      },
      {
        label: "Frontend",
        items: ["React", "Next.js", "React Native", "Angular", "TypeScript", "JavaScript", "HTML", "CSS"],
      },
      {
        label: "Data",
        items: ["SQL Server", "Oracle SQL", "PostgreSQL"],
      },
      {
        label: "Cloud & DevOps",
        items: ["Azure", "Azure DevOps CI/CD", "AWS", "Google Cloud", "Cloudflare", "Git", "GitHub"],
      },
      {
        label: "Practices",
        items: ["SOLID", "Design Patterns", "Legacy Modernization", "Testing", "Code Review", "Scrum", "Kanban"],
      },
    ],
  },

  experience: {
    sectionLabel: "EXPERIENCE",
    heading: "Where I've worked",
    items: [
      {
        title: "Senior Full Stack Engineer",
        company: "Revelo",
        companyDetail: "client: Tassel · California, US (remote)",
        date: "Jun 2025 — Present",
        points: [
          "Migrating .NET Framework 4.5 applications to .NET 8 for a US client.",
          "Shipping features and fixes across Angular and React (Next.js) frontends and C# ASP.NET services, and integrating third-party products.",
          "Contributing to architecture decisions — .NET 8, SQL Server, Redis, Azure DevOps CI/CD, unit and integration tests.",
        ],
      },
      {
        title: "Mid/Senior Full Stack Engineer",
        company: "Ei Soluções Inteligentes",
        companyDetail: "Campo Grande, MS",
        date: "Feb 2023 — Jun 2025",
        points: [
          "Built and maintained web applications in React with Next.js and C# ASP.NET (Framework, Core and Web Forms).",
          "Diagnosed and fixed production errors and change requests across the company's systems.",
          "Oracle SQL, Azure Repos, Azure DevOps pipelines; code review under Scrum and Kanban.",
        ],
      },
      {
        title: "Full Stack Supervisor",
        company: "SAJ Clube de Benefícios",
        companyDetail: "Campo Grande, MS",
        date: "Aug 2020 — Feb 2023",
        points: [
          "Led a team of four support analysts and one developer.",
          "Launched SAJ Rastreamento, a web and mobile vehicle-tracking product that now tracks more than 1,000 vehicles, including trucks.",
          "Built it in React Native, React and C# ASP.NET on SQL Server; ran infrastructure on AWS, Google Cloud and Cloudflare.",
        ],
      },
      {
        title: "Information Systems Programmer",
        company: "TDR Informática",
        date: "Feb 2020 — Jun 2020",
        points: ["Reporting with Jaspersoft Studio, PostgreSQL and SQL."],
      },
      {
        title: "Platform Operations Assistant",
        company: "BTCC Conexão Cliente",
        date: "May 2019 — Feb 2020",
        points: ["Incident handling and SIP/Genesys platform support."],
      },
    ],
    educationLabel: "EDUCATION",
    education: [
      { degree: "BSc, Internet Systems", school: "IFMS — Federal Institute of Mato Grosso do Sul", date: "2019–2022" },
      { degree: "Computer Technician", school: "IFMS", date: "2011–2015" },
    ],
    certificationsLabel: "CERTIFICATIONS",
    certificationsNote:
      "23 Alura certificates, including ASP.NET Core Expert, Software Architect, ASP.NET MVC 5 Expert, and SOLID with C# and Design Patterns in C#.",
  },

  projects: {
    sectionLabel: "PROJECTS",
    heading: "Selected work",
    moreOnGithub: "More on GitHub",
    placeholderBadge: "PLACEHOLDER",
    items: [
      {
        name: "SAJ Rastreamento",
        description:
          "Vehicle and fleet tracking platform built and launched from scratch, now following more than 1,000 vehicles, including trucks, in production.",
        tags: ["React Native", "React", "C# ASP.NET", "SQL Server", "AWS"],
      },
      {
        name: "Your project here",
        description:
          "Swap this card for a real project — edit src/lib/content/en.ts and add a name, short description, stack tags, and a live or repo link.",
        tags: ["Add", "your", "stack"],
        placeholder: true,
      },
      {
        name: "Your project here",
        description:
          "Swap this card for a real project — edit src/lib/content/en.ts and add a name, short description, stack tags, and a live or repo link.",
        tags: ["Add", "your", "stack"],
        placeholder: true,
      },
    ],
  },

  contact: {
    sectionLabel: "CONTACT",
    headingPrefix: "Have a project? Let's",
    headingAccent: "talk",
    headingSuffix: ".",
    blurb: "remote. Fluent in English, native in Portuguese, comfortable across time zones.",
    formNameLabel: "NAME",
    formEmailLabel: "EMAIL",
    formMessageLabel: "MESSAGE",
    formSubmit: "SEND MESSAGE",
    formHelper: "Opens your email client with this message pre-filled — nothing is sent from this page.",
    mailSubjectPrefix: "Portfolio contact from",
  },

  footer: {
    tagline: "Built with Next.js, deployed on Vercel.",
  },
};
