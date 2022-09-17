import { useRouter } from "next/router";
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";

const HIDDEN_HEADERS = ["/12-02-lib-star"];

type ILayoutProps = { children: JSX.Element };

const Layout = (props: ILayoutProps) => {
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Menu />
      <div style={{ display: "flex" }}>
        <div style={{ background: "orange" }}>sidebar 입니다.</div>
        <div>{props.children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
