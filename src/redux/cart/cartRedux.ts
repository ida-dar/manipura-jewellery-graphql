import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from 'src/interfaces';
import { addItem, removeItem, reduceQty } from 'src/utils/cartUtils';
import globalValues from 'src/stores/globalValues';
import { CartState } from 'src/utils/reduxUtils/reduxTypes';

const initialState: CartState = {
  cartItems: [] as CartItem[],
  shippingPrice: globalValues.shipping as number,
};

/* slice */
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      state.cartItems = addItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action: PayloadAction<CartItem>) {
      state.cartItems = removeItem(state.cartItems, action.payload);
    },
    quantityDown(state, action: PayloadAction<CartItem>) {
      state.cartItems = reduceQty(state.cartItems, action.payload);
    },
    setShippingPrice(state, action: PayloadAction<number>) {
      state.shippingPrice = action.payload;
    },
  },
});

export const { addItemToCart, removeItemFromCart, quantityDown, setShippingPrice } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
