import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const links = [
  { name: "HOME", href: "/" },
  { name: "DESTINATION", href: "/Destination" },
  { name: "CREW", href: "/Crew" },
  { name: "TECHNOLOGY", href: "/Technology" },
];

function Header() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 375) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.crossContainer} onClick={handleToggle}>
        <div className={`${isMobile ? styles.crossStroke : ""}`}></div>
        <div className={`${isMobile ? styles.crossStroke : ""}`}></div>
        <div className={`${isMobile ? styles.crossStroke : ""}`}></div>
      </div>
      <img src="/assets/shared/logo.svg" alt="logo" className={styles.logo} />
      <div className={styles.stroke}></div>
      <nav
        className={`${styles.navbar} ${isMobile ? styles.navbarVisible : ""}`}
      >
        {links.map((link, index) => (
          <ul
            key={index}
            className={
              router.pathname === link.href
                ? `${styles.navlink} ${styles.active}`
                : styles.navlink
            }
          >
            <Link href={link.href}>{link.name}</Link>
          </ul>
        ))}
      </nav>
    </header>
  );
}

export default Header;
