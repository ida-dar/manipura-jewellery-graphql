import { Col, Row } from '@assets/Flexbox';
import { presenter, presenterProps } from '../../../presenter'
import { Product } from './interfaces';
import ProductItem from '@features/ProductItem';
import Presenter from './ProductsPM';

const Products = ({ pm }: presenterProps) => {

  return (
    <Row wrap={"wrap"}>
      {pm._products.map(
        (el: Product, i: number) =>
        <Col key={i} lg={3} md={6} sm={12}>
          <ProductItem {...el} />
        </Col>
      )}
    </Row>
  )
}

export default presenter(Presenter, Products)
