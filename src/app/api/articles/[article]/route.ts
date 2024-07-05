import { client } from "@/lib/contentful_config";
import { ContentType, Entry } from "contentful";
import { NextResponse } from "next/server";
export const GET = async (
  request: Request,
  route: { params: { article: string } }
) => {
  const {
    params: { article },
  } = route;

  try {
    const entries: Entry = await client.getEntry(article);
    return NextResponse.json({
      ...entries.fields,
      createdAt: entries.sys.updatedAt,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch article" });
  }
};
