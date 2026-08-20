import { useI18n } from "@/i18n";
import { Seo } from "@/components/shared/Seo";
import { Container } from "@/components/ui/Container";

export function PrivacyPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo title={t.privacy.seoTitle} description={t.privacy.seoDescription} path="/privacy" />
      <section className="pt-32 pb-20">
        <Container className="max-w-3xl space-y-8">
          <div>
            <h1 className="font-display text-4xl font-semibold">{t.privacy.title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{t.privacy.updated}</p>
          </div>
          {t.privacy.sections.map((section) => (
            <article key={section.title} className="space-y-2">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{section.description}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
