"use client";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { ReactNode, useEffect } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <>{children}</>;
};

export default Provider;
