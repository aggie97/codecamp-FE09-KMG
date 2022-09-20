import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const ApolloSettings = ({ children }) => {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloSettings;
