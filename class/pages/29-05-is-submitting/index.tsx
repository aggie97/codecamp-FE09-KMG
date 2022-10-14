import axios from "axios";
import { useState } from "react";

export default function IsSubmittingPage() {
  const [data, setData] = useState<any>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    setData(result);
    console.log(result);
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
      sum++;
      console.log(sum);
    }
    setIsSubmitting(false);
    // 엥? 같은 state가 같은 스코프 안에서 prev 사용 없이 두 번 상태를 바꾼 상황인데 작동이 잘된다...?
    // await 때문에 그렇다...!?
  };

  return (
    <button onClick={onClickSubmit} disabled={isSubmitting}>
      등록하기 등의 API 요청 버튼
    </button>
  );
}
