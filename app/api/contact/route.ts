import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind erforderlich." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Webschmiede Kontaktformular" <${process.env.GMAIL_USER}>`,
      to: "henrik.hensen4@gmail.com",
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #d9d4d4; padding: 40px; border-radius: 12px;">
          <div style="border-bottom: 2px solid #690028; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #ffffff; font-size: 22px; margin: 0;">📬 Neue Anfrage — Webschmiede</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #aeb4b8; width: 110px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #ffffff; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #aeb4b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">E-Mail</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222;">
                <a href="mailto:${email}" style="color: #D0002A; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #aeb4b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Telefon</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #222;">
                <a href="tel:${phone}" style="color: #D0002A; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 16px 0; color: #aeb4b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Nachricht</td>
              <td style="padding: 16px 0; color: #d9d4d4; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 16px 20px; background: #1a1a1a; border-radius: 8px; border-left: 3px solid #690028;">
            <p style="margin: 0; color: #666; font-size: 12px;">
              Einfach auf diese E-Mail antworten — geht direkt an <strong style="color: #aeb4b8;">${email}</strong>
            </p>
          </div>

          <p style="margin-top: 24px; color: #444; font-size: 11px; text-align: center;">
            Webschmiede · Halle (Saale)
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("E-Mail Fehler:", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden. Bitte direkt an henrik.hensen4@gmail.com schreiben." },
      { status: 500 }
    );
  }
}
