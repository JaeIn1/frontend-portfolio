import { useState } from "react";
import { useRouter } from "next/router";
import { SIGNUP_USER } from "./signup.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./signup.styles";
import { schema } from "./signup.validation";

interface IFormData {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
}

export default function SignUpPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [signupUser] = useMutation(SIGNUP_USER);

  const ToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };
  const ToggleModalMove = (): void => {
    setIsOpen((prev) => !prev);
    void router.push("/");
  };

  const onClickSignUpBtn = async (data: any): Promise<void> => {
    console.log(data);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    try {
      const result = await signupUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      setIsOpen((prev) => !prev);
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
  };

  return (
    <S.BackgroundWrapper>
      <S.Wrapper>
        {isOpen && (
          <S.SignUpModal open={true} onCancel={ToggleModal} footer={null}>
            <S.SignUpModalText>회원가입을 축하합니다!!</S.SignUpModalText>
            <S.SignUpModalBtn onClick={ToggleModalMove}>확인</S.SignUpModalBtn>
          </S.SignUpModal>
        )}
        <S.HeaderWrapper>
          <S.HeaderDiv>
            <img src="/images/layout/header/eggplant.png" />
            <span>회원가입</span>
          </S.HeaderDiv>
        </S.HeaderWrapper>
        <S.BodyWrapper>
          <form onSubmit={handleSubmit(onClickSignUpBtn)}>
            <S.BodyInputDid>
              <span>이메일</span>
              <S.SignupInput
                type="text"
                {...register("email")}
                placeholder="이메일을 입력해주새요"
              />
              <S.SignupError>{formState.errors.email?.message}</S.SignupError>
            </S.BodyInputDid>
            <S.BodyInputDid>
              <span>이름</span>
              <S.SignupInput
                type="text"
                {...register("name")}
                placeholder="이름을 입력해주새요"
              />
              <S.SignupError>{formState.errors.name?.message}</S.SignupError>
            </S.BodyInputDid>
            <S.BodyInputDid>
              <span>비밀번호</span>
              <S.SignupInput
                type="password"
                {...register("password")}
                placeholder="비밀번호를 입력해주새요"
              />
              <S.SignupError>
                {formState.errors.password?.message}
              </S.SignupError>
            </S.BodyInputDid>
            <S.BodyInputDid>
              <span>비밀번호확인</span>
              <S.SignupInput
                type="password"
                {...register("passwordCheck")}
                placeholder="비밀번호를 확인해주세요"
              />
              <S.SignupError>
                {formState.errors.passwordCheck?.message}
              </S.SignupError>
            </S.BodyInputDid>
            <S.LoginBtn isActive={formState.isValid}>회원가입하기</S.LoginBtn>
          </form>
        </S.BodyWrapper>
      </S.Wrapper>
    </S.BackgroundWrapper>
  );
}
