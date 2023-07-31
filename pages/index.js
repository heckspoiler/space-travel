import Link from "next/link";
import styles from "../styles/index.module.css";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <div>
        Welcome to Next.js!
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default HomePage;
