import ProductItem from "./components/ProductItem";
import products from "./products";

const ProductList = () => {
  return products.map((pro) => <ProductItem product={pro} key={pro.id} />);
};
export default ProductList;
