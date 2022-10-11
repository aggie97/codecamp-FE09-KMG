import { Divider } from "antd";
import { useRecoilState } from "recoil";
import { todayILookedProducts } from "../src/commons/store";
import Banner from "../src/components/common/layout/banner";
import ProductList from "../src/components/units/product/list/ProductList.container";
import TodayILookedProducts from "../src/components/units/product/today";

// const MY_11ST_API_KEY = "2b25e80987bcd209bca5ed6a64832e7f";

const Home = () => {
  const [todayItem] = useRecoilState(todayILookedProducts);
  console.log("Q", todayItem);
  return (
    <>
      <Banner />
      {todayItem.length ? <TodayILookedProducts /> : null}
      <Divider />
      <ProductList />
    </>
  );
};

export default Home;
