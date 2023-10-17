// import Image from "next/image";
import Link from "next/link";
import { SITE_META } from "../lib/constants";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <nav className="site-footer-nav">
          <Link href={`/t/privacy-policy`}>Privacy Policy</Link>
          <Link href={`/t/terms-of-use`}>Terms of Use</Link>
        </nav>
        <p className="mt-4">
          {`© ${new Date().getFullYear()} ${SITE_META.name}. All
          Rights Reserved.`}
        </p>
      </footer>
    </>
  );
}
