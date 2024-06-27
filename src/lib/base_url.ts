import axios from "axios";

export const base_url = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
