import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage() {
  const [imgUrl, setImgUrl] = useState("");
  // const [upLoadFile] = useMutation<
  //   Pick<IMutation, "uploadFile">,
  //   IMutationUploadFileArgs
  // >(UPLOAD_FILE);

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
    if (file == null) return;
    const result = URL.createObjectURL(file);
    setImgUrl(result);
    console.log(result);

    // 2. 임시 URL 생성 - (진짜 URL: 다른 브라우저에서도 접근 가능한 URL)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      // 다 로드 될 때까지 기다려야함. -> 로드가 끝나면 이벤트가 들어옴.
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result);
        setImgUrl(event.target?.result);
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
    </>
  );
}
