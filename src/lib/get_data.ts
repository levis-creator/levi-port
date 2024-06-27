import { base_url } from "./base_url";

export const get_data = async (endpoint: string) => {
  const data = await base_url.get(`${endpoint}`);
  return data;
};
