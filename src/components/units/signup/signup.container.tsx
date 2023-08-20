import { ChangeEvent, useState } from "react";
import LoginPageUI from "./signup.presenter";
import { useRouter } from "next/router";
import { SIGNUP_USER } from "./signup.queries";
import { useMutation } from "@apollo/client";

export default function SignUpPage(): JSX.Element {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [idError, setIdError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [signupUser] = useMutation(SIGNUP_USER);

  const ToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };
  const ToggleModalMove = (): void => {
    setIsOpen((prev) => !prev);
    void router.push("/");
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);

    if (email !== "") {
      setIdError("");
    }
    if (
      event.currentTarget.value !== "" &&
      password !== "" &&
      name !== "" &&
      checkPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);

    if (email !== "") {
      setNameError("");
    }
    if (
      event.currentTarget.value !== "" &&
      password !== "" &&
      name !== "" &&
      checkPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);

    if (email !== "") {
      setPasswordError("");
    }
    if (
      event.currentTarget.value !== "" &&
      password !== "" &&
      name !== "" &&
      checkPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeCheckPassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setCheckPassword(event.currentTarget.value);

    if (email !== "") {
      setCheckPasswordError("");
    }
    if (
      event.currentTarget.value !== "" &&
      password !== "" &&
      name !== "" &&
      checkPassword !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSignUpBtn = (): void => {
    if (email === "") {
      setIdError("이메일을 입력해주세요.");
    }
    if (name === "") {
      setNameError("이름을 입력해주세요.");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (checkPassword === "") {
      setCheckPasswordError("비밀번호를 확인하세요.");
    }
    if (password !== checkPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    try {
      if (
        email !== "" &&
        name !== "" &&
        password !== "" &&
        checkPassword !== ""
      ) {
        const result = signupUser({
          variables: {
            createUserInput: {
              email,
              name,
              password,
            },
          },
        });
        console.log(result);
        ToggleModal();
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <>
      <LoginPageUI
        onChangeEmail={onChangeEmail}
        onChangeName={onChangeName}
        onChangePassword={onChangePassword}
        onChangeCheckPassword={onChangeCheckPassword}
        onClickSignUpBtn={onClickSignUpBtn}
        ToggleModal={ToggleModal}
        ToggleModalMove={ToggleModalMove}
        idError={idError}
        nameError={nameError}
        passwordError={passwordError}
        checkPasswordError={checkPasswordError}
        isActive={isActive}
        isOpen={isOpen}
      />
    </>
  );
}
