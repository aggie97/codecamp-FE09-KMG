import "../styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import React, { ReactElement } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  // useEffect(() => {
  //   document.addEventListener("click", clickEffect);
  // }, []);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
