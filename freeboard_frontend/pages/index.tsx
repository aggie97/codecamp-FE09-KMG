import Banner from "../src/components/common/layout/banner";
import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../src/commons/types/generated/types";
import Button from "../src/components/common/button";

// const MY_11ST_API_KEY = "2b25e80987bcd209bca5ed6a64832e7f";

const FETCH_USED_ITEMS = gql`
  query {
    fetchUseditems {
      _id
      name
      contents
      price
      images
      pickedCount
    }
  }
`;

type IItems = Array<
  Pick<
    IUseditem,
    "_id" | "contents" | "images" | "name" | "price" | "pickedCount"
  >
>;

const Home = () => {
  const { data: itemsData } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const onClickCart = (item: IUseditem) => () => {
    console.log(item);
    const items: IItems = JSON.parse(localStorage.getItem("useditems") ?? "[]");
    const temp = items.filter((el) => el._id === item._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }
    items.push(item);
    localStorage.setItem("useditems", JSON.stringify(items));
  };

  return (
    <>
      <Banner />
      <ProductWrapper style={{ margin: "0 auto", width: "1240px" }}>
        {itemsData?.fetchUseditems.map((item, i) => (
          <ProductCard key={i}>
            <div style={{ overflow: "hidden" }}>
              <ProductImg src={item.images?.[0]} />
              <ProductInfo>{item.contents}</ProductInfo>
              <Button onClick={onClickCart(item)}>카트에 담기</Button>
            </div>
          </ProductCard>
        ))}
      </ProductWrapper>
    </>
  );
};

export default Home;

const ProductWrapper = styled.div`
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
  height: 330px;
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
  width: 220px;
  height: 220px;
  transition: all 0.3s ease;
`;

export const ProductInfo = styled.p`
  padding: 1em;
`;
