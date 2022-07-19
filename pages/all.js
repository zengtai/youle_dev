import Head from "next/head";
import Layout from "../components/Layout";
import { getListDataBySlugs, getLocalData } from "../lib/api";
import List from "../components/List";

export default function AllGames({ slugs, categories }) {
  let data = getListDataBySlugs(slugs);
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="16x16"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="/favicon.png"
          sizes="16x16 32x32 64x64"
          type="image/png"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <Layout navItems={categories} title={`All Games`}>
        <div className="all-games container mx-auto">
          <section className="my-8">
            {/* <header className="my-3 mx-4 flex items-start gap-2">
            <h1 className="font-bold">{`All Games`}</h1>
            <span className="rounded-lg bg-slate-200 px-1 text-sm">
              {data.length}
            </span>
          </header> */}
            <List items={data} />
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getLocalData().then((res) => res.data.basicData);
  const slugs = data.map((item) => item.slug);

  return {
    props: {
      slugs,
    },
  };
}
