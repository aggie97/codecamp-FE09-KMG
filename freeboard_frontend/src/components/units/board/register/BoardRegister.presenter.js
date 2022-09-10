import {
  Wrapper,
  InputBox,
  TextareaBox,
  AddressBox,
  PictureBox,
  MainSettingBox,
  SubmitBox,
} from "./BoardRegister.styles";

import styled from "@emotion/styled";

const BoardRegisterUI = ({
  onChangeInput,
  submitForm,
  editForm,
  isEmpty,
  isEdit,
  data,
}) => {
  console.log("forDefault:", data?.fetchBoard);
  return (
    <Wrapper onSubmit={isEdit ? editForm : submitForm}>
      <h1>게시물 {isEdit ? "수정" : "등록"}</h1>
      <div>
        <InputBox>
          <span>작성자</span>
          <Input
            id="author"
            type="text"
            placeholder="이름을 적어주세요."
            isEmpty={isEmpty}
            onChange={onChangeInput}
            defaultValue={data?.fetchBoard.writer}
          />
        </InputBox>
        <InputBox>
          <span>비밀번호</span>
          <Input
            id="pw"
            isEmpty={isEmpty}
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangeInput}
          />
        </InputBox>
      </div>
      <InputBox>
        <span>제목</span>
        <Input
          id="title"
          isEmpty={isEmpty}
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeInput}
          defaultValue={data?.fetchBoard.title}
        />
      </InputBox>
      <TextareaBox>
        <span>내용</span>
        <TextArea
          id="contents"
          placeholder="내용을 작성해주세요."
          isEmpty={isEmpty}
          onChange={onChangeInput}
          defaultValue={data?.fetchBoard.contents}
        />
      </TextareaBox>
      <AddressBox>
        <span>주소</span>
        <div>
          <Input
            id="zipCode"
            type="text"
            placeholder="07250"
            isEmpty={isEmpty}
            onChange={onChangeInput}
            defaultValue={data?.fetchBoard.boardAddress.zipcode}
          />
          <a href="#">우편번호 검색</a>
        </div>

        <Input
          id="address"
          type="text"
          placeholder="주소를 입력해주세요."
          isEmpty={isEmpty}
          onChange={onChangeInput}
          defaultValue={data?.fetchBoard.boardAddress.address}
        />
        <div></div>
        <Input
          id="addressDetail"
          type="text"
          placeholder="상세 주소를 입력해주세요."
          isEmpty={isEmpty}
          onChange={onChangeInput}
          defaultValue={data?.fetchBoard.boardAddress.addressDetail}
        />
      </AddressBox>
      <InputBox>
        <span>유튜브</span>
        <Input
          id="youtubeLink"
          type="text"
          placeholder="링크를 적어주세요."
          onChange={onChangeInput}
          isEmpty={isEmpty}
          defaultValue={data?.fetchBoard.youtubeUrl}
        />
      </InputBox>
      <PictureBox>
        <span>사진 첨부</span>
        <div>
          <img src="/image 3.png" />
          <img src="/image 3.png" />
          <img src="/image 3.png" />
        </div>
      </PictureBox>
      <MainSettingBox>
        <p>메인 설정</p>
        <div>
          <div>
            <input name="option" type="radio" />
            <label>유튜브</label>
          </div>
          <div>
            <input name="option" type="radio" />
            <label>사진</label>
          </div>
        </div>
        <div></div>
      </MainSettingBox>
      <SubmitBox>
        <button>{isEdit ? "수정" : "등록"}</button>
      </SubmitBox>
    </Wrapper>
  );
};

export default BoardRegisterUI;

const Input = styled.input`
  outline: none;

  &::placeholder {
    ${(props) => (props.isEmpty ? "color: red; " : null)}
  }
`;

const TextArea = styled(Input.withComponent("textarea"))`
  background: #fff;
  height: 480px;
  padding: 14px;
  border: 1px solid #bdbdbd;
  resize: none;
`;
