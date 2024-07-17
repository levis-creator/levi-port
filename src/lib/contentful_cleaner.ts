import { ContentType } from "contentful";
import { BlogData } from "./types";

const contentful_cleaner = (data: ContentType[]) => {
  const cleanData: any[] = [];
  data.forEach((item) => {
    const data = item.fields;
    cleanData.push({
      id: item.sys.id,
      ...data,
    });
  });
  return cleanData;
};
export default contentful_cleaner;
