import { useContext } from 'react';
import { CartContext } from 'src/store/CartStore';
import styled from 'styled-components';
import { ReactComponent as CartIcon } from '../../../assets/icons/cart.svg';

const CartComponent = styled.div`
  position: relative;
`;

const Icon = styled(CartIcon)`
  position: absolute;
  top: 65%;
  left: 0;
  height: 24px;
  transform: translate(-50%, -65%);
`;

const CartCount = styled.span`
  position: absolute;
  font-size: 12px;
  line-height: 1;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -65%);
`;

const Cart = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <CartComponent>
      <Icon />
      <CartCount>{cartCount}</CartCount>
    </CartComponent>
  );
};

export default Cart;
