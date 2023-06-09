import { appRoutes } from 'src/utils/routes';
import { selectCartItems } from 'src/redux/cart/cartSelector';
import { useAppSelector } from 'src/utils/hooks';
import { CartItem } from 'src/interfaces';

import { Button, CartButton, CartContainer, CartDiv, CartItems, EmptyCartText } from './MiniCartCSS';
import MiniCartItem from '../MiniCartItem/MiniCartItem';

const MiniCart = ({ open }: any) => {
  const cartItems = useAppSelector(selectCartItems);

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
