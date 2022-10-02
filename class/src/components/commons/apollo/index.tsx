import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { loginToken } from "../../../commons/store";

const GLOBAL_STATE = new InMemoryCache();
const ApolloSettings = ({ children }: any) => {
  const [token, setLoginToken] = useRecoilState(loginToken);
  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${token}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 페이지 전환(_app.tsx 리렌더) 되어도, 캐시 유지
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloSettings;
