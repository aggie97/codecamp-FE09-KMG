import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuth = () => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Modal.error({ content: "로그인을 먼저 해주세요!" });
      void router.push("/signIn");
    }
  }, []);
};

export default useAuth;
