/** Нормализация и SHA-256 для UserID в аналитике (без сырых PII). */

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const normalizePhone = (phone: string) => phone.replace(/\D/g, "");

export async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Стабильный UserID по почте и/или телефону.
 * Предпочтение: email|phone → только email → только phone.
 */
export async function buildAnalyticsUserId(
  email?: string,
  phone?: string
): Promise<string | null> {
  const emailNorm = email ? normalizeEmail(email) : "";
  const phoneNorm = phone ? normalizePhone(phone) : "";

  if (!emailNorm && !phoneNorm) return null;

  const key =
    emailNorm && phoneNorm
      ? `${emailNorm}|${phoneNorm}`
      : emailNorm || phoneNorm;

  return sha256Hex(key);
}
