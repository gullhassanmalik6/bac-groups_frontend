import { useI18n } from "@/i18n";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Container } from "@/components/ui/Container";

export function ProjectManagementPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo
        title={t.projectManagement.seoTitle}
        description={t.projectManagement.seoDescription}
        path="/project-management"
      />
      <section className="pt-32 pb-16">
        <Container>
          <SectionHeading
            eyebrow={t.projectManagement.eyebrow}
            title={t.projectManagement.title}
            description={t.projectManagement.description}
          />
        </Container>
      </section>
      <section className="pb-16">
        <Container className="grid gap-6 md:grid-cols-3">
          {t.projectManagement.pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 0.05}>
              <article className="h-full border border-border bg-card p-6">
                <div className="mb-4 h-1 w-10 bg-gold-500" />
                <h2 className="font-display text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </Container>
      </section>
      <section className="border-t border-border bg-muted/40 py-20">
        <Container className="space-y-8">
          <h2 className="font-display text-3xl font-semibold">
            {t.projectManagement.departmentsTitle}
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {t.projectManagement.departments.map((dept) => (
              <article key={dept.title} className="border-s-4 border-navy-900 bg-card p-6">
                <h3 className="font-semibold">{dept.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {dept.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
