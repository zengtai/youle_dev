import Link from "next/link";
import Layout from "../components/Layout";
import { getLocalData } from "../lib/api";
import Image from "../components/Image";

export default function Home({ data, categories }) {
  console.log(`data`, data);
  return (
    <Layout navItems={categories}>
      <div className="container mx-auto">
        {data.map((item) => {
          return (
            <section className="relative my-8 mx-6" key={item.category.slug}>
              <header className="my-3 flex gap-2">
                <h1 className="font-bold">{`${item.category.name} Games`}</h1>
              </header>
              <ul className="grid grid-cols-3 gap-4">
                {item.data.map((game) => (
                  <li key={game.id}>
                    <Link href={`/game/${game.slug}`}>
                      <a>
                        <Image
                          src={game.thumbnailUrl}
                          alt={game.title}
                          width={100}
                          height={100}
                        />
                        <h2 className="text-xs">{game.title}</h2>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              {item.total > 9 ? (
                <Link href={`/category/${item.category.slug}`}>
                  <a>
                    <div className="absolute top-0 right-0 flex gap-1 border p-1 text-xs">
                      <span>{item.total - 9}</span>
                      <span className="uppercase">More</span>
                    </div>
                  </a>
                </Link>
              ) : null}
            </section>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getLocalData().then((res) => res.data.dataForHome);

  return {
    props: {
      data,
    },
  };
}
