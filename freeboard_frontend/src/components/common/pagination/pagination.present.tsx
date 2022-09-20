import { MouseEvent } from "react";

import {
  Label,
  PaginationLi,
  PaginationUl,
  PaginationWrapper,
  Radio,
} from "./pagination.styles";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface IPaginationUI {
  onClickPageNum: (event: MouseEvent<HTMLInputElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
  startPage: number;
  isPrevEnd: boolean;
  isNextEnd: boolean;
}

const PaginationUI = ({
  onClickPageNum,
  onClickPrevPage,
  onClickNextPage,
  startPage,
  isPrevEnd,
  isNextEnd,
}: IPaginationUI) => {
  return (
    <PaginationWrapper>
      <PaginationUl>
        <LeftOutlined disabled={isPrevEnd} onClick={onClickPrevPage} />
        {new Array(10).fill(1).map((_, index) => (
          <PaginationLi key={index + startPage}>
            <Label htmlFor={String(index + startPage)}>
              {index + startPage}
            </Label>
            <Radio
              type="radio"
              name="pages"
              id={String(index + startPage)}
              onClick={onClickPageNum}
            />
          </PaginationLi>
        ))}
        <RightOutlined disabled={isNextEnd} onClick={onClickNextPage} />
      </PaginationUl>
    </PaginationWrapper>
  );
};

export default PaginationUI;
