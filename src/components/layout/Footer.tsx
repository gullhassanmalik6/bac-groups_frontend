import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/config/site";
import { useI18n } from "@/i18n";
import { websiteService } from "@/services/website.service";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export function Footer() {
  const { t } = useI18n();

  const newsletterSchema = z.object({
    email: z.string().email(t.contactPage.validation.email),
  });

  type NewsletterForm = z.infer<typeof newsletterSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const mutation = useMutation({
    mutationFn: websiteService.subscribeNewsletter,
    onSuccess: () => reset(),
  });

  const footerServiceLinks = t.services.slice(0, 4).map((service) => ({
    label: service.title,
    href: "/services",
  }));

  return (
    <footer className="border-t border-border bg-navy-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={company.logoSrc}
                alt={t.brand.legalName}
                className="h-12 w-auto max-w-[10rem] rounded-sm bg-white/95 object-contain p-1"
                width={160}
                height={48}
              />
              <span className="text-lg font-bold">{t.brand.name}</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">{t.brand.description}</p>
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                {company.address.full}
              </p>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail className="h-4 w-4 text-gold-400" />
                {company.email}
              </a>
              <a href={`tel:${company.phone}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-gold-400" />
                {company.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-gold-400 uppercase">
                {t.common.company}
              </h3>
              <ul className="space-y-2.5">
                {t.nav.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-gold-400 uppercase">
                {t.common.services}
              </h3>
              <ul className="space-y-2.5">
                {footerServiceLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-gold-400 uppercase">
                {t.common.legal}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/privacy" className="text-sm text-white/70 hover:text-white">
                    {t.common.privacy}
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-white/70 hover:text-white">
                    {t.common.terms}
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-white/70 hover:text-white">
                    {t.common.faq}
                  </Link>
                </li>
                <li>
                  <Link to="/mission-vision" className="text-sm text-white/70 hover:text-white">
                    {t.missionVision.eyebrow}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide text-gold-400 uppercase">
              {t.common.newsletterTitle}
            </h3>
            <p className="text-sm text-white/70">{t.common.newsletterHint}</p>
            <form
              className="space-y-3"
              onSubmit={handleSubmit((values) => mutation.mutate(values))}
              noValidate
            >
              <Label htmlFor="newsletter-email" className="sr-only">
                {t.common.emailLabel}
              </Label>
              <Input
                id="newsletter-email"
                type="email"
                placeholder={t.common.newsletterPlaceholder}
                autoComplete="email"
                className="border-white/15 bg-white/5 text-white placeholder:text-white/40"
                error={errors.email?.message}
                {...register("email")}
              />
              <Button type="submit" variant="secondary" className="w-full" disabled={mutation.isPending}>
                {mutation.isPending ? t.common.subscribing : t.common.subscribe}
              </Button>
              {mutation.isSuccess ? (
                <p className="text-xs text-gold-300" role="status">
                  {t.common.subscribed}
                </p>
              ) : null}
              {mutation.isError ? (
                <p className="text-xs text-red-300" role="alert">
                  {t.common.subscribeError}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.brand.legalName}. {t.common.allRights}
          </p>
          <div className="flex flex-col gap-1 sm:items-end">
            {company.crNumber ? (
              <p>
                {t.common.crLabel}: {company.crNumber}
              </p>
            ) : null}
            {company.vatNumber ? (
              <p>
                {t.common.vatLabel}: {company.vatNumber}
              </p>
            ) : null}
            <p>{t.common.locationLine}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
