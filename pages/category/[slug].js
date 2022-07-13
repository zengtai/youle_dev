import { getLocalData } from "../../lib/api";
import Link from "next/link";
import Image from "../../components/Image";
import Layout from "../../components/Layout";

export default function Category({ data, category, categories }) {
  console.log(`data`, data);
  return (
    <Layout navItems={categories}>
      <div className="container mx-auto">
        <section className="my-8 mx-6">
          <header className="my-3 flex gap-2">
            <h1 className="font-bold">{`${category} Games`}</h1>
          </header>
          <ul className="grid grid-cols-3 gap-4">
            {data.map((game) => (
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
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const data = await getLocalData(`category`, ctx.params.slug);

  return {
    props: {
      data: data.data,
      category: data.category,
    },
  };
}

export const getStaticPaths = async () => {
  const categories = await getLocalData(`category`);

  return {
    paths: categories.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
};
