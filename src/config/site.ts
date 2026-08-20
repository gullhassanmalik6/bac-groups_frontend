export const company = {
  name: "Al Dour Al Aliah",
  legalName: "Al Dour Al Aliah Contracting Establishment",
  email: (import.meta.env.VITE_CONTACT_EMAIL as string) || "turki.hejaili@gmail.com",
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
  vatNumber: (import.meta.env.VITE_VAT_NUMBER as string) || "",
  crNumber: (import.meta.env.VITE_CR_NUMBER as string) || "",
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
