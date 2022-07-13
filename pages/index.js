import Link from "next/link";
import Layout from "../components/Layout";
import { getLocalData } from "../lib/api";
import List from "../components/List";

export default function Home({ data, categories }) {
  // console.log(`data`, data);
  return (
    <Layout navItems={categories}>
      <div className="homepage container mx-auto">
        {data.map((item) => {
          return (
            <section className="relative my-8 mx-6" key={item.category.slug}>
              <header className="my-3 flex gap-2 bg-sky-400 p-2">
                <h1 className="font-bold">{`${item.category.name} Games`}</h1>
              </header>
              <List items={item.data} />
              {item.total > 9 ? (
                <Link href={`/category/${item.category.slug}`}>
                  <a>
                    <div className="absolute top-3.5 right-3 flex text-xs">
                      <span>{`${item.total - 9}`}</span>
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
