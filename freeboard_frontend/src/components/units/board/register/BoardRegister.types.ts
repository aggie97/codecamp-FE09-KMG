import { SyntheticEvent, ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardRegisterProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IEventTarget {
  author: string;
  pw: string;
  title: string;
  contents: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  youtubeLink: string;
  images: string;
}

export interface IInput {
  author: string;
  pw: string;
  title: string;
  contents: string;
  zipCode: string;
  address: string;
  addressDetail: string;
  youtubeLink: string;
  images: string;
}

export interface ObjectIndexable extends IInput {
  [key: string]: string;
}

export interface IProps {
  onCompleteAddressSearch: (data: any) => void;
  onClickAddressSearch: () => void;
  onChangeInput: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  submitForm: (event: SyntheticEvent) => Promise<void>;
  editForm: (event: SyntheticEvent) => Promise<void>;
  isOpen: boolean;
  isEmpty: boolean;
  isEdit: boolean;
  input: IInput;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  boardId: string;
}

export interface InputHTMLAttributes extends IProps {
  isEmpty: boolean;
}
