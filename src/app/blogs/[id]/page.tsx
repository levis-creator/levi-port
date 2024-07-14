import { get_data } from "@/lib/get_data";
import { BlogData } from "@/lib/types";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";

import Image from "next/image";
import "./article.css";

import { convertISOToDateString, formatDate } from "@/lib/date_converters";
import { keyword_converter } from "@/lib/keywords_converter";
import { MARKS } from "@contentful/rich-text-types";
import { ContentType } from "contentful";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;
  const data: BlogData = await get_data(`articles/${id}`);
  const image = "https://" + data?.cardImage.fields.file.url;
  const keyword_con = keyword_converter(data.keywords as string);
  return {
    title: data.title,
    description: data.description,
    keywords: keyword_con || [""],
    openGraph: {
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: data.title,
        },
        {
          url: image,
          width: 400,
          height: 400,
          alt: data.title,
        },
      ],
      title: data.title,
      description: data.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
    },
    alternates: {
      canonical: `/blogs/${id}`,
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
  hljs.registerLanguage("js", javascript);
  const options: Options = {
    preserveWhitespace: true,
    renderMark: {
      [MARKS.CODE]: (text) => <code className="js">{text}</code>,
    },
  };

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
        {documentToReactComponents(data?.blog, options)}
      </article>
    </main>
  );
};

export default Page;
