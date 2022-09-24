import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const AntdModal = () => {
  const options = {
    method: "GET",
    url: "https://datagram-products-v1.p.rapidapi.com/storeproduct/search/",
    params: { q: "coca" },
    headers: {
      "X-RapidAPI-Key": "d98caaf7demsh1a64590dffddd84p1e17efjsn20222d87a5e2",
      "X-RapidAPI-Host": "datagram-products-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const runTest = async () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    void runTest();
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default AntdModal;
