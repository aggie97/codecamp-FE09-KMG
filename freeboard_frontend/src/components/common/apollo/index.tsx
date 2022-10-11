import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [token, setToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const result = localStorage.getItem("token");
    if (result) setToken(result);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${token}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
