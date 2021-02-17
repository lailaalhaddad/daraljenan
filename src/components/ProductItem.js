const ProductItem = (props) => {
  const product = props.product;

  return (
    <>
      <h1>{product.name}</h1>
      <h2>{product.price} KD</h2>
      {product.image}
    </>
  );
};
export default ProductItem;
