import { MetadataRoute } from "next";
import React from "react";

export default async function robot(): Promise<MetadataRoute.Robots> {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
