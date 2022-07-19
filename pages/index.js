import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { getLocalData } from "../lib/api";
import ListItem from "../components/ListItem";

export default function Home({ data, categories }) {
  console.log(`data`, data);
  // let tmpData = getListDataBySlugs(slugs);

  return (
    <Layout navItems={categories} title={`Home`}>
      <div className="home container mx-auto mb-8 grid xl:grid-cols-4">
        {data.map((item, index) => {
          return (
            <section key={item.category.slug}>
              <header className="section-title my-3 mx-4 flex gap-2">
                <h1 className="font-bold">{`${item.category.name} Games`}</h1>
              </header>
              <ul className="mx-4 grid grid-cols-3 gap-4">
                {item.data.map((item) => (
                  <ListItem
                    item={item}
                    key={item.id}
                    lazy={index > 2 ? true : false}
                  />
                ))}
              </ul>
              {item.total > 6 ? (
                <Link href={`/category/${item.category.slug}`}>
                  <a>
                    <div className="mx-4 flex justify-center border border-white/20 p-2 text-xs">
                      <span className="uppercase">&nbsp;More</span>
                    </div>
                  </a>
                </Link>
              ) : null}
            </section>
          );
        })}
      </div>
    </Layout>
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
