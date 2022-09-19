import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  const onClickMenu = async (event) => {
    await router.push(`/${String(event.currentTarget.id)}`);
  };

  return <NavigationUI onClickMenu={onClickMenu} />;
};
export default Navigation;
