import Layout from "../components/Layout";
import List from "../components/List";
import { getListDataBySlugs, getLocalData } from "../lib/api";
// import Banner from "../components/Banner";
import Head from "next/head";
import { ADS_SLOT_ID, ADS_ID } from "../lib/constants";
import Breadcrumb from "../components/Breadcrumb";
import Banner from "../components/Banner";

export default function AllGames({ slugs, categories }) {
  let data = getListDataBySlugs(slugs);
  // console.log(`Data:`, JSON.stringify(data));
  return (
    <>
      <Head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
          crossOrigin="anonymous"
        />
      </Head>
      <Layout navItems={categories} title={`All Games`}>
        <div className="all-games container mx-auto">
          <Banner auto slot={ADS_SLOT_ID.category} key={Math.random()} />
          <Breadcrumb item={`All`} />
          <section className="my-8">
            {/* <header className="my-3 mx-4 flex items-start gap-2">
            <h1 className="font-bold">{`All Games`}</h1>
            <span className="rounded-lg bg-slate-200 px-1 text-sm">
              {data.length}
            </span>
          </header> */}
            {/* <Banner
              className={`banner banner_fw ad-container mb-8`}
              style={{ display: "block", height: "100%" }}
              slot={ADS_SLOT_ID.category}
              responsive="false"
              key={Math.random()}
            /> */}
            <List items={data} />
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getLocalData().then((res) => res.data);
  // const data = await getLocalData().then((res) => res.data.basicData);
  const slugs = data.basicData.map((item) => item.slug);

  return {
    props: {
      slugs,
      // fullData: {
      //   games: exportData,
      //   categories: data.categories.filter((cat) =>
      //     SELECTED_categories.includes(cat.name)
      //   ),
      // },
    },
  };
}
