import styled from 'styled-components';
import { ReactComponent as CartIcon } from '../../../assets/cart.svg';

const CartComponent = styled(CartIcon)`
  position: relative;
  height: 24px;
`;

const CartCount = styled.span`
  position: absolute;
  font-size: 12px;
  line-height: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Cart = () => {
  return (
    <div>
      <CartComponent />
      <CartCount>0</CartCount>
    </div>
  );
};

export default Cart;
