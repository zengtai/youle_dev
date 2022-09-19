import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { SITE_META } from "../lib/constants";

export default function Layout({ navItems, title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | ${SITE_META.name}`}</title>
      </Head>
      <div className="relative flex min-h-screen flex-col">
        <Navbar items={navItems} />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
