import { atom } from "recoil";

export const postState = atom({
  key: "postState",
  default: {
    mainPosts: [],

    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
  },
});
