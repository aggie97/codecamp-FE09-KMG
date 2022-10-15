import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

const LoginSuccessPage = () => {
  // 1. 페이지 접속 시 자동으로 data 요청 -> 응답 시 리렌더링
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // 2. 버튼 클릭 시 직접 실행하면 data 요청 -> 응답 시 리렌더링
  // const [myquery, {data}] = useLazyQuery(gql);
  const client = useApolloClient();

  const onClickButton = async () => {
    try {
      const result = await client.query({
        query: FETCH_USER_LOGGED_IN,
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };
  return <button onClick={onClickButton}>클릭하세요</button>;
};

export default LoginSuccessPage;
