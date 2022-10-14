import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  gql,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { GraphQLClient } from "graphql-request";
import _ from "lodash";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import getAccessToken from "../../../commons/libraries/getAccessToken";
import { loginToken } from "../../../commons/store";

const GLOBAL_STATE = new InMemoryCache();
const ApolloSettings = ({ children }: any) => {
  const [token, setAccessToken] = useRecoilState(loginToken);

  useEffect(() => {
    // 1. 기존방식(refreshToken 이전)
    // const result = localStorage.getItem("token");
    // if (result != null) setAccessToken(result);
    // console.log("useEffect");

    // 2. 새로운 방식(refreshToken 이후)
    void getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 서버인지 브라우저인지 구분하는 3 가지 방법
  // 1. process.browser (return boolean)
  // 2. typeof window (return undefined || window)

  if (process.browser) console.log("browser on air!");
  else console.log("server on air!");

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러 캐치하기
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 토큰 만료 에러(UNAUTHENTICATED)인지 검증
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 AccessToken을 재발급
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 AccessToken을 globalState에 저장
              setAccessToken(newAccessToken);
              // 3-1. 재발급 받은 AccessToken으로 방금 실패한 쿼리 정보 수정
              // operation.getContext();  정보 가져오기
              if (typeof newAccessToken !== "string") return;
              operation.setContext({
                // 정보 수정하기
                headers: {
                  ...operation.getContext().headers,
                  // 만료된 토큰이 포함된 헤더
                  Authorization: `Bearer ${newAccessToken}`,
                  // 뒤에 새로운 토큰을 넣어 만료된 토큰을 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2. 방금 수정한 쿼리 재요청
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${token}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE, // 페이지 전환(_app.tsx 리렌더) 되어도, 캐시 유지
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloSettings;
