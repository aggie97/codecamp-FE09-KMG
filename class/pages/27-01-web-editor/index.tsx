import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const ReactQuillTestPage = () => {
  const onChangeValue = (aaa) => console.log(aaa);

  const onClickSubmit = () => {
    const { Modal } = dynamic(async () => await import("antd"), { ssr: false }); // code - splitting
    Modal.success({ content: "등록 성공" });
  };

  return (
    <>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      <ReactQuill theme="snow" onChange={onChangeValue} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
};

export default ReactQuillTestPage;
