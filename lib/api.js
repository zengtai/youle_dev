import fs from "fs";
import path from "path";

import {
  EXCLUDED_GAMES,
  GAME_PATH,
  ICON_PATH,
  SELECTED_GAMES,
  FEATURED_GAMES,
  DATA_MODE,
} from "./constants";

async function fetcher(url) {
  const json = await fetch(url).then((res) => res.json());
  return json;
}

function toTitle(name) {
  return name
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/3 D/g, " 3D")
    .replace(/([A-Za-z])([0-9])/g, "$1 $2");
}

function toSlug(name) {
  return name.replace(/\s+/g, "-").toLowerCase();
}

function toFormatCategoryName(name) {
  let fixedName = name.trim().toLowerCase();

  switch (fixedName) {
    case `io`:
      return `.IO`;
    case `sport`:
      return `Sports`;
    case `match3`:
      return `Match 3`;
    case `gril`:
      return `Girl`;
    default:
      return fixedName.replace(/^\S/, (s) => s.toUpperCase());
  }
}

// 生成模拟数据
function getRange(m, n, o) {
  let min = m;
  let max = n;
  let range = max - min;
  return o
    ? ((Math.random() * range + min) * o).toFixed(1)
    : (Math.random() * range + min).toFixed(1);
}

function getStars(level) {
  if (level !== undefined) {
    if (level == "latest") return getRange(4, 4.8);
    else if (level == "featured") return getRange(4.5, 5);
  } else return getRange(4.1, 4.5);
}

function getCount(level) {
  let latest = 1;
  let normal = 2;
  let featured = 3;
  if (level !== undefined) {
    if (level == "latest") {
      return getRange(10, 50, latest) + `k`;
    } else if (level == "featured") {
      return getRange(110, 200, featured) + `k`;
    }
  } else {
    return getRange(60, 100, normal) + `k`;
  }
}

export function formatData(data) {
  console.log(`do format`);
  let sourceData = data.slice();

  let fullData = [],
    basicData = [],
    categories = [];

  sourceData.sort((a, b) => (new Date(a.time) < new Date(b.time) ? 1 : -1));

  // 修复源数据appid命名错误
  // sourceData.forEach((item) =>
  //   item.name == "SharkisComing" ? (item.name = "SharkIsComing") : null
  // );

  if (SELECTED_GAMES && SELECTED_GAMES.length) {
    sourceData = sourceData.filter((game) => SELECTED_GAMES.includes(game.name));
  }

  if (EXCLUDED_GAMES && EXCLUDED_GAMES.length) {
    sourceData = sourceData.filter((game) => !EXCLUDED_GAMES.includes(game.name));
  }

  sourceData.map((game) => {
    let basicItem = {
      id: game.id,
      title: toTitle(game.name),
      slug: toSlug(toTitle(game.name)),
      rating: FEATURED_GAMES.includes(game) ? getStars("featured") : getStars(),
      category: {
        name: toFormatCategoryName(game.category),
        slug: toFormatCategoryName(game.category).toLowerCase().replace(/ /g, `-`),
      },
      thumbnailUrl: `${ICON_PATH}webp/${game.name}.webp`,
    };

    basicData.push(basicItem);

    let fullItem = Object.assign({}, basicItem);

    fullItem.description = game.description;
    fullItem.creation_date = new Date(game.time).toISOString();
    fullItem.url = `${GAME_PATH}${game.name}`;
    fullItem.played = FEATURED_GAMES.includes(game) ? getCount("featured") : getCount();
    // fullItem.rating = FEATURED_GAMES.includes(game)
    //   ? getStars("featured")
    //   : getStars();
    fullItem.appid = game.name;

    fullData.push(fullItem);

    categories.push(toFormatCategoryName(game.category));
  });

  categories = [...new Set(categories)];

  categories = categories.map((category) => ({
    name: category,
    slug: category.toLowerCase().replace(/ /g, `-`),
  }));

  categories.sort((a, b) => (a.name > b.name ? 1 : -1));

  let dataForHome = [];

  categories.map((category) => {
    let categoryData = basicData.filter((game) => game.category.name === category.name);

    let tmpData = categoryData.map((item) => {
      let tmp = Object.assign({}, item);
      delete tmp.category;
      return tmp;
    });

    let tmp = {
      category: category,
      total: tmpData.length,
      data: tmpData.slice(0, 6),
    };

    dataForHome.push(tmp);
  });

  return {
    dataForHome,
    fullData,
    basicData,
    categories,
  };
}

export async function getRemoteData() {
  // const remoteData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`).then(async (res) => ({
  const remoteData = await fetch(`https://dev.iwantalipstick.com/api/data-20230925.json`).then(
    async (res) => ({
      data: await res.json().then((res) => formatData(res.gamelist)),
      contentLength: res.headers.get(`content-length`),
    })
  );
  console.log(`get remote data`);
  return remoteData;
}

export async function getRemoteContentLength() {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}`).then((res) =>
    res.headers.get(`content-length`)
  );
}

export const getLocalData = async (type, slug) => {
  const localDataPath = path.join(process.cwd(), `data`, `games.json`);
  try {
    if (!fs.existsSync(localDataPath)) {
      console.log(`no local data`);
      let remoteData = await getRemoteData();

      fs.writeFileSync(localDataPath, JSON.stringify(remoteData));
    } else {
      if (DATA_MODE && DATA_MODE == `renew`) {
        let remoteData = await getRemoteData();

        console.log(`renew data`);
        fs.writeFileSync(localDataPath, JSON.stringify(remoteData));
      }
      // let remoteContentLength = await getRemoteContentLength();
      // if (
      //   JSON.parse(fs.readFileSync(localDataPath)).contentLength !==
      //   remoteContentLength
      // ) {
      //   let remoteData = await getRemoteData();
      //   console.log(
      //     `renew now: remote -`,
      //     remoteContentLength,
      //     ` vs local - `,
      //     JSON.parse(fs.readFileSync(localDataPath)).contentLength
      //   );
      //   console.log(`renew data`);
      //   fs.writeFileSync(localDataPath, JSON.stringify(remoteData));
      // }
    }
    let localData = JSON.parse(fs.readFileSync(localDataPath));
    switch (type) {
      case `category`:
        return slug
          ? {
              category: localData.data.categories.find((item) => item.slug === slug).name,
              data: localData.data.basicData
                .filter((item) => item.category.slug === slug)
                .map((item) => {
                  let tmp = Object.assign({}, item);
                  delete tmp.category;
                  return tmp;
                }),
            }
          : localData.data.categories;
      case `game`:
        let slugs = localData.data.basicData.map((item) => item.slug);
        return slug
          ? {
              data: localData.data.fullData.find((item) => item.slug === slug),
              related: localData.data.basicData.filter((item) => item.slug !== slug).slice(0, 56),
            }
          : slugs;
      default:
        return localData;
    }
    // return data;
  } catch (error) {
    console.error(error);
  }
};

// 基于appid生成相关链接

export const getThumbnaiUrlBySlug = (slug) => {
  return `${ICON_PATH}webp/${slug}.webp`;
};

export const getGameUrlBySlug = (slug) => {
  return `${GAME_PATH}${slug}`;
};

export const getPathByTypeAndSlug = (type, slug) => {
  switch (type) {
    case `category`:
      return `/category/${slug}`;
    default:
    case `game`:
      return `/game/${slug}`;
  }
};

export const getTitleBySlug = (slug) => {
  let words = slug.replace(/3d/g, "3D").split("-");
  return words
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

export const getListDataBySlugs = (slugs) => {
  let data = [];

  slugs.map((slug) => {
    let tmp = {
      title: getTitleBySlug(slug),
      slug: slug,
      thumbnailUrl: getThumbnaiUrlBySlug(slug),
    };
    data.push(tmp);
  });

  return data;
};
