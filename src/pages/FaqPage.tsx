import { useMemo, useState } from "react";
import { useI18n } from "@/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function FaqPage() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return t.faqs;
    return t.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q),
    );
  }, [query, t.faqs]);

  return (
    <>
      <Seo title={t.faqPage.seoTitle} description={t.faqPage.seoDescription} path="/faq" />
      <section className="pt-32 pb-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow={t.faqPage.eyebrow}
            title={t.faqPage.title}
            description={t.faqPage.description}
          />
          <div className="max-w-xl space-y-2">
            <Label htmlFor="faq-search">{t.faqPage.searchPlaceholder}</Label>
            <Input
              id="faq-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.faqPage.searchPlaceholder}
              aria-label={t.faqPage.searchPlaceholder}
            />
          </div>
          {filtered.length === 0 ? (
            <p className="text-muted-foreground">{t.faqPage.empty}</p>
          ) : (
            <Accordion type="single" collapsible className="border border-border bg-card px-4">
              {filtered.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </Container>
      </section>
    </>
  );
}
