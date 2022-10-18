import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage() {
  const [imgUrl, setImgUrl] = useState("");
  // 미리보기 URL용 스테이트
  const [file, setFile] = useState<File>();
  const [upLoadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async (): Promise<void> => {
    const resultFile = await upLoadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: "와타시_희현쿤",
            password: "1234",
            title: "오하요 밋나!",
            contents: "도죠 요로시쿠",
            images: [url],
          },
        },
      });

      console.log(result);
    } catch (error) {
      console.log(error.message);
    }

    // alert(result.data.createBoard.message);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]; // input type="file" 의 multiple 속성으로 여러 개 드래그 가능
    console.log(file);
    // try {
    //   const result = await upLoadFile({ variables: { file } });
    //   console.log(result.data?.uploadFile.url ?? "");
    //   setImgUrl(result.data?.uploadFile.url ?? "");
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }

    // 1. 임시 URL 생성 - (가짜 URL: 나의 브라우저에서만 접근 가능한 URL)
    // if (file == null) return;
    // const result = URL.createObjectURL(file);
    // setImgUrl(result);
    // console.log(result);

    // 2. 임시 URL 생성 - (진짜 URL: 다른 브라우저에서도 접근 가능한 URL)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      // 다 로드 될 때까지 기다려야함. -> 로드가 끝나면 이벤트가 들어옴.
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result);
        // 게시판에서 event.target.id 대신 event.currentTarget.id를 썼던 이유:
        // event.target은 태그를 기리키는 것만이 아님!!!
        setImgUrl(event.target?.result);
        setFile(file);
      }
    };

    // 1, 2번 둘 다 storage에는 바로 보내지 않는다.
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      {/* <img
        width={500}
        height={300}
        src={`https://storage.googleapis.com/${imgUrl}`}
      /> */}
      <img src={imgUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
