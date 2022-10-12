import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IMutationUploadFileArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import ProductRegisterUI from "./ProductRegister.presenter";
import {
  CREATE_USED_ITEM,
  UPDATE_USED_ITEM,
  UPLOAD_FILE,
} from "./ProductRegister.queries";
import * as yup from "yup";
import { IFormDataProps } from "./ProductRegister.types";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Address } from "react-daum-postcode";
import useAuth from "../../../common/useAuth";

const createItemSchema = yup.object({
  name: yup.string().required("상품명은 필수 입력사항 입니다."),
  remarks: yup.string().required("간단한 소개는 필수 입력사항 입니다."),
  contents: yup.string().required("상세 설명은 필수 입력사항 입니다."),
  price: yup.string().required("가격은 필수 입력사항 입니다."),
});

interface IEditProps {
  data: { fetchUseditem: IUseditem };
  isEdit: boolean;
}

const ProductRegister = ({ data, isEdit }: IEditProps) => {
  useAuth();

  const router = useRouter();
  const imageRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState(["", "", ""]);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    getValues,
    trigger,
  } = useForm<IFormDataProps>({
    resolver: yupResolver(createItemSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (isEdit) {
      delete data?.fetchUseditem.useditemAddress?.__typename;
      setValue("name", data?.fetchUseditem.name);
      setValue("contents", data?.fetchUseditem.contents);
      setValue("remarks", data?.fetchUseditem.remarks);
      setValue("price", data?.fetchUseditem.price);
      setValue("images", data?.fetchUseditem.images);
      setValue("useditemAddress", data?.fetchUseditem.useditemAddress);
      setValue("tags", data?.fetchUseditem.tags);
    }
  }, [data]);

  const onSubmit = async (formData: IFormDataProps) => {
    // const [, ...rest] = formData.tags?.split("#");
    // formData.tags = rest;
    formData.images = images;
    formData.price = parseInt(formData.price);
    console.log("!", formData);
    try {
      const result = await createUseditem({
        variables: { createUseditemInput: { ...formData } },
      });

      alert("등록 완료");
      await router.push(`/market/${result.data?.createUseditem._id ?? ""}`);

      // 상품 등록하고 홈으로 돌아가면 게시물 안 올라와있음.. (해결해야해)
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onEdit = async (formData: IFormDataProps) => {
    console.log("수정 뮤테이션");
    // const [, ...rest] = formData.tags?.split("#");
    // formData.tags = rest;
    formData.images = images;
    formData.price = parseInt(formData.price);

    console.log("!", formData);
    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: formData,
          useditemId: String(router.query.id),
        },
      });

      await router.push(`/market/${result.data?.updateUseditem._id ?? ""}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onChangeImageBox =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      console.log(file);
      const result = await uploadFile({
        variables: { file },
      });
      const imgUrl = result.data?.uploadFile.url;
      setImages((prev) => {
        prev[index] = imgUrl ?? "";
        const newState = [...prev];
        return newState;
      });
    };

  const onClickBox = () => imageRef.current?.click();

  const onClickSearchAddress = () => setIsOpen((prev) => !prev);

  const onCompleteAddressSearch = (address: Address) => {
    setValue("useditemAddress", {
      zipcode: address.zonecode,
      address: address.address,
    });
    setIsOpen((prev) => !prev);
  };

  const onChangeValue = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value); // 빈값일 경우 태그가 남기 때문에 초기화시켜주는 부분
    void trigger("contents");
  };

  return (
    <ProductRegisterUI
      onChangeValue={onChangeValue}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      onEdit={onEdit}
      errors={errors}
      isValid={isValid}
      onChangeImageBox={onChangeImageBox}
      onClickBox={onClickBox}
      imageRef={imageRef}
      images={images}
      onClickSearchAddress={onClickSearchAddress}
      onCompleteAddressSearch={onCompleteAddressSearch}
      getValues={getValues}
      setValue={setValue}
      isOpen={isOpen}
      isEdit={isEdit}
      data={data}
    />
  );
};

export default ProductRegister;
