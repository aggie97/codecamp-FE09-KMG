import styled from "@emotion/styled";
import HomeHeader from "../../../units/home/header/HomeHeader.conainter";

const Wrapper = styled.div`
  text-align: center;
`;

export default function Header() {
  return (
    <Wrapper>
      <HomeHeader />
    </Wrapper>
  );
}
