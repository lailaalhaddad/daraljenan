import img from "./image/daraljenan.JPG";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Dar Aljenan Resturent</h1>
        <h2>Served all kind of food, but our specialty is grape leaves.</h2>
        <img src={img} className="App-front" alt="front" />
      </header>
      <div>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
