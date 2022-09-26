import Footer from "./footer";
import Banner from "./banner";
import Header from "./header";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navigation />
      <Banner />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
