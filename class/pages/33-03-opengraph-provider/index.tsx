// 제공자일 때 => 네이버(제공자)

import Head from "next/head";

export default function OpenGraphProviderPage() {
  return (
    <>
      {/* 더 좋은 사용자 경험을 위해서는 페이지 마다 Head 태그를 만들어주는 것이 좋다? */}
      <Head>
        <meta property="og:title" content="중고마켓" />
        <meta
          property="og:description"
          content="중고마켓에 오신 것을 환영합니다!"
        />
        <meta property="og:image" content="http://~~" />
      </Head>
      <div name="body">중고 마켓에 오신 것을 환영합니다!</div>
      {/* body 부분은 미리보기에는 포함되지 않는다! */}
    </>
  );
}
