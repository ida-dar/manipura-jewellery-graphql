import { useSelector } from 'react-redux';

import { selectProducts } from 'src/redux/productRedux';
import { Product } from '../../../interfaces/Product.interface';

import { Col, Row } from '../../../assets/Flexbox';
import ProductItem from '../../features/ProductItem';
import Header from 'src/components/common/Header/Header';

const FeaturedProducts = () => {
  const products = useSelector(selectProducts);

  return (
    <>
      {products && (
        <>
          <Header text="See our suggestions" textAlign="left" />
          <Row wrap={'wrap'}>
            {products
              .filter((el: Product) => el.categories.includes('featured'))
              .slice(0, 9)
              .map((el: Product, i: number) => (
                <Col key={i} lg={4} md={6} sm={12}>
                  <ProductItem {...el} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default FeaturedProducts;
