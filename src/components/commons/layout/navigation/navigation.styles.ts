import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b173d6;
`;

export const ItemWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;

  @media screen and ((max-width: 780px)) {
    width: 80%;
  }
`;
export const MenuItem = styled.div`
  color: white;
  margin: 0px 60px;
  cursor: pointer;

  @media screen and ((max-width: 780px)) {
    margin: 0px;
    font-size: 12px;
  }

  @media screen and ((min-width: 780px) and (max-width: 1200px)) {
    margin: 0px;
  }
`;
