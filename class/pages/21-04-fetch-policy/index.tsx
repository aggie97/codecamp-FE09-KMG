import { gql, useQuery } from "@apollo/client";
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
  const { data } = useQuery(FETCH_BOARDS);
  const [isOpen, setIsOpen] = useState(false);
  const onClickIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClickIsOpen}>new Component 생성</button>
      {isOpen && <FetchPolicy />}
    </div>
  );
};

export default GlobalState;
