import { useContext } from 'react';
import { CartContext } from 'src/store/CartStore';
import { Col, Row } from 'src/assets/Flexbox';
import { Button, ButtonContainer, Header, Qty, RemoveBtn, Price, RefId } from './CheckoutItemCSS';

const CheckoutItem = ({ item }: any) => {
  let { id, name, price, img, quantity } = item;

  const { addItemToCart, removeItemFromCart, quantityDown } = useContext(CartContext);

  return (
    <Row justify="space-between" align="center" alignContent="center" lg={12}>
      <Col noGutters lg={3}>
        <img src={`/img/products/${img || 'default.jpg'}`} alt={name} />
      </Col>
      <Col noGutters lg={3}>
        <Header>{name}</Header>
        <RefId>Ref.{id}</RefId>
      </Col>
      <Col lg={2} noGutters textAlign="center" justify="center">
        <ButtonContainer justify="center" align="center" alignContent="center">
          <Button onClick={() => quantityDown(item)}>-</Button>
          <Qty>{quantity}</Qty>
          <Button onClick={() => addItemToCart(item)}>+</Button>
        </ButtonContainer>
        <RemoveBtn onClick={() => removeItemFromCart(item)}>Remove</RemoveBtn>
      </Col>
      <Price noGutters lg={1}>
        ${price}
      </Price>
    </Row>
  );
};

export default CheckoutItem;
