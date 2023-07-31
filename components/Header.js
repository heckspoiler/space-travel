import Link from "next/link";

function Header() {
  return (
    <header className="bg-transparent flex flex-row items-center p-4 w-screen justify-between">
      <img src="/assets/shared/logo.svg" alt="logo" className="h-12" />
      <div className="h-1px w-72 bg-gray-400 absolute"></div>
      <nav className="text-white font-barlow tracking-wider w-100 gap-24 flex  bg-red-400 items-center">
        <Link href="/" className="h-20 text-center bg-blue-300 py-7 px-3">
          HOME
        </Link>
        <Link
          href="/destination"
          className="h-20 text-center bg-blue-300 py-7 px-3"
        >
          DESTINATION
        </Link>
        <Link href="/crew" className="h-20 text-center bg-blue-300 py-7 px-3">
          CREW
        </Link>
        <Link
          href="/technology"
          className="h-20 text-center bg-blue-300 py-7 px-3"
        >
          TECHNOLOGY
        </Link>
      </nav>
    </header>
  );
}

export default Header;
