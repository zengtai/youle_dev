import { getLocalData } from "../lib/api";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.getInitialProps = async (ctx) => {
  const categories = await getLocalData(`category`);
  return {
    // data: null,
    pageProps: {
      categories,
    },
  };
};
