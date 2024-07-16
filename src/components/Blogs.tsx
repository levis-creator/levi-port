"use client";
import { get_data } from "@/lib/get_data";
import { ContentType } from "contentful";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogSkeleton from "./ui/BlogSkeleton";

const Blogs = () => {
  const [blogs, setBlogs] = useState<ContentType[]>([]);
  const loadItems = [0, 1, 2, 3, 4, 5];
  useEffect(() => {
    get_data("articles").then((res) => setBlogs(res));
  }, []);
  const blogCards = blogs.map((blog) => (
    <BlogCard key={blog.sys.id} data={blog.fields as any} id={blog.sys.id} />
  ));

  return (
    <div className="px-8 py-8 md:px-8 lg:px-28 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {blogs.length === 0 ? <BlogLoad loadItems={loadItems} /> : blogCards}
    </div>
  );
};
const BlogLoad = ({ loadItems }: { loadItems: any[] }) => {
  return (
    <>
      {loadItems.map((item, i) => (
        <BlogSkeleton key={i} />
      ))}
    </>
  );
};

export default Blogs;
