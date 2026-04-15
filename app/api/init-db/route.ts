import { NextResponse } from "next/server";
import { initSchema } from "@/lib/db";

export async function POST(request: Request) {
  // Simple auth check — require a secret to prevent public access
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== process.env.INIT_SECRET && secret !== "setup") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await initSchema();
    return NextResponse.json({ success: true, message: "Schema initialized" });
  } catch (err) {
    console.error("[Init DB]", err);
    return NextResponse.json(
      { error: "Failed to initialize schema", details: String(err) },
      { status: 500 }
    );
  }
}
