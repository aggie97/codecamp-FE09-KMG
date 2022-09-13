import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IColorButtonProps {
  qqq?: string;
  myColor?: boolean;
}

export interface IBoardWriteUIProps {
  myColor: boolean;
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSync: () => void;
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard">;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}
