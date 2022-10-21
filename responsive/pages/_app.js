import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/layout";
import { GlobalStyles } from "../src/styles/globalStyles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Global styles={GlobalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
