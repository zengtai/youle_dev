import { useEffect } from "react";

import { useRouter } from "next/router";
import Script from "next/script";

import NProgress from "nprogress";

import * as gtag from "../lib/gtag";

import { getLocalData } from "../lib/api";
import { GA_ID, GA_ID2 } from "../lib/constants";

import Head from "next/head";
import "../public/nprogress.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Router = useRouter();
  useEffect(() => {
    const handleRouteStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleRouteDone = (url) => {
      gtag.pageview(url);
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, [Router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
            gtag('config', '${GA_ID2}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="ad2-init"
        async
        src={`https://jsc.mgid.com/g/o/gostarfavor.com.1533387.js`}
        strategy={`beforeInteractive`}
      />
      <Head>
        <meta name="google" content="notranslate" />
        <link
          rel="icon"
          href={`${Router.basePath}/favicon.ico`}
          sizes="16x16"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href={`${Router.basePath}/favicon.png`}
          sizes="16x16 32x32 64x64"
          type="image/png"
        />
        <link rel="icon" href={`${Router.basePath}/favicon.svg`} sizes="any" type="image/svg+xml" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async (ctx) => {
  const categories = await getLocalData(`category`);
  return {
    // data: null,
    pageProps: {
      categories,
    },
  };
};
