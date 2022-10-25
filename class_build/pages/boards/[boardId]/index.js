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
