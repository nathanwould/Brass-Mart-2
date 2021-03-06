import { Lists } from '.keystone/types';
import { CartItem } from './models/CartItem';
import { Order } from './models/Order';
import { OrderItem } from './models/OrderItem';
import { Product } from './models/Product';
import { ProductImage } from './models/ProductImage';
import { User } from './models/User';

export const lists: Lists = {
  User,
  Product,
  ProductImage,
  CartItem,
  Order,
  OrderItem,
};
