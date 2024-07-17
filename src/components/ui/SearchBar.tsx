"use client";
import useGeneralContext from "@/hooks/useGeneralContext";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { blogs, setblogs } = useGeneralContext();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const search = new Fuse(blogs, { keys: ["title", "description"] });
    const result = search.search(searchQuery);
    const cleanData: any[] = [];
    result.forEach((items) =>
      cleanData.push({
        ...items.item,
      })
    );
    console.log(cleanData);
    setblogs(cleanData);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (!e.target.value) {
      setblogs([]);
    }
  };
  return (
    <form className="max-w-md mx-auto mt-10">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="text-gray-400" />
        </div>
        <input
          value={searchQuery}
          onChange={handleChange}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Blogs.."
          required
        />
        <button
          onClick={handleSearch}
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
