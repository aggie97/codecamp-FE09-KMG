import { useRouter } from "next/router";

export default function BoardsPage() {
  const router = useRouter();
  return (
    <div>
      안녕하세요. 게시판 입니다. 동적 페이지 입니다. 게시글 아이디:{" "}
      {router.query.boardId}
    </div>
  );
}

export const getServerSideProps = () => {
  // 만약 서버 사이드 렌더링을 한다면? => out 폴더로 생성 불가 => next.config.js에서 exportPathMap 으로 현재 페이지 제외시키기
};
