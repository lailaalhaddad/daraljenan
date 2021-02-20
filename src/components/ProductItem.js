import styles from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div style={styles.product}>
      <img style={styles.productImage} src={product.image} alt={product.alt} />
      <h1 style={styles.text}>{product.name}</h1>
      <h2 style={styles.text}>{product.price} KD</h2>
    </div>
  );
};
export default ProductItem;
