import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Languages, Menu, Moon, Phone, Sun, X } from "lucide-react";
import { company } from "@/config/site";
import { useTheme } from "@/context/ThemeContext";
import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t, locale, toggleLocale, dir } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-background/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/favicon.svg" alt="" className="h-9 w-9 rounded-md" width={36} height={36} />
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
              {t.brand.name}
            </span>
            <span className="hidden text-[11px] font-medium text-gold-600 sm:block">
              {locale === "en" ? t.brand.nameArabic : t.brand.legalName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label={t.common.primaryNav}>
          {t.nav.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "bg-muted text-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={t.common.language}
            onClick={toggleLocale}
          >
            <Languages className="h-5 w-5" />
            <span className="sr-only">{locale === "en" ? t.common.arabic : t.common.english}</span>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={theme === "dark" ? t.common.lightMode : t.common.darkMode}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button asChild variant="outline" size="sm" className="hidden lg:inline-flex">
            <a href={`tel:${company.phone}`}>
              <Phone className="h-4 w-4" />
              {t.common.callNow}
            </a>
          </Button>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/contact">{t.common.contactUs}</Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-background xl:hidden"
          >
            <nav
              className={cn(
                "container-page flex flex-col gap-1 py-4",
                dir === "rtl" && "text-right",
              )}
              aria-label={t.common.mobileNav}
            >
              {t.nav.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-4 py-3 text-base font-medium text-muted-foreground",
                      isActive && "bg-muted text-foreground",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-1 pb-2">
                <Button asChild>
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    {t.common.contactUs}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={`tel:${company.phone}`}>
                    {t.common.callNow} {company.phoneDisplay}
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
