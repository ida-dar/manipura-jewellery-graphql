import { useLocation } from 'react-router-dom';

import { Product } from 'src/interfaces';
import { selectProducts } from 'src/redux/products/productSelector';
import { useAppDispatch, useAppSelector } from 'src/utils/hooks';
import { addItemToCart } from 'src/redux/cart/cartRedux';

import Header from 'src/components/common/Header/Header';
import { Col, Row } from 'src/assets/Flexbox';
import ButtonComponent from 'src/components/common/Button/Button';
import { theme } from 'src/assets/theme/theme';
import { Image } from './ProductViewCSS';

const ProductView = () => {
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  const urlId = useLocation().pathname.split('/').at(-1) as string;
  const currProd = products.find((prod: Product) => prod.id === urlId) as Product;

  const cartProd = {
    id: currProd.id,
    name: currProd.name,
    price: currProd.price,
    img: currProd.img,
    quantity: 0,
  };

  const addProductToCart = () => dispatch(addItemToCart(cartProd));

  return (
    <div>
      <Row justify="center" align="center" textAlign="center">
        <Col lg={3} justify="center">
          <Header
            text={currProd.name}
            textAlign="left"
            fontStyle="italic"
            transform="capitalize"
            color={theme.colors.black}
          />
        </Col>
        <Col lg={6} justify="center">
          <Image src={`/img/products/${currProd.img || 'default.jpg'}`} alt={currProd.name} />
        </Col>
        <Col lg={3} justify="end">
          <p>${currProd.price}</p>
          <ButtonComponent onClick={addProductToCart} text="Add to cart" reverseColors />
        </Col>
      </Row>
      <Row lg={10}>
        <h3>Details</h3>
        <p>{currProd.descr}</p>
      </Row>
    </div>
  );
};

export default ProductView;
