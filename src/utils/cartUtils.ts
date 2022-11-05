import { CartItem } from 'src/interfaces';

export const addItem = (cartItems: CartItem[], prod: any) => {
  const prodExists = cartItems.find((el: CartItem) => el.id === prod.id);
  if (prodExists) {
    return cartItems.map((cartItem: CartItem) =>
      cartItem.id === prod.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...prod, quantity: 1 }];
};

export const removeItem = (cartItems: CartItem[], prod: CartItem) => {
  const prodExists = cartItems.find((el: CartItem) => el.id === prod.id);
  if (!prodExists) return;
  else {
    return [...cartItems.filter((el: CartItem) => el.id !== prod.id)];
  }
};

export const reduceQty = (cartItems: CartItem[], prod: CartItem) => {
  const prodExists = cartItems.find((el: CartItem) => el.id === prod.id);
  if (!prodExists) return;
  else {
    const prodIdx: number = cartItems.indexOf(prod);
    const prodsFront = cartItems.slice(0, prodIdx);
    const prodsBack = cartItems.slice(prodIdx + 1, cartItems.length);
    return [
      ...prodsFront,
      {
        ...prod,
        quantity: prod.quantity > 1 ? prod.quantity - 1 : prod.quantity,
      },
      ...prodsBack,
    ];
  }
};
