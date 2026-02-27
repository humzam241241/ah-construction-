import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Log submission (in production, send to email/CRM)
    console.log("Contact form submission:", data);

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // TODO: Integrate with CRM (HubSpot, Salesforce, etc.)

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
