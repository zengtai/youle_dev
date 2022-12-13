import { useEffect, useState } from "react";
import Image from "next/image";

import Spinner from "../public/images/spinner.svg";

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

    if (localStorage.getItem("ms_ad_uuid") !== null) {
      uuid = localStorage.getItem("ms_ad_uuid");
      console.log(`1 uuid: `, uuid);
    } else {
      uuid = guid();
      console.log(`2 uuid: `, uuid);
      localStorage.setItem("ms_ad_uuid", uuid);
    }

    const adApi =
      process.env.NODE_ENV === "production"
        ? `https://dspapi.valuepowered.com/forward/v1/ad`
        : `http://testdspapi.valuepowered.com/forward/v1/ad`;
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
        throw new Error("Failed to fetch API");
      }

      const report = data?.data?.ads?.[0]?.events;

      // console.log(`report: `, report);

      async function sendReport(report) {
        const available = report?.available && (await fetch(report?.available));
        // console.log(`available: `, available);
        const visible = report?.visible && (await fetch(report?.visible));
        // console.log(`visible: `, visible);
        const display =
          report?.display &&
          report?.display.forEach(async (i) => {
            await fetch(i);
          });
        // console.log(`display: `, display);
        // console.log(`click: `, click);
      }

      setAdData(data);

      sendReport(report);
    }

    fetchAd();
  }, [width, height]);

  const sendClickEvent = async () => {
    await fetch(adData?.data?.ads?.[0]?.events?.click[0]);
  };

  const link = adData?.data?.ads?.[0].link;

  return (
    <div className="mx-auto max-w-3xl">
      {console.log(`adData: `, adData)}
      <a
        href={link}
        onClick={async (e) => {
          e.preventDefault();
          await sendClickEvent().then(() => {
            location.href = link;
          });
        }}
        className="flex flex-col justify-center bg-black/5"
      >
        <Image
          // src={`./images/spinner.svg`}
          src={adData?.data?.ads?.[0].images?.[0] || Spinner}
          alt={adData?.data?.ads?.[0].title}
          width={width}
          height={height}
          className="w-full object-contain"
        />
        <div className="mx-4 my-2 flex items-center gap-x-2">
          <span className="grow">{adData?.data?.ads?.[0].title}</span>
          {adData?.data?.ads?.[0].title ? (
            <button className="ad-cta">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          ) : null}
        </div>
      </a>
    </div>
  );
}
