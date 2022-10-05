import { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
}

const Input01 = ({ type = "text", register }: IProps) => {
  return <input type={type} {...register} />;
};

export default Input01;
