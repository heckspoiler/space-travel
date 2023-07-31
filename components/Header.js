import Link from "next/link";
import style from "../styles/Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <img src="/assets/shared/logo.svg" alt="logo" className="h-12 ml-12" />
      <div className={style.stroke}></div>
      <nav className={style.navbar}>
        <Link href="/" className={style.navlink}>
          HOME
        </Link>
        <Link href="/destination" className={style.navlink}>
          DESTINATION
        </Link>
        <Link href="/crew" className={style.navlink}>
          CREW
        </Link>
        <Link href="/technology" className={style.navlink}>
          TECHNOLOGY
        </Link>
      </nav>
    </header>
  );
}

export default Header;
