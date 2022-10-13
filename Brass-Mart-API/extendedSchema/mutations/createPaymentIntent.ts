// import { Request, Response } from 'express';
import { KeystoneContext } from "@keystone-6/core/types";
import stripeConfig from "../../lib/stripe";

async function createPaymentIntent(
  root: any,
  args: any,
  context: KeystoneContext
) {
  // 1. Check if they're logged in and throw an error if not
  const userId = context.session.itemId;
  // console.log(userId)
  if (!userId) {
    throw new Error('Sorry, you must sign in.')
  };
  // 2. Query current user
  const user = await context.query.User.findOne({
    where: { id: userId },
    query: 'id name email cart { id quantity product { id name price }}'
  });
  // 3. Calculate the total order price
  const cartItems = user?.cart?.filter((cartItem: any) => cartItem.product);
  const amount = cartItems.reduce(function (tally: number, cartItem: any) {
    return tally + cartItem.quantity * cartItem.product?.price;
  }, 0);
  // 4. Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripeConfig.paymentIntents.create({
    amount,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });
  // const client_secret = paymentIntent.client_secret;
  return paymentIntent.client_secret;
  // // res.send(paymentIntent.client_secret);
};

export default createPaymentIntent;