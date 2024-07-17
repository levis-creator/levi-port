import contentful_cleaner from "@/lib/contentful_cleaner";
import { get_data } from "@/lib/get_data";
import { BlogData } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect } from "react";

interface UseFetchParams {
  blogs: any[];
  setblogs: Dispatch<SetStateAction<BlogData[]>> | any;
}
const useFetch = ({ setblogs, blogs }: UseFetchParams) => {
  useEffect(() => {
    if (blogs.length == 0) {
      get_data("articles").then((res) => {
        const cleanData = contentful_cleaner(res);
        setblogs(cleanData);
      });
    }
  }, [setblogs, blogs]);
};
export default useFetch;
