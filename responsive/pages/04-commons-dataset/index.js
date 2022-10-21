import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { themeState } from "../../src/store";
import React from "react";
const Wrapper = styled.section``;

const Title = styled.h1`
  /* color: ${(props) => props.theme.primaryColor}; */
`;

const Content = styled.div`
  /* color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.bgColor}; */
  padding: 30px;
  margin-bottom: 20px;
  color: var(--primary-color);
  background-color: var(--bg-color);
`;

const Button = styled.button`
  border: 0;
  /* background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.bgColor}; */
  padding: 10px 20px;
`;

export default function CommonsJsPage() {
  const [theme, setTheme] = useRecoilState(themeState);
  const onClickButton = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

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
