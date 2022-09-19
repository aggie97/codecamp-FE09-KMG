import { Modal } from "antd";
import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import AntdModal from "../../../common/antdModal";
import MyModal from "../../../common/modal";
import {
  CreateCommentStarBox,
  Star,
  StarPath,
  CreateCommentInputField,
  CreateCommentTextarea,
  CreateCommentFooter,
  CreateCommentTextCounter,
  CreateCommentSubmitButton,
  CommentListUl,
  CommentListLi,
  CommentListProfileImg,
  CommentListMainContentBox,
  CommentListButtonBox,
  CommentListMainContentHeader,
  CommentListCreatedAt,
  CommentListWriter,
  CommentListEditButton,
  CommentListMainContentBody,
  CommentListDeleteButton,
  DivideLine,
  CreateCommentWriter,
  CreateCommentPw,
  CreateCommentUserInfoBox,
  EditCommentReturnButton,
} from "./BoardCommentList.styles";

interface IBoardCommentListUI {
  data?: Pick<IQuery, "fetchBoardComments">;
  textCount: number;
  isOpen: boolean;
  isOpenDeleteModal: boolean;
  idForEdit: string;
  onUnfoldEditModal: (
    evnet: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLImageElement>
  ) => void;

  onUpdateComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onDeleteComment: (event: MouseEvent<HTMLImageElement>) => void;

  onChangeEditComment: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onClickComment: (event: any) => void;
}

const BoardCommentListUI = ({
  data,
  textCount,
  isOpen,
  isOpenDeleteModal,
  idForEdit,
  onUnfoldEditModal,
  onUpdateComment,
  onDeleteComment,
  onChangeEditComment,
  onClickComment,
}: IBoardCommentListUI) => {
  return (
    <>
      <CommentListUl id="submittedComments">
        {data?.fetchBoardComments.map((comment) => {
          return (
            <>
              {isOpen && idForEdit === comment._id ? (
                <CommentListLi key={comment._id}>
                  <CommentListMainContentBox style={{ padding: "0" }}>
                    <CreateCommentUserInfoBox>
                      <CreateCommentWriter
                        defaultValue={String(comment.writer)}
                        disabled
                      />
                      <CreateCommentPw
                        type="password"
                        onChange={onChangeEditComment}
                        placeholder="비밀번호를 입력해주세요."
                      />
                      <CreateCommentStarBox style={{ padding: "0" }}>
                        {/* 별이 있어요 여기,,, */}

                        <Star
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <StarPath
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#bdbdbd"
                          />
                        </Star>
                        <Star
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <StarPath
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#bdbdbd"
                          />
                        </Star>
                        <Star
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <StarPath
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#bdbdbd"
                          />
                        </Star>
                        <Star
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <StarPath
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#bdbdbd"
                          />
                        </Star>
                        <Star
                          width="20"
                          height="19"
                          viewBox="0 0 20 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <StarPath
                            d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                            fill="#bdbdbd"
                          />
                        </Star>
                      </CreateCommentStarBox>
                    </CreateCommentUserInfoBox>
                    <CreateCommentInputField>
                      <CreateCommentTextarea
                        onChange={onChangeEditComment}
                        defaultValue={comment.contents}
                      ></CreateCommentTextarea>
                      <CreateCommentFooter>
                        <CreateCommentTextCounter>
                          {textCount}/100
                        </CreateCommentTextCounter>
                        <div style={{ display: "flex" }}>
                          <CreateCommentSubmitButton
                            id={comment._id}
                            onClick={onUpdateComment}
                          >
                            수정하기
                          </CreateCommentSubmitButton>
                          <EditCommentReturnButton
                            onClick={onUnfoldEditModal}
                            style={{ backgroundColor: "red" }}
                          >
                            돌아가기
                          </EditCommentReturnButton>
                        </div>
                      </CreateCommentFooter>
                    </CreateCommentInputField>
                  </CommentListMainContentBox>
                </CommentListLi>
              ) : (
                <>
                  <CommentListLi
                    id={comment._id}
                    onClick={onClickComment}
                    key={comment._id}
                  >
                    <CommentListProfileImg
                      width="40px"
                      height="40px"
                      id="profile_img"
                      src="/profileImgComment.png"
                    />
                    <CommentListMainContentBox>
                      <CommentListMainContentHeader>
                        <CommentListWriter>{comment.writer}</CommentListWriter>
                        <CreateCommentStarBox>
                          {/* 별이 있어요 여기,,, */}

                          <Star
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <StarPath
                              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                              fill="#bdbdbd"
                            />
                          </Star>
                          <Star
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <StarPath
                              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                              fill="#bdbdbd"
                            />
                          </Star>
                          <Star
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <StarPath
                              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                              fill="#bdbdbd"
                            />
                          </Star>
                          <Star
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <StarPath
                              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                              fill="#bdbdbd"
                            />
                          </Star>
                          <Star
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <StarPath
                              d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                              fill="#bdbdbd"
                            />
                          </Star>
                        </CreateCommentStarBox>
                      </CommentListMainContentHeader>
                      <CommentListMainContentBody>
                        {comment.contents}
                      </CommentListMainContentBody>
                      <CommentListCreatedAt>
                        {comment.createdAt.slice(0, 16).split("-").join(".")}
                      </CommentListCreatedAt>
                    </CommentListMainContentBox>
                    <CommentListButtonBox>
                      <CommentListEditButton
                        id={comment._id}
                        className={String(comment.contents.length)}
                        onClick={onUnfoldEditModal}
                        width="18px"
                        height="18px"
                        src="/edit.png"
                      />
                      <CommentListDeleteButton
                        id={comment._id}
                        onClick={onDeleteComment}
                        width="14px"
                        height="14px"
                        src="/delete.png"
                      />
                      {isOpenDeleteModal && (
                        <Modal>
                          <input
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                          />
                        </Modal>
                      )}
                    </CommentListButtonBox>
                  </CommentListLi>
                  <DivideLine key={`${comment._id}divLine`} />
                </>
              )}
            </>
          );
        })}
      </CommentListUl>
    </>
  );
};

export default BoardCommentListUI;
