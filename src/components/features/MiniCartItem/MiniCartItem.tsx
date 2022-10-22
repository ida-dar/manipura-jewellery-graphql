import { useContext } from 'react';
import { CartContext } from 'src/store/CartStore';
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
} from './MiniCartItemCSS';

const MiniCartItem = ({ item }: any) => {
  const { name, price, img, quantity } = item;
  const { addItemToCart, removeItemFromCart, quantityDown } = useContext(CartContext);

  return (
    <ItemContainer justify="space-between" align="center" alignContent="center">
      <ImageContainer>
        <Img src={`/img/products/${img || 'default.jpg'}`} alt={name} />
      </ImageContainer>
      <InfoContainer>
        <Header>{name}</Header>
        <Price>${price}</Price>
        <ButtonContainer justify="flex-start" align="center" alignContent="center">
          <Button onClick={() => quantityDown(item)}>-</Button>
          <p>{quantity}</p>
          <Button onClick={() => addItemToCart(item)}>+</Button>
          <RemoveBtn onClick={() => removeItemFromCart(item)}>Remove</RemoveBtn>
        </ButtonContainer>
      </InfoContainer>
    </ItemContainer>
  );
};

export default MiniCartItem;
