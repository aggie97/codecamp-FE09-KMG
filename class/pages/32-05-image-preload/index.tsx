import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import { preloadImage } from "../../src/commons/libraries/preloadImage";

const PRELOAD_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/9/96/%22Den_kjekke_gutt%22_-_6._Internasjonale_Akademiske_Vinterleker_%281939%29_%2840200856483%29.jpg",
];
// 전역에서 생성한 변수는 리렌더와 관련없이 값이 초기화 되지 않는다.
// 다음 페이지의 이미지를 알고 있을 때 사용 가능할 듯
// 다음 페이지가 어떤 페이지냐에 따라 동적으로 로드가 가능할까

const PreloadPage = () => {
  const router = useRouter();
  useEffect(() => {
    preloadImage(PRELOAD_IMAGES);
  }, []);
  const onClickMove = (event: MouseEvent<HTMLButtonElement>) => {
    void router.push("/32-06-image-preload-moved");
  };
  return <button onClick={onClickMove}>이동하기</button>;
};

export default PreloadPage;
