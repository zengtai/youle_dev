import Link from "next/link";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { getLocalData } from "../../lib/api";
import Breadcrumb from "../../components/Breadcrumb";

export default function Game({ data, related, categories }) {
  console.log(`data`, data);
  return (
    <Layout navItems={categories} title={data.title}>
      <div className="game-detail container mx-auto">
        <Breadcrumb item={data} />
        <section className="my-8 mx-6">
          <div>
            <h1>{data.title}</h1>
            <div>
              <Image alt={data.title} width={200} height={200} />
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
            <List items={related} />
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
