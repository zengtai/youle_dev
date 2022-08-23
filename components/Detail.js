import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import Image from "./Image";
import { useState } from "react";

export default function Detail({ data }) {
  const [isShowAll, setIsShowAll] = useState(false);
  function toggle() {
    setIsShowAll(!isShowAll);
  }

  const breadcrumbData = { title: data.title, category: data.category };
  // console.log(`Detail data: `, data);
  // console.log(`Breadcrumb data: `, breadcrumbData);
  return (
    <>
      <section className="col-span-6 col-start-4 m-4 rounded-3xl border-8 border-blue-50 bg-white text-slate-500 xl:mx-6 xl:mt-0 xl:mb-4">
        <Breadcrumb item={breadcrumbData} />
        <div className="relative order-2 basis-3/5 flex-wrap gap-4 p-4">
          <div className="float-left mr-4 w-20 xl:w-32">
            <Image alt={data.title} />
          </div>
          <div>
            <h1 className="text-xl xl:text-4xl">{data.title}</h1>
            <Link href={`/category/${data.category.slug}`}>
              <a className="rounded-md bg-emerald-600/80 py-1 px-2 text-xs uppercase text-emerald-100/90 shadow-md shadow-emerald-500/30">
                {data.category.name}
              </a>
            </Link>
          </div>
          <div
            onClick={toggle}
            className={`${
              isShowAll ? `h-auto` : `max-h-24`
            } description relative clear-both overflow-hidden pt-4 pb-5 text-sm after:absolute after:left-0 after:bottom-0 after:h-8 after:w-full after:bg-gradient-to-t after:from-white after:to-white/10 md:clear-none`}
          >
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
