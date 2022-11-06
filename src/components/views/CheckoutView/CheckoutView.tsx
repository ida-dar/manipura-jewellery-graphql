import { Link } from 'react-router-dom';

import { selectCartItems } from 'src/redux/cartRedux';
import { useAppSelector } from 'src/utils/hooks';
import { appRoutes } from 'src/utils/routes';
import { CartItem } from 'src/interfaces';

import { Row } from 'src/assets/Flexbox';
import CheckoutCart from 'src/components/layout/CheckoutCart/CheckoutCart';
import ButtonComponent from 'src/components/common/Button/Button';
import Header from 'src/components/common/Header/Header';
import CheckoutForm from 'src/components/layout/CheckoutForm/CheckoutForm';
import { Form, Textarea } from './CheckoutViewCSS';

const CheckoutView = () => {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <Row>
      {cartItems.length ? (
        <Form>
          <Row lg={5} align="center" alignContent="center" direction="column">
            <CheckoutForm />
          </Row>
          <Row lg={5} align="center" alignContent="center" direction="column">
            <CheckoutCart cartItems={cartItems as CartItem[]} />
            <Textarea id="orderInfo" name="orderInfo" placeholder="Add Comments About Your Order" />
            <ButtonComponent text="Confirm order" width="100%" reverseColors textTransform="uppercase" />
          </Row>
        </Form>
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
