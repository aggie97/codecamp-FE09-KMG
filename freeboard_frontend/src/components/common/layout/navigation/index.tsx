import { useRouter } from "next/router";
import HomeNavigation from "../../../units/home/navigation/HomeNav.container";

const Navigation = () => {
  const router = useRouter();

  // const onClickMenu = async (event) => {
  //   await router.push(`/${String(event.currentTarget.id)}`);
  // };

  return <HomeNavigation />;
};
export default Navigation;
