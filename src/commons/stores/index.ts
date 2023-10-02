import { atom, selector } from "recoil";
import { getAccessToken } from "../../components/commons/libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: true,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/boards",
});

export const restoreAccessTokenLoadble = selector({
  key: "restoreAccessTokenLoadble",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const todayWatchItem = atom<string[]>({
  key: "todayWatchItem",
  default: [],
});
