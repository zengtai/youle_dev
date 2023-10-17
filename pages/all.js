import Layout from "../components/Layout";
import List from "../components/List";
import { getListDataBySlugs, getLocalData } from "../lib/api";
// import Banner from "../components/Banner";
// import { ADS_SLOT_ID } from "../lib/constants";
import Breadcrumb from "../components/Breadcrumb";

export default function AllGames({
  slugs,
  categories,
  // fullData
}) {
  let data = getListDataBySlugs(slugs);
  // console.log(JSON.stringify(fullData));
  return (
    <>
      <Layout navItems={categories} title={`All Games`}>
        <div className="all-games container mx-auto">
          <Breadcrumb item={`All`} />
          <section className="my-8">
            {/* <header className="my-3 mx-4 flex items-start gap-2">
            <h1 className="font-bold">{`All Games`}</h1>
            <span className="rounded-lg bg-slate-200 px-1 text-sm">
              {data.length}
            </span>
          </header> */}
            {/* <Banner
              className={`banner banner_fw ad-container mb-8`}
              style={{ display: "block", height: "100%" }}
              slot={ADS_SLOT_ID.category}
              responsive="false"
              key={Math.random()}
            /> */}
            <List items={data} />
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getLocalData().then((res) => res?.data);
  // const data = await getLocalData().then((res) => res.data.basicData);
  const slugs = data.basicData.map((item) => item.slug);

  // const SELECTED = [
  //   "SkatingMaster",
  //   "LittleFarm",
  //   "BigEater",
  //   "ShootingStar",
  //   "ColorHammer",
  //   "RoofRunner",
  //   "CleverRescue",
  //   "EasyCharger",
  //   "BlockMaster",
  //   "FruitsFall",
  //   "FierceCity",
  //   "BrainMaster",
  //   "JumpSmash",
  //   "MrRacer",
  //   "MagicParkour",
  //   "FrozenMagic",
  //   "TrafficRun",
  //   "TrafficPassing",
  //   "SkyRunning3D",
  //   "MrBullet",
  //   "MergeAndDefense",
  //   "FeverRacing",
  //   "ZombieSurvival",
  //   "HiTaxi",
  //   "CrazyMoto",
  //   "BlockGun3D",
  //   "AceMan",
  //   "CrazyKnife",
  //   "LetMeIn",
  //   "PetsMatch",
  //   "Knife",
  //   "ColorBall3D",
  //   "GoldenGlove",
  //   "BumbleShooter",
  //   "FireTheGun",
  //   "BoardTheTrain",
  //   "DashCat",
  //   "SpinTheMaze",
  //   "SuperSoccer",
  // ];

  // const exportData = [];

  // data.fullData.map((item) => {
  //   SELECTED.includes(item.appid)
  //     ? exportData.push({
  //         id: item.id,
  //         name: item.appid,
  //         title: item.title,
  //         slug: item.slug,
  //         category: item.category.name,
  //         description: item.description,
  //         time: item.creation_date,
  //         stars: item.rating,
  //         played: item.played,
  //       })
  //     : null;
  // });

  // let SELECTED_categories = [
  //   ...new Set(exportData.map((item) => item.category)),
  // ];

  return {
    props: {
      slugs,
      // fullData: {
      //   games: exportData,
      //   categories: data.categories.filter((cat) =>
      //     SELECTED_categories.includes(cat.name)
      //   ),
      // },
    },
  };
}
