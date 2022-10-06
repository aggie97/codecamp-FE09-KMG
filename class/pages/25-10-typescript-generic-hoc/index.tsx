import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
const withAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
    const router = useRouter();
    useEffect(() => {
      if (!localStorage.getItem("token")) {
        alert("로그인을 먼저 해주세요.");
        void router.push("/23-08-login-check-hoc");
      }
    }, []);
    return <Component {...props} />;
  };

export default withAuth;
