import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const OptimisticPage = () => {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "634f3d5b6cf469002995d5a7" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: { boardId: "634f3d5b6cf469002995d5a7" },
        optimisticResponse: {
          likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1, // 앞의 값이 undefined 이면 0
        },
        update(cache, { data }) {
          cache.writeQuery({
            // modify는 기존에 있던 필드의 값을 변겅, writeQuery는 기존에 없던 필드도 생성 후 변경
            query: FETCH_BOARD,
            variables: { boardId: "634f3d5b6cf469002995d5a7" },
            data: {
              fetchBoard: {
                _id: "634f3d5b6cf469002995d5a7",
                __typename: "Board", // 안 적어줘도 작동은 함...!
                likeCount: data?.likeBoard, // data.(mutation 이름 적기)
              },
            },
          });
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <>
      <div>현재 카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
    </>
  );
};

export default OptimisticPage;
