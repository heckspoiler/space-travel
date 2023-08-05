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

  const handleToggle = () => {
    setIsMobile(!isMobile);
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
      <img src="/assets/shared/logo.svg" alt="logo" className="h-12 ml-12" />
      <div className={styles.stroke}></div>
      <nav className={isMobile ? styles.hamburgerMenu : styles.navbar}>
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
        <div className={styles.hamburgerIcon} onClick={handleToggle}>
          <img src="/path-to-hamburger-icon" alt="menu" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
