// import Script from "next/script";
import { useEffect } from "react";
// import { useRouter } from "next/router";

// const taboolaObj = {
//   mode: "thumbnails_350x250",
//   container: "taboola-mid-article-thumbnails",
//   placement: `Mid Article Thumbnails ${adKey}`,
//   target_type: "mix",
// };

export default function TaboolaAd({ adKey }) {
  // const router = useRouter();

  function taboolaPush(taboolaObj) {
    try {
      window._taboola = window._taboola || [];
      window._taboola.push(taboolaObj);
    } catch (e) {
      console.error("[taboola-pub-react] taboolaPush: ", taboolaObj);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      let taboolaContainer = document.getElementById("taboola-mid-article-thumbnails-300x250");
      if (taboolaContainer) {
        taboolaContainer.innerHTML = "";
        try {
          let _taboola = window._taboola || [];
          _taboola.push({
            mode: "thumbnails-300x250",
            container: "taboola-mid-article-thumbnails-300x250",
            // placement: `Mid Article Thumbnails 300x250`,
            placement: `${adKey}`,
            target_type: "mix",
          });
          // _taboola.push({ flush: true });
          console.log(`pushed`);
        } catch (e) {
          console.error(e);
        }
      }
    }

    return () => {
      taboolaPush({ flush: true });
    };
  }, [adKey]);

  return (
    <>
      <div className="mb-2">
        <div id="taboola-mid-article-thumbnails-300x250"></div>
      </div>
      {/* <Script
        id="taboola-ad"
        dangerouslySetInnerHTML={{
          __html: `
            window._taboola = window._taboola || [];
            _taboola.push({
              mode: 'thumbnails_350x250',
              container: 'taboola-mid-article-thumbnails',
              placement: 'Mid Article Thumbnails ${adKey}',
              target_type: 'mix'
            });
          `,
        }}
      />
      <Script
        id="taboola-push"
        dangerouslySetInnerHTML={{
          __html: `
          _taboola.push({ flush: true });
          `,
        }}
      /> */}
    </>
  );
}
