import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, product, quantity, message } = body;

    if (!name || !email || !phone || !product || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const productLabels: Record<string, string> = {
      rmc: "Ready Mix Concrete",
      blocks: "Concrete Solid Blocks",
      aggregates: "Aggregates",
      multiple: "Multiple Products",
    };

    // If no Gmail credentials, log and return success (form still works visually)
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.log("=== New Enquiry (no email credentials configured) ===");
      console.log({ name, company, email, phone, product, quantity, message });
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "niyakrishindustries@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const productName = productLabels[product] || product;

    await transporter.sendMail({
      from: '"NIYA Website" <niyakrishindustries@gmail.com>',
      to: "niyakrishindustries@gmail.com",
      replyTo: email,
      subject: `New Enquiry: ${productName} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1c1917; padding: 24px; text-align: center;">
            <h1 style="color: #f59e0b; margin: 0; font-size: 28px; letter-spacing: 4px;">NIYA</h1>
            <p style="color: #a8a29e; margin: 4px 0 0; font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">
              New Website Enquiry
            </p>
          </div>

          <div style="background: #fafaf9; padding: 32px; border: 1px solid #e7e5e4;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4; width: 35%;">
                  <strong style="color: #57534e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <span style="color: #1c1917; font-size: 15px;">${name}</span>
                </td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4; width: 35%;">
                  <strong style="color: #57534e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <span style="color: #1c1917; font-size: 15px;">${company}</span>
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <a href="mailto:${email}" style="color: #d97706;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <a href="tel:${phone}" style="color: #d97706;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Product</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <span style="background: #fef3c7; color: #92400e; padding: 2px 10px; border-radius: 4px; font-size: 13px; font-weight: bold;">
                    ${productName}
                  </span>
                </td>
              </tr>
              ${quantity ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <strong style="color: #57534e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Quantity</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e7e5e4;">
                  <span style="color: #1c1917;">${quantity}</span>
                </td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px;">
              <strong style="color: #57534e; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 10px;">
                Project Details
              </strong>
              <div style="background: white; border: 1px solid #e7e5e4; border-radius: 4px; padding: 16px; color: #44403c; font-size: 14px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="margin-top: 24px; padding: 16px; background: #fff7ed; border: 1px solid #fed7aa; border-radius: 4px;">
              <p style="margin: 0; color: #92400e; font-size: 13px;">
                💬 Reply directly to this email to respond to ${name}.
              </p>
            </div>
          </div>

          <div style="background: #1c1917; padding: 16px; text-align: center;">
            <p style="color: #57534e; font-size: 11px; margin: 0; letter-spacing: 1px; text-transform: uppercase;">
              NIYAKRISH INDUSTRIES PVT LTD. · niyakrishindustries@gmail.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please call us directly." },
      { status: 500 }
    );
  }
}
