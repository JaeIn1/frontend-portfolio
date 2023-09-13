import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}

export const Wrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export const Page = styled.span`
  margin: 10px;
  cursor: pointer;

  color: ${(props: IPageProps) =>
    props.isActive ?? false ? "#b173d8" : "black"};
  font-weight: ${(props: IPageProps) =>
    props.isActive ?? false ? "bold" : "normal"};
`;
