import BoardDetailUI from "./BoardDetail.presenter";
import FETCH_BOARD, {
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const BoardDetail = () => {
  const router = useRouter();
  const [dance, setDance] = useState(false);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  console.log("DetailCurrRouterID:", router.query.id);
  const {
    loading,
    data = {
      // data는 useQuery로 비동기적으로 서버에 요청해서 받아오기 떄문에 완전히 받아오기 전까지는 undefined를 반환한다.
      // 이렇게 초기값을 지정해주면 data가 undefined 대신 빈 값을 받아온다.
      fetchBoard: {
        writer: "",
        createdAt: "",
        title: "",
        images: "",
        contents: "",
        youtubeUrl: "",
        likeCount: 0,
        dislikeCount: 0,
        boardAddress: { address: "", addressDetail: "" },
      },
    },
  } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  const [addressBox, setAddressBox] = useState(false);
  console.log(addressBox);
  const onClickAddressLink = (event) => {
    setAddressBox((prev) => !prev);
  };

  const onClickEdit = () => router.push(`/boards/${router.query.id}/edit`);

  const onClickToList = () => router.push(`/boards/`);

  const onClickDelete = async () => {
    await deleteBoard({
      variables: { boardId: router.query.id },
    });
    alert("게시물이 삭제되었습니다.");
    router.push(`/boards`);
  };

  const onClickLike = async (event) => {
    setDance((prev) => !prev);
    event.target.closest("#like").childNodes[0];
    await likeBoard({
      variables: { boardId: router.query.id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.id } },
      ],
    });
  };
  const onClickDislike = async (event) => {
    console.log(event.target.child);
    await dislikeBoard({
      variables: { boardId: router.query.id },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.id } },
      ],
    });
  };

  const {
    writer,
    createdAt,
    title,
    images,
    contents,
    youtubeUrl,
    likeCount,
    dislikeCount,
    boardAddress: { address, addressDetail },
  } = data?.fetchBoard;

  console.log(
    data.fetchBoard,
    writer,
    title,
    createdAt,
    images,
    contents,
    youtubeUrl,
    likeCount,
    dislikeCount,
    address,
    addressDetail
  );

  const [year, month, day] = createdAt.slice(0, 10).split("-");

  return (
    <BoardDetailUI
      dance={dance}
      loading={loading}
      year={year}
      month={month}
      day={day}
      writer={writer}
      title={title}
      images={images}
      contents={contents}
      youtubeUrl={youtubeUrl}
      likeCount={likeCount}
      dislikeCount={dislikeCount}
      address={address}
      addressDetail={addressDetail}
      addressBox={addressBox}
      onClickAddressLink={onClickAddressLink}
      onClickEdit={onClickEdit}
      onClickToList={onClickToList}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
};

export default BoardDetail;
