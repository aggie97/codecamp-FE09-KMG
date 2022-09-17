import { css } from "@emotion/react";

const globalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 30px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  @font-face {
    font-family: "myFont";
    src: url("/scifibit.ttf");
  }
`;

export default globalStyles;
