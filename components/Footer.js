import { SITE_META } from "../lib/constants";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center border-t p-6 text-xs">
        <p>
          {`Copyright &copy; ${new Date().getFullYear()} ${SITE_META.name}. All
          Rights Reserved.`}
        </p>
      </footer>
    </>
  );
}
