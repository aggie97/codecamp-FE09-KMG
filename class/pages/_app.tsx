import "../styles/globals.css";
import ApolloSettings from "../src/components/commons/apollo";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSettings>
      <>
        <Global styles={globalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSettings>
  );
}

export default MyApp;
