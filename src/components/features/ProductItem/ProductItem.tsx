import { Link, Image, Figure, Figcaption, Name, Price } from "./ProductsCSS";

const ProductItem = ({name, price, img}: any) => {
  return (
    <Link to={`${process.env.PUBLIC_URL}/product/${name}`}>
      <Figure>
        <Image loading="lazy" src={img ? `img/products/${img}` : 'img/products/default.jpg'} alt={name} />
        <Figcaption>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </Figcaption>
      </Figure>
    </Link>
  )
}

export default ProductItem;
