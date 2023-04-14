import Link from "next/link";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";
import { getLocalData } from "../lib/api";

import Banner from "../components/Banner";
import { ADS_SLOT_ID, ADS_ID, SHOW_AD } from "../lib/constants";

import { Fragment } from "react";

// import Head from "next/head";
import Script from "next/script";
import TaboolaScript from "../components/TaboolaScript";
import TaboolaAd from "../components/TaboolaAd";
// import Script from "next/script";

export default function Home({ data, categories }) {
  // console.log(`data`, data);
  // let tmpData = getListDataBySlugs(slugs);

  return (
    <>
      {SHOW_AD && (
        <>
          <Script
            id={`gads-init`}
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
            crossOrigin="anonymous"
          />
        </>
      )}
      <TaboolaScript />
      <Layout navItems={categories} title={`Home`}>
        <div className="home container mx-auto mb-8 grid xl:grid-cols-4">
          <TaboolaAd key={Math.random()} adKey={`home`} />
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
                      <Link href={`/category/${item.category.slug}`}>
                        <a>
                          <div className="more-link">
                            <span className="uppercase">&nbsp;More</span>
                          </div>
                        </a>
                      </Link>
                    ) : null}
                  </section>
                  {/* {index == 0 || index == 2 ? (
                    <Banner auto slot={ADS_SLOT_ID.home} />
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
