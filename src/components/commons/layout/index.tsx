import styled from "@emotion/styled";
import LayoutHeader from "./header/header.container";
import LayoutBanner from "./banner/banner.container";
import LayoutNavigation from "./navigation/navigaion.container";
import { useRouter } from "next/router";

const Body = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_LOGIN = ["/login", "/signup"];

export default function Layout(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isLogin = HIDDEN_LOGIN.includes(router.asPath);

  return (
    <>
      {!isLogin && <LayoutHeader />}
      {!isLogin && <LayoutBanner />}
      {!isLogin && <LayoutNavigation />}
      {isLogin ? (
        <LoginBody>{props.children}</LoginBody>
      ) : (
        <Body>{props.children}</Body>
      )}
    </>
  );
}
