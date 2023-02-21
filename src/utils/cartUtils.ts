import { CartItem } from 'src/interfaces';

export const addItem = (cartItems: CartItem[], prod: CartItem) => {
  const prodExists = cartItems.find((el: CartItem) => el.id === prod.id);
  if (prodExists) {
    return cartItems.map((cartItem: CartItem) =>
      cartItem.id === prod.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...prod, quantity: 1 }];
};

export const removeItem = (cartItems: CartItem[], prod: CartItem): any => {
  const prodExists = cartItems.find((el: CartItem) => el.id === prod.id);
  if (!prodExists) return;
  else {
    return [...cartItems.filter((el: CartItem) => el.id !== prod.id)];
  }
};

export const reduceQty = (cartItems: CartItem[], prod: CartItem): any => {
  const prodExists = cartItems.find((el: CartItem) => el.id === prod.id);
  if (!prodExists) return;
  else {
    if (prod.quantity === 1) {
      return cartItems;
    }

    return cartItems.map((item) => (item.id === prod.id ? { ...item, quantity: item.quantity - 1 } : item));
  }
};
