import styled from "@emotion/styled";
import SimpleSlider from "../../carousel";

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  font-size: 3rem;
  background-color: transparent;
  /* animation-name: changeBackgroundColor;
  animation-duration: 12s;
  animation-timing-function: step-end;
  animation-iteration-count: infinite;

  @keyframes changeBackgroundColor {
    0% {
      background-color: #000;
    }

    25% {
      background-color: #e4cbff;
    }

    50% {
      background-color: #f5f5f7;
    }

    75% {
      background-color: #fee2b0;
    }
  } */
`;
// #000
// #E4CBFF
// #F5F5F7
// #FEE2B0

export default function Banner() {
  return (
    <Wrapper>
      <SimpleSlider />
    </Wrapper>
  );
}
