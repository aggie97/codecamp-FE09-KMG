import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { themeState } from "../../src/store";

const Wrapper = styled.section``;

const Title = styled.h1`
  /* color: ${(props) => props.theme.primaryColor}; */
`;

const Content = styled.div`
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor};
  padding: 30px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
`;

export default function CommonsJsPage() {
  const [, setTheme] = useRecoilState(themeState);
  const onClickButton = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };
  return (
    <Wrapper>
      <Title>공통 CSS 연습</Title>
      <Content>
        <p>테스트용 박스 영역입니다.</p>
      </Content>
      <Button onClick={onClickButton}>버튼입니다.</Button>
    </Wrapper>
  );
}
