import Breadcrumb from "../../components/Breadcrumb";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { getListDataBySlugs, getLocalData } from "../../lib/api";

import Banner from "../../components/Banner";
import { ADS_SLOT_ID, ADS_ID, SHOW_AD } from "../../lib/constants";

// import Script from "next/script";
import Head from "next/head";
import Script from "next/script";
import TaboolaScript from "../../components/TaboolaScript";
import TaboolaAd from "../../components/TaboolaAd";

export default function Category({ slugs, category, categories }) {
  // console.log(`category`, category);
  // console.log(`slugs`, slugs);
  let data = getListDataBySlugs(slugs);
  // console.log(`data`, data);

  return (
    <>
      {SHOW_AD && (
        <Script
          id={`gads-init`}
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
          crossOrigin="anonymous"
        />
      )}
      {/* <TaboolaScript /> */}
      <Layout navItems={categories} title={`${category} Games`}>
        <div className="game-category container mx-auto">
          {/* <Banner auto slot={ADS_SLOT_ID.category} key={Math.random()} /> */}
          {/* <TaboolaAd key={Math.random()} adKey={`category-${category}`} /> */}
          <Breadcrumb item={category} />
          {/* <Banner
          className={`banner banner_fw ad-container`}
          style={{ display: "block", height: "100%" }}
          slot={ADS_SLOT_ID.category}
          responsive="false"
          key={Math.random()}
        /> */}
          <section className="mt-4 mb-8">
            <header className="section-title">
              <h1 className="text-center font-bold">{`${category} Games`}</h1>
            </header>
            <List items={data} />
          </section>
        </div>
      </Layout>
    </>
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
