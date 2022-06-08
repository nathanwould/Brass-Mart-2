import { graphQLSchemaExtension } from "@keystone-6/core";
import { Context } from ".keystone/types";
import addToCart from "./mutations/addToCart";
import checkout from "./mutations/checkout";

export const extendGraphqlSchema = graphQLSchemaExtension<Context>({
  typeDefs: `
    type Mutation {
      addToCart(productId: ID): CartItem
      checkout(token: String!): Order
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
      checkout,
    }
  }
})