import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const SideCart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("useditems") ?? "[]");
    setItems(savedItems);
  }, []);
  console.log("sideCart:", items);
  return (
    <div>
      {items.map((item) => (
        <SideCartItemWrapper key={item._id}>
          <img width={50} height={50} src={item.images?.[0]} />
        </SideCartItemWrapper>
      ))}
    </div>
  );
};

export default SideCart;

const SideCartItemWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid deepskyblue;
`;
