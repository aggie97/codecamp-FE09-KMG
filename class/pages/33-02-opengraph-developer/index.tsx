// 개발자일  때 => 디스코드(개발자)

import axios from "axios";

export default function OpenGraphDeveloperPage() {
  const onClickEnter = () => {
    // 1. 채팅 데이터에 주소가 있는지 찾기(ex, https://~~ 로 시작하는 것)

    // 2. 해당 주소로 스크래핑하기

    const result = axios.get("https://www.gmarket.co.kr"); // 원래는 CORS 때문에 백엔드에서 함.
    console.log(result.data);

    // 3. 메타태그에서 og: 찾기
    // console.log(result.data)
  };
  return (
    <>
      <button onClick={onClickEnter}>채팅 입력 후 Enter</button>
    </>
  );
}
