import { Link } from "react-router-dom";
import { serviceImages } from "@/content/media";
import { useI18n } from "@/i18n";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo
        title={t.servicesPage.seoTitle}
        description={t.servicesPage.seoDescription}
        path="/services"
      />

      <section className="pt-32 pb-12">
        <Container>
          <SectionHeading
            eyebrow={t.servicesPage.eyebrow}
            title={t.servicesPage.title}
            description={t.servicesPage.description}
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container className="space-y-8">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {t.servicesPage.constructionTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.03}>
                <article className="flex h-full flex-col border border-border bg-card">
                  <img
                    src={serviceImages[service.id] ?? "/images/page_works1.jpg"}
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.summary}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="mt-auto space-y-1 pt-3 text-sm text-foreground/80">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="text-gold-600">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline" className="mt-4 w-fit">
                      <Link to="/contact">{t.servicesPage.cta}</Link>
                    </Button>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/40 py-16">
        <Container className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              {t.servicesPage.electricalTitle}
            </h2>
            <Button asChild variant="link">
              <Link to="/electrical-systems">{t.common.learnMore}</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.electricalServices.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.04}>
                <article className="h-full border-s-4 border-navy-900 bg-card p-6">
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
