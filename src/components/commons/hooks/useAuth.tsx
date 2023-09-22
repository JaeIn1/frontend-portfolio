import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

// eslint-disable-next-line react/display-name
export const useAuth = (): void => {
  const [accessToken] = useRecoilState(accessTokenState);
  console.log(accessToken);
  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/login");
    }
  }, []);
};
