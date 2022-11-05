import { useSelector } from 'react-redux';

import { selectCartTotal } from 'src/redux/cartRedux';
import { CartItem } from 'src/interfaces';

import Header from 'src/components/common/Header/Header';
import CheckoutItem from 'src/components/features/CheckoutItem/CheckoutItem';
import { CartCounts, CartParts } from './CheckoutCartCSS';
import { useEffect, useState } from 'react';

const CheckoutCart: React.FC<{ cartItems: CartItem[] }> = ({ cartItems }) => {
  const shipping = 25;
  const [shippingPrice, setShippingPrice] = useState(shipping);
  const cartTotal = useSelector(selectCartTotal);

  useEffect(() => {
    if (cartTotal >= 500) setShippingPrice(0);
    else setShippingPrice(shipping);
  }, [cartTotal]);

  return (
    <>
      <Header text="Shopping cart" textAlign="left" />
      {cartItems?.map((el: CartItem, i: number) => (
        <CheckoutItem key={i} item={el} />
      ))}
      <CartCounts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Subtotal</span>
          <span>${cartTotal}</span>
        </CartParts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Shipping rate</span>
          <span>${shippingPrice}</span>
        </CartParts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Total</span>
          <span>${cartTotal + shippingPrice}</span>
        </CartParts>
      </CartCounts>
    </>
  );
};

export default CheckoutCart;
