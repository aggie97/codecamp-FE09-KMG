import Button from "../../../../common/button";
import {
  Form,
  NewCommentWrapper,
  TextArea,
  Title,
} from "./ProductComment.styles";

const ProductNewCommentUI = (props) => {
  return (
    <NewCommentWrapper>
      <Title>질문하기</Title>
      <Form onSubmit={props.handleSubmit(props.onSubmit)}>
        <TextArea
          placeholder="문의할 내용을 적어주세요."
          {...props.register("contents")}
        />
        <Button>질문하기</Button>
      </Form>
    </NewCommentWrapper>
  );
};

export default ProductNewCommentUI;
