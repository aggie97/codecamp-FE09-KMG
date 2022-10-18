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
  // const [imgUrl, setImgUrl] = useState("");
  const [upLoadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const onClickSubmit = async (): Promise<void> => {
    // 1. Promise.all 안 썼을 때
    // const resultFile0 = await upLoadFile({ variables: { file: files[0] } });
    // const resultFile1 = await upLoadFile({ variables: { file: files[1] } });
    // const resultFile2 = await upLoadFile({ variables: { file: files[2] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2];

    // 2. Promise.all
    // const results = await Promise.all([
    //   upLoadFile({ variables: { file: files[0] } }),
    //   upLoadFile({ variables: { file: files[1] } }),
    //   upLoadFile({ variables: { file: files[2] } }),
    // ]);
    // const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : ""));

    // 3. Promise.all (Refactoring)
    const results = await Promise.all(
      files.map((el) => el && upLoadFile({ variables: { file: el } }))
    );
    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : ""));

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: "와타시_희현쿤",
            password: "1234",
            title: "오하요 밋나!",
            contents: "도죠 요로시쿠",
            images: resultUrls,
          },
        },
      });

      console.log(result);
    } catch (error) {
      console.log(error.message);
    }

    // alert(result.data.createBoard.message);
  };
  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
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
      // setImageUrls(result);
      // console.log(result);

      // 2. 임시 URL 생성 - (진짜 URL: 다른 브라우저에서도 접근 가능한 URL)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        // 다 로드 될 때까지 기다려야함. -> 로드가 끝나면 이벤트가 들어옴.
        if (typeof event.target?.result === "string") {
          console.log(event.target?.result);
          // setIamgeUrls(event.target?.result);
          // setFiles(file)

          const tempUrls = [...imageUrls]; // 원본 손상 방지
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };

      // 1, 2번 둘 다 storage에는 바로 보내지 않는다.
    };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      {/* <img
        width={500}
        height={300}
        src={`https://storage.googleapis.com/${imgUrl}`}
      /> */}
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
