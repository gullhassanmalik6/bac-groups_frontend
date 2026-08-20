import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { Seo } from "@/components/shared/Seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function NotFoundPage() {
  const { t } = useI18n();

  return (
    <>
      <Seo title={t.notFound.seoTitle} description={t.notFound.description} path="/404" noIndex />
      <section className="flex min-h-[70vh] items-center pt-24">
        <Container className="space-y-6 text-center">
          <p className="text-sm font-semibold tracking-widest text-gold-600">404</p>
          <h1 className="font-display text-4xl font-semibold">{t.notFound.title}</h1>
          <p className="text-muted-foreground">{t.notFound.description}</p>
          <Button asChild>
            <Link to="/">{t.notFound.home}</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
