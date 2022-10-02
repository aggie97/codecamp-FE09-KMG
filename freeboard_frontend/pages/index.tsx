import Banner from "../src/components/common/layout/banner";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

// const MY_11ST_API_KEY = "2b25e80987bcd209bca5ed6a64832e7f";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const result = await axios.get(
        "https://dog.ceo/api/breeds/image/random/12"
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
      <IamgeWrapper style={{ margin: "0 auto", width: "1240px" }}>
        {data.map((dog, i) => (
          <ImgBox key={i}>
            <Img width={300} height={300} src={dog} />
          </ImgBox>
        ))}
      </IamgeWrapper>
    </>
  );
};

export default Home;

const IamgeWrapper = styled.div`
  width: 1240px;

  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const ImgBox = styled.div`
  flex: 1 1 310px;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.5);
  }
`;
