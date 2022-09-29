import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/commons/store";
import BoardWrite from "../../src/components/units/21-global-state/BoardWrite.container";

const GlobalState = () => {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  useEffect(() => {
    setIsEdit(true);
  });
  return <BoardWrite />;
};

export default GlobalState;
