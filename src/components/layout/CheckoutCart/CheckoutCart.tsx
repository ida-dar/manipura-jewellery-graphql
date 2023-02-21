import { useEffect } from 'react';

import { selectCartTotal, shippingPrice } from 'src/redux/cart/cartSelector';
import { setShippingPrice } from 'src/redux/cart/cartRedux';
import { useAppDispatch, useAppSelector } from 'src/utils/hooks';
import { CartItem } from 'src/interfaces';
import globalValues from 'src/stores/globalValues';

import Header from 'src/components/common/Header/Header';
import CheckoutItem from 'src/components/features/CheckoutItem/CheckoutItem';
import { CartCounts, CartParts } from './CheckoutCartCSS';

const CheckoutCart: React.FC<{ cartItems: CartItem[] }> = ({ cartItems }) => {
  const cartTotal = useAppSelector(selectCartTotal);
  const shipping = useAppSelector(shippingPrice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cartTotal >= 500) dispatch(setShippingPrice(0));
    else dispatch(setShippingPrice(globalValues.shipping));
  }, [cartTotal, shipping]);

  return (
    <>
      <Header text="Shopping cart" textAlign="left" />
      {cartItems?.map((el: CartItem, i: number) => (
        <CheckoutItem key={i} item={el} />
      ))}
      <CartCounts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Subtotal</span>
          <>${cartTotal}</>
        </CartParts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Shipping rate</span>
          <span>${shipping}</span>
        </CartParts>
        <CartParts noGutters justify="space-between" align="center" alignContent="center">
          <span>Total</span>
          <>${cartTotal}</>
        </CartParts>
      </CartCounts>
    </>
  );
};

export default CheckoutCart;
