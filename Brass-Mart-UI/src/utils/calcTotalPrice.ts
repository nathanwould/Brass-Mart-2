import { ICartItem } from "../types";

export default function calcTotalPrice(cart: ICartItem[]) {
  return cart?.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}