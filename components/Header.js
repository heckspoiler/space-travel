import Link from "next/link";

function Header() {
  return (
    <header className="bg-transparent flex flex-row items-center p-4 w-screen">
      <img src="/assets/shared/logo.svg" alt="logo" className="h-12" />
      <div className="h-1px w-72 bg-gray-400"></div>
      <nav>
        <Link href="/" className="text-white">
          HOME
        </Link>
        <Link href="/destination" className="text-white">
          DESTINATION
        </Link>
        <Link href="/crew" className="text-white">
          CREW
        </Link>
        <Link href="/technology" className="text-white">
          TECHNOLOGY
        </Link>
      </nav>
    </header>
  );
}

export default Header;
