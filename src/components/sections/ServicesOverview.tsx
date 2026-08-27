import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { serviceImages } from "@/content/media";
import { useI18n } from "@/i18n";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ServicesOverview() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const featured = t.services.slice(0, 6);

  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow={t.home.servicesEyebrow}
          title={t.home.servicesTitle}
          description={t.home.servicesDescription}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden border border-border bg-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={serviceImages[service.id] ?? "/images/page_works1.jpg"}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <Button asChild variant="outline">
          <Link to="/services">
            {t.common.viewServices}
            <Arrow className="h-4 w-4" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
