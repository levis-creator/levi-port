"use client";
import { get_data } from "@/lib/get_data";
import { ContentType } from "contentful";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState<ContentType[]>([]);
  useEffect(() => {
    get_data("articles").then((res) => setBlogs(res));
  }, []);
  return (
    <div className="px-8 py-8 md:px-8 lg:px-28 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.sys.id}
          data={blog.fields as any}
          id={blog.sys.id}
        />
      ))}
    </div>
  );
};

export default Blogs;
