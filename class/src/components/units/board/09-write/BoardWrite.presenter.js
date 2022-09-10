import { RedInput, BlueInput, Button } from "./BoardWrite.styles";
export default function BoardWriteUI({
  isEdit,
  myColor,
  onChangeInput,
  onClickSync,
  data,
}) {
  return (
    <>
      <h1>게시물 {isEdit ? "수정" : "등록"}</h1>
      <RedInput
        type="text"
        id="writer"
        onChange={onChangeInput}
        defaultValue={data?.fetchBoard.writer}
        placeholder="write"
      />
      <br />
      <BlueInput
        type="text"
        id="title"
        onChange={onChangeInput}
        defaultValue={data?.fetchBoard.title}
        placeholder="title"
      />
      <br />
      <BlueInput
        qqq="yellow"
        type="text"
        id="contents"
        onChange={onChangeInput}
        defaultValue={data?.fetchBoard.contents}
        placeholder="content"
      />
      <br />
      <Button myColor={myColor} onClick={onClickSync}>
        {isEdit ? "수정" : "등록"}하기
      </Button>
      <hr />
    </>
  );
}
