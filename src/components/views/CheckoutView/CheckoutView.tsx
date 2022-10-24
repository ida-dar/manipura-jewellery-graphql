import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from 'src/utils/routes';
import { CartContext, CartItem } from 'src/store/CartStore';

import { Row } from 'src/assets/Flexbox';
import CheckoutCart from 'src/components/layout/CheckoutCart/CheckoutCart';
import ButtonComponent from 'src/components/common/Button/Button';
import Header from 'src/components/common/Header/Header';
import CheckoutForm from 'src/components/layout/CheckoutForm/CheckoutForm';
// import MiniCartItem from 'src/components/features/MiniCartItem/MiniCartItem';

const CheckoutView = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Row>
      {cartItems.length ? (
        <>
          <CheckoutForm />
          {/* {cartItems.map((el, i) => (
            <MiniCartItem key={i} item={el} />
          ))} */}
          <CheckoutCart cartItems={cartItems as CartItem[]} />
        </>
      ) : (
        <Row lg={10} textAlign="center" direction="column" justify="center">
          <Header text="Nothing in cart" />
          <Link to={`${process.env.PUBLIC_URL}${appRoutes.HOME}`}>
            <ButtonComponent width={250} text="Return to homepage" />
          </Link>
        </Row>
      )}
    </Row>
  );
};

export default CheckoutView;
