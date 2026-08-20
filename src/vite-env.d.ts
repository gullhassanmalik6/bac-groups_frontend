/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_CONTACT_EMAIL: string;
  readonly VITE_CONTACT_PHONE: string;
  readonly VITE_VAT_NUMBER?: string;
  readonly VITE_CR_NUMBER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
