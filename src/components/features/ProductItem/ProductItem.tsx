const ProductItem = ({name, descr, price, categories, img}: any) => {
  // const image = require(`@AssetsImagesProducts/${img}`)
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <img src={`@AssetsImagesProducts/${img}`}></img>
    </div>
  )
}

export default ProductItem;
