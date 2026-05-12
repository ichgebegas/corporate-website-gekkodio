function sanitize(value, maxLength = 1200) {
  return String(value || "").trim().slice(0, maxLength);
}

function validatePayload(payload) {
  const name = sanitize(payload.name, 120);
  const phone = sanitize(payload.phone, 80);
  const email = sanitize(payload.email, 180);
  const message = sanitize(payload.message, 1600);
  const page = sanitize(payload.page, 600);

  if (!name || !phone || !email || !message) {
    return { ok: false, error: "Fill all fields" };
  }

  return { ok: true, data: { name, phone, email, message, page } };
}

async function handleTelegramRequest(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.statusCode = 405;
    res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
    return;
  }

  const validation = validatePayload(req.body || {});
  if (!validation.ok) {
    res.statusCode = 400;
    res.end(JSON.stringify({ ok: false, error: validation.error }));
    return;
  }

  console.info("[form-stub] submit accepted:", validation.data);
  res.statusCode = 200;
  res.end(JSON.stringify({ ok: true, stub: true }));
}

module.exports = handleTelegramRequest;
