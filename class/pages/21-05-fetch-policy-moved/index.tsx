import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import FetchPolicy from "../../src/components/units/21-fetch-policy";
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
const GlobalState = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  const [isOpen, setIsOpen] = useState(false);
  const onClickMove = () => {
    router.push("/21-policy-moved/");
  };
  return (
    <div>
      {isOpen && <FetchPolicy />}
      <button onClick={onClickMove}>페이지 이동</button>
    </div>
  );
};

export default GlobalState;
