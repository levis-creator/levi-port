import { client } from "@/lib/contentful_config";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export const GET = async (request: Request) => {
  const entries = await client.getEntry("lVZQnrVFmAgOqdJPdqF9J");
  const data = JSON.stringify(entries);
  return NextResponse.json(data);
};
