import { get_data } from "@/lib/get_data";
import { BlogData } from "@/lib/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import "./article.css";

import type { Metadata } from "next";
import { ContentType } from "contentful";
import { convertISOToDateString, formatDate } from "@/lib/date_converters";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const data: BlogData = await get_data(`articles/${id}`);
  const image = "https://" + data?.cardImage.fields.file.url;
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      images: {
        url: image,
      },
    },
  };
}

export async function generateStaticParams() {
  const blogs: ContentType[] = await get_data("articles");
  return blogs.map((blog) => ({
    id: blog.sys.id,
  }));
}
const Page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const data: BlogData = await get_data(`articles/${id}`);
  const image = "https://" + data?.cardImage.fields.file.url;

  return (
    <main className="px-5 sm:px-10 py-8 min-h-screen lg:px-44 xl:px-80 2xl:px-96">
      <h1 className="font-bold text-3xl py-5 ">{data?.title}</h1>
      <p>
        Published on{" "}
        <time dateTime={convertISOToDateString(data?.createdAt)}>
          {formatDate(data?.createdAt)}
        </time>
      </p>
      <Image
        src={image}
        alt={data?.title}
        height={0}
        width={0}
        className="w-full h-80 object-cover"
        unoptimized
      />
      <article className="space-y-3 mt-12 article">
        {documentToReactComponents(data?.blog)}
      </article>
    </main>
  );
};

export default Page;
