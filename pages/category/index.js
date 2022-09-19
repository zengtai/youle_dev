import Link from "next/link";
import Layout from "../../components/Layout";
import ListItem from "../../components/ListItem";
import { getLocalData } from "../../lib/api";
import Banner from "../../components/Banner";
import { ADS_SLOT_ID } from "../../lib/constants";

export default function CategoryList({ data, categories }) {
  function getIcon(name, className) {
    switch (name) {
      case `Action`:
        return ActionIcon(className);
      case `Casual`:
        return CasualIcon(className);
      case `Defense`:
        return DefenseIcon(className);
      case `Puzzle`:
        return PuzzleIcon(className);
      case `Shooting`:
        return ShootingIcon(className);
      case `Sports`:
        return SportsIcon(className);
      case `Simulation`:
        return SimulationIcon(className);
      case `Strategy`:
        return StrategyIcon(className);
      case `Racing`:
        return RacingIcon(className);
      case `Arcade`:
        return ArcadeIcon(className);
      case `Adventure`:
        return AdventureIcon(className);
      case `IO`:
        return IoIcon(className);
      case `Girl`:
        return GirlIcon(className);
      case `Match 3`:
        return Match3Icon(className);
      default:
        return ActionIcon(className);
    }
  }
  return (
    <Layout navItems={categories} title={`Home`}>
      <div className="home container mx-auto mb-8 grid xl:grid-cols-4">
        {data
          .slice()
          .sort((a, b) => (a.total < b.total ? 1 : -1))
          .map((item, index) => {
            return (
              <ul key={item.category.slug}>
                <li>
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
                        <div className="more-link">
                          <span className="uppercase">&nbsp;More</span>
                        </div>
                      </a>
                    </Link>
                  ) : null}
                </li>
              </ul>
            );
          })}
        <Banner
          className={`text-center`}
          style={{
            display: "inline-block",
            width: "300px",
            height: "250px",
          }}
          slot={ADS_SLOT_ID.home}
          responsive="false"
        />
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
