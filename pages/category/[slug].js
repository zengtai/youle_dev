import { getLocalData } from "../../lib/api";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Breadcrumb from "../../components/Breadcrumb";

export default function Category({ data, category, categories }) {
  console.log(`data`, data);
  console.log(`category`, category);
  return (
    <Layout navItems={categories} title={`${category} Games`}>
      <div className="game-category container mx-auto">
        <Breadcrumb item={category} />
        <section className="my-4">
          <header className="section-title">
            <h1 className="text-center font-bold">{`${category} Games`}</h1>
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
