import Link from "next/link";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <div className="container">
        <Link href={`/`}>home</Link>
        {/* <Ad_ key={Math.random()} /> */}
        <div id="uptap_ad"></div>
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <script src="${
              router.basePath
            }/js/uptapad.js" id="${Math.random()}"></script>
          `,
          }}
        />
        {/* <Script src={`${router.basePath}/js/uptapad.js`} id={Math.random()} /> */}
      </div>
    </>
  );
}
