import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import Image from "./Image";

export default function Detail({ data }) {
  const breadcrumbData = { title: data.title, category: data.category };
  // console.log(`Detail data: `, data);
  // console.log(`Breadcrumb data: `, breadcrumbData);
  return (
    <>
      <section className="col-span-6 col-start-4 m-4 rounded-3xl border-8 border-blue-50 bg-white text-slate-500 xl:mx-6 xl:mt-0 xl:mb-4">
        <Breadcrumb item={breadcrumbData} />
        <div className="relative order-2 flex basis-3/5 flex-wrap gap-4 p-4 xl:block">
          <div className="left-4 top-4 w-20 xl:absolute xl:w-32">
            <Image alt={data.title} />
          </div>
          <div className="xl:ml-36">
            <h1 className="text-xl xl:text-4xl">{data.title}</h1>
            <div className="">
              <Link href={`/category/${data.category.slug}`}>
                <a className="rounded-md bg-emerald-600/80 py-1 px-2 text-xs uppercase text-emerald-100/90 shadow-md shadow-emerald-500/30">
                  {data.category.name}
                </a>
              </Link>
            </div>
          </div>
          <div className="description text-sm xl:mt-4 xl:ml-36">
            {data.description}
          </div>
        </div>
      </section>
      <button className="mx-auto flex xl:w-1/4">
        <Link href={data.url}>
          <a className="play-button" title={`Play "${data.title}" Now`}>
            Play Now
          </a>
        </Link>
      </button>
    </>
  );
}
