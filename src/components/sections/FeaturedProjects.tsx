import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projectImages } from "@/content/media";
import { useI18n } from "@/i18n";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FeaturedProjects() {
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const featured = t.projects.slice(0, 4);

  return (
    <section className="py-20 sm:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow={t.home.projectsEyebrow}
          title={t.home.projectsTitle}
          description={t.home.projectsDescription}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.05}>
              <article className="overflow-hidden border border-border bg-card">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={projectImages[project.id] ?? "/images/page_works1.jpg"}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs font-semibold tracking-wider text-gold-600 uppercase">
                    {project.category}
                    {project.location ? ` · ${project.location}` : ""}
                  </p>
                  <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <Button asChild>
          <Link to="/projects">
            {t.common.viewProjects}
            <Arrow className="h-4 w-4" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
