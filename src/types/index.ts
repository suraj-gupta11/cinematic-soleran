export interface Product {
  id: string;
  number: string;
  name: string;
  nameItalic: string;
  subtitle: string;
  description: string;
  price: string;
  category: string;
  image: string;
  imageAlt: string;
  accent: string;
  note: string;
  composition: 'text-left' | 'image-left';
}

export interface NavItem {
  label: string;
  href: string;
}
