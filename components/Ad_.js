import Script from "next/script";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Ad_() {
  const [kid, setKid] = useState(null);

  const p = useRouter().basePath;

  useEffect(() => {
    // try {
    //   let scripts = document.querySelectorAll(`.ad_`);
    //   for (let i of scripts) {
    //     // console.log(i);
    //     i.parentNode.removeChild(i);
    //   }
    // } catch (e) {
    //   console.error(e);
    // }
    const randomId = Math.random();

    setKid(randomId);
  }, []);

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <div id="uptap_ad"></div>
         `,
        }}
      />
      <Script key={kid} id={kid} className={`ad_`} src={`${p}/js/uptapad.js`} />
    </>
  );
}
