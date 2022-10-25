import { Link, Image, Figure, Figcaption, Name, Price } from './ProductsCSS';

const ProductItem = ({ id, name, price, img }: any) => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/product/${name.toLowerCase().replaceAll(' ', '-')}/${id}`}>
      <Figure>
        <Image src={img ? `/img/products/${img}` : '/img/products/default.jpg'} alt={name} />
        <Figcaption>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </Figcaption>
      </Figure>
    </Link>
  );
};

export default ProductItem;
