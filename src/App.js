import ProductList from "./ProductList";
import Home from "./components/Home";
import styles from "./styles";

function App() {
  return (
    <div style={styles.body}>
      <div>
        <Home />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
