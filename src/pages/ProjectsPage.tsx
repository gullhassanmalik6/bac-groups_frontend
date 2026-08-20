import { useMemo, useState } from "react";
import { projectImages } from "@/content/media";
import { useI18n } from "@/i18n";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function ProjectsPage() {
  const { t } = useI18n();
  const [active, setActive] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set(t.projects.map((project) => project.category));
    return ["all", ...Array.from(set)];
  }, [t.projects]);

  const filtered =
    active === "all" ? t.projects : t.projects.filter((project) => project.category === active);

  return (
    <>
      <Seo
        title={t.projectsPage.seoTitle}
        description={t.projectsPage.seoDescription}
        path="/projects"
      />

      <section className="pt-32 pb-12">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow={t.projectsPage.eyebrow}
            title={t.projectsPage.title}
            description={t.projectsPage.description}
          />
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label={t.projectsPage.filterLabel}
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                  active === category
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
                onClick={() => setActive(category)}
              >
                {category === "all" ? t.projectsPage.all : category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.03}>
                <article className="overflow-hidden border border-border bg-card">
                  <img
                    src={projectImages[project.id] ?? "/images/page_works1.jpg"}
                    alt=""
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="space-y-3 p-6">
                    <p className="text-xs font-semibold tracking-wider text-gold-600 uppercase">
                      {project.category}
                      {project.location ? ` · ${project.location}` : ""}
                    </p>
                    <h2 className="font-display text-2xl font-semibold">{project.title}</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
