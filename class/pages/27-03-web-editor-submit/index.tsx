import { gql, useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const ReactQuillTestPage = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeValue = (aaa) => {
    setValue("contents", aaa === "<p><br></p>" ? "" : aaa); // 빈값일 경우 태그가 남기 때문에 초기화시켜주는 부분
    void trigger("contents");
  };

  const onClickSubmit = async (data) => {
    const result = await createBoard({
      variables: { createBoardInput: { ...data } },
    });
    alert("게시물 등록");
    console.log(result);
    await router.push(
      `/27-05-web-editor-detail-hydration/${result.data.createBoard._id}`
    );
    // const { Modal } = dynamic(async () => await import("antd"), { ssr: false }); // code - splitting
    // Modal.success({ content: "등록 성공" });
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
      <button>등록하기</button>
    </form>
  );
};

export default ReactQuillTestPage;
