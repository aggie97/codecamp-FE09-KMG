import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const ReactQuillTestPage = () => {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeValue = (aaa) => {
    setValue("contents", aaa === "<p><br></p>" ? "" : aaa); // 빈값일 경우 태그가 남기 때문에 초기화시켜주는 부분
    void trigger("contents");
  };

  const onClickSubmit = async (data) => {
    console.log(data);

    const { Modal } = await import("antd"); // code - splitting
    Modal.success({ content: "등록 성공" });
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      <ReactQuill theme="snow" onChange={onChangeValue} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </form>
  );
};

export default ReactQuillTestPage;
