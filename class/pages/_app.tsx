import "../styles/globals.css";
import ApolloSettings from "../src/components/commons/apollo";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyles";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSettings>
        <>
          <Global styles={globalStyle} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSettings>
    </RecoilRoot>
  );
}

export default MyApp;
