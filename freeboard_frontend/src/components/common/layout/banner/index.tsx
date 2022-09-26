import styled from "@emotion/styled";
import SimpleSlider from "../../carousel";

const Wrapper = styled.div`
  height: 100%;
  background-color: #ffffb3;
  text-align: center;
  font-size: 3rem;
`;

export default function Banner() {
  return (
    <Wrapper>
      <SimpleSlider />
    </Wrapper>
  );
}
