import { list } from "@keystone-6/core";
import { integer, relationship, text, timestamp } from "@keystone-6/core/fields";
import { permissions } from "../access";

export const Order = list({
  access: {
    operation: {
      query: () => true,
      create: args => permissions.canManageOrders(args),
      update: args => permissions.canManageOrders(args),
      delete: args => permissions.canManageOrders(args),
    }
  },
  ui: {
    hideCreate: args => !permissions.canManageUsers(args),
    hideDelete: args => !permissions.canManageUsers(args),
  },
  fields: {
    total: integer(),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    user: relationship({ ref: 'User.orders' }),
    charge: text(),
    shipTo: relationship({ ref: 'Address' }),
    billTo: relationship({ ref: 'Address' }),
    createdAt: timestamp({
      defaultValue: {
        kind: 'now',
      },
      ui: {
        createView: {
          fieldMode: 'hidden'
        },
      },
    }),
  },
});