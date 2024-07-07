import { convertISOToDateString } from "@/lib/date_converters";
import { get_data } from "@/lib/get_data";
import { ContentType } from "contentful";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs: ContentType[] = await get_data("articles");
  const blogsEntries: MetadataRoute.Sitemap = blogs.map((data) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/blogs/${data.sys.id}`,
    lastModified: convertISOToDateString(data.sys.updatedAt),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      priority: 1.0,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/blogs`,
      priority: 0.9,
    },
    ...blogsEntries,
  ];
}
