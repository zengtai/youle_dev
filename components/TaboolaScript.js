// import Script from "next/script";
// export default function TaboolaScript({ publisherId }) {
//   return (
//     <Script
//       id="taboola-init"
//       dangerouslySetInnerHTML={{
//         __html: `
//         window._taboola = window._taboola || [];
//         _taboola.push({article:'auto'});
//         !function (e, f, u, i) {
//           if (!document.getElementById(i)){
//             e.async = 1;
//             e.src = u;
//             e.id = i;
//             f.parentNode.insertBefore(e, f);
//           }
//         }(document.createElement('script'),
//         document.getElementsByTagName('script')[0],
//         '//cdn.taboola.com/libtrc/messagecube-gamebox/loader.js',
//         'tb_loader_script');
//         if(window.performance && typeof window.performance.mark == 'function')
//           {window.performance.mark('tbl_ic');}`,
//       }}
//     />
//   );
// }

import { useEffect } from "react";
export default function TaboolaScript() {
  useEffect(() => {
    window._taboola = window._taboola || [];
    _taboola.push({ article: "auto" });
    !(function (e, f, u, i) {
      if (!document.getElementById(i)) {
        e.async = 1;
        e.src = u;
        e.id = i;
        f.parentNode.insertBefore(e, f);
      }
    })(
      document.createElement("script"),
      document.getElementsByTagName("script")[0],
      "//cdn.taboola.com/libtrc/messagecube-gamebox/loader.js",
      "tb_loader_script"
    );
    if (window.performance && typeof window.performance.mark == "function") {
      window.performance.mark("tbl_ic");
    }
  }, []);
}
