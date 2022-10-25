import { useContext } from 'react';
import { CartContext } from 'src/store/CartStore';
import { CartItem } from 'src/interfaces/Cart.interface';

import Header from 'src/components/common/Header/Header';
import CheckoutItem from 'src/components/features/CheckoutItem/CheckoutItem';
import { CartCounts, CartParts } from './CheckoutCartCSS';

const CheckoutCart: React.FC<{ cartItems: CartItem[] }> = ({ cartItems }) => {
  const { cartTotal, shippingPrice } = useContext(CartContext);

  return (
    <>
      <Header text="Shopping cart" textAlign="left" />
      {cartItems?.map((el: CartItem, i: number) => (
        <CheckoutItem key={i} item={el} />
      ))}
      <CartCounts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Subtotal</span>
          <span>${cartTotal - shippingPrice}</span>
        </CartParts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Shipping rate</span>
          <span>${shippingPrice}</span>
        </CartParts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Total</span>
          <span>${cartTotal}</span>
        </CartParts>
      </CartCounts>
    </>
  );
};

export default CheckoutCart;
