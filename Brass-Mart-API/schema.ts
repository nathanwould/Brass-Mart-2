import { Lists } from '.keystone/types';
import { CartItem } from './models/CartItem';
import { Order } from './models/Order';
import { OrderItem } from './models/OrderItem';
// import { PaymentIntent } from './models/PaymentIntent';
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
  // PaymentIntent,
};
