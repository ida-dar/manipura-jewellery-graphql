import React, { useEffect } from 'react';
import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface CartItem {
  name: string;
  price: string;
  img: string;
  quantity: number;
}

const initialState = {
  cartItems: [] as CartItem[],
  addItemToCart: (() => {}) as any,
  removeItemFromCart: (() => {}) as any,
  quantityDown: (() => {}) as any,
  cartCount: 0 as number,
};

const addCartItem = (cartItems: CartItem[], product: CartItem) => {
  const prodExists = cartItems.find((el) => el.name === product.name);
  if (prodExists) {
    return cartItems.map((cartItem) =>
      cartItem.name === product.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext(initialState);

const CartStore = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const currCartCount = cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0); // (prevValue, currValue) => prevValue + currValue, intialValue
    setCartCount(currCartCount);
  }, [cartItems]);

  const addItemToCart = (product: CartItem) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (product: CartItem) => {
    const prodExists = cartItems.find((el) => el.name === product.name);
    if (!prodExists) return;
    else {
      return setCartItems([...cartItems.filter((prod) => prod.name !== product.name)]);
    }
  };

  const quantityDown = (product: CartItem) => {
    const prodExists = cartItems.find((el) => el.name === product.name);
    if (!prodExists) return;
    else {
      const productIdx = cartItems.indexOf(product);
      const productsFront = cartItems.slice(0, productIdx);
      const productsBack = cartItems.slice(productIdx + 1, cartItems.length);
      setCartItems([
        ...productsFront,
        {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : product.quantity,
        },
        ...productsBack,
      ]);
    }
  };

  const value = {
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    quantityDown,
    cartCount,
    setCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartStore;
