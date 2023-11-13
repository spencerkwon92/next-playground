import axios from "axios";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function loadPostAPI(lastId?: number) {
  return axios.get(`/posts?lastId=${lastId || 0}`).then((res) => res.data);
}
