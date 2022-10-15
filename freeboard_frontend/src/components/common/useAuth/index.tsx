import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const useAuth = () => {
  const router = useRouter();
  const [token] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (!token) {
      Modal.warning({ content: "로그인을 먼저 해주세요!" });
      void router.push("/");
    }
  }, []);
};

export default useAuth;
