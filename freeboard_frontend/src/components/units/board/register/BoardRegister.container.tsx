import BoardRegisterUI from "./BoardRegister.presenter";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import CREATE_BOARD, { UPDATE_BOARD } from "./BoardRegister.queries";

import {
  IBoardRegisterProps,
  IEventTarget,
  IInput,
  ObjectIndexable,
} from "./BoardRegister.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

const BoardRegister = ({ isEdit, data }: IBoardRegisterProps) => {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [isEmpty, setIsEmpty] = useState(false);
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

  const submitForm = async (event: React.SyntheticEvent): Promise<void> => {
    event.preventDefault();
    const target = event.target as typeof event.target & IEventTarget;

    const elements = Object.values(target).slice(0, 8);
    const emptyInputExist = elements.some((input) => input.value === "");

    if (emptyInputExist) {
      alert("empty space exists");
      elements.forEach((ele) => {
        const inputId: string = ele.id;
        if ((input as ObjectIndexable)[inputId] === "") {
          ele.style.border = "1px solid red";
          setIsEmpty(true);
        } else {
          ele.style.border = "1px solid #ddd";
        }
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
              // images: input.images,
            },
          },
        });
        alert("게시물이 등록되었습니다.");
        await router.push(`/boards/${String(result?.data?.createBoard._id)}`);
      } catch (error: Error) {
        alert(error.message);
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
      console.log("try end", result);
      alert("게시물이 수정되었습니다.");
      await router.push(`/boards/${String(result?.data?.updateBoard._id)}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const targetEle = event.target.id;
    const changedContent = event.target.value;
    setInput({ ...input, [targetEle]: changedContent });
    event.target.style.border = "1px solid #dddddd";
  };

  return (
    <BoardRegisterUI
      onChangeInput={onChangeInput}
      submitForm={submitForm}
      editForm={editForm}
      isEmpty={isEmpty}
      isEdit={isEdit}
      data={data}
    />
  );
};

export default BoardRegister;
