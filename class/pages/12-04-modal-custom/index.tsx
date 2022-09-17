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
  const [isSuccess, setIsSuccess] = useState(false);
  const success = () => {
    setOpen(true);
    setIsSuccess(true);
  };
  const error = () => {
    setOpen(true);
    setIsSuccess(false);
  };
  return (
    <>
      <Button onClick={success}>성공</Button>
      <Button onClick={error}>실패</Button>
      <Modal
        title="modal title"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        bodyStyle={{ height: "500px" }}
        style={{ fontSize: "50px" }}
      >
        <p style={{ fontSize: "100px" }}>{isSuccess ? `success!` : "fail!"}</p>
        비밀번호: <input type="password" />
      </Modal>
    </>
  );
};

export default App;
