import { SITE_META } from "../lib/constants";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <nav className="site-footer-nav">
          <a href={`/t/privacy-policy`}>Privacy Policy</a>
          <a href={`/t/terms-of-use`}>Terms of Use</a>
        </nav>
        <p>
          {`© ${new Date().getFullYear()} ${SITE_META.name}. All
          Rights Reserved.`}
        </p>
      </footer>
    </>
  );
}
