import { useRouter } from "next/router";
import HomeNavigationUI from "./HomeNav.presenter";

const HomeNavigation = () => {
  const router = useRouter();
  const idMenu = [
    { id: "/boards", menu: "게시판" },
    { id: "/firebase", menu: "파이어베이스" },
  ];

  const onClickMenu = async (event) => {
    await router.push(`/${String(event.currentTarget.id)}`);
  };
  return <HomeNavigationUI idMenu={idMenu} onClickMenu={onClickMenu} />;
};

export default HomeNavigation;
