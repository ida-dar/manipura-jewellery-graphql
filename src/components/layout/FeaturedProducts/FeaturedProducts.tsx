import { useContext } from 'react';
import { ProdContext } from 'src/store/ProductStore';
import { Product } from '../../../interfaces/Product.interface';

import { Col, Row } from '../../../assets/Flexbox';
import ProductItem from '../../features/ProductItem';

const FeaturedProducts = () => {
  const { products } = useContext(ProdContext);

  return (
    <Row wrap={'wrap'}>
      {products
        .filter((el: Product) => el.categories.includes('featured'))
        .map((el: Product, i: number) => (
          <Col key={i} lg={4} md={6} sm={12}>
            <ProductItem {...el} />
          </Col>
        ))}
    </Row>
  );
};

export default FeaturedProducts;
