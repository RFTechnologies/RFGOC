import { NextResponse } from "next/server";
import { ContactInquiry } from "@/types";

export async function POST(request: Request) {
  try {
    const body: ContactInquiry = await request.json();

    // Basic Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: "Missing required fields (name, email, message)." },
        { status: 400 }
      );
    }

    // In a real production deployment, message would be dispatched via Resend, SendGrid, or CRM webhook.
    console.log("[API Route /api/contact] Received inquiry:", {
      interestedIn: body.interestedIn,
      name: body.name,
      email: body.email,
      companyName: body.companyName || "N/A",
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully received and routed to division lead.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[API Route /api/contact] Error processing submission:", error);
    return NextResponse.json(
      { message: "Internal server error processing contact inquiry." },
      { status: 500 }
    );
  }
}
