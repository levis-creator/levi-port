// import BlogCard from "@/components/BlogCard";
// import { get_data } from "@/lib/get_data";
// import { ContentType } from "contentful";
// import Image from "next/image";

// const Page = async () => {
//   const blogs: ContentType[] = await get_data("articles");
//   return (
//     <div className="pb-28">
//       <div className="w-full h-56 relative">
//         <div className=" w-full h-full before:contents[''] before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-black before:opacity-50">
//           <Image
//             src={"/rupixen-HhNe16wgVFg-unsplash.jpg"}
//             alt="bg-blog"
//             width={0}
//             height={0}
//             className="w-full h-full object-cover"
//             unoptimized
//           />
//           <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center">
//             <h1 className="text-white font-bold text-3xl">Blogs</h1>
//           </div>
//         </div>
//       </div>
//       <div className="px-8 py-8 md:px-8 lg:px-28 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//         {blogs.map((blog) => (
//           <BlogCard
//             key={blog.sys.id}
//             data={blog.fields as any}
//             id={blog.sys.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;
