// functions/api/contact.js
//
// This runs on Cloudflare (server-side), NOT in the browser.
// The contact form on the site posts here via fetch(); this file emails you the
// submission and returns JSON. The React form reads that JSON to decide whether
// to show the "Thank you" panel or an inline error — there is no page redirect.
//
// The Resend key lives in env.RESEND_API_KEY — an encrypted secret set in the
// Cloudflare dashboard. It is never in this file, your repo, or the HTML.

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function onRequestPost({ request, env }) {
  try {
    const form = await request.formData();
    const name = (form.get("name") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const company = (form.get("company") || "").toString().trim();
    const topic = (form.get("topic") || "").toString().trim();
    const notes = (form.get("notes") || "").toString().trim();

    // Honeypot: the hidden "website" field is invisible to people. If it's
    // filled, it's a bot — pretend success so it doesn't retry, but send nothing.
    if ((form.get("website") || "").toString().trim() !== "") {
      return json({ ok: true });
    }

    // Only name + email are strictly required (topic/notes are optional).
    if (!name || !email) {
      return json({ error: "Please add your name and email." }, 400);
    }

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      topic ? `Topic: ${topic}` : null,
      "",
      "Message:",
      notes || "(no message provided)",
    ]
      .filter((line) => line !== null)
      .join("\n");

    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Until you verify your domain in Resend, keep the onboarding sender.
        // After verifying northpeople.co, change to e.g.
        //   "North People Co <hello@northpeople.co>"
        from: "North People Co <onboarding@resend.dev>",
        to: ["hello@northpeople.co"], // <-- where YOU receive enquiries
        reply_to: email, // hitting "reply" replies to the customer
        subject: `New website enquiry from ${name}`,
        text,
      }),
    });

    if (!resend.ok) {
      // Surface Resend's real error so failures are diagnosable. The Resend
      // body explains exactly what's wrong (bad key, unverified sender/domain,
      // testing-recipient restriction, etc.). Shows in the form + function logs.
      const detail = await resend.text();
      console.error("Resend error", resend.status, detail);
      return json(
        { error: `Email service error (${resend.status}). ${detail}` },
        502
      );
    }

    return json({ ok: true });
  } catch (err) {
    return json({ error: "Something went wrong." }, 500);
  }
}
