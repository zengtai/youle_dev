import Link from "next/link";
import Image from "./Image";

export default function ListItem({ item, index, lazy }) {
  function handleIndex(index) {
    switch (index) {
      // case 2:
      // case 17:
      // case 22:
      // case 29:
      // case 87:
      // case 112:
      //   return "col-span-3 row-span-3 group";
      // case 11:
      //   return "col-span-2 row-span-2 group";
      default:
        return "list-item";
    }
  }
  return (
    <>
      <li className={`${handleIndex(index)}`}>
        <Link href={`/game/${item.slug}`}>
          <a title={item.title}>
            <Image alt={item.title} lazy={lazy} />
            <h2 className="list-item-title">
              <span>{item.title}</span>
            </h2>
          </a>
        </Link>
      </li>
    </>
  );
}
