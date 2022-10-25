import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { CartItem } from 'src/interfaces/Cart.interface';

interface Props {
  children: React.ReactNode;
}

const shipping = 25;

const initialState = {
  cartItems: [] as CartItem[],
  addItemToCart: (() => {}) as any,
  removeItemFromCart: (() => {}) as any,
  quantityDown: (() => {}) as any,
  cartCount: 0 as number,
  cartTotal: 0 as number,
  shippingPrice: shipping as number,
};

export const CartContext = createContext(initialState);

const CartStore = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(shipping);

  // cart count
  useEffect(() => {
    const currCartCount = cartItems.reduce((total, cartItems) => total + cartItems.quantity, 0); // (prevValue, currValue) => prevValue + currValue, intialValue
    setCartCount(currCartCount);
  }, [cartItems]);

  // cart total price
  useEffect(() => {
    const currCartTotal = cartItems.reduce((total, cartItems) => total + cartItems.quantity * parseInt(cartItems.price), 0);
    setCartTotal(currCartTotal);

    if (currCartTotal >= 500) setShippingPrice(0);
    else setShippingPrice(shipping);
  }, [cartItems]);

  // cart actions
  const addItemToCart = (product: CartItem) => {
    const prodExists = cartItems.find((el) => el.id === product.id);
    if (prodExists) {
      return setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    }

    return setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeItemFromCart = (product: CartItem) => {
    const prodExists = cartItems.find((el) => el.id === product.id);
    if (!prodExists) return;
    else {
      return setCartItems([...cartItems.filter((prod) => prod.id !== product.id)]);
    }
  };

  const quantityDown = (product: CartItem) => {
    const prodExists = cartItems.find((el) => el.id === product.id);
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
    cartTotal,
    setCartTotal,
    shippingPrice,
    setShippingPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartStore;
