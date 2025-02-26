import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex-shrink-0">
          <Image
            src="/logo_black.svg"
            alt="logo"
            width={180}
            height={50}
            priority={true}
          />
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          {/* <li>
            <Link href="#team">Team</Link>
          </li> */}
          <li>
            <Link href="#about">Company</Link>
          </li>
          {/* <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li> */}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
