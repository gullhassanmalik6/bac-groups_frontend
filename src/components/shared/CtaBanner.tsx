import { Link } from "react-router-dom";
import { company } from "@/config/site";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/shared/FadeIn";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({ title, description }: CtaBannerProps) {
  const { t } = useI18n();

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden bg-navy-900 px-8 py-14 text-white sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(196,146,46,0.22)_40%,rgba(196,146,46,0.22)_44%,transparent_44%)]"
            />
            <div className="relative max-w-2xl space-y-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {title ?? t.home.ctaTitle}
              </h2>
              <p className="text-base leading-relaxed text-white/75 sm:text-lg">
                {description ?? t.home.ctaDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">{t.common.contactUs}</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
