export interface IProduct {
  productType: string;
  name: string;
  make: string;
  model?: string;
  category: string;
  instrumentType?: string;
  instrumentKey?: string;
  boreSize?: number;
  bellSize?: number;
  description: string;
  photos?: IProductImage[];
  price: number;
  status: string;
  createdAt: string;
  updatedAt?: string;
};

export interface IProductImage {

}

export interface IBreadcrumbItem {
  name: string;
  href: string;
};