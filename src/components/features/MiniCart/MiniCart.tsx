import { useSelector } from 'react-redux';
import { appRoutes } from 'src/utils/routes';
import { selectCartItems } from 'src/redux/cartRedux';
import { Button, CartButton, CartContainer, CartDiv, CartItems, EmptyCartText } from './MiniCartCSS';
import MiniCartItem from '../MiniCartItem/MiniCartItem';
import { CartItem } from 'src/interfaces';

const MiniCart = ({ open }: any) => {
  const cartItems = useSelector(selectCartItems);

  return (
    <CartContainer open={open}>
      {cartItems.length === 0 ? (
        <EmptyCartText>Your shopping cart is empty</EmptyCartText>
      ) : (
        <CartItems>
          {cartItems.map((el: CartItem, i: number) => (
            <MiniCartItem key={i} item={el} />
          ))}
        </CartItems>
      )}

      <CartDiv>
        <CartButton to={`${process.env.PUBLIC_URL}${appRoutes.CHECKOUT}`}>
          <Button>
            <span>
              <span>Go to checkout</span>
            </span>
          </Button>
        </CartButton>
      </CartDiv>
    </CartContainer>
  );
};

export default MiniCart;
