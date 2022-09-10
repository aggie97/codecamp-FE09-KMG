import {
  CreateCommentStarBox,
  Star,
  StarPath,
  CreateCommentTitle,
  CreateCommentTitleImg,
  CreateCommentTitleText,
  CreateCommentWrapper,
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
} from "./BoardCommentInDetail.styles";

const BoardCommentUI = ({
  data,
  isOpen,
  idForEdit,
  onUnfoldEditModal,
  onSubmitComment,
  onUpdateComment,
  onDeleteComment,
  onChangeComment,
  onChangeEditComment,
}) => {
  return (
    <>
      <CreateCommentWrapper>
        <CreateCommentTitle>
          <CreateCommentTitleImg
            width="20px"
            height="20px"
            src="/commentIcon.png"
          />
          <CreateCommentTitleText>댓글</CreateCommentTitleText>
        </CreateCommentTitle>
        <CreateCommentUserInfoBox>
          <CreateCommentWriter
            onChange={onChangeComment}
            type="text"
            placeholder="작성자"
          />
          <CreateCommentPw
            onChange={onChangeComment}
            type="password"
            placeholder="비밀번호"
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
            onChange={onChangeComment}
            maxLength="100"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제할 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          ></CreateCommentTextarea>
          <CreateCommentFooter id="textCounter_SubmitButton_Box">
            <CreateCommentTextCounter>0/100</CreateCommentTextCounter>
            <CreateCommentSubmitButton onClick={onSubmitComment}>
              등록하기
            </CreateCommentSubmitButton>
          </CreateCommentFooter>
        </CreateCommentInputField>
      </CreateCommentWrapper>
      <CommentListUl id="submittedComments">
        {data.fetchBoardComments.map((comment) => {
          return (
            <>
              {isOpen && idForEdit === comment._id ? (
                <div>
                  <CommentListLi key={comment._id}>
                    <CommentListMainContentBox style={{ padding: "0" }}>
                      <CreateCommentUserInfoBox>
                        <CreateCommentWriter
                          defaultValue={comment.writer}
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
                            0/100
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
                </div>
              ) : (
                <>
                  <CommentListLi key={comment._id}>
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
                        {comment.createdAt.slice(0, 10).split("-").join(".")}
                      </CommentListCreatedAt>
                    </CommentListMainContentBox>
                    <CommentListButtonBox>
                      <CommentListEditButton
                        id={comment._id}
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
                    </CommentListButtonBox>
                  </CommentListLi>
                  <DivideLine />
                </>
              )}
            </>
          );
        })}
      </CommentListUl>
    </>
  );
};

export default BoardCommentUI;
