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

export default function ImageUploadPage() {
  const [imgUrl, setImgUrl] = useState("");
  const [upLoadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // input type="file" 의 multiple 속성으로 여러 개 드래그 가능
    console.log(file);
    try {
      const result = await upLoadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url ?? "");
      setImgUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />
      <img
        width={500}
        height={300}
        src={`https://storage.googleapis.com/${imgUrl}`}
      />
    </>
  );
}
