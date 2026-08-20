import { getData, postData } from "@/lib/api-client";
import type { ContactPayload, NewsletterPayload } from "@/types";

/**
 * Website API services.
 * Contact/newsletter fail closed — never report success unless the API confirms it.
 * CMS reads remain optional for a later phase; page content is served from i18n catalogs.
 */
export const websiteService = {
  getServices<T = unknown>(): Promise<T> {
    return getData<T>("/website/services");
  },

  getProjects<T = unknown>(): Promise<T> {
    return getData<T>("/website/projects");
  },

  getFaqs<T = unknown>(): Promise<T> {
    return getData<T>("/website/faq");
  },

  getTestimonials<T = unknown>(): Promise<T> {
    return getData<T>("/website/testimonials");
  },

  submitContact(payload: ContactPayload): Promise<{ ticketId: string }> {
    return postData<{ ticketId: string }, ContactPayload>("/website/contact", payload);
  },

  subscribeNewsletter(payload: NewsletterPayload): Promise<{ subscribed: boolean }> {
    return postData<{ subscribed: boolean }, NewsletterPayload>(
      "/website/newsletter",
      payload,
    );
  },
};
