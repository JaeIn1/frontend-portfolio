import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  margin-top: 10px;
  text-align: center;
  position: absolute;
  bottom: 20px;
  right: calc(50%);

  @media screen and (min-width: 768px) and (max-width: 1200px) {
    position: absolute;
    bottom: -40px;
    right: calc(50%);
  }

  @media screen and (min-width: 390px) and (max-width: 768px) {
    position: absolute;
    bottom: -40px;
    right: calc(40%);
  }
  @media screen and (max-width: 390px) {
    position: absolute;
    bottom: -40px;
    right: calc(30%);
  }
`;

export const Page = styled.span`
  margin: 10px;
  cursor: pointer;

  color: ${(props: IPageProps) =>
    props.isActive ?? false ? "#b173d8" : "black"};
  font-weight: ${(props: IPageProps) =>
    props.isActive ?? false ? "bold" : "normal"};
`;
