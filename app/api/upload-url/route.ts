import { NextResponse } from "next/server";
import { generateUploadUrl } from "@/lib/r2";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ext = searchParams.get("ext") || "mp4";
  const type = searchParams.get("type") || "general";

  // Validate extension
  const allowed = ["mp4", "webm", "mov", "quicktime"];
  if (!allowed.includes(ext)) {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  const result = generateUploadUrl(ext, type);
  return NextResponse.json(result);
}
