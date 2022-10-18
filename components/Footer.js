// import Image from "next/image";
import Link from "next/link";
import { SITE_META } from "../lib/constants";
// import Logo from "../public/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <nav className="site-footer-nav">
          <Link href={`/t/privacy-policy`}>Privacy Policy</Link>
          <Link href={`/t/terms-of-use`}>Terms of Use</Link>
        </nav>
        {/* <div className="my-4 w-32 opacity-50">
          <Image
            className="h-12 w-auto"
            src={Logo}
            layout="responsive"
            alt={SITE_META.name}
            width={220}
            height={80}
          />
        </div> */}
        <p>
          {`© ${new Date().getFullYear()} ${SITE_META.name}. All
          Rights Reserved.`}
        </p>
      </footer>
    </>
  );
}
