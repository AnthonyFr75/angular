export interface Product {
  id: number;
  name: string;
  type: string;
  phone: string;
  price: number;
  rating: number;
  warranty_years: number;
  available: boolean;
}

export type Products = Product[];