import { useI18n } from "@/i18n";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";

export function ValuesPreview() {
  const { t } = useI18n();

  return (
    <section className="border-y border-border bg-navy-900 py-20 text-white sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow={t.home.valuesEyebrow}
          title={t.home.valuesTitle}
          description={t.home.valuesDescription}
          className="[&_h2]:text-white [&_p]:text-white/70 [&_p:first-child]:text-gold-400"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {t.coreValues.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.06}>
              <article className="h-full border border-white/10 bg-white/5 p-6">
                <div className="mb-4 h-1 w-12 bg-gold-500" />
                <h3 className="font-display text-2xl font-semibold text-gold-300">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{value.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
