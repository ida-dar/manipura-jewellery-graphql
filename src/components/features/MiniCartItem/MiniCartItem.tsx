import { quantityDown, addItemToCart, removeItemFromCart } from 'src/redux/cart/cartRedux';
import { useAppDispatch } from 'src/utils/hooks';
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
  const dispatch = useAppDispatch();

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
          <Button onClick={() => dispatch(quantityDown(item))}>-</Button>
          <p>{quantity}</p>
          <Button onClick={() => dispatch(addItemToCart(item))}>+</Button>
          <RemoveBtn onClick={() => dispatch(removeItemFromCart(item))}>Remove</RemoveBtn>
        </ButtonContainer>
      </InfoContainer>
    </ItemContainer>
  );
};

export default MiniCartItem;
