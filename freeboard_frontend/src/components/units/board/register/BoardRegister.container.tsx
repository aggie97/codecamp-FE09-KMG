import BoardRegisterUI from "./BoardRegister.presenter";
import React, { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import CREATE_BOARD, {
  UPDATE_BOARD,
  UPLOAD_FILE,
} from "./BoardRegister.queries";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";

import {
  IBoardRegisterProps,
  IInput,
  ObjectIndexable,
} from "./BoardRegister.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

const BoardRegister = ({ isEdit, data }: IBoardRegisterProps) => {
  const router = useRouter();

  const imageRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [isEmpty, setIsEmpty] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState<IInput>({
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

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (address: Address) => {
    setInput({ ...input, address: address.address, zipCode: address.zonecode });
    setIsOpen((prev) => !prev);
  };

  console.log(input);

  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { currentTarget } = event;
    const elements = Object.values(currentTarget)
      .filter((ele) => ele.type !== "button")
      .slice(0, 8);

    const emptyInputExist = elements.some((input) => input.value === "");
    if (emptyInputExist) {
      elements.forEach((ele) => {
        const inputId: string = ele.id;
        if ((input as ObjectIndexable)[inputId] === "") {
          ele.style.border = "1px solid red";
          setIsEmpty(true);
        } else {
          ele.style.border = "1px solid #ddd";
        }
      });
      Modal.warning({
        content: "빈칸을 채워주세요.",
      });
    } else {
      try {
        const result = await createBoard({
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
              images: [input.images],
            },
          },
        });
        Modal.success({
          content: `게시글이 등록되었습니다.`,
        });
        await router.push(`/boards/${String(result?.data?.createBoard._id)}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: `${error.message}`,
          });
      }
    }
  };

  const editForm = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
    try {
      const myVariables = {
        boardId: String(router.query.id),
        updateBoardInput: {},
        password: input.pw,
      };
      if (input.title)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          title: input.title,
        };
      if (input.contents)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          contents: input.contents,
        };
      if (input.youtubeLink)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          youtubeUrl: input.youtubeLink,
        };
      if (input.zipCode)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          boardAddress: { zipcode: input.zipCode },
        };

      if (input.address)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          boardAddress: { address: input.address },
        };
      if (input.addressDetail)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          boardAddress: { addressDetail: input.addressDetail },
        };
      if (input.images)
        myVariables.updateBoardInput = {
          ...myVariables.updateBoardInput,
          images: input.images,
        };

      const result = await updateBoard({
        variables: myVariables,
      });

      Modal.success({
        content: `게시글이 수정되었습니다.`,
      });
      await router.push(`/boards/${String(result?.data?.updateBoard._id)}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: `${error.message}`,
        });
    }
  };

  const onChangeInput = async (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.id === "images") {
      const file = event.target.files?.[0];
      try {
        const result = await uploadFile({
          variables: { file },
        });
        console.log(result.data?.uploadFile.url ?? "");
        setInput({ ...input, images: result?.data?.uploadFile?.url ?? "" });
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
    const changedContent = event.target.value;
    setInput({ ...input, [event.target.id]: changedContent });
    event.target.style.border = "1px solid #dddddd";
  };

  const onClickPicture = () => {
    imageRef.current?.click();
  };

  return (
    <>
      <BoardRegisterUI
        onCompleteAddressSearch={onCompleteAddressSearch}
        onClickAddressSearch={onClickAddressSearch}
        onClickPicture={onClickPicture}
        onChangeInput={onChangeInput}
        submitForm={submitForm}
        editForm={editForm}
        isOpen={isOpen}
        isEmpty={isEmpty}
        isEdit={isEdit}
        input={input}
        data={data}
        imageRef={imageRef}
      />
    </>
  );
};

export default BoardRegister;
