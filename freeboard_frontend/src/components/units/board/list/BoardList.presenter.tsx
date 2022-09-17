import { ChangeEvent, MouseEvent } from "react";
import { IBoard, IQuery } from "../../../../commons/types/generated/types";
import {
  Wrapper,
  Header,
  Banner,
  BestBoards,
  BestBoardLayout,
  BestBoard,
  Footer,
  PageBox,
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
  PrevPage,
  NextPage,
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
  pages: number;
}

const BoardListUI = ({
  boardsArray,
  pages,
  totalBoards,
  bestBoards,
  onClickCreate,
  onClickListItem,
  onClickBestItem,
  onChangeSearch,
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
          <PageBox>
            <PrevPage>👈</PrevPage>
            <div>
              {/* {new Array(pages).map((value, i) => {
                console.log("hi:", value, i, pages);
                return <span key={i}>{i + 1}</span>;
              })} */}
              1 2 3
            </div>
            <NextPage>👉</NextPage>
          </PageBox>
          <RegisterButton onClick={onClickCreate}>
            게시물 등록하기
          </RegisterButton>
        </Footer>
      </Wrapper>
    </>
  );
};

export default BoardListUI;
