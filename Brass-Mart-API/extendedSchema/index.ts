import { graphQLSchemaExtension } from "@keystone-6/core";
import { Context } from ".keystone/types";
import addToCart from "./mutations/addToCart";
import checkout from "./mutations/checkout";
import createPaymentIntent from "./mutations/createPaymentIntent";

const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension<Context>({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID!): CartItem
      checkout(token: String!): Order
      # createPaymentIntent: PaymentIntent
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
      checkout,
      // createPaymentIntent,
    },
  },
});