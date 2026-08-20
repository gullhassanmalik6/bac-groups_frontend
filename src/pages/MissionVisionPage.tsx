import { useI18n } from "@/i18n";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Container } from "@/components/ui/Container";

export function MissionVisionPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo
        title={t.missionVision.seoTitle}
        description={t.missionVision.seoDescription}
        path="/mission-vision"
      />
      <section className="pt-32 pb-16">
        <Container>
          <SectionHeading
            eyebrow={t.missionVision.eyebrow}
            title={t.missionVision.title}
            description={t.missionVision.description}
          />
        </Container>
      </section>
      <section className="pb-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article className="h-full border border-border bg-navy-900 p-8 text-white">
              <h2 className="font-display text-3xl font-semibold text-gold-300">
                {t.missionVision.missionTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {t.missionVision.missionPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
          <FadeIn delay={0.08}>
            <article className="h-full border border-border bg-gold-500 p-8 text-navy-950">
              <h2 className="font-display text-3xl font-semibold">{t.missionVision.visionTitle}</h2>
              <p className="mt-6 text-sm leading-relaxed">{t.missionVision.visionText}</p>
            </article>
          </FadeIn>
        </Container>
      </section>
      <section className="border-t border-border bg-muted/40 py-20">
        <Container className="space-y-8">
          <h2 className="font-display text-3xl font-semibold">{t.missionVision.opsTitle}</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {t.missionVision.opsPoints.map((point) => (
              <li key={point} className="border border-border bg-card p-5 text-sm leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
