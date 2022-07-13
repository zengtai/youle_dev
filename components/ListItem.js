import Link from "next/link";
import Image from "./Image";

export default function ListItem({ item }) {
  return (
    <>
      <li>
        <Link href={`/game/${item.slug}`}>
          <a title={item.title}>
            <Image
              appid={`${item.title}`}
              alt={item.title}
              width={100}
              height={100}
            />
            <h2 className="text-xs">{item.title}</h2>
          </a>
        </Link>
      </li>
    </>
  );
}
