import Link from "next/link";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import { getLocalData } from "../../lib/api";

export default function Game({ data, related, categories }) {
  console.log(`data`, data);
  return (
    <Layout navItems={categories}>
      <div className="container mx-auto">
        <section className="my-8 mx-6">
          <div>
            <h1>{data.title}</h1>
            <div>
              <Image
                src={data.thumbnailUrl}
                alt={data.title}
                width={200}
                height={200}
              />
            </div>
            <div>
              <Link href={`/category/${data.category.slug}`}>
                <a>{data.category.name}</a>
              </Link>
            </div>
            <div>{data.description}</div>
          </div>
          <div>
            <h2>You May Also Like</h2>
            <ul className="grid grid-cols-3 gap-4">
              {related.map((game) => (
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
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const data = await getLocalData(`game`, ctx.params.slug);

  return {
    props: {
      data: data.data,
      related: data.related,
    },
  };
}

export const getStaticPaths = async () => {
  const slugs = await getLocalData().then((res) =>
    res.data.basicData.map((item) => item.slug)
  );

  return {
    paths: slugs.map((item) => ({
      params: {
        slug: item,
      },
    })),
    fallback: false,
  };
};
