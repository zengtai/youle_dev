import { SITE_META } from "../lib/constants";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <p>
          {`© ${new Date().getFullYear()} ${SITE_META.name}.` +
            `\n` +
            `All Rights Reserved.`}
        </p>
      </footer>
    </>
  );
}
