import Blogs from "@/components/Blogs";
import SearchBar from "@/components/ui/SearchBar";
import { get_data } from "@/lib/get_data";
import { ContentType } from "contentful";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Blogs",
};
const Page = async () => {
  const blogs: ContentType[] = await get_data("articles");
  return (
    <div className="pb-28">
      <div className="w-full h-56 relative">
        <div className=" w-full h-full before:contents[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-black before:opacity-50">
          <Image
            src={"/rupixen-HhNe16wgVFg-unsplash.jpg"}
            alt="bg-blog"
            width={0}
            height={0}
            className="w-full h-full object-cover"
            unoptimized
          />
          <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
            <h1 className="text-white font-bold text-3xl">Blogs</h1>
          </div>
        </div>
      </div>
      <SearchBar />
      <Blogs />
    </div>
  );
};

export default Page;
