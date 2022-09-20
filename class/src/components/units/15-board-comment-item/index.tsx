import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

interface IProps {
  el: IBoard;
}

const BoardCommentItem = ({ el }: IProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };
  return (
    <div>
      {!isEdit && (
        <div>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      )}
      {isEdit && (
        <div>
          수정할 내용 : <input type="text" />
        </div>
      )}
    </div>
  );
};

export default BoardCommentItem;
