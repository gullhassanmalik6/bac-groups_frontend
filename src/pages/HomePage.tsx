import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ValuesPreview } from "@/components/sections/ValuesPreview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CapabilitiesPreview } from "@/components/sections/CapabilitiesPreview";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Seo } from "@/components/shared/Seo";
import { useI18n } from "@/i18n";

export function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <Seo title={t.meta.defaultTitle} description={t.meta.defaultDescription} path="/" />
      <HeroSection />
      <ServicesOverview />
      <ValuesPreview />
      <FeaturedProjects />
      <CapabilitiesPreview />
      <CtaBanner />
    </>
  );
}
