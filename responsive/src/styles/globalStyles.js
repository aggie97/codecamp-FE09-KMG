import { css } from "@emotion/react";

export const GlobalStyles = css`
  body[data-theme="light"] {
    // 라이트 테마
    --primary-color: hotpink;
    --bg-color: white;
  }
  body[data-theme="dark"] {
    // 다크 테마
    --primary-color: white;
    --bg-color: hotpink;
  }
`;
