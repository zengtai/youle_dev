import Script from "next/script";
import { useEffect } from "react";
import { ADS_ID, DEV_MODE } from "../lib/constants";

const Banner = ({
  className,
  style,
  layout,
  format,
  client = ADS_ID,
  slot,
  responsive,
  layoutKey,
  auto,
}) => {
  // useEffect(() => {
  //   try {
  //     let adsbygoogle = window.adsbygoogle || [];
  //     adsbygoogle.push({});
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);
  const devMode = `${process.env.NODE_ENV}` === `development`;
  return (
    <div className="my-4">
      <div className="text-center text-xs uppercase opacity-50">
        Advertisement
      </div>
      <div className={className ? className + ` text-center` : `text-center`}>
        <ins
          className={`adsbygoogle`}
          style={
            auto
              ? {
                  display: "inline-block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }
              : style
          }
          data-ad-layout={layout}
          data-ad-format={auto ? `auto` : format}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-layout-key={layoutKey}
          data-full-width-responsive={auto ? `true` : responsive}
          {...(devMode || DEV_MODE === true ? { "data-adtest": "on" } : null)}
        />
        <Script
          id={Math.random()}
          dangerouslySetInnerHTML={{
            __html: `
              try {
                (adsbygoogle = window.adsbygoogle || []).push({})
              } catch(e) { console.log(e) }
            `,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
