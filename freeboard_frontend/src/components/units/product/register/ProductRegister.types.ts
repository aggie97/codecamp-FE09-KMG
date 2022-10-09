import { ChangeEventHandler, MouseEventHandler, MutableRefObject } from "react";
import { Address } from "react-daum-postcode";
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IUseditemAddressInput } from "../../../../commons/types/generated/types";

export interface IFormDataProps {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags?: string[];
  useditemAddress?: IUseditemAddressInput;
  images?: string[];
}

export interface IProductProps {
  getValues: (arg: string) => string;
  onCompleteAddressSearch: ((address: Address) => void) | undefined;
  isOpen: any;
  images: string[];
  imageRef: MutableRefObject<undefined>;
  onChangeImageBox: (
    index: number
  ) => ChangeEventHandler<HTMLInputElement> | undefined;
  onClickBox: MouseEventHandler<HTMLLabelElement> | undefined;
  isValid: boolean;
  onSubmit: (formData: IFormDataProps) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<IFormDataProps>;
  register: UseFormRegister<IFormDataProps>;
  errors: FieldErrorsImpl<IFormDataProps>;
}
