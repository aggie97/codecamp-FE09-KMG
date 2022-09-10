import { RedInput, BlueInput } from "./BoardWrite.styles";
export default function BoardWriteUI({ onChangeInput, onClickSync }) {
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
        type="text"
        id="contents"
        onChange={onChangeInput}
        placeholder="content"
      />
      <br />
      <button onClick={onClickSync}>GRAPHQL-API(동기) 요청하기</button>
      <hr />
    </>
  );
}
