import { graphQLSchemaExtension } from "@keystone-6/core";
import { Context } from ".keystone/types";
import addToCart from "./mutations/addToCart";
import checkout from "./mutations/checkout";

const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension<Context>({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID!): CartItem
      checkout(token: String!, shippingAddress: AddressCreateInput!, billingAddress: AddressCreateInput!): Order
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
      checkout,
    },
  },
});