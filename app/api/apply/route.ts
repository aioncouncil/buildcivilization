import { NextResponse } from "next/server";
import { insertApplication } from "@/lib/db";
import { sendApplicationNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body._hp) {
      return NextResponse.json({ success: true }); // silent rejection
    }

    // Basic validation
    if (!body.name || !body.email || !body.type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!["operator", "builder"].includes(body.type)) {
      return NextResponse.json({ error: "Invalid application type" }, { status: 400 });
    }

    // Build responses object from form fields
    const responses: Record<string, string> = {};
    for (const [key, value] of Object.entries(body)) {
      if (!["name", "email", "type", "_hp", "investment_tier", "builder_tier", "start_timeline", "video_url", "portfolio_url", "ab_variant"].includes(key) && typeof value === "string") {
        responses[key] = value;
      }
    }

    // Insert into database
    let dbResult = null;
    if (process.env.DATABASE_URL) {
      try {
        dbResult = await insertApplication({
          type: body.type,
          name: body.name,
          email: body.email,
          responses,
          video_url: body.video_url,
          portfolio_url: body.portfolio_url,
          investment_tier: body.investment_tier,
          builder_tier: body.builder_tier,
          start_timeline: body.start_timeline,
          ab_variant: body.ab_variant,
        });
        console.log("[Apply] Saved to database:", dbResult);
      } catch (dbErr) {
        console.error("[Apply] Database error:", dbErr);
        // Continue even if DB fails — don't lose the application
      }
    } else {
      console.log("[Apply] DATABASE_URL not set, logging application:", JSON.stringify({
        type: body.type,
        name: body.name,
        email: body.email,
        submitted_at: new Date().toISOString(),
      }));
    }

    // Send notification email
    if (process.env.RESEND_API_KEY) {
      try {
        await sendApplicationNotification({
          type: body.type,
          name: body.name,
          email: body.email,
          responses,
          video_url: body.video_url,
          portfolio_url: body.portfolio_url,
          investment_tier: body.investment_tier,
          builder_tier: body.builder_tier,
        });
      } catch (emailErr) {
        console.error("[Apply] Email error:", emailErr);
        // Continue even if email fails
      }
    }

    return NextResponse.json({ success: true, id: dbResult?.id });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
