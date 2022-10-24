import { useContext, useState } from 'react';
import { CartContext } from 'src/store/CartStore';
import { Col, Row } from 'src/assets/Flexbox';
import { Button, ButtonContainer, Header, Input, RemoveBtn, Price } from './CheckoutItemCSS';

const CheckoutItem = ({ item }: any) => {
  let { name, price, img, quantity } = item;

  const { addItemToCart, removeItemFromCart, quantityDown } = useContext(CartContext);
  const [qtyValue, setQtyValue] = useState('');

  const onCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQtyValue(value);
    quantity = qtyValue;
  };

  return (
    <Row justify="space-between" align="center" alignContent="center" lg={10}>
      <Col lg={3}>
        <img src={`/img/products/${img || 'default.jpg'}`} alt={name} />
      </Col>
      <Col lg={5}>
        <Header>{name}</Header>
      </Col>
      <Col lg={2} textAlign="center" justify="center">
        <ButtonContainer justify="center" align="center" alignContent="center">
          <Button onClick={() => quantityDown(item)}>-</Button>
          <Input name="prod" value={quantity} type="text" onChange={onCountChange} />
          <Button onClick={() => addItemToCart(item)}>+</Button>
        </ButtonContainer>
        <RemoveBtn onClick={() => removeItemFromCart(item)}>Remove</RemoveBtn>
      </Col>
      <Price lg={1}>${price}</Price>
    </Row>
  );
};

export default CheckoutItem;
