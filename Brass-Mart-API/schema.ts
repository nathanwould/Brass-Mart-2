import { Lists } from '.keystone/types';
import { Product } from './models/Product';
import { ProductImage } from './models/ProductImage';
import { User } from './models/Users';

export const lists: Lists = {
  User,
  Product,
  ProductImage,
};
