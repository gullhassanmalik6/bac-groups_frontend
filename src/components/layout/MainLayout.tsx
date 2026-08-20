import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { useI18n } from "@/i18n";

export function MainLayout() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950"
      >
        {t.common.skipToContent}
      </a>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={location.pathname}
          className="flex-1"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
