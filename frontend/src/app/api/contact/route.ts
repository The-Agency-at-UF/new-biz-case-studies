import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, organization, email, role, type } = await req.json();

    if (!name || !organization || !email || !role || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "theagency@jou.ufl.edu",
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: `
New contact form submission:

Name: ${name}
Organization: ${organization}
Email: ${email}
Role: ${role}
Organization Type: ${type}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send contact form" },
      { status: 500 }
    );
  }
}