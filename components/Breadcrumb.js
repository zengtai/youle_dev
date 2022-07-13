import Link from "next/link";

export default function Breadcrumb({ item }) {
  // console.log(`item`, item);
  const routes = item.title
    ? [
        {
          path: `/`,
          title: `Home`,
        },
        {
          path: `/category/${item.category.slug}/`,
          title: `${item.category.name}`,
        },
        {
          path: null,
          title: `${item.title}`,
        },
      ]
    : [
        {
          path: `/`,
          title: `Home`,
        },
        {
          path: null,
          title: `${item}`,
        },
      ];
  return (
    <ol className="breadcrumb mx-6 my-4 flex gap-6">
      {routes.map((item, index) => (
        <li
          key={item.title}
          className={
            index < routes.length - 1
              ? `relative after:absolute after:-right-4 after:opacity-50 after:content-['/']`
              : ``
          }
        >
          {item.path !== null ? (
            <Link href={item.path}>
              <a>{item.title}</a>
            </Link>
          ) : (
            <span className="opacity-50">{item.title}</span>
          )}
        </li>
      ))}
    </ol>
  );
}
