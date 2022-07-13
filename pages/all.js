import Link from "next/link";
import Image from "../components/Image";
import Layout from "../components/Layout";
import { getLocalData } from "../lib/api";
import List from "../components/List";

export default function AllGames({ data, categories }) {
  return (
    <Layout navItems={categories}>
      <div className="all-games container mx-auto">
        <section className="my-8 mx-6">
          <header className="my-3 flex gap-2">
            <h1 className="font-bold">{`All Games`}</h1>
            <span>{data.length}</span>
          </header>
          <List items={data} />
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getLocalData().then((res) => res.data.basicData);

  return {
    props: {
      data,
    },
  };
}
