import { useI18n } from "@/i18n";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Container } from "@/components/ui/Container";

export function QualityPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo title={t.quality.seoTitle} description={t.quality.seoDescription} path="/quality" />
      <section className="pt-32 pb-16">
        <Container>
          <SectionHeading
            eyebrow={t.quality.eyebrow}
            title={t.quality.title}
            description={t.quality.description}
          />
        </Container>
      </section>
      <section className="pb-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold">{t.quality.valuesTitle}</h2>
            <ul className="mt-6 space-y-3">
              {t.quality.values.map((item) => (
                <li
                  key={item}
                  className="border-s-4 border-gold-500 bg-card px-4 py-3 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-display text-2xl font-semibold">{t.quality.qualityTitle}</h2>
            <div className="mt-6 grid gap-4">
              {t.quality.qualityPillars.map((pillar) => (
                <article key={pillar.title} className="border border-border bg-navy-900 p-6 text-white">
                  <h3 className="font-semibold text-gold-300">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{pillar.description}</p>
                </article>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
