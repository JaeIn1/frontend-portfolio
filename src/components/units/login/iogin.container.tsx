import { ChangeEvent, useState } from "react";
import LoginPageUI from "./login.presenter";
import { useRouter } from "next/router";
import { LOGIN_USER } from "./login.queries";
import { useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, visitedPageState } from "../../../commons/stores";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [visitePage] = useRecoilState(visitedPageState);

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);

    if (email !== "") {
      setIdError("");
    }
    if (event.currentTarget.value !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);

    if (password !== "") {
      setPasswordError("");
    }
    if (email !== "" && event.currentTarget.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickLoginBtn = async (): Promise<void> => {
    if (email === "") {
      setIdError("이메일을 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (email !== "" && password !== "") {
      try {
        const result = await loginUser({
          variables: {
            email,
            password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        console.log(accessToken);

        if (accessToken === undefined) {
          alert("로그인에 실패 하였습니다. 다시 시도해주세요!");
          return;
        }
        setAccessToken(accessToken);
        alert("로그인에 성공했습니다!");

        void router.push(visitePage);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickMoveSignUp = (): void => {
    void router.push("/signup");
  };

  const onKeyUpLogin = (e: any): void => {
    if (e.key === "Enter") {
      void onClickLoginBtn();
    }
  };
  return (
    <>
      <LoginPageUI
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        idError={idError}
        passwordError={passwordError}
        onClickLoginBtn={onClickLoginBtn}
        isActive={isActive}
        onClickMoveSignUp={onClickMoveSignUp}
        onKeyUpLogin={onKeyUpLogin}
      />
    </>
  );
}
