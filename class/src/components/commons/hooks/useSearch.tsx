import { useState } from "react";

const useSearch = () => {
  const [keyword, setKeyword] = useState("");
  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return {
    keyword,
    onChangeKeyword,
  };
};

export default useSearch;
