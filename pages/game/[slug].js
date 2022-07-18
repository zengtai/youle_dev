import Link from "next/link";
import Image from "../../components/Image";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { getLocalData } from "../../lib/api";
import Breadcrumb from "../../components/Breadcrumb";
import Detail from "../../components/Detail";

export default function Game({ data, related, categories }) {
  console.log(`data`, data);

  return (
    <Layout navItems={categories} title={data.title}>
      <div className="game-detail container mx-auto">
        <div className="flex flex-col xl:my-6 xl:flex-row">
          <div className="mx-auto max-w-4xl grow xl:order-2">
            <div className="banner mx-auto mb-4 h-[50px] w-[300px] bg-sky-500 xl:h-[90px] xl:w-[728px]"></div>
            <Detail data={data} />
            <header className="section-title m-4 xl:sr-only">
              <h2 className="font-bold">You May Also Like</h2>
            </header>
            <List
              items={related.slice(10, 26)}
              className={`mx-4 mb-4 grid grid-cols-3 gap-4 xl:mx-6 xl:my-8 xl:grid-cols-8`}
            />
          </div>

          <div className="mb-4 flex flex-col items-center gap-4 xl:order-1 xl:basis-1/3 xl:items-start">
            <List items={related.slice(0, 21)} />
            <div className="banner mx-4 hidden h-[50px] w-[300px] bg-sky-500 xl:h-[250px] xl:w-[250px]"></div>
          </div>
          <div className="mb-4 flex flex-col items-center gap-4 xl:order-3 xl:basis-1/3 xl:items-end">
            <List items={related.slice(0, 21)} />
            <div className="banner mx-4 hidden h-[50px] w-[300px] bg-sky-500 xl:h-[250px] xl:w-[250px]"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const data = await getLocalData(`game`, ctx.params.slug);

  return {
    props: {
      data: data.data,
      related: data.related,
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
