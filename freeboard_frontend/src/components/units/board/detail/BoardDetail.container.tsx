import BoardDetailUI from "./BoardDetail.presenter";
import FETCH_BOARD, {
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

const BoardDetail = () => {
  const router = useRouter();
  const [dance, setDance] = useState(false);
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { loading, data } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.id),
    },
  });

  const [addressBox, setAddressBox] = useState(false);
  console.log(addressBox);
  const onClickAddressLink = () => {
    setAddressBox((prev) => !prev);
  };

  const onClickEdit = () => {
    void router.push(`/boards/${String(router.query.id)}/edit`);
  };

  const onClickToList = () => {
    void router.push(`/boards/`);
  };

  const onClickDelete = () => {
    void deleteBoard({
      variables: { boardId: String(router.query.id) },
    });
    alert("게시물이 삭제되었습니다.");
    void router.push(`/boards`);
  };

  const onClickLike = async () => {
    setDance((prev) => !prev);
    // event.target.closest("#like").childNodes[0];
    await likeBoard({
      variables: { boardId: String(router.query.id) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.id } },
      ],
    });
  };
  const onClickDislike = async () => {
    await dislikeBoard({
      variables: { boardId: String(router.query.id) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.id } },
      ],
    });
  };

  console.log(data);

  return (
    <BoardDetailUI
      data={data}
      dance={dance}
      loading={loading}
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
