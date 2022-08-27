import Layout from "../components/Layout";
import List from "../components/List";
import { getListDataBySlugs, getLocalData } from "../lib/api";
import Banner from "../components/Banner";
import { ADS_SLOT_ID } from "../lib/constants";
import Breadcrumb from "../components/Breadcrumb";

export default function AllGames({ slugs, categories }) {
  let data = getListDataBySlugs(slugs);
  return (
    <>
      <Layout navItems={categories} title={`All Games`}>
        <div className="all-games container mx-auto">
          <Breadcrumb item={`All`} />
          <section className="mb-8">
            {/* <header className="my-3 mx-4 flex items-start gap-2">
            <h1 className="font-bold">{`All Games`}</h1>
            <span className="rounded-lg bg-slate-200 px-1 text-sm">
              {data.length}
            </span>
          </header> */}
            <Banner
              className={`banner banner_fw ad-container mb-8`}
              style={{ display: "block", height: "100%" }}
              slot={ADS_SLOT_ID.category}
              responsive="false"
              key={Math.random()}
            />
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
