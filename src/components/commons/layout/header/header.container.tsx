import { useRouter } from "next/router";
import LayoutHeaderUI from "./header.presenter";
import { gql, useMutation, useQuery } from "@apollo/client";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      email
      picture
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
export default function LayoutHeader(): JSX.Element {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [logout] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogin = (): void => {
    void router.push("/login");
  };

  const onClickSignUp = (): void => {
    void router.push("/signup");
  };

  const ToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onClickLogout = async (): Promise<void> => {
    alert("로그아웃 되었습니다.");
    const result = await logout();
    console.log(result);
    setAccessToken("");

    void router.push("/boards");
    // location.reload();
  };
  return (
    <>
      <LayoutHeaderUI
        onClickLogin={onClickLogin}
        onClickSignUp={onClickSignUp}
        ToggleModal={ToggleModal}
        onClickLogout={onClickLogout}
        data={data}
        isOpen={isOpen}
      />
    </>
  );
}
