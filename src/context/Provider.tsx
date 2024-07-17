"use client";
import { BlogData } from "@/lib/types";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { createContext, ReactNode, useEffect, useState } from "react";

type ContextValue = {
  blogs: BlogData[];
  setblogs: any;
};

export const GeneralContext = createContext<ContextValue | null>(null);
const Provider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  const [blogs, setblogs] = useState<BlogData[]>([]);
  const values = { blogs, setblogs };
  return (
    <>
      <GeneralContext.Provider value={values}>
        {children}
      </GeneralContext.Provider>
    </>
  );
};

export default Provider;
