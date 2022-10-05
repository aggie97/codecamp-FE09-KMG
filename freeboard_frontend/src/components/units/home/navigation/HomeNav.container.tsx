import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { isLoggedInUserState } from "../../../../commons/store";
import { IQuery } from "../../../../commons/types/generated/types";
import HomeNavigationUI from "./HomeNav.presenter";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

const HomeNavigation = () => {
  const router = useRouter();
  const [isLoggedInUser] = useRecoilState(isLoggedInUserState);
  console.log(isLoggedInUser ? "환영합니다." : "누구세요?");
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const menu = [
    { id: "boards", menu: "게시판" },
    { id: "firebase", menu: "파이어베이스" },
  ];

  const sign = [
    {
      id: "signIn",
      menu: isLoggedInUser
        ? `${data?.fetchUserLoggedIn.name ?? ""}님`
        : "로그인",
    },
    { id: "signUp", menu: isLoggedInUser ? "Point: 0" : "회원가입" },
  ];

  const onClickMenu = async (event: MouseEvent<HTMLLIElement>) => {
    await router.push(`/${String(event.currentTarget.id)}`);
  };

  return <HomeNavigationUI menu={menu} sign={sign} onClickMenu={onClickMenu} />;
};

export default HomeNavigation;
