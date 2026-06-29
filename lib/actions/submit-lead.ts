"use server";

const E164_PHONE_REGEX = /^\+[1-9]\d{6,14}$/;

/** Normalises a German phone number ("0170 123 4567", "0049...") into E.164, which the
 * Speed-to-Lead intake API requires. Returns null if there's nothing usable to call. */
function normalizePhone(raw: string): string | null {
  if (!raw.trim()) return null;
  let p = raw.replace(/[\s/()\-.]/g, "");
  if (p.startsWith("00")) p = "+" + p.slice(2);
  else if (p.startsWith("0")) p = "+49" + p.slice(1);
  if (!p.startsWith("+")) return null;
  return E164_PHONE_REGEX.test(p) ? p : null;
}

/**
 * Sends a contact-form submission to the Speed-to-Lead Voice Agent as a lead, so it shows up in
 * the dashboard there and (once a Vapi assistant + a production-ready Twilio number are wired up
 * for this tenant) triggers an automatic callback within seconds. The API key lives only on the
 * server (STL_API_KEY) — it must never reach the browser.
 *
 * Best-effort: a failure here must never block the contact form itself (web3forms is still the
 * primary notification path to Henrik's inbox), so this never throws. The lead intake API requires
 * a callable phone number, so submissions without one (or with an unparseable one) are skipped.
 */
export async function submitLeadToVoiceAgent(input: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<void> {
  const apiKey = process.env.STL_API_KEY;
  const apiUrl = process.env.STL_API_URL;
  if (!apiKey || !apiUrl) return;

  const phone = normalizePhone(input.phone);
  if (!phone) return;

  const [firstName, ...rest] = input.name.trim().split(/\s+/);
  const lastName = rest.join(" ") || undefined;

  try {
    await fetch(`${apiUrl}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify({
        source: "WEBSITE_FORM",
        firstName,
        lastName,
        phone,
        email: input.email || undefined,
        consentRecordingGiven: true,
        rawPayload: { message: input.message, via: "webschmiede-contact-form" },
      }),
    });
  } catch (error) {
    console.error("[submit-lead] Failed to forward lead to voice agent", error);
  }
}
