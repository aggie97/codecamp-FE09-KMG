/* eslint-disable @typescript-eslint/no-misused-promises */
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { loginToken } from "../../src/commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";

const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;

const Login = () => {
  const router = useRouter();
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER_EXAMPLE);
  const [token, setLoginToken] = useRecoilState(loginToken);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.id]: event.target.value });
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUserExample({
        variables: {
          email: input.email,
          password: input.password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken;
      console.log(accessToken);
      if (!accessToken) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 시도해 주세요" });
        return;
      }
      alert("로그인 성공");
      setLoginToken(accessToken);
      void router.push("/30-02-login-refreshToken-success");
    } catch (error) {
      alert("로그인 실패");
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <input id="email" onChange={onChangeInput} type="email" />
        <input id="password" onChange={onChangeInput} type="password" />
        <button onClick={onClickLogin}>로그인 하기</button>
      </div>
    </>
  );
};

export default Login;
