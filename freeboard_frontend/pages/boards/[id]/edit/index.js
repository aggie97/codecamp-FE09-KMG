import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "../../../../src/components/units/board/register/BoardRegister.queries";
import BoardRegister from "../../../../src/components/units/board/register/BoardRegister.container";

export default function Home() {
  const router = useRouter();
  const result = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  const { data } = result;

  return <BoardRegister data={data} isEdit={true} />;
}
