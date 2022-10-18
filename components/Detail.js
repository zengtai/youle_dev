import Link from "next/link";
import { GAME_PATH } from "../lib/constants";
import Breadcrumb from "./Breadcrumb";
import Image from "./Image";

export default function Detail({ data }) {
  const breadcrumbData = { title: data.title, category: data.category };
  console.log(`Detail data: `, data);
  // console.log(`Breadcrumb data: `, breadcrumbData);
  return (
    <>
      <section className="detail">
        <Breadcrumb item={breadcrumbData} />
        <div className="relative order-2 flex basis-3/5 flex-wrap gap-4 p-4 xl:block">
          <div className="left-4 top-4 w-20 xl:absolute xl:w-32">
            <Image alt={data.title} />
          </div>
          <div className="xl:ml-36">
            <h1 className="text-xl xl:text-4xl">{data.title}</h1>
            <div className="game-meta">
              <Link href={`/category/${data.category.slug}`}>
                <a className="rounded-md bg-emerald-600/80 py-1 px-2 text-xs uppercase text-emerald-100/90 shadow-md shadow-emerald-500/30">
                  {data.category.name}
                </a>
              </Link>
              <div className="game-rating">{data.rating}</div>
            </div>
          </div>
          <div className="description text-sm xl:mt-4 xl:ml-36">
            {data.description}
          </div>
        </div>
      </section>
      <button className="mx-auto flex xl:w-1/4">
        {/* <Link href={`/${data.appid}.html`}> */}
        {/* <Link href={data.url}> */}
        <a
          href={GAME_PATH + data.appid}
          className="play-button"
          title={`Play "${data.title}" Now`}
        >
          Play Now
        </a>
        {/* </Link> */}
      </button>
    </>
  );
}
