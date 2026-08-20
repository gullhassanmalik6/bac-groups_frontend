import { aboutImage } from "@/content/media";
import { useI18n } from "@/i18n";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Container } from "@/components/ui/Container";
import { Link } from "react-router-dom";

export function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo title={t.about.seoTitle} description={t.about.seoDescription} path="/about" />

      <section className="pt-32 pb-16">
        <Container>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <img
              src={aboutImage}
              alt=""
              className="aspect-[4/5] w-full object-cover"
              width={900}
              height={1125}
            />
          </FadeIn>
          <FadeIn delay={0.08} className="space-y-6">
            <h2 className="font-display text-3xl font-semibold">{t.about.introTitle}</h2>
            <p className="leading-relaxed text-muted-foreground">{t.about.introP1}</p>
            <p className="leading-relaxed text-muted-foreground">{t.about.introP2}</p>
            <div className="flex flex-wrap gap-4 pt-2 text-sm font-medium text-gold-700 dark:text-gold-400">
              <Link to="/mission-vision" className="underline-offset-4 hover:underline">
                {t.missionVision.eyebrow}
              </Link>
              <Link to="/quality" className="underline-offset-4 hover:underline">
                {t.quality.eyebrow}
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-y border-border bg-muted/40 py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold">{t.about.chairmanTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.about.chairmanP1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.about.chairmanP2}</p>
          </FadeIn>
          <FadeIn delay={0.08} className="space-y-4">
            <h2 className="font-display text-3xl font-semibold">{t.about.coreValuesTitle}</h2>
            <p className="text-muted-foreground">{t.about.coreValuesDescription}</p>
            <div className="grid gap-4">
              {t.coreValues.map((value) => (
                <article key={value.title} className="border border-border bg-card p-5">
                  <h3 className="font-semibold text-gold-700 dark:text-gold-400">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {t.about.affiliationsNote}
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
