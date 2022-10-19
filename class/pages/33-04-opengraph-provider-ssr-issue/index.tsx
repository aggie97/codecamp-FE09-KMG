// 제공자일 때 => 네이버(제공자)

import { gql, useQuery } from "@apollo/client";
import { ResultProps } from "antd";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../src/commons/types/generated/types";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpenGraphProviderPage(props: any) {
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchUseditem">,
  //   IQueryFetchUseditemArgs
  // >(FETCH_USED_ITEM, {
  //   variables: { useditemId: "634f50f06cf469002995d5c9" },
  // });

  return (
    <>
      <Head>
        <meta property="og:title" content={props?.qqq.name} />
        <meta property="og:description" content={props?.qqq.remarks} />
        <meta property="og:image" content={props?.qqq.images?.[0]} />
      </Head>
      <div name="body">중고 마켓에 오신 것을 환영합니다!</div>
    </>
  );
}
// 위와 같이 하면 브라우저에서는 content에 제대로 값이 들어간 상태로 나오지만, 다른 사람이 axios나  스크래핑했을 땐
// content가 아예 나오질 않는다. 왜? 브라우저에는 script태그를 읽을 수 있는 엔진이 있지만 서버는 그렇지 않다.

// 1. getServerSideProps는 존재하는 단어이므로 변경 불가능
// 2. 여기는 서버에서만 실행됨(Webpack 프론트 엔드 서버 프로그램)
export const getServerSideProps = async () => {
  console.log("여기는 서버입니다!");
  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "https://backend09.codebootcamp.co.kr/graphql",
    { credentials: "include" }
  );

  const result = await graphQLClient.request(FETCH_USED_ITEM, {
    useditemId: "634f50f06cf469002995d5c9",
  });

  // 2. 받은 결과를 return
  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
