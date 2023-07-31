import Link from "next/link";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center text-white text-2xl">
      <Header />
      <div>
        Welcome to Next.js!
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}

export default HomePage;
