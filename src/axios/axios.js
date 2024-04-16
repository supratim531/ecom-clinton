import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const privateAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios.create({
  baseURL: BASE_URL,
});
