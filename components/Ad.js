import { useEffect, useState } from "react";
import Image from "next/image";

export default function Ad({ width = 300, height = 250 }) {
  const [adData, setAdData] = useState(null);

  useEffect(() => {
    let uuid = ``;

    function guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          let r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    }

    if (localStorage.getItem("ms_ad_uuid") !== undefined) {
      uuid = localStorage.getItem("ms_ad_uuid");
    } else {
      uuid = guid();
      localStorage.setItem("ms_ad_uuid", uuid);
    }

    const adApi = `http://testdspapi.valuepowered.com/forward/v1/ad`;
    async function fetchAd() {
      const res = await fetch(adApi, {
        method: `POST`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deviceId: uuid,
          width: width,
          height: height,
        }),
      });

      const data = await res.json();

      if (data.errors) {
        console.error(json.errors);
        // throw new Error("Failed to fetch API");
      }

      setAdData(data);
    }

    fetchAd();
  }, [width, height]);

  const adClass = `w-full object-cover`;

  return (
    <div className="Banner">
      {console.log(`adData: `, adData)}
      <a
        href={adData?.data?.ads?.[0].link}
        className="flex flex-col justify-center bg-black/5"
      >
        <Image
          src={adData?.data?.ads?.[0].images?.[0]}
          alt={adData?.data?.ads?.[0].title}
          width={width}
          height={height}
          className={adClass}
        />
        <h4 className="mx-4 my-2">{adData?.data?.ads?.[0].title}</h4>
      </a>
    </div>
  );
}