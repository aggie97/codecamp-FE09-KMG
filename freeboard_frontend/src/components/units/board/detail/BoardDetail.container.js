import BoardDetailUI from "./BoardDetail.presenter";
import FETCH_BOARD, { DELETE_BOARD } from "./BoardDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const BoardDetail = () => {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
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
        likeCount: "",
        dislikeCount: "",
        boardAddress: { address: "", addressDetail: "" },
      },
    },
  } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  const [addressBox, setAddressBox] = useState(false);

  const onClickAddressLink = (event) => {
    addressBox ? setAddressBox(false) : setAddressBox(true);
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

  console.log("detailCurrData:", data);

  const [year, month, day] = createdAt.slice(0, 10).split("-");

  return (
    <BoardDetailUI
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
    />
  );
};

export default BoardDetail;
