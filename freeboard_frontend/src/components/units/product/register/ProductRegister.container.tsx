import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  ICreateUseditemInput,
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductRegisterUI from "./ProductRegister.presenter";
import { CREATE_USED_ITEM } from "./ProductRegister.queries";
import * as yup from "yup";

const createItemSchema = yup.object({
  name: yup.string().required(),
  remarks: yup.string().required(),
  contents: yup.string().required(),
  price: yup.number().required(),
  tags: yup.array(),
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
  } = useForm({
    resolver: yupResolver(createItemSchema),
  });

  const onSubmit = (formData: ICreateUseditemInput) => async () => {
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
