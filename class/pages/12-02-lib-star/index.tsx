import styled from "@emotion/styled";

import { Rate } from "antd";
import { useState } from "react";

const MyStar = styled(Rate)`
  font-size: 100px;
  color: red;
`;

export default function starPage() {
  const COMMENT_EVAL = ["☹️", "😕", "😐", "😳", "😊"];

  const [value, setValue] = useState(0);
  const onChangeValue = (rate: number) => {
    setValue(rate);
  };
  return (
    <>
      <MyStar tooltips={COMMENT_EVAL} onChange={onChangeValue} value={value} />
      <span style={{ fontSize: "100px" }}>{COMMENT_EVAL[value - 1]}</span>
    </>
  );
}
