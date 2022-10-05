import {
  FieldErrorsImpl,
  FieldValues,
  UseFormHandleSubmit,
} from "react-hook-form";
import { ICreateUseditemInput } from "../../../../commons/types/generated/types";

export interface IProductProps {
  isValid: boolean;
  onSubmit: (formData: ICreateUseditemInput) => () => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: any;
  errors: FieldErrorsImpl<{ [x: string]: any }> | string;
}
