import Link from "next/link";
import Image from "./Image";

export default function ListItem({ item }) {
  return (
    <>
      <li>
        <Link href={`/game/${item.slug}`}>
          <a title={item.title}>
            <Image src={item.icon_url} alt={item.title} />
            <h2>{item.title}</h2>
          </a>
        </Link>
      </li>
    </>
  );
}
