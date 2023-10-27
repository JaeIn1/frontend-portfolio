import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b173d6;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and ((max-width: 600px)) {
    width: 100%;
  }

  @media screen and ((min-width: 780px) and (max-width: 1200px)) {
  }
`;
export const MenuItem = styled.div`
  color: white;
  margin: 0px 60px;
  cursor: pointer;

  @media screen and ((max-width: 780px)) {
  }

  @media screen and ((min-width: 780px) and (max-width: 1200px)) {
  }
`;
