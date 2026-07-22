import type { NextApiRequest, NextApiResponse } from "next";

// Токен бота и chat_id живут ТОЛЬКО на сервере (без префикса NEXT_PUBLIC),
// поэтому в клиентский бандл не попадают. Клиент шлёт данные формы на этот
// роут, а роут уже пересылает их в Telegram Bot API.
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Экранируем спецсимволы HTML, т.к. используем parse_mode: "HTML".
const escapeHtml = (value: unknown): string =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!TOKEN || !CHAT_ID) {
    console.error("Telegram is not configured: set TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID");
    return res.status(500).json({ message: "Telegram is not configured" });
  }

  const { user_name, user_email, user_phone, typesWork, message } =
    req.body ?? {};

  const text =
    `<b>📩 Новая заявка с сайта</b>\n\n` +
    `<b>Имя:</b> ${escapeHtml(user_name)}\n` +
    `<b>Телефон:</b> ${escapeHtml(user_phone)}\n` +
    `<b>Почта:</b> ${escapeHtml(user_email)}\n` +
    (typesWork ? `<b>Услуга:</b> ${escapeHtml(typesWork)}\n` : "") +
    (message ? `\n<b>Сообщение:</b>\n${escapeHtml(message)}` : "");

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );

    const data = await tgRes.json();
    if (!tgRes.ok || !data.ok) {
      console.error("Telegram API error:", data);
      return res
        .status(502)
        .json({ message: "Telegram API error", detail: data?.description });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Telegram send failed:", err);
    return res.status(500).json({ message: "Telegram send failed" });
  }
}
