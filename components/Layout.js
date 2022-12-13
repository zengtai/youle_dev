import { SITE_META } from "@/lib/constants";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ navItems, title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | ${SITE_META.name}`}</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Navbar items={navItems} />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
