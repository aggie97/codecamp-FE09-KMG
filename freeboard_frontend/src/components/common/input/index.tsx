import styled from "@emotion/styled";
import { ChangeEvent } from "react";

const StyledInput = styled.input`
  position: relative;
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px 1em;
  font-size: 15px;
  font-weight: 400;
  outline: none;
`;

interface IInputProps {
  type: string;
  id?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, id, onChange }: IInputProps) => {
  return <StyledInput onChange={onChange} type={type} id={id} />;
};

export default Input;
