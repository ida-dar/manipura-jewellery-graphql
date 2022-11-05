import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, quantityDown, addItemToCart, removeItemFromCart } from 'src/redux/cartRedux';
import {
  Img,
  InfoContainer,
  Price,
  ItemContainer,
  Header,
  Button,
  ButtonContainer,
  RemoveBtn,
  ImageContainer,
  RefId,
  PriceRef,
} from './MiniCartItemCSS';

const MiniCartItem = ({ item }: any) => {
  const { id, name, price, img, quantity } = item;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <ItemContainer justify="space-between" align="center" alignContent="center">
      <ImageContainer>
        <Img src={`/img/products/${img || 'default.jpg'}`} alt={name} />
      </ImageContainer>
      <InfoContainer>
        <Header>{name}</Header>
        <PriceRef>
          <RefId>Ref.{id}</RefId>
          <Price>${price}</Price>
        </PriceRef>
        <ButtonContainer justify="flex-start" align="center" alignContent="center">
          <Button onClick={() => dispatch(quantityDown(cartItems, item))}>-</Button>
          <p>{quantity}</p>
          <Button onClick={() => dispatch(addItemToCart(cartItems, item))}>+</Button>
          <RemoveBtn onClick={() => dispatch(removeItemFromCart(cartItems, item))}>Remove</RemoveBtn>
        </ButtonContainer>
      </InfoContainer>
    </ItemContainer>
  );
};

export default MiniCartItem;
