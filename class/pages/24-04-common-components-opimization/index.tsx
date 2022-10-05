import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";
import { yupResolver } from "@hookform/resolvers/yup";

const mySchema = yup.object({
  // yup 스키마 작성하는 방법! 타입 검사를 해준 뒤, 필수값인지 아닌지, 필수값일 때 빈값이 오면 띄울 에러메세지까지 한 방에!!
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 4자리 이상이어야 합니다.")
    .max(15, "비밀번호는 15자리 이하이어야 합니다.")
    .required("비밀번호를 입력해주세요."),

  // email: yup
  //   .string()
  //   .email("이메일 형식에 적합하지 않습니다.")
  //   .required("이메일을 입력해주세요."),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-d{3,4}-d{4}$/, "전화번호 형식에 적합하지 않습니다.")
  //   .required("전화번호를 입력해주세요."),
});

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

const HookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    // useForm에 yup을 연결하는 방법...!
  } = useForm<IFormData>({ resolver: yupResolver(mySchema), mode: "onChange" }); // mode를 선언해주면 비제어 -> 제어 컴포넌트로 전환 가능

  const onSubmit = (data: IFormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>작성자</label>
      <Input01 register={register("writer")} />
      <div>{errors.writer?.message}</div>
      <label>제목</label>
      <Input01 register={register("title")} />
      <div>{errors.title?.message}</div>
      <label>내용</label>
      <Input01 register={register("contents")} />
      <div>{errors.contents?.message}</div>
      <label>비밀번호</label>
      <Input01 type="password" register={register("password")} />
      <div>{errors.password?.message}</div>
      <Button01 style={{ opacity: isValid ? "1" : "0.3" }}>
        {/* 훅 폼의 formState를 이용한 동적 스타일링 */} 등록하기
      </Button01>
      <Button01 type="reset">초기화</Button01>
    </form>
  );
};

export default HookForm;
