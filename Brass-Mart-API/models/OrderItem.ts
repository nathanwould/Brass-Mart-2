import { list } from "@keystone-6/core";
import { relationship, integer } from "@keystone-6/core/fields";
import { permissions } from "../access";

export const OrderItem = list({
  access: {
    operation: {
      query: () => true,
      create: args => permissions.canManageOrders(args),
      update: args => permissions.canManageOrders(args),
      delete: args => permissions.canManageOrders(args),
    }
  },
  ui: {
    // hide the back end UI from regular users
    hideCreate: args => !permissions.canManageUsers(args),
    hideDelete: args => !permissions.canManageUsers(args),
  },
  fields: {
    product: relationship({ ref: 'Product' }),
    quantity: integer(),
    order: relationship({ ref: 'Order.items' }),
  },
});