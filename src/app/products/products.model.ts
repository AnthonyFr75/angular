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

export interface ProductMongoFormat {
  _id: number;
  name: string;
  type: string;
  phone: string;
  price: number;
  rating: number;
  warranty_years: number;
  available: boolean;
  __v: number;
}

export interface ProductModal {
  product: Product | null;
  action: 'update' | 'add';
}

export type Products = Product[];