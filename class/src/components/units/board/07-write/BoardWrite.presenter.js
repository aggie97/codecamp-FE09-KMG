import { RedInput, BlueInput, Button } from "./BoardWrite.styles";
export default function BoardWriteUI({ myColor, onChangeInput, onClickSync }) {
  return (
    <>
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
        GRAPHQL-API(동기) 요청하기
      </Button>
      <hr />
    </>
  );
}
