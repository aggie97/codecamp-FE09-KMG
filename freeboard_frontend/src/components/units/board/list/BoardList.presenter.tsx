import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import Pagination from "../../../common/pagination";
import {
  Wrapper,
  Header,
  Banner,
  BestBoards,
  BestBoardLayout,
  BestBoard,
  Footer,
  RegisterButton,
  SearchBox,
  SearchInput,
  SearchDate,
  SearchButton,
  List,
  ListHeader,
  ListTitle,
  ListNumber,
  ListCreatedAt,
  ListWriter,
  ListBox,
  StartAt,
  EndAt,
  BoardCreatedAt,
  BoardNumber,
  BoardTitle,
  BoardWriter,
  BestBoardImg,
  BestBoardInfo,
  BestBoardTitle,
  BestBoardContents,
  BestBoardProfile,
  BestBoardProfileImg,
  BestBoardWriter,
  BoxForLayout,
} from "./BoardList.styles";

import { IBoardArray } from "./BoardList.types";

interface IBoardList {
  onClickCreate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickListItem?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickBestItem: (event: MouseEvent<HTMLDivElement>) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  boardsArray?: IBoardArray[];
  totalBoards?: Pick<IQuery, "fetchBoards">;
  bestBoards?: Pick<IQuery, "fetchBoardsOfTheBest">;
  count?: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
}

const BoardListUI = ({
  boardsArray,
  totalBoards,
  bestBoards,
  onClickCreate,
  onClickListItem,
  onClickBestItem,
  onChangeSearch,
  refetch,
  count,
}: IBoardList) => {
  return (
    <>
      <Wrapper>
        <Header>
          <Banner>베스트 게시글</Banner>
          <BestBoards>
            {bestBoards?.fetchBoardsOfTheBest.map((best) => {
              return (
                <BestBoardLayout key={best._id} id="BestParent">
                  <BestBoard onClick={onClickBestItem} id={best._id}>
                    <BestBoardImg />
                    <BestBoardInfo>
                      <BestBoardTitle>{best.title}</BestBoardTitle>
                      <BestBoardContents>
                        <BestBoardProfile>
                          <BestBoardProfileImg />
                          <BestBoardWriter>{best.writer}</BestBoardWriter>
                        </BestBoardProfile>
                      </BestBoardContents>
                    </BestBoardInfo>
                  </BestBoard>
                </BestBoardLayout>
              );
            })}
          </BestBoards>
        </Header>
        <SearchBox>
          <SearchInput
            onChange={onChangeSearch}
            placeholder="제목을 입력해주세요"
          />
          <SearchDate>
            <StartAt type="date" />
            <div>~</div>
            <EndAt type="date" />
          </SearchDate>
          <SearchButton>검색하기</SearchButton>
        </SearchBox>
        <ListBox>
          <ListHeader>
            <ListNumber>번호</ListNumber>
            <ListTitle>제목</ListTitle>
            <ListWriter>작성자</ListWriter>
            <ListCreatedAt>날짜</ListCreatedAt>
          </ListHeader>
          <>
            {boardsArray?.length === 0
              ? totalBoards?.fetchBoards.map((board: IBoard, index: number) => (
                  <List
                    onClick={onClickListItem}
                    id={board._id}
                    key={board._id}
                  >
                    <BoardNumber>{index + 1}</BoardNumber>
                    <BoardTitle>{board.title}</BoardTitle>
                    <BoardWriter>{board.writer}</BoardWriter>
                    <BoardCreatedAt>
                      {board.createdAt.slice(0, 10)}
                    </BoardCreatedAt>
                  </List>
                ))
              : boardsArray?.map((board: IBoardArray, index: number) => (
                  <List
                    onClick={onClickListItem}
                    id={board._id}
                    key={board._id}
                  >
                    <BoardNumber>{index + 1}</BoardNumber>
                    <BoardTitle>{board.title}</BoardTitle>
                    <BoardWriter>{board.writer}</BoardWriter>
                    <BoardCreatedAt>
                      {board?.createdAt?.slice(0, 10)}
                    </BoardCreatedAt>
                  </List>
                ))}
          </>
        </ListBox>
        <Footer>
          <BoxForLayout></BoxForLayout>
          <Pagination count={count} refetch={refetch} />
          <RegisterButton onClick={onClickCreate}>
            게시물 등록하기
          </RegisterButton>
        </Footer>
      </Wrapper>
    </>
  );
};

export default BoardListUI;
