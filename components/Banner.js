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
  tag,
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle || []).push({});
      console.log(`Tag: ${tag}, Id: ${slot}`);
    } catch (e) {
      console.error(e.message);
    }
  }, [tag, slot]);

  return auto ? (
    <div {...(className ? { className: `${className}` } : null)}>
      <ins
        className={`adsbygoogle`}
        style={
          style ? style : { display: `block`, backgroundColor: `#00000010` }
        }
        data-ad-layout={layout}
        data-ad-format={format ? format : `auto`}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={responsive ? responsive : `true`}
        {...(`${process.env.NODE_ENV}` === "development"
          ? { "data-adtest": "on" }
          : null)}
      />
    </div>
  ) : (
    <div className={`${className} AdContainer ad-container`}>
      <ins
        className={`adsbygoogle`}
        style={style}
        data-ad-layout={layout}
        data-ad-format={format}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={responsive}
        {...(`${process.env.NODE_ENV}` === "development"
          ? { "data-adtest": "on" }
          : null)}
      />
    </div>
  );
};

export default Banner;
