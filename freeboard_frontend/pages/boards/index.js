import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Wrapper,
  InputBox,
  TextareaBox,
  AddressBox,
  PictureBox,
  MainSettingBox,
  SubmitBox,
} from "../../styles/formStyles";

import styled from "@emotion/styled";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        _id
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const [setMutation] = useMutation(CREATE_BOARD);
  const [isEmpty, setIsEmpty] = useState(false);
  const [input, setInput] = useState({
    author: "",
    pw: "",
    title: "",
    contents: "",
    zipCode: "",
    address: "",
    addressDetail: "",
    youtubeLink: "",
    images: "",
  });

  const submitForm = async (event) => {
    event.preventDefault();
    const elements = [...event.target].slice(0, 8);

    const emptyInputExist = elements.some((input) => input.value === "");
    if (emptyInputExist) {
      console.log("empty space exists");
      elements.forEach((ele) => {
        const inputId = ele.id;
        if (input[inputId] === "") {
          ele.style.border = "1px solid red";
          setIsEmpty(true);
        } else {
          ele.style.border = "1px solid #ddd";
        }
      });
    } else {
      console.log("empty space doesn't exist");

      try {
        const result = await setMutation({
          variables: {
            createBoardInput: {
              writer: input.author,
              password: input.pw,
              title: input.title,
              contents: input.contents,
              youtubeUrl: input.youtubeLink,
              boardAddress: {
                zipcode: input.zipCode,
                address: input.address,
                addressDetail: input.addressDetail,
              },
              images: input.images,
            },
          },
        });
        console.log("result: ", result);
        router.push("01-routed/" + result.data.createBoard._id);
        alert("게시물이 등록되었습니다.");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const onChangeInput = (event) => {
    const targetEle = event.target.id;
    const changedContent = event.target.value;
    setInput({ ...input, [targetEle]: changedContent });

    event.target.style.border = "1px solid #dddddd";
  };

  return (
    <Wrapper onSubmit={submitForm}>
      <h1>게시물 등록</h1>
      <div>
        <InputBox>
          <span>작성자</span>
          <Input
            id="author"
            type="text"
            placeholder="이름을 적어주세요."
            isEmpty={isEmpty}
            onChange={onChangeInput}
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
        />
      </InputBox>
      <TextareaBox>
        <span>내용</span>
        <TextArea
          id="contents"
          placeholder="내용을 작성해주세요."
          isEmpty={isEmpty}
          onChange={onChangeInput}
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
          />
          <a href="#">우편번호 검색</a>
        </div>

        <Input
          id="address"
          type="text"
          placeholder="주소를 입력해주세요."
          isEmpty={isEmpty}
          onChange={onChangeInput}
        />
        <div></div>
        <Input
          id="addressDetail"
          type="text"
          placeholder="상세 주소를 입력해주세요."
          isEmpty={isEmpty}
          onChange={onChangeInput}
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
        <button>등록하기</button>
      </SubmitBox>
    </Wrapper>
  );
}

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
