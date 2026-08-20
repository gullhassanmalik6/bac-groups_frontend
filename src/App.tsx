import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { OrganizationJsonLd } from "@/components/shared/OrganizationJsonLd";
import { ThemeProvider } from "@/context/ThemeContext";
import { LocaleProvider } from "@/i18n";
import { router } from "@/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocaleProvider>
          <OrganizationJsonLd />
          <RouterProvider router={router} />
        </LocaleProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
