import { useRouter } from "next/router";
import BoardComments from "../../../src/components/units/board/comment/BoardCommentInDetail.container";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";

const DynamicRoutedPage = () => {
  const router = useRouter();

  return (
    <>
      <BoardDetail />
      <hr />
      <BoardComments routerId={router.query.id} />
    </>
  );
};

export default DynamicRoutedPage;
