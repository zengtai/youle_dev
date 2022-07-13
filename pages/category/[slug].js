import { getLocalData } from "../../lib/api";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Breadcrumb from "../../components/Breadcrumb";

export default function Category({ data, category, categories }) {
  console.log(`data`, data);
  console.log(`category`, category);
  return (
    <Layout navItems={categories}>
      <div className="game-category container mx-auto">
        <Breadcrumb item={category} />
        <section className="my-8 mx-6">
          <header className="my-3 flex gap-2">
            <h1 className="font-bold">{`${category} Games`}</h1>
          </header>
          <List items={data} />
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
