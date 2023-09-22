import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  fromPromise,
} from "@apollo/client"; // module 요즘
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../libraries/getAccessToken";

interface IApolloSettingProps {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const result = accessToken;
    setAccessToken(result ?? "");
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        // 해당 에러가 토큰만료 에러인지 체크하기
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2. refreshToken으로 accessToken 재발금 받기
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");

              // 3. 재발급 받은 accessToken으로 다시 조회하기
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 기존 Authorization이 있는 상태(만료된 토큰 존재)
                  Authorization: `Bearer ${newAccessToken ?? ""}`, // 토큰만 새걸로 수정하기
                },
              });
            })
            // 방금 수정한 쿼리 재요청하기
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  // prettier-ignore
  return (
    <ApolloProvider client={client}>
      {props.children}
    </ApolloProvider>
  )
}
