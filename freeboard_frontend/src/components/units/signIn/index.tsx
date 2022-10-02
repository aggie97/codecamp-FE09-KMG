import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  isLoggedInUserState,
  isLoginPageState,
} from "../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import Logo from "../../common/logo";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

// 뒤로가기 시, 리코일 스테이트 변경시켜야함...!

const SignIn = () => {
  const router = useRouter();
  const [, setIsLoginPage] = useRecoilState(isLoginPageState);
  const [, setIsLoggedInUser] = useRecoilState(isLoggedInUserState);
  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== "/logIn") {
        setIsLoginPage(false);
        return true;
      }
    });
  }, []);
  const [, setToken] = useRecoilState(accessTokenState);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [isPasswordMasked, setIsMaskedPassword] = useState(true);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeLoginInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [event.target.id]: event.target.value });
  };

  const onClickLoginButton = async () => {
    console.log("login test");
    // 로그인 뮤테이션 전송
    if (input.email && input.password) {
      try {
        const result = await loginUser({
          variables: { ...input },
        });
        console.log(result);
        const accessToken = result.data?.loginUser.accessToken;
        if (!accessToken) {
          Modal.error({ content: "로그인을 해주세요." });
          return;
        }
        setToken(accessToken);
        setIsLoggedInUser(true);
        Modal.success({ content: "로그인이 완료되었습니다." });
        setIsLoginPage(false);

        await router.push("/");
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    } else {
      if (input.email) Modal.error({ content: "비밀번호를 입력해주세요." });
      else Modal.error({ content: "이메일을 입력해주세요." });
    }
  };

  const onClickToggleLabel = () => {
    setIsMaskedPassword((prev) => !prev);
  };
  return (
    <SignPageWrapper>
      <Logo />
      <FormWrapper>
        <Email
          onChange={onChangeLoginInput}
          placeholder="이메일"
          type="email"
          id="email"
        />
        <PasswordWrapper>
          <Password
            onChange={onChangeLoginInput}
            placeholder="비밀번호는 8자~20자"
            type={isPasswordMasked ? "password" : "text"}
            id="password"
          />
          <ToggleLabel onClick={onClickToggleLabel}>
            {isPasswordMasked ? "비밀번호 보기" : "가리기"}
          </ToggleLabel>
        </PasswordWrapper>
        <LoginButton onClick={onClickLoginButton}>로그인</LoginButton>
      </FormWrapper>
    </SignPageWrapper>
  );
};

export default SignIn;

export const SignPageWrapper = styled.div`
  /* width: 100%; */
  padding: 83px 0;
  width: 328px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  & input {
    position: relative;
    width: 100%;
    border: 1px solid #ddd;
    padding: 10px 1em;
    font-size: 15px;
    font-weight: 400;
    outline: none;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const Email = styled.input``;

export const Password = styled.input`
  padding-right: 105px !important;
`;

export const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 220px;
  line-height: 45px;
  font-size: 14px;
  font-weight: 400;
  width: 100px;
  cursor: pointer;
  text-align: end;
`;

export const LoginButton = styled.button`
  border: 1px solid #ff0038;
  background-color: #ff0038;
  color: white;
  padding: 10px 1em;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
`;
