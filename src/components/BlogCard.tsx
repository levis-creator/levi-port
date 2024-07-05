import { BlogData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ data }: { data?: BlogData }) => {
  const image = "https://" + data?.cardImage.fields.file.url;
  image;
  const truncate = (input: string) =>
    input?.length > 100 ? `${input.substring(0, 90)}...` : input;
  return (
    <div className="">
      <div className="h-52">
        <Image
          src={image}
          alt={data?.title || ""}
          width={0}
          height={0}
          className="h-full w-full object-cover"
          unoptimized
        />
      </div>
      <div className=" ">
        <h3 className="font-bold my-1">{data?.title}</h3>
        <p className="inline">{truncate(data?.description)}</p>
        <Link href={"#"} className="text-primary-blue">
          Read article
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
