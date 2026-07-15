import { NextResponse } from "next/server";

const DESTINATION_EMAIL = "nikhilbajantri86@gmail.com";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  website?: string;
  message?: string;
}

/**
 * Booking-form submissions. Delivery strategy:
 * 1. If RESEND_API_KEY is configured, send via Resend (preferred for
 *    production — set the key in the deployment environment).
 * 2. Otherwise fall back to FormSubmit.co's AJAX endpoint, which forwards to
 *    DESTINATION_EMAIL with no API key. NOTE: FormSubmit requires a one-time
 *    activation — their first submission emails an activation link to the
 *    destination inbox; submissions flow after it's clicked.
 */
export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  const missing = [
    !firstName && "first name",
    !lastName && "last name",
    !email && "email",
    !phone && "phone",
    !message && "message",
  ].filter(Boolean);
  if (missing.length) {
    return NextResponse.json(
      { error: `Please fill in: ${missing.join(", ")}.` },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const subject = `New discovery call request — ${firstName} ${lastName}`;
  const lines = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    website ? `Website/Company: ${website}` : null,
    "",
    "Message:",
    message,
  ].filter((l): l is string => l !== null);

  try {
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "Gourmetica Website <onboarding@resend.dev>",
          to: [DESTINATION_EMAIL],
          reply_to: email,
          subject,
          text: lines.join("\n"),
        }),
      });
      if (!res.ok) {
        console.error("[contact] Resend error", res.status, await res.text());
        return NextResponse.json(
          { error: "We couldn't send your message right now. Please email us directly at info@gourmetica.co.uk." },
          { status: 502 }
        );
      }
    } else {
      // FormSubmit rejects requests without browser-style Origin/Referer
      // headers, so forward the site's own origin from the incoming request.
      const origin = request.headers.get("origin") ?? "https://gourmetica.co.uk";
      const res = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: `${origin}/getintouch`,
        },
        body: JSON.stringify({
          _subject: subject,
          _template: "table",
          name: `${firstName} ${lastName}`,
          email,
          phone,
          website: website || "-",
          message,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data || String(data.success) === "false") {
        const pendingActivation = typeof data?.message === "string" && data.message.includes("Activation");
        if (pendingActivation) {
          // One-time setup: FormSubmit has emailed an "Activate Form" link to
          // the destination inbox; submissions flow once it's clicked.
          console.error("[contact] FormSubmit pending activation — click the activation link sent to", DESTINATION_EMAIL);
        } else {
          console.error("[contact] FormSubmit error", res.status, data);
        }
        return NextResponse.json(
          { error: "We couldn't send your message right now. Please email us directly at info@gourmetica.co.uk." },
          { status: 502 }
        );
      }
    }
  } catch (err) {
    console.error("[contact] delivery failure", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please email us directly at info@gourmetica.co.uk." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
