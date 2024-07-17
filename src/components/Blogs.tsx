"use client";
import useFetch from "@/hooks/useFetch";
import useGeneralContext from "@/hooks/useGeneralContext";
import BlogCard from "./BlogCard";
import BlogSkeleton from "./ui/BlogSkeleton";

const Blogs = () => {
  const loadItems = [0, 1, 2, 3, 4, 5];
  // setting context data
  const { setblogs, blogs } = useGeneralContext();
  // this getting client side data
  useFetch({ setblogs, blogs });
  // data feeding into components
  const blogCards = blogs?.map((blog) => (
    <BlogCard key={blog.id} data={blog} id={blog.id} />
  ));

  return (
    <div className="px-8 py-8 md:px-8 lg:px-28 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {blogs?.length === 0 ? <BlogLoad loadItems={loadItems} /> : blogCards}
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
