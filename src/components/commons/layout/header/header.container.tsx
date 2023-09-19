import { useRouter } from "next/router";
import LayoutHeaderUI from "./header.presenter";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import { useState } from "react";

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
export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  console.log(data);

  const onClickLogin = (): void => {
    void router.push("/login");
  };

  const onClickSignUp = (): void => {
    void router.push("/signup");
  };

  const ToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onClickLogout = (): void => {
    alert("로그아웃 되었습니다.");
    localStorage.removeItem("accessToken");
    location.reload();
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
