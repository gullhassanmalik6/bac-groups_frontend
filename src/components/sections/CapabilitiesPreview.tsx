import { useI18n } from "@/i18n";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";

export function CapabilitiesPreview() {
  const { t } = useI18n();

  return (
    <section className="bg-muted/60 py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow={t.home.capabilitiesEyebrow}
          title={t.home.capabilitiesTitle}
          description={t.home.capabilitiesDescription}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {t.capabilities.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="h-full border-s-4 border-gold-500 bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
