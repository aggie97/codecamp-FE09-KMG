import styled from "@emotion/styled";

export const ProductWrapper = styled.div`
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
  max-height: 50px;
  padding: 1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
