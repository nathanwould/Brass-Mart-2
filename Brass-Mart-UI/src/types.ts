export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  cart: ICartItem[];
  cartCount: number;
  orders: IOrder[];
};

export type IProduct = {
  id: string;
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
  photos: IProductImage[];
  price: number;
  status: string;
  createdAt: string;
  updatedAt?: string;
};

export type IProductImage = {
  image: ICloudinaryImage;
  altText: string;
  product: IProduct;
};

export type ICloudinaryImage = {
  publicUrlTransformed: string;
};

export type ICartItem = {
  id: string;
  quantity: number;
  product: IProduct;
  user: IUser;
};

export type IOrder = {
  id: string;
  total: number;
  items: IOrderItem[];
  user: IUser;
  charge: string;
  createdAt: string;
};

export type IOrderItem = {
  id: string;
  product: IProduct;
  order: IOrder;
};

export type IAddress = {
  name: string;
  street: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type IBreadcrumbItem = {
  name: string;
  href: string;
};