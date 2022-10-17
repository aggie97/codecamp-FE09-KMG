import styled from "@emotion/styled";
import { styleBgColor, stylePrimaryColor } from "../../src/styles/commonStyles";

const Wrapper = styled.section``;

const Title = styled.h1`
  color: ${stylePrimaryColor};
`;

const Content = styled.div`
  padding: 30px;
  color: ${stylePrimaryColor};
  background: ${styleBgColor};
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: ${stylePrimaryColor};
  border: 0;

  color: white;
  padding: 10px 20px;
`;

export default function CommonsJsPage() {
  return (
    <Wrapper>
      <Title>공통 CSS 연습</Title>
      <Content>
        <p>테스트용 박스 영역입니다.</p>
      </Content>
      <Button>버튼입니다.</Button>
    </Wrapper>
  );
}
