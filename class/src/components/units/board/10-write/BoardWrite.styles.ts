import styled from "@emotion/styled";
import { IColorButtonProps } from "./BoardWrite.types";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueInput = styled.input`
  background-color: blue;
  &:focus {
    background-color: ${({ qqq }: IColorButtonProps) => qqq};
  }
`;

export const Button = styled.button`
  display: ${({ myColor }: IColorButtonProps) => (myColor ? "block" : "none")};
`;
