export interface Service {
  id: number;
  name: string;
  icon: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
}

export interface Professional {
  id: number;
  name: string;
  specialty: string;
  image: string;
  description: string;
  fullBio: string;
  certifications: string[];
  email?: string;
  social?: {
    whatsapp?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface Case {
  id: number;
  name: string;
  treatment: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
  specialist: string;
  duration: string;
}

export interface ClinicalCase {
  id: number;
  procedure: string;
  name?: string;
  treatment?: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  specialist: string;
  duration: string;
}

export interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
}

export interface Statistic {
  number: string;
  label: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  latitude: number;
  longitude: number;
  social: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    whatsapp?: string;
  };
}

