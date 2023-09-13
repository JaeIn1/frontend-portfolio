import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MyPagePage from "../../src/components/units/mypage/mypage.container";

export default function MyPages(): JSX.Element {
  useAuth();
  return <MyPagePage />;
}
