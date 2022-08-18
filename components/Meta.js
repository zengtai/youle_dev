import Head from "next/head";
import { SITE_META } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and ${SITE_META.name}.`}
      />
    </Head>
  );
}
