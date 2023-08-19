import { useRouter } from "next/router";
import LayoutHeaderUI from "./header.presenter";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onClickLogin = (): void => {
    void router.push("/login");
  };

  const onClickSignUp = (): void => {
    void router.push("/signup");
  };
  return (
    <LayoutHeaderUI onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} />
  );
}
