import { useI18n } from "@/i18n";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Container } from "@/components/ui/Container";

export function ElectricalSystemsPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo
        title={t.electrical.seoTitle}
        description={t.electrical.seoDescription}
        path="/electrical-systems"
      />
      <section className="pt-32 pb-16">
        <Container>
          <SectionHeading
            eyebrow={t.electrical.eyebrow}
            title={t.electrical.title}
            description={t.electrical.description}
          />
          <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">{t.electrical.intro}</p>
        </Container>
      </section>
      <section className="pb-16">
        <Container className="space-y-8">
          <h2 className="font-display text-2xl font-semibold">{t.electrical.systemsTitle}</h2>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.electrical.systems.map((system, index) => (
              <FadeIn key={system} delay={index * 0.02}>
                <li className="flex gap-3 border border-border bg-card p-4 text-sm">
                  <span className="font-semibold text-gold-600">{String(index + 1).padStart(2, "0")}</span>
                  {system}
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </section>
      <section className="border-t border-border bg-navy-900 py-16 text-white">
        <Container className="max-w-3xl space-y-4">
          <h2 className="font-display text-2xl font-semibold text-gold-300">
            {t.electrical.maintenanceTitle}
          </h2>
          <p className="leading-relaxed text-white/75">{t.electrical.maintenanceText}</p>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
