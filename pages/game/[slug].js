// import Head from "next/head";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { getListDataBySlugs, getLocalData } from "../../lib/api";

// import { ADS_SLOT_ID, ADS_ID } from "../../lib/constants";

import Detail from "../../components/Detail";

// import Script from "next/script";

// import Banner from "../../components/Banner";
// import Script from "next/script";

export default function Game({ data, relatedSlugs, categories }) {
  // console.log(`data`, data);

  // console.log(`related`, related);
  // console.log(`relatedSlugs`, relatedSlugs);

  let related = getListDataBySlugs(relatedSlugs);

  return (
    <>
      {/* <Script
        id={`gads-init`}
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
        crossOrigin="anonymous"
      /> */}

      <Layout navItems={categories} title={data.title}>
        <div className="game-detail container mx-auto">
          <div className="flex flex-col xl:my-6 xl:flex-row">
            <div className="mx-auto max-w-4xl grow xl:order-2 xl:flex xl:flex-col xl:justify-between">
              <div>
                <Detail data={data} />
                {/* <Banner
                  auto
                  // style={{ width: "100%", height: "100%" }}
                  slot={ADS_SLOT_ID.detail}
                  key={Math.random()}
                /> */}
              </div>
              <header className="section-title m-4 xl:sr-only">
                <h2 className="font-bold">You May Also Like</h2>
              </header>
              <List
                items={related.slice(0, 18)}
                className={`mx-4 mb-4 grid grid-cols-3 gap-4 xl:mx-6 xl:my-8 xl:grid-cols-9`}
              />
            </div>

            <div className="mb-4 hidden flex-col items-center gap-4 xl:order-1 xl:flex xl:basis-1/3 xl:items-start">
              <List
                items={related.slice(18, 30)}
                className={`mx-4 mb-4 grid grid-cols-3 gap-4 xl:mx-6 xl:my-4 xl:grid-cols-3`}
              />
              {/* <Banner
                className={`square ad-container`}
                style={{ display: "block", height: "100%" }}
                slot={ADS_SLOT_ID.detail}
                responsive="false"
                key={Math.random()}
              /> */}
            </div>
            <div className="mb-4 hidden items-center xl:order-3 xl:flex xl:basis-1/3 xl:flex-col xl:items-end xl:gap-4">
              {/* <Banner
                className={`square ad-container`}
                style={{ display: "block", height: "100%" }}
                slot={ADS_SLOT_ID.detail}
                responsive="false"
                key={Math.random()}
              /> */}
              <List
                items={related.slice(30, 42)}
                className={`mx-4 mb-4 grid grid-cols-3 gap-4 xl:mx-6 xl:my-4 xl:grid-cols-3`}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps(ctx) {
  const data = await getLocalData(`game`, ctx.params.slug);
  let related = data.related;
  let relatedSlugs = related.map((item) => item.slug);

  let detail = Object.assign({}, data.data);

  function generateRatingCount(date) {
    let now = Date.now();
    // console.log(`now: `, now);
    let baseNum = ((now - Date.parse(new Date(date))) / 1000000).toFixed(2);
    // console.log(`baseNum: `, baseNum);
    // console.log(
    //   `result: `,
    //   Math.ceil(Math.random() * 10 * (baseNum > 0 ? baseNum : 1) + 10)
    // );
    return Math.ceil(Math.random() * 10 * (baseNum > 0 ? baseNum : 1) + 10);
  }

  detail.ratingCount =
    detail.rating == 0 ? 0 : generateRatingCount(detail.creation_date);

  return {
    props: {
      data: detail,
      relatedSlugs,
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
