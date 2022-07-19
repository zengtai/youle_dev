// import NextImage from "next/image";

// const customLoader = ({ src }) => {
//   return src;
// };

export default function Image({ alt, width, height, lazy }) {
  // return <NextImage {...props} loader={customLoader} unoptimized="true" />;
  // return <img {...props} />;

  let srcId = alt.replace(/\s/g, "");
  return (
    <picture className="block overflow-hidden rounded-xl shadow-lg">
      <source
        type="image/avif"
        srcSet={`https://cdn.iwantalipstick.com/gameicon2/avif/${srcId}.avif`}
      />
      <source
        type="image/webp"
        srcSet={`https://cdn.iwantalipstick.com/gameicon2/webp/${srcId}.webp`}
      />
      <img
        className="aspect-square bg-black/10 bg-loading bg-center bg-no-repeat"
        width={width ? width : "100%"}
        height={height ? height : "100%"}
        src={`https://cdn.iwantalipstick.com/gameicon2/png/${srcId}.png`}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        decoding="async"
      />
    </picture>
  );
}
