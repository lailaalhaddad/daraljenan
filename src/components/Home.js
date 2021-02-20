import img from "../image/daraljenan.JPG";
import styles from "../styles";
import { Description, ShopImage, Title } from "../styles";

function Home() {
  return (
    <div>
      <div style={styles.list}>
        <Title>Welcome to Dar Aljenan</Title>
        <Description>
          Served all kind of food, but our specialty is grape leaves.
        </Description>
        <ShopImage alt="Dar Aljenan" src={img} />
      </div>
    </div>
  );
}

export default Home;
