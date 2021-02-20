import ProductItem from "./ProductItem";
import products from "../products";
import { ListWrapper } from "../styles";

const ProductList = () => {
  const productList = products.map((pro) => (
    <ProductItem product={pro} key={pro.id} />
  ));
  return <ListWrapper>{productList}</ListWrapper>;
};
export default ProductList;
