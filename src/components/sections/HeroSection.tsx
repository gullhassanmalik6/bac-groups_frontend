import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { company } from "@/config/site";
import { heroImage } from "@/content/media";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { t, dir } = useI18n();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-900/55" />
        <div
          aria-hidden
          className="absolute inset-y-0 end-0 w-1/3 bg-gradient-to-l from-gold-500/25 to-transparent"
        />
      </div>

      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <div className="max-w-3xl space-y-8 text-white">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-display text-3xl font-semibold tracking-wide text-gold-400 sm:text-4xl"
          >
            {t.brand.name}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {t.hero.supporting}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="flex flex-wrap gap-3"
          >
            <Button asChild size="xl" variant="secondary">
              <Link to="/contact">
                {t.common.contactUs}
                <Arrow className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10"
            >
              <Link to="/services">{t.common.viewServices}</Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10"
            >
              <Link to="/projects">{t.common.viewProjects}</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-sm text-gold-300/90"
          >
            {t.hero.trustLine} · {company.address.full}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
