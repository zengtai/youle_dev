import Image from "next/image";
import { SITE_META } from "@/lib/constants";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <nav className="site-footer-nav">
          <a href={`/t/privacy-policy`}>Privacy Policy</a>
          <a href={`/t/terms-of-use`}>Terms of Use</a>
        </nav>
        <div className="my-3 w-32">
          <Image
            className="h-14 w-auto"
            src={`/playgames-logo.png`}
            layout="responsive"
            alt={SITE_META.name}
            width={257}
            height={80}
          />
        </div>
        <p>
          {`© ${new Date().getFullYear()} ${SITE_META.name}. All
          Rights Reserved.`}
        </p>
      </footer>
    </>
  );
}
