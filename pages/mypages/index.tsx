import { useRecoilState } from "recoil";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MyPagePage from "../../src/components/units/mypage/list/mypage.container";
import { visitedPageState } from "../../src/commons/stores";

export default function MyPages(): JSX.Element {
  const [, setVisitePage] = useRecoilState(visitedPageState);
  setVisitePage("mypages");
  useAuth();
  return <MyPagePage isMyPage={true} />;
}
