import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

interface IUseMoveToPageReturn {
  visitePage: string;
  onClickMoveToPage: (path: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitePage, setVisitePage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitePage(path); // 로그인페이지에서는 set하지 않도록 조건 추가
    void router.push(path);
  };

  return {
    visitePage,
    onClickMoveToPage,
  };
};
