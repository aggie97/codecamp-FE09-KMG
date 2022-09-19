import { AppProps } from "next/app";
import { ReactElement } from "react";
import "antd/dist/antd.css";
import ApolloSetting from "../src/components/common/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
// import Layout from "../src/components/common/layout";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </>
    </ApolloSetting>
  );
}

export default MyApp;
