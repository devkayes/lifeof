import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo / Site Name */}
        <Link href="/">
          <h1 className="text-2xl font-bold font-cardo">My Blog</h1>
        </Link>

        {/* Navigation */}
        <nav className="space-x-4">
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
