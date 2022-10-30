import { createContext, useState, Reducer, useReducer } from 'react';
import cartReducer from 'src/redux/cartRedux';
import { CartState, CART_ACTION_TYPES } from 'src/utils/redux/statusActions';
import { createAction, endRequest, errorRequest, startRequest } from 'src/utils/redux/createAction';
import { addItem, reduceQty, removeItem } from 'src/utils/cartUtils';
import { CartItem, ContextProps } from 'src/interfaces';

const shipping = 25;

const initialState: CartState = {
  cartItems: [] as CartItem[],
  cartCount: 0 as number,
  cartTotal: 0 as number,
  shippingPrice: shipping as number,
  request: {
    pending: false as boolean,
    error: null as Error | null,
    success: null,
  },
};

export const CartContext = createContext({
  cartItems: [] as CartItem[],
  addItemToCart: (() => {}) as any,
  removeItemFromCart: (() => {}) as any,
  quantityDown: (() => {}) as any,
  cartCount: 0 as number,
  cartTotal: 0 as number,
  shippingPrice: shipping as number,
});

const CartStore = ({ children }: ContextProps) => {
  const [shippingPrice, setShippingPrice] = useState(shipping);

  const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer<Reducer<any, any>>(cartReducer, initialState);

  const updateCart = (newCartItems: CartItem[]) => {
    const newCartCount = newCartItems.reduce((total: any, cartItem: CartItem) => total + cartItem.quantity, 0); // (prevValue, currValue) => prevValue + currValue, intialValue

    const newCartTotal = newCartItems.reduce(
      (total: number, cartItem: CartItem) => total + cartItem.quantity * parseInt(cartItem.price),
      0
    );

    if (newCartTotal >= 500) setShippingPrice(0);
    else setShippingPrice(shipping);

    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    // dispatch cart update
    dispatch(startRequest({ name: 'UPDATE_CART' }));
    try {
      dispatch(createAction(payload, CART_ACTION_TYPES.SET_CART_ITEMS));
    } catch (e: any | Error) {
      dispatch(errorRequest(e.message));
    }
    dispatch(endRequest({ name: 'UPDATE_CART' }));
  };

  // cart actions
  const addItemToCart = (product: CartItem) => {
    const updatedCart = addItem(cartItems, product);
    updateCart(updatedCart);
  };

  const removeItemFromCart = (product: CartItem) => {
    const updatedCart = removeItem(cartItems, product);
    updatedCart && updateCart(updatedCart);
  };

  const quantityDown = (product: CartItem) => {
    const updatedCart = reduceQty(cartItems, product);
    updatedCart && updateCart(updatedCart);
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    quantityDown,
    cartCount,
    cartTotal,
    shippingPrice,
    setShippingPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartStore;
