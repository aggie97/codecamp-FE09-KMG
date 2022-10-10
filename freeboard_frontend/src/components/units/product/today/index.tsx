import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { todayILookedProducts } from "../../../../commons/store";
import TodayILookedProduct from "./todayProdutItem";

const TodayILookedProducts = () => {
  const [todayItem] = useRecoilState(todayILookedProducts);

  return (
    <TodayProductsWrapper>
      <p style={{ fontSize: "1.5rem", fontWeight: "600", margin: "0" }}>
        오늘 본 물건들을 모아봤어요!
      </p>
      <div style={{ display: "flex", width: "100%", gap: "20px" }}>
        {todayItem?.map((product, i) => (
          <TodayILookedProduct key={i} product={product} />
        ))}
      </div>
    </TodayProductsWrapper>
  );
};

export default TodayILookedProducts;

const TodayProductsWrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
`;
