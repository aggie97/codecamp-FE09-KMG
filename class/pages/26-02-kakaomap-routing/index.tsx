import Head from "next/script";
import Link from "next/link";

import { useRouter } from "next/router";

const KakaoMapPage = () => {
  const router = useRouter();
  const onClickMoveToMap = () => {
    void router.push("/26-03-kakaomap-routed");
  };
  return (
    <>
      <Head></Head>
      <button onClick={onClickMoveToMap}>카카오 맵으로 이동하기</button>
      <Link href="/26-03-kakaomap-routed">
        <a>카카오 맵으로 이동하기: Link</a>
      </Link>
    </>
  );
};

export default KakaoMapPage;
