import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin } from "lucide-react";
import { company } from "@/config/site";
import { useI18n } from "@/i18n";
import { websiteService } from "@/services/website.service";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Seo } from "@/components/shared/Seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";

export function ContactPage() {
  const { t } = useI18n();

  const contactSchema = useMemo(
    () =>
      z.object({
        fullName: z.string().min(2, t.contactPage.validation.fullName),
        email: z.string().email(t.contactPage.validation.email),
        phone: z
          .string()
          .min(8, t.contactPage.validation.phone)
          .regex(/^[+0-9\s()-]+$/, t.contactPage.validation.phoneFormat),
        company: z.string().min(2, t.contactPage.validation.company),
        subject: z.string().min(3, t.contactPage.validation.subject),
        message: z.string().min(20, t.contactPage.validation.message),
      }),
    [t],
  );

  type ContactForm = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useMutation({
    mutationFn: websiteService.submitContact,
    onSuccess: () => reset(),
  });

  return (
    <>
      <Seo
        title={t.contactPage.seoTitle}
        description={t.contactPage.seoDescription}
        path="/contact"
      />

      <section className="pt-32 pb-16">
        <Container>
          <SectionHeading
            eyebrow={t.contactPage.eyebrow}
            title={t.contactPage.title}
            description={t.contactPage.description}
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="space-y-6 lg:col-span-2">
            <div className="space-y-5 border border-border bg-card p-6">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-gold-600" />
                <div>
                  <h2 className="font-semibold">{t.contactPage.office}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{company.address.full}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-gold-600" />
                <div>
                  <h2 className="font-semibold">{t.contactPage.email}</h2>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block text-sm text-muted-foreground hover:text-foreground"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-border">
              <iframe
                title={t.contactPage.mapTitle}
                src="https://maps.google.com/maps?q=Madinah%2042393%20Saudi%20Arabia&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full grayscale contrast-125 dark:opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-3">
            <form
              className="space-y-5 border border-border bg-background p-6 sm:p-8"
              onSubmit={handleSubmit((values) => mutation.mutate(values))}
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName" required>
                    {t.contactPage.fullName}
                  </Label>
                  <Input id="fullName" error={errors.fullName?.message} {...register("fullName")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" required>
                    {t.contactPage.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone" required>
                    {t.contactPage.phone}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" required>
                    {t.contactPage.companyField}
                  </Label>
                  <Input id="company" error={errors.company?.message} {...register("company")} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" required>
                  {t.contactPage.subject}
                </Label>
                <Input id="subject" error={errors.subject?.message} {...register("subject")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" required>
                  {t.contactPage.message}
                </Label>
                <Textarea id="message" error={errors.message?.message} {...register("message")} />
              </div>

              <Button type="submit" size="lg" disabled={mutation.isPending}>
                {mutation.isPending ? t.common.sending : t.common.sendMessage}
              </Button>

              {mutation.isSuccess ? (
                <p className="text-sm text-gold-700 dark:text-gold-400" role="status">
                  {t.contactPage.success} {mutation.data.ticketId}
                </p>
              ) : null}
              {mutation.isError ? (
                <p className="text-sm text-red-600" role="alert">
                  {t.contactPage.error}
                </p>
              ) : null}
            </form>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
