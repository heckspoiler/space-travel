import Link from "next/link";

function Header() {
  return (
    <header className="bg-transparent flex flex-row items-center p-4 w-screen">
      <img src="/assets/shared/logo.svg" alt="logo" className="h-12" />
      <div className="h-1px w-72 bg-gray-400"></div>
      <nav>
        <Link href="/" className="navtext">
          HOME
        </Link>
        <Link href="/destination" className="navtext">
          DESTINATION
        </Link>
        <Link href="/crew" className="navtext">
          CREW
        </Link>
        <Link href="/technology" className="navtext">
          TECHNOLOGY
        </Link>
      </nav>
    </header>
  );
}

export default Header;
