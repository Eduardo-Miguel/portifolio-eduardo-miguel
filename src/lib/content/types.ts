export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "code" | "refresh" | "cloud" | "plug" | "review" | "support";
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type ExperienceEntry = {
  title: string;
  company: string;
  companyDetail?: string;
  date: string;
  points: string[];
};

export type EducationEntry = {
  degree: string;
  school: string;
  date: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  link?: { label: string; href: string };
  placeholder?: boolean;
};

export type Content = {
  role: string;
  roleLong: string;
  location: string;
  locationShort: string;
  availability: string;
  whatsappMessage: string;
  ariaMenuToggle: string;
  ariaThemeToggle: string;

  nav: {
    about: string;
    services: string;
    stack: string;
    experience: string;
    projects: string;
    contact: string;
  };

  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
  };

  hero: {
    badge: string;
    headingPrefix: string;
    headingAccent: string;
    headingSuffix: string;
    ctaPrimary: string;
    ctaSecondary: string;
    locationLabel: string;
    statusLabel: string;
    specialtyLabel: string;
    specialtyValue: string;
  };

  terminal: {
    stackValue: string;
  };

  about: {
    sectionLabel: string;
    headingPrefix: string;
    headingAccent: string;
    headingSuffix: string;
    paragraphs: string[];
    stats: Stat[];
  };

  services: {
    sectionLabel: string;
    heading: string;
    items: Service[];
  };

  stack: {
    sectionLabel: string;
    heading: string;
    groups: StackGroup[];
  };

  experience: {
    sectionLabel: string;
    heading: string;
    items: ExperienceEntry[];
    educationLabel: string;
    education: EducationEntry[];
    certificationsLabel: string;
    certificationsNote: string;
  };

  projects: {
    sectionLabel: string;
    heading: string;
    moreOnGithub: string;
    placeholderBadge: string;
    items: Project[];
  };

  contact: {
    sectionLabel: string;
    headingPrefix: string;
    headingAccent: string;
    headingSuffix: string;
    blurb: string;
    formNameLabel: string;
    formEmailLabel: string;
    formMessageLabel: string;
    formSubmit: string;
    formHelper: string;
    mailSubjectPrefix: string;
  };

  footer: {
    tagline: string;
  };
};
