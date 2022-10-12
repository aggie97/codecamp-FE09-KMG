import { ChangeEventHandler, MouseEventHandler, MutableRefObject } from "react";
import { Address } from "react-daum-postcode";
import {
  FieldErrorsImpl,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import {
  IUseditem,
  IUseditemAddress,
  Maybe,
} from "../../../../commons/types/generated/types";

export interface IFormDataProps {
  name: string;
  remarks: string;
  contents: string;
  price: Maybe<number> | undefined;
  tags?: Maybe<string[]>;
  useditemAddress?: Maybe<IUseditemAddress>;
  images?: Maybe<string[]>;
  createdAt?: string;
  pickedCount?: Maybe<number>;
}

export interface IProductProps {
  onChangeValue:
    | ((
        value: string,
        delta: DeltaStatic,
        source: Sources,
        editor: UnprivilegedEditor
      ) => void)
    | undefined;
  setValue: UseFormSetValue<IFormDataProps>;
  onEdit: (formData: IFormDataProps) => Promise<void>;
  onClickSearchAddress: (() => void) | undefined;
  data: { fetchUseditem: IUseditem };
  isEdit: boolean;
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
