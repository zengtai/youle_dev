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
        <p
          className="text-center"
          dangerouslySetInnerHTML={{
            __html: `© ${new Date().getFullYear()} ${SITE_META.name} <br >All
          Rights Reserved`,
          }}
        />
        <div className="my-6 flex items-center justify-center gap-x-1">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>
          <a className="underline" href={`mailto:contact@${SITE_META.domain}`}>
            {`contact@${SITE_META.domain}`}
          </a>
        </div>
      </footer>
    </>
  );
}
