import Link from "next/link";

export default function Navbar({ items }) {
  return (
    <>
      <nav className="flex justify-center bg-blue-500">
        <div className="container mx-6 flex gap-2">
          <Link href={`/`}>
            <a>Home</a>
          </Link>
          <ul className="flex flex-wrap gap-2">
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
