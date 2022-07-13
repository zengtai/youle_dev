import Link from "next/link";

export default function Navbar({ items }) {
  return (
    <>
      <nav className="flex justify-center bg-blue-500 text-sm text-white">
        <div className="container">
          <ul className="mx-6 flex flex-wrap gap-4 py-4">
            <li>
              <Link href={`/`}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={`/all`}>
                <a>All</a>
              </Link>
            </li>
            {items.map((item) => (
              <li key={item.slug}>
                <Link href={`/category/${item.slug}`}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
