import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { ProdContext } from 'src/store/ProductStore';
import { Product } from 'src/interfaces/Product.interface';

import { Col, Row } from 'src/assets/Flexbox';
import ButtonComponent from 'src/components/common/Button/Button';
import { Image } from './ProductViewCSS';

const ProductView = () => {
  const { products } = useContext(ProdContext);
  const urlId = useLocation().pathname.split('/').at(-1) as string;
  const currProd = products.find((prod) => prod.name === urlId) as Product;

  return (
    <div>
      <Row justify="center" align="center" textAlign="center">
        <Col lg={3} justify="center">
          <h4>{currProd.name}</h4>
        </Col>
        <Col lg={6} justify="center">
          <Image src={`/img/products/${currProd.img || 'default.jpg'}`} alt={'image'} />
        </Col>
        <Col lg={3} justify="end">
          <p>${currProd.price}</p>
          <ButtonComponent text="Add to cart" reverseColors />
        </Col>
      </Row>
      <Row lg={10}>
        <h4>Details</h4>
        <p>{currProd.descr}</p>
      </Row>
    </div>
  );
};

export default ProductView;
