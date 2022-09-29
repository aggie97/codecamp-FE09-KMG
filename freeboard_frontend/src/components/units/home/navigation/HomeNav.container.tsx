import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isLoginPageState } from "../../../../commons/store";
import HomeNavigationUI from "./HomeNav.presenter";

const HomeNavigation = () => {
  const router = useRouter();
  const [isLoginPage, setIsLoginPage] = useRecoilState(isLoginPageState);
  const menu = [
    { id: "boards", menu: "게시판" },
    { id: "firebase", menu: "파이어베이스" },
  ];

  const sign = [
    { id: "signIn", menu: "로그인" },
    { id: "signUp", menu: "회원가입" },
  ];

  const onClickMenu = async (event) => {
    if (event.currentTarget.id === "signIn") {
      setIsLoginPage(true);
    }
    await router.push(`/${String(event.currentTarget.id)}`);
  };

  return <HomeNavigationUI menu={menu} sign={sign} onClickMenu={onClickMenu} />;
};

export default HomeNavigation;
