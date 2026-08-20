export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors: Record<string, string[]> | null;
  timestamp: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  features: string[];
  imageUrl: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  location: string;
  year: string;
  imageUrl: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
}

export interface ContactPayload {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface NewsletterPayload {
  email: string;
}

export interface CompanyStats {
  merchants: string;
  transactions: string;
  uptime: string;
  countries: string;
}
