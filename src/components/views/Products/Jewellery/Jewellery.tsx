import { useContext } from 'react';
import { ProdContext } from 'src/store/ProductStore';
import { Product } from 'src/components/layout/FeaturedProducts/interfaces';

import { Row, Col } from 'src/assets/Flexbox';
import { Header } from 'src/components/common/AccountHeader/AccountHeader';
import ProductItem from '../../../features/ProductItem';

const Jewellery = () => {
  const { products } = useContext(ProdContext);

  return (
    <div>
      <Header>Our Collection</Header>
      <Row wrap={'wrap'}>
        {products.map((el: Product, i: number) => (
          <Col key={i} lg={4} md={6} sm={12}>
            <ProductItem {...el} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Jewellery;
