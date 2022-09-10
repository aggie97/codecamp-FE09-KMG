import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueInput = styled.input`
  background-color: blue;
  &:focus {
    background-color: ${({ qqq }) => qqq};
  }
`;

export const Button = styled.button`
  display: ${({ myColor }) => (myColor ? "block" : "none")};
`;
