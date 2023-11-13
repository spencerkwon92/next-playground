import { atom } from "recoil";
import { useMutation, useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { AxiosError } from "axios";

import { logInAPI, loadMyInfoAPI } from "../apis/user";
import User from "../interface/user";

export const postState = atom({
  key: "postState",
  default: {
    mainPosts: [],

    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
  },
});

type TypeForUserState = {
  me: User | null;
  userInfo: User | null;
};

export const userState = atom<TypeForUserState>({
  key: "userState",
  default: {
    me: null,
    userInfo: null,
  },
});
