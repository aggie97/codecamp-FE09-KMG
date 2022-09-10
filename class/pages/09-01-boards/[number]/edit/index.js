import { useQuery, gql } from "@apollo/client";
import { Router, useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";

const FETCH_BOARD = gql`
  query ($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
      number
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  return <BoardWrite isEdit={true} data={data} />;
}
