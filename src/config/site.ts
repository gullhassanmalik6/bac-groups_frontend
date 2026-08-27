export const company = {
  name: "Bonyan",
  legalName: "Bonyan Advanced Contracting Establishment",
  /** Confirmed by client (Fiverr) — do not use personal Gmail on the public site. */
  email: "info@bacgroupsa.com",
  phone: (import.meta.env.VITE_CONTACT_PHONE as string) || "+966599000789",
  phoneDisplay: "+966 59 900 0789",
  address: {
    line1: "Madinah 42393",
    line2: "",
    city: "Madinah",
    country: "Kingdom of Saudi Arabia",
    full: "Saudi Arabia – Madinah 42393",
    postalCode: "42393",
  },
  /** Social links were not provided by the client. */
  social: {
    linkedin: "",
    twitter: "",
    instagram: "",
  },
  siteUrl: (import.meta.env.VITE_SITE_URL as string) || "https://www.bacgroupsa.com",
  vatNumber: (import.meta.env.VITE_VAT_NUMBER as string) || "3110625023",
  crNumber: (import.meta.env.VITE_CR_NUMBER as string) || "7026169222",
  established: "2021-10-18",
  logoSrc: "/logo.jpeg",
} as const;

/** Route keys only — labels come from i18n. */
export const navHrefs = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/project-management",
  "/electrical-systems",
  "/quality",
  "/contact",
] as const;
