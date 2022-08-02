import Breadcrumb from "../../components/Breadcrumb";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { getListDataBySlugs, getLocalData } from "../../lib/api";

import Banner from "../../components/Banner";
import { ADS_SLOT_ID } from "../../lib/constants";

export default function Category({ slugs, category, categories }) {
  // console.log(`category`, category);
  // console.log(`slugs`, slugs);
  let data = getListDataBySlugs(slugs);
  // console.log(`data`, data);

  return (
    <Layout navItems={categories} title={`${category} Games`}>
      <div className="game-category container mx-auto">
        <Banner
          className={`banner`}
          style={{ display: "block" }}
          slot={ADS_SLOT_ID.category}
          responsive="true"
        />

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
  const slugs = data.data.map((item) => item.slug);

  return {
    props: {
      slugs,
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
