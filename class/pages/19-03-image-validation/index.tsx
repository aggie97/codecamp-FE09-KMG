import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import checkFileValidation from "../../src/commons/libraries/validationFile";
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
  const imgRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState("");
  const [upLoadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // <input type="file" /> 의 multiple 속성으로 여러 개 드래그 가능
    console.log(file);

    if (!checkFileValidation(file)) return;

    try {
      const result = await upLoadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url ?? "");
      setImgUrl(result.data?.uploadFile.url ?? "");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    imgRef.current?.click();
  };

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "gray",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
        onClick={onClickImage}
      >
        +
      </div>
      <input
        type="file"
        style={{ display: "none" }}
        onChange={onChangeFile}
        ref={imgRef}
      />
      <img
        width={500}
        height={300}
        src={`https://storage.googleapis.com/${imgUrl}`}
      />
    </>
  );
}
