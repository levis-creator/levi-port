import { client } from "@/lib/contentful_config";
import { NextResponse } from "next/server";
export const GET = async (request: Request) => {
  try {
    const entries = await client.getEntry("lVZQnrVFmAgOqdJPdqF9J");

    return NextResponse.json(entries.fields);
  } catch {
    return NextResponse.json({ error: "Failed to fetch skill" });
  }
};
