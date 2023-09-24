import { useRecoilState } from "recoil";
import BoardList from "../../src/components/units/board/list/BoardList.container";
import { visitedPageState } from "../../src/commons/stores";

export default function BoardsPage(): JSX.Element {
  const [, setVisitePage] = useRecoilState(visitedPageState);
  setVisitePage("boards");
  return <BoardList />;
}
