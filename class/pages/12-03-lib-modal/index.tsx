import { Modal } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const Button = styled.button`
  width: 300px;
  height: 100px;
  font-size: 30px;
`;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const success = () => {
    Modal.success({ content: "게시물이 등록되었습니다." });
    setOpen(true);
  };
  const error = () => {
    Modal.error({ content: "비밀번호가 일치하지 않습니다." });
  };
  return (
    <>
      <Button onClick={success}>성공</Button>
      <Button onClick={error}>실패</Button>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      ></Modal>
    </>
  );
};

export default App;
