import { productsLoading, selectProducts } from 'src/redux/productRedux';
import { Product } from '../../../interfaces/Product.interface';
import { useAppSelector } from 'src/utils/hooks';

import { Col, Row } from '../../../assets/Flexbox';
import ProductItem from '../../features/ProductItem';
import Header from 'src/components/common/Header/Header';
import Loader from 'src/components/common/Loader/Loader';

const FeaturedProducts = () => {
  const products = useAppSelector(selectProducts);
  const pending = useAppSelector(productsLoading);

  return (
    <>
      {
        <>
          <Header text="See our suggestions" textAlign="left" />
          <Row wrap={'wrap'}>
            {pending ? (
              <Loader />
            ) : (
              products
                .filter((el: Product) => el.categories.includes('featured'))
                .slice(0, 9)
                .map((el: Product, i: number) => (
                  <Col key={i} lg={4} md={6} sm={12}>
                    <ProductItem {...el} />
                  </Col>
                ))
            )}
          </Row>
        </>
      }
    </>
  );
};

export default FeaturedProducts;
