export type Locale = "en" | "ar";

export interface NavItem {
  label: string;
  href: string;
}

export interface ContentBlock {
  title: string;
  description: string;
}

export interface ServiceCopy {
  id: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
}

export interface ProjectCopy {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  location: string;
  tags: string[];
}

export interface FaqCopy {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Messages {
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
  };
  brand: {
    name: string;
    legalName: string;
    nameArabic: string;
    tagline: string;
    shortDescription: string;
    description: string;
  };
  nav: NavItem[];
  common: {
    contactUs: string;
    callNow: string;
    viewServices: string;
    viewProjects: string;
    learnMore: string;
    sendMessage: string;
    sending: string;
    loading: string;
    language: string;
    english: string;
    arabic: string;
    lightMode: string;
    darkMode: string;
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    mobileNav: string;
    skipToContent: string;
    company: string;
    services: string;
    legal: string;
    privacy: string;
    terms: string;
    faq: string;
    contact: string;
    allRights: string;
    crLabel: string;
    vatLabel: string;
    locationLine: string;
    subscribe: string;
    subscribing: string;
    subscribed: string;
    subscribeError: string;
    newsletterTitle: string;
    newsletterHint: string;
    newsletterPlaceholder: string;
    emailLabel: string;
  };
  hero: {
    headline: string;
    supporting: string;
    trustLine: string;
    imageAlt: string;
  };
  home: {
    servicesEyebrow: string;
    servicesTitle: string;
    servicesDescription: string;
    valuesEyebrow: string;
    valuesTitle: string;
    valuesDescription: string;
    projectsEyebrow: string;
    projectsTitle: string;
    projectsDescription: string;
    capabilitiesEyebrow: string;
    capabilitiesTitle: string;
    capabilitiesDescription: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  about: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    introTitle: string;
    introP1: string;
    introP2: string;
    chairmanTitle: string;
    chairmanP1: string;
    chairmanP2: string;
    coreValuesTitle: string;
    coreValuesDescription: string;
    affiliationsNote: string;
  };
  missionVision: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    missionTitle: string;
    missionPoints: string[];
    visionTitle: string;
    visionText: string;
    opsTitle: string;
    opsPoints: string[];
  };
  quality: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    valuesTitle: string;
    values: string[];
    qualityTitle: string;
    qualityPillars: ContentBlock[];
  };
  projectManagement: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    pillars: ContentBlock[];
    departmentsTitle: string;
    departments: ContentBlock[];
  };
  electrical: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    intro: string;
    systemsTitle: string;
    systems: string[];
    maintenanceTitle: string;
    maintenanceText: string;
  };
  servicesPage: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    constructionTitle: string;
    electricalTitle: string;
    cta: string;
  };
  projectsPage: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    all: string;
    filterLabel: string;
  };
  contactPage: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    office: string;
    email: string;
    phone: string;
    mapTitle: string;
    fullName: string;
    companyField: string;
    subject: string;
    message: string;
    success: string;
    error: string;
    validation: {
      fullName: string;
      email: string;
      phone: string;
      phoneFormat: string;
      company: string;
      subject: string;
      message: string;
    };
  };
  faqPage: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    empty: string;
  };
  privacy: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    updated: string;
    sections: ContentBlock[];
  };
  terms: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    updated: string;
    sections: ContentBlock[];
  };
  notFound: {
    seoTitle: string;
    title: string;
    description: string;
    home: string;
  };
  coreValues: ContentBlock[];
  capabilities: ContentBlock[];
  services: ServiceCopy[];
  electricalServices: ServiceCopy[];
  projects: ProjectCopy[];
  faqs: FaqCopy[];
}
