import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductRegisterUI from "./ProductRegister.presenter";
import { CREATE_USED_ITEM } from "./ProductRegister.queries";
import * as yup from "yup";
import { IFormDataProps } from "./ProductRegister.types";

const createItemSchema = yup.object({
  name: yup.string().required("상품명은 필수 입력사항 입니다."),
  remarks: yup.string().required("간단한 소개는 필수 입력사항 입니다."),
  contents: yup.string().required("상세 설명은 필수 입력사항 입니다."),
  price: yup.number().required("가격은 필수 입력사항 입니다."),
});

const ProductRegister = () => {
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormDataProps>({
    resolver: yupResolver(createItemSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormDataProps) => {
    console.log(formData);
    try {
      const result = await createUseditem({
        variables: { createUseditemInput: { ...formData } },
      });

      await router.push(`/market/${result.data?.createUseditem._id ?? ""}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <ProductRegisterUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      isValid={isValid}
    />
  );
};

export default ProductRegister;
