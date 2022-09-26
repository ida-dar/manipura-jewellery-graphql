import { Col, Row } from '../../../assets/Flexbox';
import { Product } from './interfaces';
import ProductItem from '../../features/ProductItem';
import products from '../../../data/products.json';

const Products = () => {
  const _products = JSON.parse(JSON.stringify(products));

  return (
    <Row wrap={'wrap'}>
      {_products.map((el: Product, i: number) => (
        <Col key={i} lg={4} md={6} sm={12}>
          <ProductItem {...el} />
        </Col>
      ))}
    </Row>
  );
};

export default Products;
