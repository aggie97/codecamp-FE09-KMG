import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function StaticRoutedPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onFetchMore = async () => {
    if (data === undefined) return;
    await fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, options) => {
        if (options.fetchMoreResult.fetchBoards === undefined) {
          return {
            fetchBoards: [...prev.fetchBoards],
          };
        }
        console.log(options);
        return {
          fetchBoards: [
            ...prev.fetchBoards,
            ...options.fetchMoreResult?.fetchBoards,
          ],
        };
      },
    });
  };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onFetchMore} hasMore={true}>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <span style={{ margin: "10px" }}>{el.title}</span>
          </div>
        )) ?? <div></div>}
      </InfiniteScroll>
    </>
  );
}
