import styled from "@emotion/styled";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../../../../commons/store";
import { IUseditem } from "../../../../commons/types/generated/types";

const SideCartItemList = () => {
  const [items, setItems] = useRecoilState(cartItemsState);
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("useditems") ?? "[]");
    console.log(savedItems);
    setItems(savedItems);
  }, []);

  return (
    <div>
      {items.map((item: IUseditem) => (
        <SideCartItemWrapper key={item._id}>
          <img
            width={50}
            height={50}
            src={`https://storage.googleapis.com/${item.images?.[0] ?? ""}`}
          />
        </SideCartItemWrapper>
      ))}
    </div>
  );
};

export default SideCartItemList;

const SideCartItemWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid deepskyblue;
`;
