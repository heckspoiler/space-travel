import styles from "../styles/index.module.css";
import Header from "../components/Header";
import IndexBody from "../components/IndexBody";

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <IndexBody />
    </div>
  );
}

export default HomePage;
