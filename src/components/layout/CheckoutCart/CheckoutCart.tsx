import { useContext } from 'react';
import { Row } from 'src/assets/Flexbox';
import Header from 'src/components/common/Header/Header';
import CheckoutItem from 'src/components/features/CheckoutItem/CheckoutItem';
import { CartContext, CartItem } from 'src/store/CartStore';

const CheckoutCart: React.FC<{ cartItems: CartItem[] }> = ({ cartItems }) => {
  const { cartTotal, shippingPrice } = useContext(CartContext);

  return (
    <Row justify="flex-start" align="center" alignContent="center" direction="column">
      <Header text="Shopping cart" textAlign="left" />
      {cartItems?.map((el: CartItem, i: number) => (
        <CheckoutItem key={i} item={el} />
      ))}
      <div>
        <p>Subtotal: ${cartTotal - shippingPrice}</p>
        <p>Shipping: ${shippingPrice}</p>
        <p>Total: ${cartTotal}</p>
      </div>
    </Row>
  );
};

export default CheckoutCart;
