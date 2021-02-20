import img from "../image/daraljenan.JPG";
import styles from "../styles";

function Home() {
  return (
    <div>
      <div style={styles.list}>
        <h1 style={styles.text}>Welcome to Dar Aljenan</h1>
        <h4 style={styles.text}>
          Served all kind of food, but our specialty is grape leaves.
        </h4>
        <img style={styles.shopImage} alt="Dar Aljenan" src={img} />
      </div>
    </div>
  );
}

export default Home;
