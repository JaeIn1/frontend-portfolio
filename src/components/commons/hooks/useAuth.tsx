import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, visitedPageState } from "../../../commons/stores";
import { getAccessToken } from "../libraries/getAccessToken";

// eslint-disable-next-line react/display-name
export const useAuth = (): void => {
  const [accessToken] = useRecoilState(accessTokenState);
  const [visitedPage] = useRecoilState(visitedPageState);
  // const aaa = useRecoilValueLoadable(restoreAccessTokenLoadble);

  console.log(accessToken);
  const router = useRouter();
  useEffect(() => {
    // 안좋음 => app.tsx와 함께 2번의 요청이 들어감
    void getAccessToken().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/login");
      }
    });
    void router.push(visitedPage);
  }, []);

  /* useEffect(() => {
    // 좋음 => 함수를 공유하므로 app.tsx와 총 1번만 요청이 들어감
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다.");
        void router.push("/login");
      }
    });
    void router.push(visitedPage);
  }, []); */
};
