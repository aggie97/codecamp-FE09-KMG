import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormDataProps {
  name: string;
  remarks: string;
  contents: string;
  price: number;
}

export interface IProductProps {
  isValid: boolean;
  onSubmit: (formData: IFormDataProps) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<IFormDataProps>;
  register: UseFormRegister<IFormDataProps>;
  errors: FieldErrorsImpl<IFormDataProps>;
}
