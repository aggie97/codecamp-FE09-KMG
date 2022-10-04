import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginToken } from "../../../commons/store";

const GLOBAL_STATE = new InMemoryCache();
const ApolloSettings = ({ children }: any) => {
  const [token, setAccessToken] = useRecoilState(loginToken);

  useEffect(() => {
    const result = localStorage.getItem("token");
    if (result != null) setAccessToken(result);
    console.log("useEffect");
  }, []);

  // 서버인지 브라우저인지 구분하는 3 가지 방법
  // 1. process.browser (return boolean)
  // 2. typeof window (return undefined || window)

  if (process.browser) console.log("browser on air!");
  else console.log("server on air!");

  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 페이지 전환(_app.tsx 리렌더) 되어도, 캐시 유지
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloSettings;
