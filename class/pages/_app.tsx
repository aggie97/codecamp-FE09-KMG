import "../styles/globals.css";
import ApolloSettings from "../src/components/commons/apllo";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSettings>
      <>
        <Global />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSettings>
  );
}

export default MyApp;
