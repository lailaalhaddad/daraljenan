import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;
  return (
    <ProductWrapper>
      <img src={product.image} alt={product.alt} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    </ProductWrapper>
  );
};
export default ProductItem;
