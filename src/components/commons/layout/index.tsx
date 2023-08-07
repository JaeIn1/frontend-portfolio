import styled from "@emotion/styled";
import LayoutHeader from "./header/header.container";
import LayoutBanner from "./banner/banner.container";
import LayoutNavigation from "./navigation/navigaion.container";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </>
  );
}
