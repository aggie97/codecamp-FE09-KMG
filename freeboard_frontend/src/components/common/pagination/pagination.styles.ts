import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationUl = styled.ul`
  list-style: none;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const PaginationLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Label = styled.label`
  cursor: pointer;
  border: 1px solid skyblue;
  padding: 0.5em 0.75em;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;

  &:hover {
    background-color: skyblue;
    opacity: 0.3;
  }
  &:checked {
    background-color: skyblue;
    opacity: 0.4;
  }
`;
