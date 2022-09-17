import { Modal } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

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

  const handleComplete = (address: Address) => {
    console.log(address);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={success}>주소 검색</Button>

      {/* 모달 숨기기 ex) 이력서 (보안성이 낮은 것들) */}
      {/* <Modal
        title="modal title"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        bodyStyle={{ height: "500px" }}
        style={{ fontSize: "50px" }}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 삭제하기 ex) 신용카드 비밀번호 (보안성이 높은 것들) */}
      {open && (
        <Modal
          title="modal title"
          centered
          open={true}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
          bodyStyle={{ height: "500px" }}
          style={{ fontSize: "50px" }}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default App;
