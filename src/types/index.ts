export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  price?: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
