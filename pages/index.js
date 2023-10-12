import Link from "next/link";
import Layout from "@/components/Layout";
import ListItem from "@/components/ListItem";
import { getLocalData } from "@/lib/api";
import { SITE_META } from "@/lib/constants";

// import Banner from "../components/Banner";
// import { ADS_SLOT_ID, ADS_ID } from "../lib/constants";

// import Ad from "../components/Ad";

import { Fragment } from "react";
import Ad20231010 from "@/components/Ad20231010";
// import Ad_ from "../components/Ad_";

// import Head from "next/head";
// import Script from "next/script";
// import Script from "next/script";

export default function Home({ data, categories }) {
  // console.log(`data`, data);
  // let tmpData = getListDataBySlugs(slugs);
  let randomId = Math.random().toFixed(3);
  return (
    <>
      {/* <Script
        id={ `gads-init` }
        async
        src={ `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}` }
        crossOrigin="anonymous"
      /> */}
      <Layout navItems={categories} title={`Home`}>
        <div className="home container mx-auto mb-8 grid xl:grid-cols-4">
          {/* <Ad key={ `home-${randomId}` } /> */}
          <Ad20231010 key={`home-${randomId}`} />

          {/* <Ad_ key={Math.random()} /> */}
          {data
            .slice()
            .sort((a, b) => b.total - a.total)
            // .sort((a) => (a.total < 5 ? 1 : -1))
            // .sort((a, b) => (a.total > b.total && a.name < b.name ? 1 : -1))
            .map((item, index) => {
              return (
                <Fragment key={item.category.slug}>
                  <section>
                    <header className="section-title my-3 mx-4 flex gap-2">
                      <h1 className="font-bold">{`${item.category.name} Games`}</h1>
                    </header>
                    <ul className="mx-4 grid grid-cols-3 gap-4">
                      {item.data
                        .slice()
                        .sort((a, b) => a.title > b.title)
                        .map((item) => (
                          <ListItem item={item} key={item.id} lazy={index > 2 ? true : false} />
                        ))}
                    </ul>
                    {item.total > 6 ? (
                      <Link href={`${SITE_META.baseURL}/category/${item.category.slug}`}>
                        <a>
                          <div className="more-link">
                            <span className="uppercase">&nbsp;More</span>
                          </div>
                        </a>
                      </Link>
                    ) : null}
                  </section>
                  {/* {index == 0 || index == 2 ? (
                    // <Banner auto slot={ADS_SLOT_ID.home} />
                    <Ad key={`home-${index}-${randomId}`} />
                  ) : null} */}
                </Fragment>
              );
            })}
        </div>
      </Layout>
    </>
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
