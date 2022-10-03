import Banner from "../src/components/common/layout/banner";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import ContentsPage from "../src/components/units/home/contents/Contents.container";

// const MY_11ST_API_KEY = "2b25e80987bcd209bca5ed6a64832e7f";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const result = await axios.get(
        "https://dog.ceo/api/breeds/image/random/30"
      );
      setData(result.data.message);
    };

    void getDogs();
  }, []);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const result = await axios.get(
  //       `http://openapi.11st.co.kr/openapi/OpenApiService.tmall?key=${MY_11ST_API_KEY}&apiCode=ProductSearch&keyword=phone`
  //     );
  //     console.log(result);
  //   };
  //   void getProducts();
  // }, []);

  return (
    <>
      <Banner />
      <ImageWrapper style={{ margin: "0 auto", width: "1240px" }}>
        {data.map((dog, i) => (
          <ProductCard key={i}>
            <div style={{ overflow: "hidden" }}>
              <ProductImg width={220} height={220} src={dog} />
            </div>
            <ProductInfo>제품 설명</ProductInfo>
          </ProductCard>
        ))}
      </ImageWrapper>
      <ContentsPage />
    </>
  );
};

export default Home;

const ImageWrapper = styled.div`
  width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;
`;

export const ProductCard = styled.li`
  position: relative;
  width: 220px;
  aspect-ratio: 1 / 1.5;
  overflow: hidden;
  position: relative;
  list-style: none;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 0.5em;
  transition: all 0.3s ease;
  border: 1px solid #dedede;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 2px #ddd;
  }
`;

export const ProductImg = styled.img`
  aspect-ratio: 1 / 1;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductInfo = styled.p`
  padding: 1em;
`;
