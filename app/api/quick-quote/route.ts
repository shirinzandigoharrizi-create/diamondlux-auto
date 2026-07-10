const PRODUCTION_WEBHOOK_URL = "https://shirin.app.n8n.cloud/webhook/quick-quote";

interface QuickQuotePhoto {
  filename: string;
  contentType: string;
  dataUrl: string;
}

interface QuickQuotePayload {
  fullName: string;
  phone: string;
  email: string;
  description: string;
  photos: QuickQuotePhoto[];
}

export async function POST(request: Request) {
  let body: Partial<QuickQuotePayload>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const description = typeof body.description === "string" ? body.description.trim() : "";
  const photos = Array.isArray(body.photos) ? body.photos : [];

  if (!fullName || !email) {
    return Response.json({ error: "Full name and email are required." }, { status: 400 });
  }

  const webhookUrl = process.env.BOOKING_WEBHOOK_URL || PRODUCTION_WEBHOOK_URL;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, phone, email, description, photos }),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!webhookResponse.ok) {
      return Response.json(
        { error: "We couldn't submit your request right now. Please try again shortly." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "We couldn't submit your request right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
