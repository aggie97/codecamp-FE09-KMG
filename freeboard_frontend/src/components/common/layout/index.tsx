import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import { useRecoilState } from "recoil";
import { isLoginPageState } from "../../../commons/store";

const Layout = ({ children }) => {
  const [isLoginPage] = useRecoilState(isLoginPageState);
  return (
    <>
      {isLoginPage ? (
        <div style={{ background: "#f4f4f4" }}>{children}</div>
      ) : (
        <>
          <Header />
          <Navigation />
          <div>{children}</div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
