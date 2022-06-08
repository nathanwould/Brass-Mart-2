import { list } from "@keystone-6/core";
import { relationship } from "@keystone-6/core/fields";

export const OrderItem = list({
  fields: {
    product: relationship({ ref: 'Product' }),
    order: relationship({ ref: 'Order.items' }),
  },
});