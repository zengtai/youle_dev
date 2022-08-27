import { useEffect } from "react";
import { ADS_ID } from "../lib/constants";

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
  useEffect(() => {
    try {
      (window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(`Adsense Error: `, e.message);
    }
  }, []);

  return (
    <div className={`${auto ? `` : `AdContainer`} ${className} ad-container`}>
      <ins
        className={`adsbygoogle`}
        style={style}
        data-ad-layout={layout}
        data-ad-format={auto ? `auto` : format}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={auto ? `true` : responsive}
        {...(process.env.NODE_ENV === `development`
          ? { "data-adtest": "on" }
          : null)}
      />
    </div>
  );
};

export default Banner;
