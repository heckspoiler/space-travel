import { useRouter } from "next/router";
import Link from "next/link";
import style from "../styles/Header.module.css";

const links = [
  { name: "HOME", href: "/" },
  { name: "DESTINATION", href: "/Destination" },
  { name: "CREW", href: "/Crew" },
  { name: "TECHNOLOGY", href: "/Technology" },
];

function Header() {
  const router = useRouter();

  return (
    <header className={style.header}>
      <img src="/assets/shared/logo.svg" alt="logo" className="h-12 ml-12" />
      <div className={style.stroke}></div>
      <nav className={style.navbar}>
        {links.map((link, index) => (
          <ul
            key={index}
            className={
              router.pathname === link.href
                ? `${style.navlink} ${style.active}`
                : style.navlink
            }
          >
            <Link href={link.href}>
              <span>{link.name}</span>
            </Link>
          </ul>
        ))}
      </nav>
    </header>
  );
}

export default Header;
