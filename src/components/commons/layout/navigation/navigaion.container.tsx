import { useRouter } from "next/router";
import LayoutNavigationUI from "./navigation.presenter";
import { MouseEvent } from "react";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };
  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
