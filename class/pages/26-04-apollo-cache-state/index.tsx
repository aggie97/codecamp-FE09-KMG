/* eslint-disable @typescript-eslint/no-misused-promises */
import { useQuery, gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickCreate = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "곧",
          password: "1234",
          title: " -박희현-",
          contents: "내용",
        },
      },
      // refetchQueries: [{ query: CREATE_BOARD }],
      update(cache, { data }) {
        // cache 에는 나의 global state가, {data} 에는 mutation 이후의 결과가 담긴다!
        cache.modify({
          // cache 수정하겠다!
          fields: {
            // 어떤 필드?
            fetchBoards: (prev) => {
              // fetchBoards 필드의 state 부분을 조작하겠다!
              return [data?.createBoard, ...prev];
            },
          },
        });
      },
    });
  };
  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      // refetchQueries: [{ query: DELETE_BOARD }],
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // docs 권장 사항: readField를 사용해서 id를 꺼내세요!
              const deletedBoardId = data?.deleteBoard; // 삭제된 게시글의 아이디
              return prev.filter(
                (board) => readField("_id", board) !== deletedBoardId
              );
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}
