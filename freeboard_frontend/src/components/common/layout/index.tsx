import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import SideCartItemList from "../../units/cart/sideCart";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      {router.asPath === "/signIn" ? (
        <div style={{ background: "#f4f4f4" }}>{children}</div>
      ) : (
        <>
          <Header />
          {router.asPath === "/signUp" || <Navigation />}
          <div>{children}</div>
          <Footer />
          <StickyNavigation>
            <CartTitle></CartTitle>
            <SideCartItemList />
          </StickyNavigation>
        </>
      )}
    </>
  );
};

export default Layout;

export const StickyNavigation = styled.div`
  position: fixed;
  top: 0;
  right: 10px;
  width: 80px;
  margin-top: 200px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  overflow: hidden;
`;

export const CartTitle = styled.span`
  display: block;
  text-align: center;
  background-image: url("/11pnges.png");
  background-size: 363px 300px;
  background-position: -94px -70px;
  width: 53px;
  padding: 24px 0;
  border-bottom: 1px solid white;
`;
