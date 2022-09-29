import { gql, useQuery } from "@apollo/client";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;
const FetchPolicy = () => {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);
  return <></>;
};

export default FetchPolicy;
