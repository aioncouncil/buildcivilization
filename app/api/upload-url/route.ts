import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ext = searchParams.get("ext") || "mp4";
  const type = searchParams.get("type") || "general";

  // Generate a unique key
  const id = crypto.randomUUID();
  const key = `applications/${type}/${id}.${ext}`;

  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucket = process.env.R2_BUCKET_NAME || "buildciv-applications";

  if (!accountId || !accessKeyId || !secretAccessKey) {
    // Return a mock URL for development
    return NextResponse.json({
      url: `https://httpbin.org/put`,
      publicUrl: `https://placeholder.buildcivilization.com/${key}`,
      key,
    });
  }

  // Generate presigned URL using S3-compatible API
  // In production, use @aws-sdk/client-s3 or @aws-sdk/s3-request-presigner
  const endpoint = `https://${accountId}.r2.cloudflarestorage.com`;
  const publicBase = process.env.PUBLIC_UPLOAD_BASE || endpoint;

  // For now, return the direct URL pattern
  // TODO: Implement proper presigned URL generation with @aws-sdk/s3-request-presigner
  return NextResponse.json({
    url: `${endpoint}/${bucket}/${key}`,
    publicUrl: `${publicBase}/${key}`,
    key,
  });
}
