import { RedInput, BlueInput, Button } from "./BoardWrite.styles";
export default function BoardWriteUI({
  isEdit,
  myColor,
  onChangeInput,
  onClickSync,
}) {
  return (
    <>
      <h1>게시물 {isEdit ? "수정" : "등록"}</h1>
      <RedInput
        type="text"
        id="writer"
        onChange={onChangeInput}
        placeholder="write"
      />
      <br />
      <BlueInput
        type="text"
        id="title"
        onChange={onChangeInput}
        placeholder="title"
      />
      <br />
      <BlueInput
        qqq="yellow"
        type="text"
        id="contents"
        onChange={onChangeInput}
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
