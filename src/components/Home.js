import img from "../image/daraljenan.JPG";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Dar Aljenan Resturent</h1>
        <h4>Served all kind of food, but our specialty is grape leaves.</h4>
        <img src={img} className="App-front" alt="front" />
      </header>
    </div>
  );
}

export default Home;
