import styled from "@emotion/styled";
import { IMyPurChaseStylesProps } from "./myPurchase.types";

export const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RightHeaderLeft = styled.div`
  & span {
    margin: 10px;
  }
  & span:hover {
    color: black;
    font-weight: bolder;
    text-decoration: #ffd600 3px underline;
    cursor: pointer;
  }
`;

export const RightHeaderBoughtSpan = styled.span`
  font-weight: ${(props: IMyPurChaseStylesProps) =>
    props.isMyPoint ? "bold" : ""};
  color: ${(props: IMyPurChaseStylesProps) => (props.isMyPoint ? "black" : "")};
  text-decoration: ${(props: IMyPurChaseStylesProps) =>
    props.isMyPoint ? "3px underline #ffd600" : ""};
`;

export const RightHeaderSoldSpan = styled.span`
  font-weight: ${(props: IMyPurChaseStylesProps) =>
    props.isMySold ? "bold" : ""};
  color: ${(props: IMyPurChaseStylesProps) => (props.isMySold ? "black" : "")};
  text-decoration: ${(props: IMyPurChaseStylesProps) =>
    props.isMySold ? "3px underline #ffd600" : ""};
`;
