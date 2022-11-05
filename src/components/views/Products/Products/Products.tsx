import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

import { appRoutes } from 'src/utils/routes';
import { selectProducts } from 'src/redux/productRedux';
import { Product } from 'src/interfaces/Product.interface';

import { Row, Col } from 'src/assets/Flexbox';
import Header from 'src/components/common/Header/Header';
import ProductItem from '../../../features/ProductItem';

enum ProductNames {
  JEWELLERY = 'jewellery',
  BRACELETS = 'bracelets',
  EARRINGS = 'earrings',
  NECKLACES = 'necklaces',
  RINGS = 'rings',
}

const Products = () => {
  const products = useSelector(selectProducts);

  console.log(products);

  const location = useLocation();
  let data;

  switch (location.pathname) {
    case appRoutes.PRODUCTS.JEWELLERY:
      data = products;
      break;
    case appRoutes.PRODUCTS.BRACELETS:
      data = products?.filter((el: Product) => el.categories.includes(ProductNames.BRACELETS));
      break;
    case appRoutes.PRODUCTS.EARRINGS:
      data = products?.filter((el: Product) => el.categories.includes(ProductNames.EARRINGS));
      break;
    case appRoutes.PRODUCTS.NECKLACES:
      data = products?.filter((el: Product) => el.categories.includes(ProductNames.NECKLACES));
      break;
    case appRoutes.PRODUCTS.RINGS:
      data = products?.filter((el: Product) => el.categories.includes(ProductNames.RINGS));
      break;
    default:
      data = products;
  }

  return (
    <div>
      <Header text="Our Collection" />
      <Row wrap={'wrap'}>
        {data.map((el: Product, i: number) => (
          <Col key={i} lg={4} md={6} sm={12}>
            <ProductItem {...el} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
