import { NextResponse } from "next/server";

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

    // TODO: Insert into Neon Postgres when DATABASE_URL is configured
    // For now, log the application
    console.log("New application:", JSON.stringify({
      type: body.type,
      name: body.name,
      email: body.email,
      investment_tier: body.investment_tier,
      builder_tier: body.builder_tier,
      start_timeline: body.start_timeline,
      video_url: body.video_url,
      portfolio_url: body.portfolio_url,
      ab_variant: body.ab_variant,
      submitted_at: new Date().toISOString(),
    }));

    // TODO: Send notification email via Resend when RESEND_API_KEY is configured

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
