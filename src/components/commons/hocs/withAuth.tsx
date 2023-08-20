import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line react/display-name
export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능합니다.");
      void router.push("/login");
    }
  }, []);
  return <Component {...props} />;
};
