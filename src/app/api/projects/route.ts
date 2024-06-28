import { client } from "@/lib/contentful_config";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const entries = await client.getEntries({ content_type: "" });
  return NextResponse.json(entries.items);
};
