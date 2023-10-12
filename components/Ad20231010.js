import Script from "next/script";
export default function Ad20231010() {
  return (
    <>
      <div className="ad2">
        <div id="M907194ScriptRootC1533387" className="min-h-[300px] bg-white"></div>
        {/* <script async src="https://jsc.mgid.com/g/o/gostarfavor.com.1533387.js"></script> */}
        <Script
          strategy="afterInteractive"
          src={`https://jsc.mgid.com/g/o/gostarfavor.com.1533387.js`}
          async
        />
      </div>
    </>

    // <div
    //   id="M907194ScriptRootC1533387"
    //   key={Math.random()}
    //   className="min-h-[300px] bg-white"
    // ></div>
  );
}
