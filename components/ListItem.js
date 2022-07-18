import Link from "next/link";
import Image from "./Image";

export default function ListItem({ item, index }) {
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
      // case 12:
      // case 15:
      // case 16:
      // case 21:
      // case 26:
      // case 27:
      // case 28:
      // case 30:
      // case 31:
      // case 34:
      // case 35:
      // case 47:
      // case 48:
      // case 63:
      // case 65:
      // case 66:
      // case 67:
      // case 70:
      // case 71:
      // case 120:
      // case 121:
      // case 125:
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
            <Image appid={`${item.title}`} alt={item.title} />
            <h2 className="list-item-title">
              <span>{item.title}</span>
            </h2>
          </a>
        </Link>
      </li>
    </>
  );
}
