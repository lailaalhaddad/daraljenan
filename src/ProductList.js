import img1 from "./image/waraq.png";
import img2 from "./image/taboula.JPG";
import img3 from "./image/mash.jpg";
import img4 from "./image/lotus.JPG";
let products = [
  {
    name: "Waraq 3anab lemon- 50 pc",
    price: 6,
    image: <img src={img1} className="menu" alt="pro1" />,
  },
  {
    name: "Taboula",
    price: 8,
    image: <img src={img2} className="menu" alt="pro2" />,
  },
  {
    name: "Mashroom Mash Potatoes",
    price: 12,
    image: <img src={img3} className="menu" alt="pro3" />,
  },
  {
    name: "Cheesecake lotus -20 pc",
    price: 13,
    image: <img src={img4} className="menu" alt="pro4" />,
  },
];
function ProductList() {
  return products.map((product) => (
    <>
      <h1>{product.name}</h1>
      <h2>{product.price} KD</h2>
      {product.image}
    </>
  ));
}
export default ProductList;
