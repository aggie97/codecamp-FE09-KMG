import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import globalStyles from "../src/commons/styles/globalStyles";
function MyApp({ Component }: AppProps) {
  return (
    <ApolloSetting>
      <Global styles={globalStyles} />
      <Layout>
        <Component />
      </Layout>
    </ApolloSetting>
  );
}

export default MyApp;
