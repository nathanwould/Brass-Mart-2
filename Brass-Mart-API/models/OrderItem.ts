import { list } from "@keystone-6/core";
import { relationship, integer } from "@keystone-6/core/fields";

export const OrderItem = list({
  fields: {
    product: relationship({ ref: 'Product' }),
    quantity: integer(),
    order: relationship({ ref: 'Order.items' }),
  },
});