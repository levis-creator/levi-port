import { get_data } from "@/lib/get_data";
import { BlogData } from "@/lib/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import "./article.css";
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
  function formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
  function convertISOToDateString(isoDate: string): string {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    // Months are zero based
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
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
