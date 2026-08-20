import { useEffect } from "react";
import { company } from "@/config/site";
import { useI18n } from "@/i18n";

export function OrganizationJsonLd() {
  const { t } = useI18n();

  useEffect(() => {
    const organizationJsonLd = {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
      name: t.brand.name,
      legalName: t.brand.legalName,
      alternateName: t.brand.nameArabic,
      url: company.siteUrl,
      email: company.email,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: company.address.city,
        postalCode: company.address.postalCode,
        addressCountry: "SA",
      },
      description: t.brand.description,
      areaServed: "SA",
    };

    const scriptId = "aldour-organization-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(organizationJsonLd);
  }, [t]);

  return null;
}
