import { client } from "@/lib/contentful_config";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const GET = async (request: Request) => {
  try {
    const entries = await client.getEntries({ content_type: "skills" });
    return NextResponse.json(entries.items);
  } catch {
    return NextResponse.json({ error: "Failed to fetch skill" });
  }
};
