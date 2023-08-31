import styles from "../styles/index.module.css";
import Header from "../components/Header";
import IndexBody from "../components/IndexBody";
import Head from "next/head";

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Travel Inc.</title>
        <meta name="Space Travel Inc." content="Come to space with us!" />
      </Head>
      <Header />
      <IndexBody />
    </div>
  );
}

export default HomePage;
