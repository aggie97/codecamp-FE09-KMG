import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoginPageState } from "../../../commons/store";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import Input from "../../common/input";
import Logo from "../../common/logo";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      createdAt
    }
  }
`;

const SignUp = () => {
  const router = useRouter();
  const [, setIsLoginPage] = useRecoilState(isLoginPageState);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [passwordSame, setPasswordSame] = useState("");

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== "/logIn" || as !== "/singUp") {
        setIsLoginPage(false);
        return true;
      }
    });
  }, []);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.id]: event.target.value });
  };

  const onChangePwSame = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordSame(event.target.value);
  };

  const onClickSubmit = async () => {
    if (passwordSame !== input.password) {
      Modal.error({
        content: "비밀번호가 일치하지 않습니다.\n 다시 입력해주세요.",
      });
      return;
    }
    try {
      const result = await createUser({
        variables: {
          createUserInput: { ...input },
        },
      });
      console.log(result);
      Modal.success({ content: "회원가입이 완료되었습니다." });
      await router.push("/logIn");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <SignUpPageWrapper>
      <Header>
        <Logo />
        <Title>회원가입</Title>
      </Header>
      <FormWrapper>
        이메일 <Input onChange={onChangeInput} type="text" id="email" />
        비밀번호{" "}
        <Input onChange={onChangeInput} type="password" id="password" />
        비밀번호 확인 <Input onChange={onChangePwSame} type="password" />
        이름 <Input onChange={onChangeInput} type="text" id="name" />
        <Button onClick={onClickSubmit}>회원가입</Button>
      </FormWrapper>
    </SignUpPageWrapper>
  );
};

export default SignUp;

export const SignUpPageWrapper = styled.div`
  padding: 83px 0;
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > input {
    margin-bottom: 1em;
  }
`;
