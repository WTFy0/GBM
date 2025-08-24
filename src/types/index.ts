export interface Language {
  code: 'ar' | 'en';
  name: string;
  dir: 'rtl' | 'ltr';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface Product {
  name_ar: string;
  name_en: string;
  image_placeholder: string;
  specifications_ar: string;
  specifications_en: string;
  packaging?: string;
}

export interface Company {
  name_ar: string;
  name_en: string;
  logo_placeholder: string;
  products: Product[];
}

export interface Service {
  icon: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  features_ar: string[];
  features_en: string[];
}