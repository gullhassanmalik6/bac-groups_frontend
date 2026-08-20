import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

const HomePage = lazy(() =>
  import("@/pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((module) => ({ default: module.AboutPage })),
);
const ServicesPage = lazy(() =>
  import("@/pages/ServicesPage").then((module) => ({ default: module.ServicesPage })),
);
const ProjectsPage = lazy(() =>
  import("@/pages/ProjectsPage").then((module) => ({ default: module.ProjectsPage })),
);
const ProjectManagementPage = lazy(() =>
  import("@/pages/ProjectManagementPage").then((module) => ({
    default: module.ProjectManagementPage,
  })),
);
const ElectricalSystemsPage = lazy(() =>
  import("@/pages/ElectricalSystemsPage").then((module) => ({
    default: module.ElectricalSystemsPage,
  })),
);
const QualityPage = lazy(() =>
  import("@/pages/QualityPage").then((module) => ({ default: module.QualityPage })),
);
const MissionVisionPage = lazy(() =>
  import("@/pages/MissionVisionPage").then((module) => ({ default: module.MissionVisionPage })),
);
const FaqPage = lazy(() =>
  import("@/pages/FaqPage").then((module) => ({ default: module.FaqPage })),
);
const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((module) => ({ default: module.ContactPage })),
);
const PrivacyPage = lazy(() =>
  import("@/pages/PrivacyPage").then((module) => ({ default: module.PrivacyPage })),
);
const TermsPage = lazy(() =>
  import("@/pages/TermsPage").then((module) => ({ default: module.TermsPage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((module) => ({ default: module.NotFoundPage })),
);

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center pt-24" role="status">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold-500 border-t-transparent" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: "about", element: withSuspense(<AboutPage />) },
      { path: "services", element: withSuspense(<ServicesPage />) },
      { path: "projects", element: withSuspense(<ProjectsPage />) },
      { path: "project-management", element: withSuspense(<ProjectManagementPage />) },
      { path: "electrical-systems", element: withSuspense(<ElectricalSystemsPage />) },
      { path: "quality", element: withSuspense(<QualityPage />) },
      { path: "mission-vision", element: withSuspense(<MissionVisionPage />) },
      { path: "faq", element: withSuspense(<FaqPage />) },
      { path: "contact", element: withSuspense(<ContactPage />) },
      { path: "privacy", element: withSuspense(<PrivacyPage />) },
      { path: "terms", element: withSuspense(<TermsPage />) },
      { path: "why-choose-us", element: <Navigate to="/about" replace /> },
      { path: "industries", element: <Navigate to="/services" replace /> },
      { path: "*", element: withSuspense(<NotFoundPage />) },
    ],
  },
]);
