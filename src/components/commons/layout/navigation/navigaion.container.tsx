import { useRouter } from "next/router";
import LayoutNavigationUI from "./navigation.presenter";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../../commons/stores";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();
  const [, setVisitePage] = useRecoilState(visitedPageState);

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    setVisitePage(event.currentTarget.id);
    void router.push(event.currentTarget.id);
  };
  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
