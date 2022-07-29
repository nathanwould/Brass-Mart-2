import { KeystoneContext } from "@keystone-6/core/types";
import stripeConfig from "../../lib/stripe";

interface Arguments {
  root: any,
  token: string,
  context: KeystoneContext
}

async function checkout({root, token, context}: Arguments) {
    // 1. Make sure they're signed in
    const userId = context.session.itemId;
    // console.log(userId)
    if (!userId) {
      throw new Error('Sorry, you must be signed in to place an order.')
    }
    // 2. Query current user
    const user = await context.query.User.findOne({
      where: { id: userId },
      query: 'id name email cart { id quantity product { id name price description photos {id image { id publicUrlTransformed }}}}'
    });
    // console.log(user)
    // 3. Calculate the total order price
  const cartItems = user?.cart?.filter((cartItem: any) => cartItem.product);
  const productPhotos = cartItems.map((cartItem: any) => cartItem.product.photos);
  console.log(productPhotos.values);
    const amount = cartItems.reduce(function (tally: number, cartItem: any) {
      return tally + cartItem.quantity * cartItem.product?.price;
    }, 0);
    // console.log(amount)
    // 4. Create the charge with the Stripe Library
    const charge = await stripeConfig.paymentIntents.create({
      amount,
      currency: 'USD',
      confirm: true,
      payment_method: token,
    }).catch(err => {
      console.log(err)
      throw new Error(err.message)
    });
    // console.log(charge)
  
    // 5.1 Convert CartItems to OrderItems
    // console.log(cartItems)
  const orderItems = cartItems.map((cartItem: any) => {
    const photoIds = cartItem.product.photos.map((photo: any) => ({ id: photo.id }))
    const orderItem = {
      name: cartItem.product.name,
      description: cartItem.product.description,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      photos: {
        connect: photoIds
      },
    }
    return orderItem
  })
    // 6. Create order and return it
    const order = await context.db.Order.createOne({
      data: {
        total: charge.amount,
        charge: charge.id,
        items: { create: orderItems },
        user: { connect: { id: userId } },
      },
    });
    // console.log(order)
    const cartItemIds = user.cart.map((cartItem: any) => ({ id: cartItem.id} ));
    console.log(cartItemIds)
    await context.db.CartItem.deleteMany({
      where: cartItemIds,
    });
    return order;
};

export default checkout;
